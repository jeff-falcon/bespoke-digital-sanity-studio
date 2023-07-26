import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
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
      description: 'This is used to generate the URL for this project',
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
      name: 'client',
      type: 'string',
      title: 'Client',
    }),
    defineField({
      name: 'image',
      type: 'cloudinary.asset',
      title: 'Thumbnail',
    }),
    defineField({
      name: 'thumb_vimeo_id',
      type: 'string',
      title: 'Thumbnail Vimeo ID',
    }),
    defineField({
      name: 'thumb_vimeo_src',
      type: 'string',
      title: 'Thumbnail Vimeo MP4 URL',
      description: 'Use a 720p MP4 file from Vimeo’s "Video file links"',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'credits',
      type: 'array',
      title: 'Credits',
      of: [
        defineArrayMember({
          name: 'credit',
          type: 'object',
          title: 'Credit',
          fields: [
            {name: 'name', type: 'string', title: 'Title'},
            {name: 'credit', type: 'string', title: 'Credit'},
          ],
        }),
      ],
    }),
  ],
})
