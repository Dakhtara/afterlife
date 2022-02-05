<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import AfterlifeExperience from "./AfterlifeExperience/AfterlifeExperience";
import {onMounted, ref} from "vue";
import PodcastDataLoader from "./DataLoader/PodcastDataLoader";
import ImageSvgMasking from "./components/ImageSvgMasking.vue";

const canvas = ref(null)
const podcastDataLoader = new PodcastDataLoader()

const podcasts = podcastDataLoader.loadAll().map((podcast) => {

  podcast.mask = Math.round(Math.random()) == 0 ? '/svg/mask-001.svg': '/svg/mask-002.svg'
  return podcast
})
console.log(podcasts)
onMounted(() => {

  const options: object = {}
  console.log(import.meta.env.VITE_ENABLE_ORBIT_CONTROLS)
  options.camera = {
    orbitControls: import.meta.env.VITE_ENABLE_ORBIT_CONTROLS === '1'
  }

  const experience = new AfterlifeExperience(canvas.value, options)

})
</script>

<template>
  <canvas id="afterlifeExperience" ref="canvas"></canvas>

  <div class="section" v-for="podcast in podcasts">
    <h1>{{podcast.title}}</h1>
    <ImageSvgMasking :src="podcast.picture" alt="Image Podcast" :mask="podcast.mask" />
  </div>
</template>

<style>
body {
  margin: 0;
  color: #fff;
  background-color: #121C27;
}

#afterlifeExperience {
  position: fixed;
  z-index: -1;
  top: 0;
}

.section {

}

</style>
