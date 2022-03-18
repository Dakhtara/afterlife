<template>
  <section class="relative max-h-80-vh overflow-hidden mb-8">

    <img class="w-full" src="/afterlife/common/main-section-background.jpg" />
    <div class="container mx-auto">
      <HomeTitle class="absolute bottom-0">Events</HomeTitle>
    </div>
  </section>

  <section class="container mx-auto mt-2">
    <div class="flex flex-wrap gap-2">
      <FilterItem v-for="(filter, key) in filters" :label="filter.label" :checked="filter.checked" @checked="(e) => isChecked(key, e)" />
    </div>
  </section>
</template>

<script setup>
import EventDataLoader from "../DataLoader/EventDataLoader";
import HomeTitle from "../components/HomeTitle.vue";
import FilterItem from "../components/FilterItem.vue";

const eventDataLoader = new EventDataLoader()
const events = eventDataLoader.findAll()

let filters = [
  {label: "2022", checked: false},
  {label: "2021", checked: false},
  {label: "2020", checked: false},
  {label: "2019", checked: false},
  {label: "London", checked: false},
  {label: "Orange", checked: false},
  {label: "Paris", checked: false},
  {label: "Upcoming", checked: false},
]
const isChecked = (key, e) => {
  console.log(filters[key])
  console.log(e)
}
</script>
