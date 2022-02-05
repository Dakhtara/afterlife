import recordings from "../mock/recordings"

enum SocialMediaLinkType {
    Spotify = "SPOTIFY",
    Beatport = "BEATPORT",
    Itunes = "ITUNES",
    Vinyl = "VINYL"
}

interface SocialMediaLink {
    type: string|SocialMediaLinkType
    link: string
}

interface Recording {
    sku: string
    title: string
    picture: string
    content: string
    socialMediaLinks: Array<SocialMediaLink>
}

export default class RecordingDataLoader
{
    findAll(): Array<Recording> {
        return recordings
    }
}
