import Homepage from './Pages/Homepage.vue'
import EventPage from './Pages/EventPage.vue'
import PodcastPage from './Pages/PodcastPage.vue'
import RecordingPage from './Pages/RecordingPage.vue'

const routes = [
    {path: '/', component: Homepage, name: 'home'},
    {path: '/events', component: EventPage, name: 'events'},
    {path: '/podcasts', component: PodcastPage, name: 'podcasts'},
    {path: '/recordings', component: RecordingPage, name: 'recordings'}
]


export default routes
