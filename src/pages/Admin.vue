<template>
  <div class="m-auto">
    <h1 class="my-2 text-2xl text-center">
      {{ title }}
    </h1>
  </div>
  <div>
    <table class="p-2 border rounded">
      <thead>
        <tr>
          <th>ID</th>
          <th>城市名</th>
          <th>城市规模</th>
          <th>地形</th>
          <th>圣教</th>
          <th>佛教徒</th>
          <th>道教徒</th>
          <th>基督教徒</th>
          <th>伊斯兰教徒</th>
          <th>摩尼教徒</th>
          <th>民间信仰者</th>
          <th>特殊角色</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="city in cities" :key="city.id">
          <td>{{ city.id }}</td>
          <td>{{ city.name }}</td>
          <td>{{ city.scale.type }}</td>
          <td><p v-for="terrain in city.terrains" :key="terrain">{{ terrain }}</p></td>
          <td>{{ city.religiousNum.holyReligion }}</td>
          <td>{{ city.religiousNum.Buddhist }}</td>
          <td>{{ city.religiousNum.Taoist }}</td>
          <td>{{ city.religiousNum.Christian }}</td>
          <td>{{ city.religiousNum.Islam}}</td>
          <td>{{ city.religiousNum.Manichaeism }}</td>
          <td>{{ city.religiousNum.folkBelievers }}</td>
          <td><p v-for="(role, index) in city.specialRole" :key="index">{{ role.role}}, {{ role.religion }}</p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from "../data";

export default {
  data() {
    return {
      title: "数据管理",
      cities: data.cities,
    };
  },
};
</script>

<style>
</style>
