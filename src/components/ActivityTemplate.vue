<script setup>
const props = defineProps({
  activity: Object
})

</script>

<template>
  <div class="relative">
    <div class="rounded-2xl flow-root overflow-hidden bg-orange">
      <img
        class="mr-4 relative bottom-2.5 float-right"
        src="../assets/icon-work.svg"
        alt="Work"
      />
    </div>
    <div
      class="info-container px-4 py-5 rounded-2xl grid grid-cols-2 bg-blue-dark"
    >
      <div class="text-white">
        <div>Work</div>
        <div class="font-light text-2xl">32 hrs</div>
      </div>
      <div
        class="
          flex flex-col
          justify-around
          items-end
          text-blue-desaturated_blue
        "
      >
        <img class="" src="../assets/icon-ellipsis.svg" alt="ETC" />
        <div class="text-sm">Last Week - 36hrs</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-container {
  transform: translateY(-40px);
}
</style>