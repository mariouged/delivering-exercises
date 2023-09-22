<script setup>
import { defineProps } from 'vue'
import DeliveringDocument from './DeliveringDocument.vue'
import StudentComment from './StudentComment.vue'
import TeacherComment from './TeacherComment.vue'

const props = defineProps({
  delivering: Object,
})
</script>

<template>
<div class="pb-4">
  <DeliveringDocument :delivering="delivering" />
  <div v-for="(comment, index) in delivering.comments" :key="index">
    <StudentComment :comment="comment" v-if="comment.role == 'student'"/>
    <TeacherComment :comment="comment" v-else/>
  </div>
</div>
</template>