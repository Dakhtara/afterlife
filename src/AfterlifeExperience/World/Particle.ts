import AfterlifeExperience from "../AfterlifeExperience";
import * as THREE from "three";
import Resources from "../Utils/Resources";
import OnUpdateTriggerInterface from "../Interfaces/OnUpdateTriggerInterface";
import Time from "../Utils/Time";
import gsap from 'gsap';

export default class Particle implements OnUpdateTriggerInterface {
    experience: AfterlifeExperience
    scene: THREE.Scene
    resources: Resources
    resource: any
    private particles: THREE.Points;
    private number: number;
    private time: Time;

    private baseZ: Array<number> = []
    private baseX: Array<number> = []
    private randomZ: Array<number> = []
    private randomX: Array<number> = []

    constructor(number: number) {
        this.experience = new AfterlifeExperience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.resources = this.experience.resources
        this.resource = this.resources.items['particleTexture']
        this.number = number

        let material = new THREE.PointsMaterial({
            size: .3,
            sizeAttenuation: true,
            map: this.resource,
            alphaMap: this.resource,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        })
        const geometry = new THREE.BufferGeometry()
        const positions = this.generatePositions(number)
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        this.particles = new THREE.Points(geometry, material)
        this.scene.add(this.particles)
        console.log(this.randomZ)
    }

    private generatePositions(number: number): Float32Array {
        const positions = new Float32Array(number * 3)

        for (let i = 0; i < number * 3; i++) {
            let pos = (Math.random() - 0.5) * 10
            positions[i] = pos
            if (i % 3 === 1) {
                this.baseZ.push(pos)
                this.randomZ.push(Math.random() * .3)
            }
            if (i % 3 === 0) {
                this.baseX.push(pos)
                this.randomX.push(Math.random() * .3)
            }
        }

        return positions
    }

    onUpdate(): void {
        for (let i = 0; i < this.number; i++) {
            const i3 = i * 3

            // @ts-ignore
            this.particles.geometry.attributes.position.array[i3 + 1] = this.baseZ[i] +
                (Math.sin(((this.time.elapsed * .001) + Math.PI * this.randomZ[i])) * .2)
            // @ts-ignore
            this.particles.geometry.attributes.position.array[i3] = this.baseX[i] +
                (Math.sin(((this.time.elapsed * .001) + Math.PI * this.randomX[i])) * .2)
        }
        this.particles.geometry.attributes.position.needsUpdate = true
    }
}
