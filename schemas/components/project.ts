import { defineArrayMember, defineField, defineType } from 'sanity'
import { makeCloudinaryThumb } from '../../lib/util'
import { PresentationIcon } from '@sanity/icons'
import React from 'react'

interface FieldParams {
  parent: any
  value: any
}

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: PresentationIcon,
  preview: {
    select: {
      title: 'name',
      subtitle: 'client',
      kind: 'kind',
      imageUrl: 'image.secure_url',
    },
    prepare({ title, subtitle, imageUrl }: any) {
      return {
        title,
        subtitle,
        media: React.createElement('img', { src: makeCloudinaryThumb(imageUrl) })
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
      name: 'short_name',
      type: 'string',
      title: 'Short Name',
      description: 'This is used under thumbnails in grid views',
    }),
    defineField({
      name: 'client',
      type: 'string',
      title: 'Subtitle',
      description: 'This is used under thumbnails in grid views',
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
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
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
          preview: {
            select: {
              title: 'name',
              subtitle: 'credit'
            },
          },
          fields: [
            { name: 'name', type: 'string', title: 'Title' },
            { name: 'credit', type: 'string', title: 'Credit' },
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
          to: [{ type: 'project_media' }],
        }),
        defineArrayMember({
          name: 'item_pair',
          type: 'object',
          title: 'Image Pair',
          preview: {
            select: {
              titleLeft: 'left.name',
              titleRight: 'right.name',
              imageUrl: 'left.image.secure_url',
            },
            prepare({ titleLeft, titleRight, imageUrl }: any) {
              return {
                title: `${titleLeft} + ${titleRight}`,
                subtitle: 'Image Pair',
                media: React.createElement('img', { src: makeCloudinaryThumb(imageUrl) })
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
              to: [{ type: 'project_media' }],
            }),
          ],
        }),
      ],
    }),
  ],
})
