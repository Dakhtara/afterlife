<template>
  <div ref="test" class="container mx-auto mb-40">
    <HomeTitle>Podcasts</HomeTitle>
    <div :ref="el => { podcastsDom[i] = el }" class="podcast flex flex-col md:flex-row  px-8 py-4 gap-10" :data-podcast-index="i" :key="i" v-for="(podcast, i) in podcasts" :style="{bakground: podcast.background}">
      <img :src="podcast.picture" alt="Image Podcast" loading="lazy" width="150" height="150"/>
      <div class="podcast-content flex flex-col justify-between">
        <h2 class="text-lg">{{ podcast.title }}</h2>
        <span class="duration">{{podcast.formattedMinutes}}</span>
        <a :href="podcast.soundcloudUrl" target="_blank">Listen on Soundcloud</a>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import PodcastDataLoader from "../../DataLoader/PodcastDataLoader";
import HomeTitle from "../../components/HomeTitle.vue";
import {onBeforeUnmount, onMounted, onUnmounted, Ref, ref} from "vue";
import gsap from 'gsap';
import Podcast from "../../Models/Podcast";

const podcastsDataLoader = new PodcastDataLoader()
const podcastsDom: Ref<Array<any>> = ref([])
const podcasts = podcastsDataLoader.loadAll()


let tweens = []

const onMouseEnter = (e) => {
  const element: HTMLElement = e.target
  tweens[element.dataset.podcastIndex].play()
}

const onMouseLeaver = (e) => {
  const element: HTMLElement = e.target
  tweens[element.dataset.podcastIndex].reverse()
}
onMounted(() => {
  podcastsDom.value.forEach((el: HTMLElement) => {
    const podcast: Podcast = podcasts[el.dataset.podcastIndex]
    const tween = gsap.fromTo(el, {background: podcast.background}, {duration: .8, background: podcast.backgroundHover})
    tween.pause()
    tweens.push(tween)
    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeaver)
  })
})

onBeforeUnmount(() => {
  podcastsDom.value.forEach((el: HTMLElement) => {
    el.removeEventListener('mouseenter', onMouseEnter)
    el.removeEventListener('mouseleave', onMouseLeaver)
  })
})

</script>

<style lang="scss">
.podcast {
  transition: background .3s ease-in;
}
</style>
