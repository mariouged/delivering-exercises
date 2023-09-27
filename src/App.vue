<script setup>
import { useDeliveringStore } from './stores/delivering'
import DeliveringModal from './components/DeliveringModal.vue'

const store = useDeliveringStore()
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold p-2">
      Delivering exercises - isEazy
    </h1>
    <button @click="store.switchModal()" class="bg-blue-700 text-white p-2 rounded">
      Open Delivering
    </button>
  </div>
  <DeliveringModal />
</template>
