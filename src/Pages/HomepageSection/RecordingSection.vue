<template>
  <div class="container mx-auto mb-40">

  <HomeTitle>Recordings</HomeTitle>
  <div class="recording" v-for="recording in recordings">
    <img :src="recording.picture">
    <h2>{{recording.title}}</h2>
    <p>{{recording.content}}</p>

    <ul v-for="socialLink in recording.socialMediaLinks">
      <li><a :href="socialLink.link">{{socialLink.type}}</a></li>
    </ul>
  </div>
  </div>
</template>

<script setup lang="ts">
import RecordingDataLoader from "../../DataLoader/RecordingDataLoader";
import HomeTitle from "../../components/HomeTitle.vue";

const recordingDataLoader = new RecordingDataLoader()
const recordings = recordingDataLoader.findAll()
</script>
