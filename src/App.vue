<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheProfile from "./components/TheProfile.vue";
import ActivityTemplate from "./components/ActivityTemplate.vue";
</script>

<template>
  <div
    class="
      pt-14
      pr-6
      pb-14
      pl-6
      w-screen
      h-screen
      font-rubik
      lg:flex lg:justify-between lg:px-14 lg:h-screen
    "
  >
    <TheProfile />
    <div class="lg:grid lg:grid-cols-3 lg:w-10/12">
      <ActivityTemplate
        title="Work"
        :activity="activitiesAndTime['work']"
        bgColor="bg-orange"
      />

      <ActivityTemplate
        title="Play"
        :activity="activitiesAndTime['play']"
        bgColor="bg-blue-light"
      />
      <ActivityTemplate
        title="Study"
        :activity="activitiesAndTime['study']"
        bgColor="bg-red"
      />
      <ActivityTemplate
        title="Exercise"
        :activity="activitiesAndTime['exercise']"
        bgColor="bg-green"
      />
      <ActivityTemplate
        title="Social"
        :activity="activitiesAndTime['social']"
        bgColor="bg-violet"
      />
      <ActivityTemplate
        title="Self Care"
        :activity="activitiesAndTime['self care']"
        bgColor="bg-yellow"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTimeRange: "Weekly",
      timeRange: ["Daily", "Weekly", "Monthly"],
      activities: ["work", "play", "study", "exercise", "social", "self care"],
      activitiesAndTime: {
        work: {
          daily: {
            current: 8,
            last: 8,
          },
          weekly: {
            current: 32,
            last: 36,
          },
          monthly: {
            current: 160,
            last: 140,
          },
        },
        play: {
          daily: {
            current: 3,
            last: 2,
          },
          weekly: {
            current: 10,
            last: 8,
          },
          monthly: {
            current: 40,
            last: 35,
          },
        },
        study: {
          daily: {
            current: 1.5,
            last: 2,
          },
          weekly: {
            current: 4,
            last: 7,
          },
          monthly: {
            current: 15,
            last: 10,
          },
        },
        exercise: {
          daily: {
            current: 1,
            last: 1,
          },
          weekly: {
            current: 4,
            last: 5,
          },
          monthly: {
            current: 16,
            last: 14,
          },
        },
        social: {
          daily: {
            current: 2,
            last: 4,
          },
          weekly: {
            current: 5,
            last: 10,
          },
          monthly: {
            current: 6,
            last: 10,
          },
        },
        "self care": {
          daily: {
            current: 0.5,
            last: 0.5,
          },
          weekly: {
            current: 2,
            last: 2,
          },
          monthly: {
            current: 4,
            last: 4,
          },
        },
      },
    };
  },
};
</script>

<style>
body {
  background-color: hsl(226, 43%, 10%);
}
</style>
