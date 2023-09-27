<script setup>
import { spanishDate } from '../commons/spanishDate'

const props = defineProps({
  comment: Object,
})
</script>

<template>
  <div class="flex flex-row p-4">
    <div class="basis-12 my-auto">
      <img src="/man-profile-48.png" width="48" height="48"/>
    </div>
    <div class="basis-4/5">
      <div class="flex flex-row">
        <div class="basis-12 pt-7 pl-12">
          <div class="triangle-left"></div>
        </div>
        <div class="basis-11/12">
          <div class=" p-4 bg-slate-100 comment-teacher-bag">
            <p>{{ comment.message }}</p>
            <p class="text-xs">{{ spanishDate(comment.comment_date) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment-teacher-bag {
  width: fit-content;
  margin-right: auto;
}
.triangle-left {
	width: 0;
	height: 0;
	border-top: 10px solid transparent;
	border-right: 10px solid rgb(241 245 249 / var(--tw-bg-opacity));
	border-bottom: 10px solid transparent;
}
</style>