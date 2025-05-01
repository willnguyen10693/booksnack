<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const show = ref(true); // Set to false if you want to track but not display
const seconds = ref(0);
const isPaused = ref(false);
let intervalId = null;

const formattedTime = computed(() => {
  const mins = Math.floor(seconds.value / 60);
  const secs = seconds.value % 60;
  return `${mins}m ${secs}s`;
});

const toggleTimer = () => {
    isPaused.value = !isPaused.value;
}

intervalId = setInterval(() => {
    if(!isPaused.value){
        seconds.value += 1;
    }
}, 1000);

// onUnmounted(() => {
//   clearInterval(intervalId);
//   // Optionally send the data to your backend or log it
//   console.log(`Total reading time: ${seconds.value} seconds`);
// });



</script>
<template>
    <div v-if="show">
    <p class="text-sm text-gray-600">Reading time: {{ formattedTime }}</p>
  </div>
  <div>
    <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded" @click="toggleTimer">Pause</button>
  </div>
</template>
<style>
</style>