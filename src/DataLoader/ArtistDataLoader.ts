import artists from '../mock/artists'

interface Artist {
    name: string
    picture: string
    mask: string
}

export default class ArtistDataLoader
{
    findAll(): Array<Artist> {
        return artists;
    }
}
