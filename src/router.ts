import RecordingPage from './Pages/RecordingPage.vue'
import AfterlifeExperiencePage from './Pages/AfterlifeExperiencePage.vue'

const routes = [
    {path: '/', component: () => import('./Pages/Homepage.vue'), name: 'home'},
    {path: '/events', component: () => import('./Pages/EventPage.vue'), name: 'events'},
    {path: '/podcasts', component: () => import('./Pages/PodcastPage.vue'), name: 'podcasts'},
    {path: '/recordings', component: RecordingPage, name: 'recordings'},
    {path: '/experience', component: AfterlifeExperiencePage}
]


export default routes
