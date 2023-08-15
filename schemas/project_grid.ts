import { defineArrayMember, defineField, defineType } from 'sanity'

// schemas/project.ts
export default defineType({
  name: 'project_grid',
  type: 'document',
  title: 'Project Grid',
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
    },
    prepare(value, viewOptions) {
      const { title, subtitle } = value as { title: string, subtitle: string }
      return {
        title,
        subtitle: subtitle ? `Section title: ${subtitle}` : '',
      }
    },
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
      title: 'Section Title',
    }),
    defineField({
      name: 'feature_first',
      type: 'boolean',
      title: 'Feature first project',
      description: 'If checked, the first project will be featured larger. You should have an odd number of projects in the grid for this to work well.',
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
          to: [{ type: 'project' }],
        }),
      ],
    }),
  ],
})
