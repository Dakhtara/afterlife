<template>
  <img :src="src" :alt="alt" :style="maskRef"/>
</template>

<script setup lang="ts">

import {defineProps, ref} from "vue";

const props = defineProps<{src: string, alt?: string, mask: string}>()
const maskRef = ref()

maskRef.value = {'mask-image': `url('${props.mask}')`, 'mask-size': '100% 100%'}
</script>
