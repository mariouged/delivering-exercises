<script setup>
import { ref } from 'vue'
import { useDeliveringStore } from '../stores/delivering'

const store = useDeliveringStore()

let message = ref('')

function sendComment() {
  if (message.value?.length == 0) {
    return
  }
  store.sendComment(123, 'student', message.value)
  message.value = ''
}
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-full pr-4">
      <input
        class="w-full bg-gray-100 p-4 border-2 rounded-full border-gray-200"
        v-model="message"
        @keyup.enter="sendComment()"
        name="message"
        type="text"/>
    </div>
    <div class="basis-12 my-auto">
      <button
        @click="sendComment()"
        class="bg-blue-500 rounded-full w-12 h-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 bg-blue-500 text-white rounded-full mx-auto">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </button>
    </div>
  </div>
</template>
