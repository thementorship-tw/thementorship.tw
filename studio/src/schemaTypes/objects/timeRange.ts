import {defineType, defineField} from 'sanity'

const isValidDateTime = (value: unknown): value is string | number | Date => {
  return typeof value === 'string' || typeof value === 'number' || value instanceof Date
}

const isValidTimeRange = (start?: unknown, end?: unknown) => {
  if (!start || !end) return 'Both start and end times are required'

  if (!isValidDateTime(start) || !isValidDateTime(end)) {
    return 'Invalid date format'
  }

  const startDate = new Date(start)
  const endDate = new Date(end)

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return 'Invalid date format'
  }

  return startDate < endDate ? true : 'End time must be after start time'
}

export default defineType({
  name: 'timeRange',
  title: 'Time Range',
  type: 'object',
  fields: [
    defineField({
      name: 'start',
      title: 'Start',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'end',
      title: 'End',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],
  validation: (rule) =>
    rule.custom((timeRange) => {
      return isValidTimeRange(timeRange?.start, timeRange?.end)
    }),
})
