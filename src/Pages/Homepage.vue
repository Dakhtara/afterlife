<template>
  <div class="experience-section"></div>
  <AboutSection/>
  <EventSection/>
  <RecordingSection/>
  <PodcastSection/>
  <ArtistSection/>
  <RegisterSection />
</template>

<script setup>
import ArtistSection from "./HomepageSection/ArtistSection.vue";
import PodcastSection from "./HomepageSection/PodcastSection.vue";
import AboutSection from "./HomepageSection/AboutSection.vue";
import EventSection from "./HomepageSection/EventSection.vue";
import RecordingSection from "./HomepageSection/RecordingSection.vue";
import RegisterSection from "./HomepageSection/RegisterSection.vue";

</script>

<style>
.experience-section {
  min-height: 80vh;
}
</style>
