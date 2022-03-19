<template>
  <div class="social-link">
    <img class="social-image" :src="url" loading="lazy" height="28" :width="width"/>
    <span class="social-text" v-if="text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">

import {ref, Ref} from "vue";
import {SocialMediaLinkType} from "../DataLoader/RecordingDataLoader";

const props = defineProps<{ type: SocialMediaLinkType }>()

let url: Ref<string> = ref('');
let width: Ref<number> = ref(0);
let text: Ref<string> = ref(null)
switch (props.type) {
  case SocialMediaLinkType.Spotify:
    width.value = 93
    url.value = '/icons/spotify_white.png'
    break;
  case SocialMediaLinkType.Beatport:
    width.value = 90.72
    url.value = '/svg/beatport_logo_white.svg'
    break
  case SocialMediaLinkType.Itunes:
    width.value = 28
    url.value = '/svg/apple_music_white.svg'
    text.value = 'Apple Music'
    break
  case SocialMediaLinkType.Vinyl:
    width.value = 28
    url.value = 'svg/vinyl.svg'
    text.value = 'Vinyl'
    break
}

</script>

<style lang="scss">
@import "../variables";

.social-link {
  display: flex;
  align-items: center;
}

.social-text {
  @apply ml-1;
}
</style>
