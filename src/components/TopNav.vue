<template>
  <div class="container mx-auto mt-3 mb-4">
    <div class="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between items-center">
        <router-link class="mb-3 md:mb-0" :to="{name: 'home'}">
          <img src="/afterlife/common/afterlife-logo-word.svg?url" width="200"/>
        </router-link>

      <div class="flex w-full md:w-2/6 justify-between justify-items-center">
        <router-link class="nav-item hover:text-slate-200 transition-colors duration-200" active-class="active" :to="{name: 'events'}">
          Events
        </router-link>
        <router-link class="nav-item hover:text-slate-200 transition-colors duration-200" active-class="active" :to="{name: 'recordings'}">
          Recordings
        </router-link>
        <router-link class="nav-item hover:text-slate-200 transition-colors duration-200" active-class="active" :to="{name: 'podcasts'}">
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

<script setup lang="ts">
</script>

<style lang="scss">
@use 'src/index';
@use 'src/variables';

.nav-item {
  @apply uppercase;
  @apply font-light;
  @apply text-base;
  @apply text-slate-400;

  &.active {
    @apply text-slate-200;
    @apply relative;

    &::after {
      content: " ";
      @apply absolute;
      height: 2px;
      width: 100%;
      background: variables.$secondary-color;
      bottom: -3px;
      left: 0;
      right: 0;
    }
  }
}

</style>
