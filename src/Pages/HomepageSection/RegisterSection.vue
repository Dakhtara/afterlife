<template>
  <div class="container mx-auto mb-40">
  <HomeTitle>Register</HomeTitle>

  <p>Register for more information and exclusive content</p>

  <form>
    <label for="registerName">Name</label>
    <input id="registerName" type="text"  />
    <label for="registerEmail">Email</label>
    <input id="registerEmail" type="email"  />
    <input type="submit" value="Subscribe" />
  </form>
  </div>
</template>

<script setup lang="ts">
import HomeTitle from "../../components/HomeTitle.vue";
</script>
