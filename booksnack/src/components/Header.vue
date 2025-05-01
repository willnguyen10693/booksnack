<script setup>
    import myLogo from '@/assets/logo-wn-1.png';
</script>

<template>
    <header class="bg-white shadow-md">
        <div class="max-w-full mx-auto px-4 py-4 flex justify-between items-center">
            <img class="w-50 h-auto" :src="myLogo" alt="This logo is not available">
            <nav class="space-x-4">
                <router-link class="text-gray-600 hover:text-emerald-600" to="/" >Home</router-link>
                <router-link class="text-gray-600 hover:text-emerald-600" to="/readtimetracker">ReadTime</router-link>
                <router-link class="text-gray-600 hover:text-emerald-600" to="/flashcard">Flashcard</router-link>
            </nav>
        </div>
    </header>
</template>

<style>

</style>