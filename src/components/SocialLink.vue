<template>
  <div class="social-link">
    <img class="social-image" :src="url" loading="lazy" height="28" :width="width"/>
    <span class="social-text" v-if="text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">

import {ref, Ref} from "vue";

const props = defineProps<{ type: string }>()

let url: Ref<string> = ref('');
let width: Ref<number> = ref(0);
let text: Ref<string> = ref(null)
switch (props.type) {
  case 'SPOTIFY':
    width.value = 93
    url.value = '/icons/spotify_white.png'
    break;
  case 'BEATPORT':
    width.value = 90.72
    url.value = '/svg/beatport_logo_white.svg'
    break
  case 'ITUNES':
    width.value = 28
    url.value = '/svg/apple_music_white.svg'
    text.value = 'Apple Music'
    break
  case 'VINYL':
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
}

.social-text {
  @apply ml-1;
}
</style>
