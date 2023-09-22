<script setup>
import { defineProps } from 'vue'
import { formatDate } from '../commons/formatDate'

const props = defineProps({
  delivering: Object,
})
</script>

<template>
  <hr class="divide-y-8 divide-solid divide-black" />
  <div class="py-4 flex flex-row">
    <div class="basis-full text-sm">
      <p class="font-bold">VERSIÓN {{ delivering.version }}</p>
      <p class="text-blue-500 font-bold">{{ delivering.name }}</p>
      <div class="flex flex-row">
        <div class="basis-32">{{ delivering.type }}</div>
        <div class="basis-24">({{ delivering.size }} MB)</div>
        <div class="basis-36">{{ formatDate(delivering.delivery_date) }}</div>
      </div>
    </div>
    <div class="basis-12 pt-6">
      <a href="#" class="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
          <path fill-rule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
  <hr class="divide-y-8 divide-solid divide-black" />
</template>