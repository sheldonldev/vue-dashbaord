<template>
  <nav
    class="w-full px-4 py-2 text-white bg-gradient-to-br from-blue-800 to-blue-600"
  >
    <router-link
      v-for="page in pages"
      :key="page.title"
      :to="page.to"
      class="mx-2"
    >
      {{ page.title }}
    </router-link>
  </nav>
</template>

<script>

export default {
  name: "AppHeader",
  data() {
    return {
      pages: [
        { title: "诸神的纷争", to: "/" },
        { title: "数据管理", to: "/admin"}
      ],
    };
  },
};
</script>

<style>
</style>
