<template>
  <div class="container mx-auto mb-40">

    <HomeTitle>Recordings</HomeTitle>
    <div class="recording" v-for="recording in recordings">

      <div class="recording-content w-full mt-8">
        <img class="mx-auto mt-10" :src="recording.picture" width="200">
        <div class="my-10 w-5/6">
          <h2 class="text-xl mb-24">{{ recording.title }}</h2>
          <p class="font-light text-sm text-ellipsis overflow-hidden">{{ recording.content }}</p>

          <ul v-for="socialLink in recording.socialMediaLinks">
            <li><a :href="socialLink.link">{{ socialLink.type }}</a></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import RecordingDataLoader, {Recording} from "../../DataLoader/RecordingDataLoader";
import HomeTitle from "../../components/HomeTitle.vue";

const recordingDataLoader = new RecordingDataLoader()
const truncate = (input: string, maxLength: number = 900) => {
  if (input.length > maxLength) {
    return input.substring(0, maxLength) + '...'
  }
  return input
}
const recordings = recordingDataLoader.findAll()
recordings.forEach((recording: Recording) => {
  recording.content = truncate(recording.content)
})
</script>

<style>
.recording {
  position: relative;
  min-width: 100%;
  height: 400px
}

.recording::before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: " ";
  mask-image: url("/svg/mask-recordings.svg");
  mask-size: 100% 100%;
  background-color: rgba(8, 11, 26, .8);
  top: 0;
  bottom: 0;
}


.recording-content {
  position: relative;
  width: 80%;
  margin: auto;
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 200px 1fr;
}
</style>
