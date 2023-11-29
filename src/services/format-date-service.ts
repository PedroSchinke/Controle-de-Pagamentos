import { format, parseISO } from 'date-fns'

export const formatDate = (
  originalDates: (string | undefined)[] | undefined,
) => {
  if (!originalDates) return []

  const filteredDates = originalDates.filter(Boolean)

  return filteredDates.map((originalDate) => {
    return format(parseISO(originalDate!), "dd/MM/yyyy 'às' HH'h'mm")
  })
}
