import recordings from "../mock/recordings"

export enum SocialMediaLinkType {
    Spotify = "SPOTIFY",
    Beatport = "BEATPORT",
    Itunes = "ITUNES",
    Vinyl = "VINYL"
}

interface SocialMediaLink {
    type: string|SocialMediaLinkType
    link: string
}

export interface Recording {
    sku: string
    title: string
    picture: string
    content: string
    socialMediaLinks: Array<SocialMediaLink>
    date: string
}

export default class RecordingDataLoader
{
    mostRecent(count: number = 3): Array<Recording>
    {
        return this.findAll().splice(0, count);
    }

    findAll(): Array<Recording> {
        return recordings
    }
}
