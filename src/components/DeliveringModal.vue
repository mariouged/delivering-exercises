<script setup>
import DeliveringHeader from './DeliveringHeader.vue'
import DeliveringContent from './DeliveringContent.vue'
import { useDeliveringStore } from '../stores/delivering'

const store = useDeliveringStore()
</script>

<template>
  <div 
    class="absolute top-0 left-0 bg-slate-100 p-12 w-full max-w-full h-screen max-h-screen font-sans"
    :class="{ visible: store.isOpenModal, invisible: !store.isOpenModal }"
  >
    <div class="border-2 border-solid border-red-500 rounded bg-white">
      <DeliveringHeader />
      <DeliveringContent />
    </div>
  </div>
</template>
