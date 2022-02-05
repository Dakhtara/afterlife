<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import AfterlifeExperience from "./AfterlifeExperience/AfterlifeExperience";
import {onMounted, ref} from "vue";
import PodcastDataLoader from "./DataLoader/PodcastDataLoader";
import ImageSvgMasking from "./components/ImageSvgMasking.vue";
import ArtistDataLoader from "./DataLoader/ArtistDataLoader";

const canvas = ref(null)
const podcastDataLoader = new PodcastDataLoader()

const podcasts = podcastDataLoader.loadAll()

const artistDataLoader = new ArtistDataLoader()
const artists = artistDataLoader.findAll()
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
    <img :src="podcast.picture" alt="Image Podcast" />
  </div>

  <div class="section">
      <div class="artist" v-for="artist in artists">
        <ImageSvgMasking class="artist-image" :src="artist.picture" :alt="artist.name" :mask="artist.mask" />
        <span>{{artist.name}}</span>
      </div>
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

.artist-image {
  width: 200px;
}
</style>
