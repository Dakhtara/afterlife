<template>
  <h1>Recordings</h1>
  <div class="recording" v-for="recording in recordings">
    <img :src="recording.picture">
    <h2>{{recording.title}}</h2>
    <p>{{recording.content}}</p>

    <ul v-for="socialLink in recording.socialMediaLinks">
      <li>{{socialLink.link}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import RecordingDataLoader from "../../DataLoader/RecordingDataLoader";

const recordingDataLoader = new RecordingDataLoader()
const recordings = recordingDataLoader.findAll()
</script>
