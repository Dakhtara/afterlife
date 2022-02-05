import * as THREE from 'three'
import Debug from "./Utils/Debug";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Renderer from "./Renderer";
import Camera from "./Camera";

let experience = null
export default class AfterlifeExperience
{
    camera: Camera
    scene: THREE.Scene
    canvas: HTMLElement
    debug: Debug
    sizes: Sizes
    time: Time
    renderer: Renderer

    constructor(canvas: HTMLElement|null = null, options: any = null) {
        if (experience) {
            return experience
        }
        experience = this

        console.log("Bootstrap of the experience")
        this.canvas = canvas

        //Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera(options.camera)
        this.renderer = new Renderer()

        // Resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })

        this.addSphere()
    }

    private addSphere(): void
    {
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32),
            new THREE.MeshBasicMaterial({color: "#7a3a3a"})
        )
        this.scene.add(sphere)
    }

    private resize(): void {
        this.camera.onResize()
        this.renderer.onResize()
    }

    private update(): void {
        this.camera.onUpdate()
        this.renderer.onUpdate()
    }

    destroy() {
        this.sizes.off('resize')
        this.time.off('tick')
        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })
        if (this.camera.controls) {
            this.camera.controls.dispose()
        }
        this.renderer.instance.dispose()

        if(this.debug.active) {
            this.debug.ui.destroy()
        }
        experience = null
    }
}
