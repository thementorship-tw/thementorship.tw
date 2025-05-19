import {HelpCircleIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Person schema.  Define and edit the fields for the 'person' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'faq',
  title: 'FAQ',
  icon: HelpCircleIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'reference',
      to: [{type: 'faqCategory'}],
      description: 'This is the category that the FAQ belongs to.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'order',
      type: 'number',
      description: 'This is the order of the FAQ in the list.',
    }),
  ],
  orderings: [
    {
      title: 'Based on type and order',
      name: 'ItemOrder',
      by: [
        {field: 'type.order', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      type: 'type.label',
      question: 'question',
    },
    prepare(selection) {
      return {
        title: selection.question,
        subtitle: selection.type,
      }
    },
  },
})
