<template>
  <div class="container mx-auto mt-3">
    <div class="columns-2 flex flex-1 justify-between items-center">
      <div>
        <router-link :to="{name: 'home'}">
          <img src="/afterlife/common/afterlife-logo-word.svg" width="200"/>
        </router-link>
      </div>

      <div class="flex justify-between justify-items-center">
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
  @apply mr-6;
  @apply font-light;
  @apply text-base;
  @apply text-slate-400;
}
</style>
