import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getDeliveringsApi, postCommentToApi } from '../api/deliveringApi'

export const useDeliveringStore = defineStore('delivering', () => {
  const openedModal = ref(true)
  const isOpenModal = computed(() => openedModal.value)
  function switchModal() {
    openedModal.value = !openedModal.value
  }

  const deliverings = ref([])
  const getDeliverings = computed(() => deliverings.value)
  async function loadDeliveringsFromApi(student) {
    deliverings.value = await getDeliveringsApi(student)
  }

  function sendComment(user, role, message) {
    const comment = {
      user,
      role,
      comment_date: new Date(),
      message,
    }
    deliverings.value[deliverings.value.length - 1].comments.push(comment)

    const delivering = deliverings.value[deliverings.value.length - 1]
    postCommentToApi(delivering, comment)
  }

  return {
    openedModal,
    isOpenModal,
    switchModal,
    deliverings,
    getDeliverings,
    loadDeliveringsFromApi,
    sendComment,
  }
})
