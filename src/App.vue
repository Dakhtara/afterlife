<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import AfterlifeExperience from "./AfterlifeExperience/AfterlifeExperience";
import {onMounted, ref} from "vue";
import TopNav from "./components/TopNav.vue";


</script>

<template>
  <TopNav />

  <router-view></router-view>
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
