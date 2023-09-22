<script setup>
import { ref } from 'vue'
import { useDeliveringStore } from '../stores/delivering'

const store = useDeliveringStore()

let message = ref('')

function sendComment() {
  store.sendComment(123, 'student', message.value)
  message.value = ''
}
</script>

<template>
  <div class="flex flex-row p-8">
    <div class="basis-full">
      <input
        class="w-11/12 bg-gray-100 p-4 rounded-2xl border-gray-500"
        v-model="message"
        @keyup.enter="sendComment()"
        name="message"
        type="text"/>
    </div>
    <div class="basis-12">
      <button
        @click="sendComment()"
        class="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 bg-white">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </button>
    </div>
  </div>
</template>
