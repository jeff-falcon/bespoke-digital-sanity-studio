import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'client_list',
  type: 'document',
  title: 'Client List',
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
      name: 'clients',
      type: 'text',
      title: 'Clients',
      description: 'One per line, without extra spaces or line breaks',
    }),

  ]
})