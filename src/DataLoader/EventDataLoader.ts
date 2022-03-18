import events from "../mock/events"

export interface AfterlifeEvent {
    id: number
    location: string
    picture: string
    date: string
    artists: Array<string>
    facebookLink: string
    tags: Array<string>
}

export default class EventDataLoader
{
    findAll(): Array<AfterlifeEvent>
    {
        return events;
    }

    findByCriteria(filtersDate: Array<string>|null, filtersLocation: Array<string>|null): Array<AfterlifeEvent>
    {
        let events : Array<AfterlifeEvent> = this.findAll()
        console.log(filtersDate)
        if (filtersDate.length > 0) {
            events = events.filter((event :AfterlifeEvent) => {
                for(let date of filtersDate) {
                    if(event.tags.includes(date)) {
                        return event
                    }
                }
            })
        }

        if (filtersLocation.length > 0) {
            events = events.filter((event :AfterlifeEvent) => {
                for(let location of filtersLocation) {
                    if(event.tags.includes(location)) {
                        return event
                    }
                }
            })
        }



        return events;
    }
}
