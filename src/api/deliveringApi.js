import { deliveringsMockers } from './mockers/deliveringsMockers'

export const getDeliveringsApi = async (student) => {
  try {
    return await deliveringsMockers
  } catch (error) {
    return error
  }
}

export const postCommentToApi = async (delivering, comment) => {
  try {
    return true
  } catch (error) {
    return error
  }
}
