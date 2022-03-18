<template>
  <div class="container mx-auto mt-3 mb-4">
    <div class="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between items-center">
        <router-link class="mb-3 md:mb-0" :to="{name: 'home'}">
          <img src="/afterlife/common/afterlife-logo-word.svg" width="200"/>
        </router-link>

      <div class="flex w-full md:w-2/6 justify-between justify-items-center">
        <router-link class="nav-item hover:text-slate-200 transition-colors duration-200" :to="{name: 'events'}">
          Events
        </router-link>
        <router-link class="nav-item hover:text-slate-200 transition-colors duration-200" :to="{name: 'recordings'}">
          Recordings
        </router-link>
        <router-link class="nav-item hover:text-slate-200 transition-colors duration-200" :to="{name: 'podcasts'}">
          Podcasts
        </router-link>
        <a class="nav-item hover:text-slate-200 transition-colors duration-200"
           href="https://afterlife-ofc.myshopify.com/" target="_blank">
          Shop
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import 'src/index';

.nav-item {
  @apply uppercase;
  @apply font-light;
  @apply text-base;
  @apply text-slate-400;
}
</style>
