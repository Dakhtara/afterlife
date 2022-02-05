<template>
  <div class="container mx-auto mb-40">
    <HomeTitle>Events</HomeTitle>
    <div class="event" v-for="event in events">
      <div class="grid md:grid-cols-2 gap-x-3 mb-16 md:mb-8">
          <img class="object-cover md:h-full" :src="event.picture" />

        <div class="flex flex-col justify-between mt-5 md:mt-0">
          <h3 class="text-xl mb-10">{{event.date}} {{event.location}}</h3>

          <p class="font-light mb-10">
            {{event.artists.join(' ')}}
          </p>

            <a class="flex" target="_blank" :href="event.facebookLink" ><img src="/icons/facebook_white_72.png" class="mr-2" width="24" /> <span>Event</span></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import EventDataLoader from "../../DataLoader/EventDataLoader";
import HomeTitle from "../../components/HomeTitle.vue";

const eventDataLoader = new EventDataLoader()
const events = eventDataLoader.findAll()
</script>
