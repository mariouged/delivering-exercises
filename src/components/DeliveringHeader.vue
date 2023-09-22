<script setup>
import { useDeliveringStore } from '../stores/delivering'

const store = useDeliveringStore()
</script>

<template>
  <div class="flex flex-row p-4">
    <div class="basis-full text-center">
      <h1 class="font-bold text-lg">Comentarios</h1>
    </div>
    <div class="basis-2 content-end">
      <a href="#" @click="store.switchModal()" class="text-lg text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </a>
    </div>
  </div>
  <hr class="border-solid border-black" />
</template>