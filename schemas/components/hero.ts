import { defineField, defineType } from 'sanity'
import { makeCloudinaryThumb } from "../../lib/util"
import { RocketIcon } from '@sanity/icons'

interface FieldParams {
  parent: any
  value: any
}

// schemas/project.ts
export default defineType({
  name: 'hero',
  type: 'document',
  title: 'Hero',
  icon: RocketIcon,
  preview: {
    select: {
      title: 'name',
      kind: 'kind',
      imageUrl: 'image_desktop.secure_url',
    },
    prepare({ title, kind, imageUrl }: any) {
      return {
        title,
        subtitle: kind,
        imageUrl: makeCloudinaryThumb(imageUrl),
      }
    },
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),
    defineField({
      name: 'image_desktop',
      type: 'cloudinary.asset',
      title: 'Desktop Image',
    }),
    defineField({
      name: 'image_mobile',
      type: 'cloudinary.asset',
      title: 'Mobile Image',
    }),
    defineField({
      name: 'kind',
      type: 'string',
      title: 'Thumbnail type',
      initialValue: 'image',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video BG', value: 'video-bg' },
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
      hidden: ({ parent, value }: FieldParams) => parent.kind !== 'video-bg',
    }),
    defineField({
      name: 'thumb_vimeo_src_hd',
      type: 'string',
      title: 'Thumbnail video: 1080p Vimeo MP4 URL',
      description: 'Use a 1080p MP4 file from Vimeo’s "Video file links"',
      hidden: ({ parent, value }: FieldParams) => parent.kind !== 'video-bg',
    }),
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
    },
  ],
})
