<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div
        :class="['bg-gray-900 text-white w-64 space-y-4 p-4 transition-transform duration-300', showSidebar ? 'translate-x-0' : '-translate-x-full']"
        class="fixed md:relative z-20 h-full transform md:translate-x-0"
      >
        <h2 class="text-2xl font-bold mb-4">Menu</h2>
        <a href="#" class="block hover:bg-gray-700 p-2 rounded">Home</a>
        <a href="#" class="block hover:bg-gray-700 p-2 rounded">About</a>
        <a href="#" class="block hover:bg-gray-700 p-2 rounded">Contact</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showSidebar = ref(false)
  const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value
  }
  </script>