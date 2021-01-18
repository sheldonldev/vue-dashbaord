<template>
  <div class="m-auto">
    <h1 class="my-2 text-2xl text-center">
      {{ title }}
    </h1>
  </div>
  <div class="m-auto">
    <ul>
      <li v-for="city in cities" :key="city.id" class="p-2 my-2 border rounded">
        <div class="flex justify-center">
          <section id="city-title" class="flex flex-col w-20 text-center">
            <div class="m-auto">
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
            </div>
          </section>

          <section id="city-effect" class="flex flex-col w-32 p-2 text-xl">
            <div class="m-auto">
              <div
                v-if="city.terrains.includes('wonders')"
                class="w-20 text-green-600"
              >
                <i class="w-6 mx-2 fas fa-mountain"></i>
                <span><i class="fas fa-praying-hands"></i>6</span>
              </div>
              <div
                v-if="city.terrains.includes('bySea')"
                class="w-20 text-blue-600"
              >
                <i class="w-6 mx-2 fas fa-water"></i>
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
            </div>
          </section>

          <section class="flex flex-col w-10 p-2 text-2xl text-yellow-600">
            <div class="m-auto">
              <div v-if="city.holyReligion">
                <span v-if="city.holyReligion == 'Buddhist'">
                  <i class="fas fa-fist-raised"></i>
                </span>
              </div>
              <div v-if="city.holyReligion">
                <span v-if="city.holyReligion == 'Taoist'">
                  <i class="fas fa-yin-yang"></i>
                </span>
              </div>
              <div v-if="city.holyReligion">
                <span v-if="city.holyReligion == 'Christian'">
                  <i class="fas fa-bible"></i>
                </span>
              </div>
              <div v-if="city.holyReligion">
                <span v-if="city.holyReligion == 'Islam'">
                  <i class="fas fa-star-and-crescent"></i>
                </span>
              </div>
              <div v-if="city.holyReligion">
                <span v-if="city.holyReligion == 'Manichaeism'">
                  <i class="fas fa-dharmachakra"></i>
                </span>
              </div>
              <div v-if="city.holyReligion">
                <span v-if="city.holyReligion == 'folkBelievers'">
                  <i class="fas fa-users"></i>
                </span>
              </div>
            </div>
          </section>

          <section id="folks" class="flex flex-col w-40 text-gray-500">
            <div class="m-auto">
              <span
                v-for="(religious, index) in city.religiousNum"
                :key="index"
              >
                <span class="p-2" v-if="religious > 0">
                  <span v-if="index == 'Buddhist'">
                    <i class="fas fa-fist-raised"></i>
                  </span>
                  <span v-if="index == 'Taoist'">
                    <i class="fas fa-yin-yang"></i>
                  </span>
                  <span v-if="index == 'Christian'">
                    <i class="fas fa-bible"></i>
                  </span>
                  <span v-if="index == 'Islam'">
                    <i class="fas fa-star-and-crescent"></i>
                  </span>
                  <span v-if="index == 'Manichaeism'">
                    <i class="fas fa-dharmachakra"></i>
                  </span>
                  <span v-if="index == 'folkBelievers'">
                    <i class="fas fa-users"></i>
                  </span>
                  &nbsp;{{ religious }}
                </span>
              </span>
            </div>
          </section>
        </div>
      </li>
    </ul>
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
