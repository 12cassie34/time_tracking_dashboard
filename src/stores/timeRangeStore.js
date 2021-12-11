import { defineStore } from 'pinia'

export const timeRangeStore = defineStore('timeRangeStore', {
  state: () => {
      return {
        selectedTimeRange: "weekly",
        selectedTimeUnit: "Week",
        timeRange: ["daily", "weekly", "monthly"],
      }
  }
})