<template>
  <div class="container mx-auto mb-40">
    <HomeTitle>Events</HomeTitle>
    <div class="event" v-for="event in events">
      <img :src="event.picture" />

      {{event.date}} {{event.location}}
    </div>
  </div>
</template>

<script setup lang="ts">
import EventDataLoader from "../../DataLoader/EventDataLoader";
import HomeTitle from "../../components/HomeTitle.vue";

const eventDataLoader = new EventDataLoader()
const events = eventDataLoader.findAll()
</script>
