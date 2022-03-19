<template>
  <section class="relative max-h-80-vh overflow-hidden mb-8">

    <img class="w-full" src="/afterlife/common/main-section-background.jpg"/>
    <div class="container mx-auto">
      <HomeTitle class="absolute bottom-0">Recordings</HomeTitle>
    </div>
  </section>

  <section class="container mx-auto mt-2">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div class="recording flex flex-col rounded-md mb-4 md:mb-8" v-for="recording in recordings">
        <img :src="recording.picture"/>

        <div class="px-4 pt-3 h-full">
          <div class="mb-4">
            <h2 class="text-xl mt-2">{{ recording.title }}</h2>
            <small>{{ recording.sku }} - {{ recording.date }}</small>
          </div>
        </div>
          <div class="flex justify-end px-4 py-3">
            <ButtonLink class="px-3 py-1">
              <span class="text-sm">More</span>
            </ButtonLink>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeTitle from "../components/HomeTitle.vue";
import RecordingDataLoader, {Recording} from "../DataLoader/RecordingDataLoader";
import ButtonLink from "../components/ButtonLink.vue";

const recordingDataLoader = new RecordingDataLoader()

const recordings: Array<Recording> = recordingDataLoader.findAll()

</script>

<style lang="scss" scoped>
.recording {
  background: #1b2b3b;
}
</style>
