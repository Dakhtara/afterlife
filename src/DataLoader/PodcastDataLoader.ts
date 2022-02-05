import podcasts from "../mock/podcasts"

interface Podcast {
    title: string
    picture: string
    duration: number
    soundcloudUrl: string
    date: string

}

export default  class PodcastDataLoader
{

    loadAll(): Array<Podcast>
    {
        return podcasts
    }
}
