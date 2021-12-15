

<template>
  <div class="card relative lg:mr-6">
    <div
      :class="props.bgColor"
      class="rounded-2xl flow-root overflow-hidden h-20"
    >
      <img
        class="mr-4 relative bottom-2.5 float-right"
        :id="`img-${props.title}`"
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
        <div class="font-light text-2xl lg:text-5xl lg:mt-7">
          {{ props.activity[store.selectedTimeRange].current }}hrs
        </div>
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
          Last {{ store.selectedTimeUnit }} -
          {{ props.activity[store.selectedTimeRange].last }}hrs
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, watchEffect, onMounted } from "vue";
import { timeRangeStore } from "../stores/timeRangeStore.js";

export default {
  props: {
    title: String,
    activity: Object,
    bgColor: String,
  },
  setup(props) {
    const store = timeRangeStore();
    return {
      store,
      props,
    };
  },
  mounted() {
    this.$nextTick(function () {
      const imgUrl = new URL(
        `../assets/${this.props.title}.svg`,
        import.meta.url
      ).href;

      document.getElementById(`img-${this.props.title}`).src = imgUrl;
    });
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.info-container {
  transform: translateY(-40px);
}

@media (min-width: 1024px) {
  .card:first-child,
  .card:nth-child(2),
  .card:nth-child(3) {
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