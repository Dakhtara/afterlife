import AfterlifeExperience from "../AfterlifeExperience";
import * as THREE from "three";
import Resources from "../Utils/Resources";
import Time from "../Utils/Time";
import Debug from "../Utils/Debug";
import GUI from "lil-gui";
import {
    Mesh,
    MeshLambertMaterial,
    PlaneGeometry
} from "three";
import gsap from 'gsap';
import OnUpdateTriggerInterface from "../Interfaces/OnUpdateTriggerInterface";

export default class Recording implements OnUpdateTriggerInterface {
    experience: AfterlifeExperience
    scene: THREE.Scene
    resources: Resources
    // resource: any
    model: THREE.Scene
    time: Time
    debug: Debug
    debugModel: GUI
    resource: any
    position: { x: number, y: number }
    rotation: { x: number, y: number }
    observer: IntersectionObserver
    fromLeftSide: boolean
    mesh: Mesh

    constructor(resource, position: { x: number, y: number }, rotation: { x: number, y: number }, fromLeftSide: boolean = true) {
        this.experience = new AfterlifeExperience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        if (this.debug.active) {
            this.debugModel = this.debug.ui.addFolder('afterlifeModel')
        }
        // @ts-ignore
        this.resource = resource
        this.position = position
        this.rotation = rotation
        this.fromLeftSide = fromLeftSide
        this.buildModel();
    }

    private buildModel() {
        console.log(this.resource)
        let box = new PlaneGeometry(1, 1)
        let material = new MeshLambertMaterial()
        material.map = this.resource
        this.mesh = new Mesh(box, material)
        this.scene.add(this.mesh)
        let xPos = -8
        if (!this.fromLeftSide) {
            xPos = 8
        }

        this.mesh.position.x = xPos
        this.mesh.position.y = this.position.y
        // mesh.rotateY(this.rotation.y)
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting || entry.intersectionRatio < .4) {
                    gsap.to(this.mesh.position, {x: xPos, duration: 1, ease: "power2.in"})
                    gsap.to(this.mesh.rotation, {y: 0, duration: 1, ease: "power2.in"})
                }

                if (entry.intersectionRatio > .4) {
                    gsap.to(this.mesh.position, {x: this.position.x, duration: 1.5, ease: "power2.out"})
                    gsap.to(this.mesh.rotation, {y: this.rotation.y, x: Math.PI * (Math.random() / 10), duration: 1.5, ease: "power2.out"})
                }
            })
        }, {
            root: null,
            rootMargin: '0px',
            threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 1.0]
        })

        this.observer.observe(document.querySelector('#recording-section'))
    }

    public onUpdate() {
        if (this.mesh.position.x < 8 && this.mesh.position.x > -8) {
            this.mesh.rotation.x = Math.sin(this.time.elapsed * .0001 + (Math.random() * 0.01)) / 2
        }
    }
}
