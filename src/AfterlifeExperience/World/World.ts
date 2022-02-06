import AfterlifeExperience from "../AfterlifeExperience";
import * as THREE from "three";
import Resources from "../Utils/Resources";
import Environment from "./Environment";
import AfterlifeModel from "./AfterlifeModel";
import OnUpdateTriggerInterface from "../Interfaces/OnUpdateTriggerInterface";
import Particle from "./Particle";

export default class World implements OnUpdateTriggerInterface
{
    experience: AfterlifeExperience
    scene: THREE.Scene
    resources: Resources
    environment: Environment
    afterlifeModel: AfterlifeModel
    particles: Particle
    constructor() {
        this.experience = new AfterlifeExperience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => {
            this.environment = new Environment()
            this.particles = new Particle(200)
            this.afterlifeModel = new AfterlifeModel()
        })
    }

    onUpdate(): void {
        if (this.afterlifeModel) {
            this.afterlifeModel.onUpdate()
        }
        if (this.particles) {
            this.particles.onUpdate()
        }
    }
}
