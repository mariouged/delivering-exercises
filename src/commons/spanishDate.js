export const spanishDate = (date) => {
  const optionsEs = { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric'}

  return date.toLocaleDateString('es-ES', optionsEs).replace(',', ' /')
}

/**
 * Deprecated
 */
export const formatDate = (date) => {
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  const monthAbb = months[date.getMonth()]

  return `${date.getDate()} ${monthAbb} ${date.getFullYear()} / ${date.getHours()}:${date.getMinutes()}`
}
