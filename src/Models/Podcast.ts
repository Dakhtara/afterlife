export interface Rgb {
    r: number
    g: number
    b: number
}

export interface PodcastModel {
    title: string
    picture: string
    duration: number
    soundcloudUrl: string
    date: string
    primaryColor: Rgb
}

export default class Podcast implements PodcastModel {
    title: string
    picture: string
    duration: number
    soundcloudUrl: string
    date: string
    primaryColor: Rgb

    constructor(json) {
        Object.assign(this, json)
    }

    get background(): string {
        const rgb = `${this.primaryColor.r},${this.primaryColor.g},${this.primaryColor.b}`
        return `linear-gradient(90deg, rgba(${rgb}, 0.8) 60%, rgba(${rgb}, .2) 100%)`
    }

    get backgroundHover(): string {
        const rgb = `${this.primaryColor.r},${this.primaryColor.g},${this.primaryColor.b}`
        return `linear-gradient(90deg, rgba(${rgb}, 1) 100%, rgba(${rgb}, .2) 100%)`
    }

    get formattedMinutes(): string {
        let hours: string|number = Math.floor(this.duration / 60)
        hours = hours < 10 ? `0${hours}` : hours
        let minutes: string|number = this.duration % 60
        minutes = minutes < 10 ? `0${minutes}` : minutes
        return `${hours}h${minutes}`
    }
}
