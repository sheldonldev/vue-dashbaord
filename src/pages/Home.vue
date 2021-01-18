<template>
  <div class="m-auto">
    <h1 class="my-2 text-2xl text-center">
      {{ title }}
    </h1>
  </div>
  <div class="m-auto">
    <ul>
      <li v-for="city in cities" :key="city.id" class="p-2">
        <div class="flex justify-center">
          <section id="city-title" class="flex flex-col w-20 text-center">
            <div v-if="city.cityScale.type === 'metropolis'">
              <i class="text-6xl text-yellow-300 fas fa-gopuram"></i>
            </div>
            <div v-if="city.cityScale.type === 'city'">
              <i class="text-5xl text-purple-300 fas fa-vihara"></i>
            </div>
            <div v-if="city.cityScale.type === 'town'">
              <i class="text-4xl text-red-300 fas fa-place-of-worship"></i>
            </div>
            <div>
              <h2>{{ city.name }}</h2>
            </div>
          </section>

          <section id="city-effect" class="p-2">
            <div
              v-if="city.terrains.includes('wonders')"
              class="w-20 text-green-600"
            >
              <i class="w-6 mx-2 text-xl fas fa-mountain"></i>
              <span><i class="fas fa-praying-hands"></i>6</span>
            </div>
            <div
              v-if="city.terrains.includes('bySea')"
              class="w-20 text-blue-600"
            >
              <i class="w-6 mx-2 text-xl fas fa-water"></i>
              <span><i class="fas fa-money-bill-wave"></i>6</span>
            </div>
            <div
              v-if="city.terrains.includes('alpine')"
              class="w-20 text-green-300"
            >
              <i class="w-6 mx-2 fas fa-mountain"></i>
              <span><i class="fas fa-praying-hands"></i>3</span>
            </div>
            <div
              v-if="city.terrains.includes('byRiver')"
              class="w-20 text-blue-300"
            >
              <i class="w-6 mx-2 fas fa-water"></i>
              <span><i class="fas fa-money-bill-wave"></i>3</span>
            </div>
          </section>

          <section id="holy-religion"></section>

          <section id="main-religion"></section>

          <section id="folks"></section>
        </div>
      </li>
    </ul>
    {{ cities }}
  </div>
</template>

<script>
import data from "../data";

export default {
  data() {
    return {
      title: "诸神的纷争",
      cityScales: data.cityScales,
      terrains: data.terrains,
      cities: data.cities,
    };
  },
};
</script>

<style>
</style>
