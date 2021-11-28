<template>
  <div
    class="
      time-range-container
      px-6
      py-3
      relative
      z-0
      rounded-b-2xl
      bg-blue-dark
    "
  >
    <div class="h-8"></div>
    <div class="grid grid-cols-3 gap-4">
      <button
        @click="changeTimeRange(unit)"
        v-for="(unit, index) in timeRange"
        :key="index"
        class="focus-bg-transparent"
        :class="[unit === selectedTimeRange ? 'text-white': 'text-blue-desaturated_blue']"
      >
        {{ unit }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      selectedTimeRange: "Weekly",
      timeRange: ["Daily", "Weekly", "Monthly"],
    };
  },
  methods: {
      changeTimeRange(timeRange) {
          this.selectedTimeRange = timeRange;
      }
  }
};
</script>

<style scoped>
.time-range-container {
  transform: translateY(-30px);
}

button:click {
    background-color: none;
}
</style>