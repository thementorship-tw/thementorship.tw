import {HelpCircleIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Person schema.  Define and edit the fields for the 'person' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'activity',
  title: 'Activity',
  icon: HelpCircleIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      type: 'reference',
      to: [{type: 'activityCategory'}],
      description: 'This is the category that the activity belongs to.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      type: 'timeRange',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lecturer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hashTags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'register',
      type: 'object',
      fields: [
        {
          name: 'registerTime',
          type: 'timeRange',
        },
        {
          name: 'href',
          title: 'Link',
          type: 'url',
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Based on start time',
      name: 'StartTimeOrder',
      by: [{field: 'time.start', direction: 'asc'}],
    },
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      type: 'type.label',
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.type,
      }
    },
  },
})
