<template>
  <a class="button inline-block rounded-md px-8 py-2" :target="target">
    <slot></slot>
  </a>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@use "src/variables";

.button {
  background: variables.$secondary-color;
  color: #323232;
}
</style>
