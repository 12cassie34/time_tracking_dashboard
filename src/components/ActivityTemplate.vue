<script setup>
const props = defineProps({
  title: String,
  activity: Object,
  bgColor: String,
});
</script>

<template>
  <div class="card relative lg:mr-6">
    <div
      :class="props.bgColor"
      class="rounded-2xl flow-root overflow-hidden h-20"
    >
      <img
        class="mr-4 relative bottom-2.5 float-right"
        :src="`../src/assets/${props.title}.svg`"
        :alt="props.title"
      />
    </div>
    <div
      class="
        info-container
        px-4
        py-5
        rounded-2xl
        grid grid-cols-2
        bg-blue-dark
        lg:grid-cols-none lg:h-5/6
      "
    >
      <div class="text-white">
        <div>{{ props.title }}</div>
        <div class="font-light text-2xl lg:text-5xl lg:mt-7">32 hrs</div>
      </div>
      <div
        class="
          flex flex-col
          justify-around
          items-end
          text-blue-desaturated_blue
          lg:relative
        "
      >
        <img
          class="lg:absolute lg:bottom-36 lg:right-4"
          src="../assets/icon-ellipsis.svg"
          alt="ETC"
        />
        <div class="text-sm lg:absolute lg:left-0 lg:-mt-8">
          Last Week - 36hrs
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-container {
  transform: translateY(-40px);
}

@media (min-width: 1024px) {
  .card:first-child, .card:nth-child(2), .card:nth-child(3) {
    margin-bottom: 1.5rem;
  }
  .info-container {
    position: absolute;
    bottom: 0rem;
    width: 100%;
    transform: unset;
  }
}
</style>