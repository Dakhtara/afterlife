<template>
  <div class="container mx-auto mb-40">

    <HomeTitle>Recordings</HomeTitle>
    <div class="recording" v-for="recording in recordings">

      <div class="recording-content w-full xl:w-5/6 mt-8">
        <img class="recording-images mb-4 md:mb-0 mx-auto mt-10 " ref="recordingImages" :src="recording.picture" loading="lazy"
             width="200" height="200">
        <div class="my-10 md:w-5/6">
          <h2 class="text-xl mb-6">{{ recording.title }}</h2>
          <p class="font-light text-sm">{{ recording.content }}</p>

          <ul class="flex flex-wrap flex-row justify-between mt-5">
            <li v-for="socialLink in recording.socialMediaLinks">
              <a class="border-animated" :href="socialLink.link">
                <SocialLink :type="socialLink.type"/>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import RecordingDataLoader, {Recording} from "../../DataLoader/RecordingDataLoader";
import HomeTitle from "../../components/HomeTitle.vue";
import {onMounted, onUnmounted, ref} from "vue";
import Tween from "gsap"
import SocialLink from "../../components/SocialLink.vue";

let recordingImages = ref(null)

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

let onMouseMove = (e) => {
  let x = e.clientX / window.innerWidth
  let y = e.clientY / window.innerHeight
  let transformX = -((x - .5) * 20)
  let transformY = -((y - .5) * 20)

  Tween.to('.recording-images', {
    duration: 1,
    x: transformX,
    y: transformY
  })
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
})
</script>

<style lang="scss">
@import "../../variables";
.recording {
  position: relative;
  min-width: 100%;
  background-color: $dimmed-background;

  @screen lg {
    background-color: transparent;

    &::before {
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

  }
}


.recording-content {
  position: relative;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-row-gap: 2rem;
  @screen md {
    grid-template-rows: none;
    grid-column-gap: 2rem;
    grid-template-columns: 200px 1fr;
  }
}

@screen xl {
  .recording-content {
    grid-template-columns: 337px 1fr;
  }
}
</style>
