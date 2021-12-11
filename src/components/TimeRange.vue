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
      lg:h-1/3
    "
  >
    <div class="h-8 lg:hidden"></div>
    <div class="grid grid-cols-3 gap-4 lg:flex lg:flex-col lg:items-baseline lg:py-4">
      <button
        @click="changeTimeRange(unit)"
        v-for="(unit, index) in store.timeRange"
        :key="index"
        class="focus-bg-transparent capitalize"
        :class="[
          unit === store.selectedTimeRange
            ? 'text-white'
            : 'text-blue-desaturated_blue',
        ]"
      >
        {{ unit }}
      </button>
    </div>
  </div>
</template>

<script>
import { timeRangeStore } from '../stores/timeRangeStore.js';

export default {
  setup() {
    const store = timeRangeStore();

    return {
      store
    }
  },
  data() {
    return {
    };
  },
  methods: {
    changeTimeRange(timeRange) {
      const time_unit_hash = {
        daily: "Day",
        weekly: "Week",
        monthly: "Month",
      }
      this.store.selectedTimeRange = timeRange;
      this.store.selectedTimeUnit = time_unit_hash[timeRange];
    },
  },
};
</script>

<style scoped>
@media (min-width: 375px) and (max-width: 1023px) {
  .time-range-container {
    transform: translateY(-30px);
  }
}


button:click {
  background-color: none;
}
</style>