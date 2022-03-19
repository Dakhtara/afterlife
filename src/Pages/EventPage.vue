<template>
  <section class="relative max-h-80-vh overflow-hidden mb-8">

    <img class="w-full" src="/afterlife/common/main-section-background.jpg"/>
    <div class="container mx-auto">
      <HomeTitle class="absolute bottom-0">Events</HomeTitle>
    </div>
  </section>

  <section class="container mx-auto mt-2">

    <p>By Date</p>
    <div class="flex flex-wrap gap-2 mb-3">
      <FilterItem v-for="(filter, key) in filtersDate" :label="filter.label" :checked="filter.checked"
                  @checked="(e) => isChecked(key, e, 'date')"/>
    </div>
    <p>By Location</p>
    <div class="flex flex-wrap gap-2 mb-8">
      <FilterItem v-for="(filter, key) in filtersLocation" :label="filter.label" :checked="filter.checked"
                  @checked="(e) => isChecked(key, e, 'location')"/>
    </div>

    <TransitionGroup name="list" tag="ul" :duration="1400" :appear="true" @enter="onEnter" :css="false" @leave="onLeave" @before-enter="onBeforeEnter">
      <div class="event mb-8 md:mb-8 rounded-md" v-for="(event, index) in proxyRef" :data-index="index" v-bind:key="event.id">
        <div class="grid md:grid-cols-2 gap-x-3">
          <img class="object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none md:h-full" :src="event.picture"/>

          <div class="flex flex-col justify-between px-4 py-3">
            <h3 class="text-xl mb-10">{{ event.date }} {{ event.location }}</h3>

            <p class="font-light mb-10">
              {{ event.artists.join(', ') }}
            </p>
            <div>
              <ButtonLink :href="event.facebookLink" target="_blank">
                <span>Event</span>
              </ButtonLink>
            </div>
          </div>
        </div>

      </div>
    </TransitionGroup>

  </section>
</template>

<script setup lang="ts">
import EventDataLoader, {AfterlifeEvent} from "../DataLoader/EventDataLoader";
import HomeTitle from "../components/HomeTitle.vue";
import FilterItem from "../components/FilterItem.vue";
import {ref, Ref} from "vue";
import gsap from 'gsap';
import ButtonLink from "../components/ButtonLink.vue";

const eventDataLoader = new EventDataLoader()
const events = eventDataLoader.findAll()

let proxyRef: Ref<AfterlifeEvent[]> = ref(events);

let filtersDate = [
  {label: "Upcoming", checked: false},
  {label: "2022", checked: false},
  {label: "2021", checked: false},
  {label: "2020", checked: false},
  {label: "2019", checked: false},
  {label: "2018", checked: false},
  {label: "2017", checked: false},
  {label: "2016", checked: false},
]

let filtersLocation = [
  {label: "Amsterdam", checked: false},
  {label: "London", checked: false},
  {label: "Orange", checked: false},
  {label: "Paris", checked: false},
]
const isChecked = (key, e, type) => {
  if (type === 'date') {
    filtersDate[key].checked = e
  } else if (type === 'location') {
    filtersLocation[key].checked = e
  }

  proxyRef.value = eventDataLoader.findByCriteria(formatCriterias(filtersDate), formatCriterias(filtersLocation))
}

const formatCriterias = (criterias): Array<string> => {
  console.log(criterias)
  let formatted = []
  for (let criteria of criterias) {
    if (criteria.checked === true) {
      formatted.push(criteria.label)
    }
  }
  return formatted
}

const onEnter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    transform: 'translateX(0)',
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

const onLeave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    transform: 'translateX(-40px)',
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

const onBeforeEnter = (el) => {
    el.style.opacity = 0
    el.style.transform = 'translate(-20px)'
}
</script>

<style lang="scss" scoped>
.event {
  background: #1b2b3b;
}
</style>
