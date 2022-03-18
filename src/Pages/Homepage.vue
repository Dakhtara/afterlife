<template>
  <canvas id="afterlifeExperience" ref="canvas"></canvas>
  <!--  Div below only help to have a bigger space for the initial render and push all the rest-->
  <div class="experience-section">

  </div>
  <AboutSection/>
  <EventSection/>
  <RecordingSection/>
  <PodcastSection/>
  <ArtistSection/>
  <RegisterSection />
</template>

<script setup lang="ts">
import ArtistSection from "./HomepageSection/ArtistSection.vue";
import PodcastSection from "./HomepageSection/PodcastSection.vue";
import AboutSection from "./HomepageSection/AboutSection.vue";
import EventSection from "./HomepageSection/EventSection.vue";
import RecordingSection from "./HomepageSection/RecordingSection.vue";
import RegisterSection from "./HomepageSection/RegisterSection.vue";
import {onBeforeUnmount, onMounted, onUnmounted, ref} from "vue";
import AfterlifeExperience from "../AfterlifeExperience/AfterlifeExperience";

const canvas = ref(null)
const width = ref(window.innerWidth)
let experience: AfterlifeExperience;
onMounted(() => {
  const options: object = {}
  options.camera = {
    orbitControls: import.meta.env.VITE_ENABLE_ORBIT_CONTROLS === '1'
  }

  experience = new AfterlifeExperience(canvas.value, options)
})

onBeforeUnmount(() => {
  experience.destroy()
})
</script>

<style>
.experience-section {
  min-height: 80vh;
}

#afterlifeExperience {
  position: fixed;
  z-index: -1;
  top: 0;
}
</style>
