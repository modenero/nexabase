<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <main class="greetings">
        <div class="flex flex-col items-center">
            <span class="block text-6xl sm:text-5xl font-light text-rose-700 tracking-tighter sm:tracking-normal uppercase">Nexabase</span>
            <span class="block text-8xl sm:text-8xl font-bold text-rose-500 tracking-widest uppercase">Vue</span>
        </div>

        <h3 class="text-2xl sm:text-xl font-medium text-rose-700 text-center">
            dApp Station Manager
        </h3>
    </main>
</template>
