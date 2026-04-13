import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'session',
  title: 'Session',
  type: 'document',
  fields: [
    defineField({
      name: 'session',
      type: 'number',
      description: '屆次',
      validation: (rule) =>
        rule.required().integer().custom(async (value, context) => {
          const { getClient } = context;
          if (!getClient) return true;

          // Sanity client，apiVersion 必須指定日期（官方要求，避免查詢錯誤）
          const client = getClient({apiVersion: '2021-06-07'});
          const id = context.document?._id;
          const query = '*[_type == "session" && session == $value && _id != $id][0]._id';
          const duplicate = await client.fetch(query, {value, id});
          if (duplicate) return 'Session already exists.';

          return true;
        }),
    }),
    defineField({
      name: 'year',
      type: 'number',
      description: '年份',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'staff',
      title: 'Staff List',
      description: '該屆工作人員清單',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'staff' }],
        }),
      ],
      options: {
        sortable: true,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      description: '顯示狀態',
      type: 'string',
      options: {
        list: [
          {title: 'Published', value: 'published'},
          {title: 'Draft', value: 'draft'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    }),
  ],
  preview: {
    select: {
      session: 'session',
      status: 'status',
    },
    prepare({session, status}) {
      return {
        title: `第 ${session} 屆`,
        subtitle: `${status}`,
      }
    },
  },
})
