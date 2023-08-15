import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'columned_text',
  type: 'document',
  title: 'Columned Text',
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
    }
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
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
            defineField({
              name: 'body',
              type: 'array',
              title: 'Body',
              of: [
                defineArrayMember({
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                      { title: 'Code', value: 'code' },
                    ],
                  },
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' }
                  ] // yes please, both bullet and numbered
                })
              ],
            }),
          ]
        }),
      ],
      validation: Rule => Rule.required().min(2).max(4)
    }),
  ]
})