<script setup lang="ts">
</script>

<template>
  <main>
    <div class="videos mt-10 grid grid-cols-4 gap-5 gap-y-10">
      <div v-for="index in 8" :key="index" class="video-skeleton animate-pulse">
        <div class="bg-slate-200 h-[170px] w-full"></div>
        <div class="bg-slate-200 h-10 mt-3 w-full"></div>
        <div class="flex items-center justify-between mt-2">
          <div class="bg-slate-200 h-5 w-44"></div>
          <div class="w-20 h-7 py-1 px-2 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  </main>
</template>