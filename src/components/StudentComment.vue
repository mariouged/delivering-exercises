<script setup>
import { spanishDate } from '../commons/spanishDate'

const props = defineProps({
  comment: Object,
})
</script>

<template>
  <div class="flex flex-row justify-end p-4">
    <div class="basis-4/5">
      <div class="flex flex-row justify-end">
        <div class="basis-11/12">
          <div class="p-4 bg-blue-500 w-auto text-white comment-student-bag">
            <p>{{ comment.message }}</p>
            <p class="text-xs">{{ spanishDate(comment.comment_date) }}</p>
          </div>
        </div>
        <div class="basis-12 pt-6">
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>
    <div class="basis-12 my-auto">
      <img src="/woman-profile-48.png" width="48" height="48"/>
    </div>
  </div>
</template>

<style scoped>
.comment-student-bag {
  width: fit-content;
  margin-left: auto;
}

.arrow-right {
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid rgb(59 130 246 / var(--tw-bg-opacity));
}
</style>