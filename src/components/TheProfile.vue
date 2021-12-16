<script setup>
import TimeRange from "./TimeRange.vue";
</script>

<template>
  <div class="lg:w-3/12 lg:mr-7">
    <div
      class="
      profile
        px-6
        py-8
        relative
        z-10
        bg-blue-purple
        rounded-2xl
        flex
        lg:flex-col
      "
    >
      <div class="flex-auto">
        <img
          class="border-4 rounded-full border-white w-20 h-20 lg:w-24 lg:h-24"
          src="../assets/image-jeremy.png"
          alt="Jeremy"
        />
      </div>
      <div class="flex-auto flex flex-col justify-center lg:mt-10 lg:mb-20">
        <div class="text-blue-pale_blue font-medium text-sm lg:text-lg">
          Report for
        </div>
        <div class="text-white text-lg font-light break-words lg:text-5xl lg:w-80">
          Jeremy Robson
        </div>
      </div>
    </div>
    <TimeRange />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .profile {
    height: 70%;
  }
}
</style>