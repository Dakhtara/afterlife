<template>
  <div class="container mx-auto mb-40">
    <HomeTitle>Podcasts</HomeTitle>
    <div class="podcast" v-for="podcast in podcasts">
      <h1>{{ podcast.title }}</h1>
      <img :src="podcast.picture" alt="Image Podcast" loading="lazy" width="200" height="200"/>
    </div>
  </div>

</template>

<script setup lang="ts">


import PodcastDataLoader from "../../DataLoader/PodcastDataLoader";
import HomeTitle from "../../components/HomeTitle.vue";

const podcastsDataLoader = new PodcastDataLoader()

const podcasts = podcastsDataLoader.loadAll()

</script>

<style>

</style>
