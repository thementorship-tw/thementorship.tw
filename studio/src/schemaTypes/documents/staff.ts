import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '姓名',
      type: 'string',
      description: '工作人員的顯示姓名',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: '個人照片',
      type: 'image',
      description: '工作人員的個人照片',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'session',
      title: '屆次',
      type: 'reference',
      to: [{ type: 'session' }],
      options: {
        layout: 'dropdown',
      },
      description: '此工作人員參與的屆次 (請於 session 裡的 Staff List 把此人加入，才會顯示在前台)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: '角色類型',
      type: 'string',
      description: '在計畫中擔任的角色',
      options: {
        list: [
          {title: '船長', value: 'Captain'},
          {title: '引水人', value: 'HarbourPilot'},
          {title: '助教', value: 'Assistant'},
          {title: '助理/志工', value: 'Volunteer'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: '任職公司 或 當前在曼陀號的負責職務',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: '職稱 或 過去在曼陀號參加過什麼',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'team',
      title: '職能組別',
      type: 'string',
      description: '工作人員所屬的職能組別',
      options: {
        list: [
          {title: 'Engineer', value: 'Engineer'},
          {title: 'PM', value: 'PM'},
          {title: 'UIUX', value: 'UIUX'},
          {title: 'MKT', value: 'MKT'},
          {title: 'Data', value: 'Data'},
          {title: 'BD', value: 'BD'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      title: '個人名言',
      type: 'text',
      description: '一句話介紹自己，最多 200 字',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'isVisible',
      title: '是否顯示於網站',
      type: 'boolean',
      description: '關閉後此筆資料將不會顯示在前台網站',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  // 預覽設定：在 Studio 列表中顯示姓名與角色
  preview: {
    select: {
      title: 'name',
      role: 'role',
      team: 'team',
      media: 'photo',
    },
    prepare({title, role, team, media}) {
      const roleMap: Record<string, string> = {
        Captain: '船長',
        HarbourPilot: '引水人',
        Assistant: '助教',
        Volunteer: '助理/志工',
      }
      const parts = [team, role ? roleMap[role] : undefined].filter(Boolean)
      return {
        title: title || '（未填姓名）',
        subtitle: parts.join(' · '),
        media,
      }
    },
  },
})
