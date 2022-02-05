<template>
  <div class="section">
    <h1>Podcasts</h1>
    <div class="podcast" v-for="podcast in podcasts">
      <h1>{{ podcast.title }}</h1>
      <img :src="podcast.picture" alt="Image Podcast"/>
    </div>
  </div>

</template>

<script setup lang="ts">


import PodcastDataLoader from "../../DataLoader/PodcastDataLoader";

const podcastsDataLoader = new PodcastDataLoader()

const podcasts = podcastsDataLoader.loadAll()

</script>

<style>

</style>
