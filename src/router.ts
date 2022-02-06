import Homepage from './Pages/Homepage.vue'
import EventPage from './Pages/EventPage.vue'
import PodcastPage from './Pages/PodcastPage.vue'
import RecordingPage from './Pages/RecordingPage.vue'
import AfterlifeExperiencePage from './Pages/AfterlifeExperiencePage.vue'

const routes = [
    {path: '/', component: Homepage, name: 'home'},
    {path: '/events', component: EventPage, name: 'events'},
    {path: '/podcasts', component: PodcastPage, name: 'podcasts'},
    {path: '/recordings', component: RecordingPage, name: 'recordings'},
    {path: '/experience', component: AfterlifeExperiencePage}
]


export default routes
