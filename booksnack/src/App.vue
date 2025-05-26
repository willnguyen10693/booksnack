<script setup>
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
</script>

<template>
  <Header/>
  <main class="p-4">
    <!-- <SideBar/> -->
    <router-view />
  </main>
</template>

<style scoped>

</style>
