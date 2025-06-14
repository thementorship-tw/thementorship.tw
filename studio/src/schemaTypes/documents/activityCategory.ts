import {HelpCircleIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Person schema.  Define and edit the fields for the 'person' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'activityCategory',
  title: 'Activity Category',
  icon: HelpCircleIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'This is the label that will be displayed in the activity category list.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      type: 'string',
      description: 'This is the value that will be used in the activity category API.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'order',
      type: 'number',
      description: 'This is the order of the activity category in the list.',
    }),
  ],
  orderings: [
    {
      title: 'Based on order',
      name: 'categoryOrder',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      label: 'label',
      value: 'value',
    },
    prepare(selection) {
      return {
        title: `${selection.label} - ${selection.value}`,
        subtitle: 'Activity Category',
      }
    },
  },
})
