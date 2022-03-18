<template>
  <div ref="item" @click="toggleStatus" class="text-right overflow-hidden flex relative filter-item cursor-pointer rounded-md py-1.5 px-2.5" :class="{checked: isChecked}">

    <svg ref="cross" class="absolute cross" :class="{checked: isChecked}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6843 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4883 17.902 16.7442 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z" fill="#F4F4F4"/>
</svg>

    <span class="inline-block w-full text-right">{{label}}</span></div>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";
import tween from 'gsap';
const props = defineProps<{label: string, checked: boolean}>()
const emit = defineEmits<{e: 'checked', isChecked: boolean}>()
let isChecked: Ref<boolean> = ref(props.checked);
let item: Ref = ref(null);
let cross: Ref = ref(null);

const toggleStatus = () => {
  isChecked.value  = !isChecked.value;
  emit('checked', isChecked.value)

  if (isChecked.value === true) {
    tween.to(item.value, {width: '+=20px', duration: .3, })
    tween.to(cross.value, {transform: 'translateX(-5px)', duration: .3})
  } else {
    tween.to(item.value, {width: '-=20px', duration: .3, })
    tween.to(cross.value, {transform: 'translateX(-40px)', duration: .3})
  }
}
</script>

<style lang="scss">
.filter-item {
  user-select: none;
  border: 1px solid transparent;
  background: #355373;
  transition: background-color, border-color .3s ease;

  &.checked {
    background: #657D97;
    border: 1px solid #B7C8D9;
  }
}

.cross {
  transform: translateX(-40px)
}
</style>
