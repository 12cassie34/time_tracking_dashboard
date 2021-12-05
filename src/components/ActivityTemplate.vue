<script setup>
const props = defineProps({
  title: String,
  activity: Object,
  bgColor: String,
})

</script>

<template>
  <div class="relative lg:pr-6">
    <div :class="props.bgColor" class="rounded-2xl flow-root overflow-hidden">
      <img
        class="mr-4 relative bottom-2.5 float-right"
        :src="`../src/assets/${props.title}.svg`"
        :alt="props.title"
      />
    </div>
    <div
      class="info-container px-4 py-5 rounded-2xl grid grid-cols-2 bg-blue-dark"
    >
      <div class="text-white">
        <div>{{ props.title }}</div>
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