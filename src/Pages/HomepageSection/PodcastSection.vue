<template>
  <div class="section" v-for="podcast in podcasts">
    <h1>{{podcast.title}}</h1>
    <img :src="podcast.picture" alt="Image Podcast" />
  </div>

</template>

<script setup>


import PodcastDataLoader from "../../DataLoader/PodcastDataLoader";

const podcastsDataLoader = new PodcastDataLoader()

const podcasts = podcastsDataLoader.loadAll()

</script>

<style>

</style>
