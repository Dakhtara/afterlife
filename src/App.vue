<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import AfterlifeExperience from "./AfterlifeExperience/AfterlifeExperience";
import {onMounted, ref} from "vue";
import Homepage from "./Pages/Homepage.vue";
import TopNav from "./components/TopNav.vue";

const canvas = ref(null)

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
  <TopNav />
  <canvas id="afterlifeExperience" ref="canvas"></canvas>

  <Homepage />

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
</style>
