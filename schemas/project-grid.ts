import {defineArrayMember, defineField, defineType} from 'sanity'

// schemas/project.ts
export default defineType({
  name: 'project_grid',
  type: 'document',
  title: 'Project Grid',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [
        defineArrayMember({
          name: 'project',
          title: 'Project',
          type: 'reference',
          to: [{type: 'project'}],
        }),
      ],
    }),
  ],
})
