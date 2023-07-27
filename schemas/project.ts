import {defineArrayMember, defineField, defineType} from 'sanity'
import {makeCloudinaryThumb} from '../lib/util'

interface FieldParams {
  parent: any
  value: any
}

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
      title: 'Thumbnail image (or video placeholder)',
    }),
    defineField({
      name: 'kind',
      type: 'string',
      title: 'Thumbnail type',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video BG', value: 'video-bg'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'thumb_vimeo_src',
      type: 'string',
      title: 'Thumbnail video: 720p Vimeo MP4 URL',
      description: 'Use a 720p MP4 file from Vimeo’s "Video file links"',
      hidden: ({parent, value}: FieldParams) => parent.kind !== 'video-bg',
    }),
    defineField({
      name: 'thumb_vimeo_src_hd',
      type: 'string',
      title: 'Thumbnail video: 1080p Vimeo MP4 URL',
      description: 'Use a 1080p MP4 file from Vimeo’s "Video file links"',
      hidden: ({parent, value}: FieldParams) => parent.kind !== 'video-bg',
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
    defineField({
      name: 'media',
      type: 'array',
      title: 'Media',
      of: [
        defineArrayMember({
          name: 'item',
          type: 'reference',
          title: 'Single Item',
          weak: true,
          to: [{type: 'project_media'}],
        }),
        defineArrayMember({
          name: 'item_pair',
          type: 'object',
          title: 'Item Pair',
          preview: {
            select: {
              titleLeft: 'left.name',
              titleRight: 'right.name',
              imageUrl: 'left.image.secure_url',
            },
            prepare({titleLeft, titleRight, imageUrl}: any) {
              return {
                title: `${titleLeft} + ${titleRight}`,
                subtitle: 'Item Pair',
                imageUrl: makeCloudinaryThumb(imageUrl),
              }
            },
          },
          fields: [
            defineField({
              name: 'left',
              type: 'reference',
              weak: true,
              to: [
                {
                  type: 'project_media',
                },
              ],
            }),
            defineField({
              name: 'right',
              weak: true,
              type: 'reference',
              to: [{type: 'project_media'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
