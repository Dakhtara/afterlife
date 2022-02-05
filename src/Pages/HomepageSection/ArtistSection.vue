<template>
  <div class="container mx-auto mb-40">
    <HomeTitle>Artists</HomeTitle>
    <div class="artist" v-for="artist in artists">
      <ImageSvgMasking class="artist-image" :src="artist.picture" :alt="artist.name" :mask="artist.mask" />
      <span>{{artist.name}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import ImageSvgMasking from "../../components/ImageSvgMasking.vue";
import ArtistDataLoader from "../../DataLoader/ArtistDataLoader";
import HomeTitle from "../../components/HomeTitle.vue";

const artistsDataLoader = new ArtistDataLoader()
const artists = artistsDataLoader.findAll()

</script>

<style>

.artist-image {
  width: 200px;
}
</style>
