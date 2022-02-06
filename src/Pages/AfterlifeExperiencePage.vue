<template>
  <canvas id="afterlifeExperience" ref="canvas"></canvas>
  <!--  Div below only help to have a bigger space for the initial render and push all the rest-->
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import AfterlifeExperience from "../AfterlifeExperience/AfterlifeExperience";

const canvas = ref(null)
const width = ref(window.innerWidth)
let experience: AfterlifeExperience;
onMounted(() => {
  const options: object = {}
  options.camera = {
    orbitControls: true
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
</style>
