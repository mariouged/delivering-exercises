<script setup>
import DeliveringHeader from './DeliveringHeader.vue'
import DeliveringContent from './DeliveringContent.vue'
import { useDeliveringStore } from '../stores/delivering'

const store = useDeliveringStore()
</script>

<template>
  <div 
    class="absolute top-0 left-0 bg-neutral-600 p-12 w-full max-w-full h-screen max-h-screen font-sans"
    :class="{ visible: store.isOpenModal, invisible: !store.isOpenModal }"
  >
    <div class="modal-content border-2 border-solid border-red-500 rounded bg-white">
      <DeliveringHeader />
      <DeliveringContent />
    </div>
  </div>
</template>

<style scope>
.modal-content {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
