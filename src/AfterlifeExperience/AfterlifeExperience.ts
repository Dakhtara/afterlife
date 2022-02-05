import * as THREE from 'three'
import Debug from "./Utils/Debug";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Renderer from "./Renderer";
import Camera from "./Camera";

let experience = null
export default class AfterlifeExperience
{
    camera: THREE.Camera
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
            new THREE.MeshBasicMaterial({color: "#FFF"})
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
}
