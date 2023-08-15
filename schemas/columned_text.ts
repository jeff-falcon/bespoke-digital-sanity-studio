import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'columned_text',
  type: 'document',
  title: 'Columned Text',
  preview: {
    select: {
      title: 'name',
    }
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'column',
          title: 'Column',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'description',
              type: 'text',
              title: 'Description',
            }),
          ]
        }),
      ],
      validation: Rule => Rule.required().min(2).max(4)
    }),
  ]
})