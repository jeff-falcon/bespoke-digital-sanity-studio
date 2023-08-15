import { defineArrayMember, defineField, defineType } from 'sanity'

// schemas/project.ts
export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Match the path name of the page on the website (e.g. work, about, connect)',
      options: {
        source: 'name',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/[^a-z0-9_-]/g, '')
            .slice(0, 200),
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'reference',
      to: [{ type: 'hero' }],
    }),
    defineField({
      name: 'components',
      type: 'array',
      title: 'Components',
      of: [
        defineArrayMember({
          name: 'projects',
          title: 'Project Grid',
          type: 'reference',
          to: [
            { type: 'project_grid' },
          ],
        }),
        defineArrayMember({
          name: 'project_media_ref',
          title: 'Single Project Media',
          type: 'reference',
          to: [
            { type: 'project_media' },
          ],
        }),
        defineArrayMember({
          name: 'logo_grid_ref',
          title: 'Logo Grid',
          type: 'reference',
          to: [
            { type: 'logo_grid' },
          ],
        }),
        defineArrayMember({
          name: 'text_only_ref',
          title: 'Text Block',
          type: 'reference',
          to: [
            { type: 'text_only' },
          ],
        }),
        defineArrayMember({
          name: 'columned_text_ref',
          title: 'Columned Text',
          type: 'reference',
          to: [
            { type: 'columned_text' },
          ],
        }),
      ],
    }),
  ],
})
