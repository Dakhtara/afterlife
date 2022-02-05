<template>
  <h1>Events</h1>
  <div class="event" v-for="event in events">
      <img :src="event.picture" />

    {{event.date}} {{event.location}}
  </div>
</template>

<script setup lang="ts">
import EventDataLoader from "../../DataLoader/EventDataLoader";

const eventDataLoader = new EventDataLoader()
const events = eventDataLoader.findAll()
</script>
