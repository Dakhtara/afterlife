<template>
  <div class="top-nav">
    <router-link :to="{name: 'home'}">
      <img src="/afterlife/common/afterlife-logo-word.svg" />
    </router-link>

    <div class="right-item">
      <div class="">
        <router-link :to="{name: 'events'}">
          Events
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'recordings'}">
          Recordings
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'podcasts'}">
          Podcasts
        </router-link>
      </div>
      <div>
        <a href="https://afterlife-ofc.myshopify.com/" target="_blank">
          Shop
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>

</style>
