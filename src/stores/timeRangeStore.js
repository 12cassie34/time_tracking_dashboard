import { defineStore } from 'pinia'

export const timeRangeStore = defineStore('timeRangeStore', {
  state: () => {
      return {
        selectedTimeRange: "Weekly",
        timeRange: ["Daily", "Weekly", "Monthly"],
      }
  }
})