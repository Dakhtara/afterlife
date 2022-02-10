<template>
  <div class="container mx-auto mb-40 py-3">
    <HomeTitle>Artists</HomeTitle>
    <div class="artists flex flex-1 dimmed-background py-3 justify-around gap-10 flex-wrap">
      <div class="artist flex flex-col items-center gap-2" v-for="artist in artists">
        <ImageSvgMasking class="artist-image" loading="lazy" width="200" height="200"  :src="artist.picture" :alt="artist.name" :mask="artist.mask" />
        <span>{{artist.name}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import ImageSvgMasking from "../../components/ImageSvgMasking.vue"
import ArtistDataLoader from "../../DataLoader/ArtistDataLoader"
import HomeTitle from "../../components/HomeTitle.vue"

const artistsDataLoader = new ArtistDataLoader()
const artists = artistsDataLoader.findAll()

</script>

<style>
</style>
