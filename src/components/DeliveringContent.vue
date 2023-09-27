<script setup>
import { onMounted, ref } from 'vue'
import { useDeliveringStore } from '../stores/delivering'
import DeliveringItem from './DeliveringItem.vue'
import CommentInput from './CommentInput.vue'

const store = useDeliveringStore()

onMounted(async () => {
  await store.loadDeliveringsFromApi(123)
})
</script>

<template>
  <div class="px-8">
    <div v-for="(delivering, index) in store.deliverings" :key="index">
      <DeliveringItem :delivering="delivering" />
    </div>
    <hr class="divide-y-8 divide-solid divide-black" />
    <div class="py-8">
      <CommentInput />
    </div>
  </div>
</template>
