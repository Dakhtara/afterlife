import AfterlifeExperience from "../AfterlifeExperience";
import * as THREE from "three";
import Resources from "../Utils/Resources";
import Environment from "./Environment";
import AfterlifeModel from "./AfterlifeModel";
import OnUpdateTriggerInterface from "../Interfaces/OnUpdateTriggerInterface";
import Particle from "./Particle";
import Recording from "./Recording";

export default class World implements OnUpdateTriggerInterface {
    experience: AfterlifeExperience
    scene: THREE.Scene
    resources: Resources
    environment: Environment
    afterlifeModel: AfterlifeModel
    particles: Particle
    recordings: Array<Recording> = []

    constructor() {
        this.experience = new AfterlifeExperience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => {
            this.environment = new Environment()
            this.particles = new Particle(200)
            this.afterlifeModel = new AfterlifeModel()
            // @ts-ignore
            this.recordings.push(new Recording(this.resources.items.recordingTexture, {x: -4, y: -1}, {
                    x: 0,
                    y: Math.PI * 0.25
                }),
                // @ts-ignore
                new Recording(this.resources.items.recordingTextureSec, {x: 4, y: 0}, {
                    x: 0,
                    y: Math.PI * -0.15
                }, false),
                // @ts-ignore
                new Recording(this.resources.items.recordingTextureThird, {x: -4, y: 1}, {x: 0, y: Math.PI * 0.25}))
        })
    }

    onUpdate(): void {
        if (this.afterlifeModel) {
            this.afterlifeModel.onUpdate()
        }
        if (this.particles) {
            this.particles.onUpdate()
        }

        if (this.recordings) {
            this.recordings.forEach((recording) => {
                recording.onUpdate()
            })
        }
    }
}
