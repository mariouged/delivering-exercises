<script setup>
import { useDeliveringStore } from './stores/delivering'
import DeliveringModal from './components/DeliveringModal.vue'

const store = useDeliveringStore()
</script>

<template>
  <h1 class="text-3xl font-bold underline p-2">
    Delivering exercises - isEazy
  </h1>
  <button @click="store.switchModal()" class=" bg-blue-700 text-white p-2 rounded">
    Open Delivering
  </button>
  <DeliveringModal />
</template>
