import podcastsMock from "../mock/podcasts"
import Podcast, {PodcastModel} from "../Models/Podcast";

export default  class PodcastDataLoader
{

    loadAll(): Array<Podcast>
    {
        let podcasts = []
        podcastsMock.forEach((podcast:PodcastModel) => {
            podcasts.push(new Podcast(podcast))
        })

        return podcasts
    }
}
