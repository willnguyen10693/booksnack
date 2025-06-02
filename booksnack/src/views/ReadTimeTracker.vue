<template>
  <div>
      <div class="w-100 h-150 mx-auto flex flex-col justify-center rounded-bl-full items-center box-border shadow-xl shadow-cyan-500/50 transition-all duration-2000 ease-in-out"
        :class="[borderClass]">
      <div>
        <span class="text-7xl"> {{ formattedTime }}</span>
      </div>
      <div class="flex flex-col">
        <!-- <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded m-1 cursor-pointer" @click="toggleBorder(0)">Start</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded m-1 cursor-pointer" @click="toggleBorder(1)">Pause</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded m-1 cursor-pointer" @click="toggleBorder(2)">Start</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded m-1 cursor-pointer" @click="toggleBorder(3)">Pause</button> -->
        <button @click="start" :disabled="isRunning">Start</button>
        <button @click="pause" :disabled="!isRunning">Pause</button>
        <button @click="reset">Reset</button>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'


const seconds = ref(0)
const isRunning = ref(false)
let interval = null

const borderOptions = [
  ['rounded-t-full','bg-cyan-500', 'shadow-cyan-500/50'],
  ['rounded-s-full','bg-red-500', 'shadow-red-500/50'],
  ['rounded-e-full','bg-yellow-500', 'shadow-yellow-500/50'],
  ['rounded-b-full','bg-purple-500', 'shadow-purple-500/50'],
];

const borderClass = ref(borderOptions[0])

const toggleBorder = (index) =>{
  borderClass.value = borderOptions[index];
}

const formattedTime = computed(() => {
  const mins = String(Math.floor(seconds.value / 60)).padStart(2, '0');
  const secs = String(seconds.value % 60).padStart(2, '0');
  return `${mins}:${secs}`
})

const start = () => {
  if (isRunning.value) return
  isRunning.value = true
  interval = setInterval(() => {
    seconds.value++;
    if(seconds.value === 10){
      borderClass.value = borderOptions[0];
    }else if(seconds.value === 20){
      borderClass.value = borderOptions[1];
    }else if(seconds.value === 30){
      borderClass.value = borderOptions[2];
    }else if(seconds.value === 40){
      borderClass.value = borderOptions[3];
    }
  }, 1000)
}

const pause = () => {
  isRunning.value = false
  clearInterval(interval)
}

const reset = () => {
  pause()
  seconds.value = 0
}
</script>

<style scoped>
/* Optional: Add a smooth transition to the timer badge */
/* span {
  transition: background-color 5s ease;
} */
</style>
