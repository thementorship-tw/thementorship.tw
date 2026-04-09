import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
      options: {
        list: [
          {title: 'BD', value: 'BD'},
          {title: 'Data', value: 'Data'},
          {title: 'Engineer', value: 'Engineer'},
          {title: 'MKT', value: 'MKT'},
          {title: 'PM', value: 'PM'},
          {title: 'UIUX', value: 'UIUX'},
          {title: 'Leadership', value: 'Leadership'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image Url',
      type: 'image',
    }),
    defineField({
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
})