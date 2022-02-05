import events from "../mock/events"

interface AfterlifeEvent {
    location: string
    picture: string
    date: string
    artists: Array<string>
    facebookLink: string
}

export default class EventDataLoader
{
    findAll(): Array<AfterlifeEvent>
    {
        return events;
    }
}
