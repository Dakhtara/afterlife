<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
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
</style>
