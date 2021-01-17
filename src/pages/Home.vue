<template>
  <div class="m-auto">
    <h1 class="my-2 text-2xl text-center">
      {{ title }}
    </h1>
  </div>
  <div>
    {{ data }}
  </div>
</template>

<script>
import data from "../data";

export default {
  data() {
    return {
      title: "诸神的纷争",
      data: data,
    };
  },
};
</script>

<style>
</style>
