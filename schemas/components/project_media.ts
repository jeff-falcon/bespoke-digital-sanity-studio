import { defineField, defineType } from 'sanity'
import { makeCloudinaryThumb } from '../../lib/util'
import { ImageIcon } from '@sanity/icons'
import React from 'react'

interface FieldParams {
  parent: any
  value: any
}

export default defineType({
  name: 'project_media',
  type: 'document',
  title: 'Project Media',
  icon: ImageIcon,
  preview: {
    select: {
      title: 'name',
      kind: 'kind',
      imageUrl: 'image.secure_url',
      derivedUrl: 'image.derived.0.secure_url',
    },
    prepare({ title, kind, imageUrl, derivedUrl }: any) {
      return {
        title,
        subtitle: kind,
        media: React.createElement('img', { src: makeCloudinaryThumb(derivedUrl || imageUrl) })
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
      name: 'image',
      type: 'cloudinary.asset',
      title: 'Image (or video placeholder)',
    }),
    defineField({
      name: 'image_mobile',
      type: 'cloudinary.asset',
      title: 'Mobile crop (optional)',
    }),
    defineField({
      name: 'kind',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video BG', value: 'video-bg' },
          { title: 'Video Player', value: 'video-player' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'vimeo_player_src',
      type: 'string',
      title: '1080p Vimeo MP4 URL',
      description: 'Embeds a video player with controls. Use the 1080p MP4 url from Vimeo’s "Video file links"',
      hidden: ({ parent }: FieldParams) => parent.kind !== 'video-player',
    }),
    defineField({
      name: 'thumb_vimeo_src',
      type: 'string',
      title: '720p Vimeo MP4 URL',
      description: 'Use a 720p MP4 file from Vimeo’s "Video file links"',
      hidden: ({ parent }: FieldParams) => parent.kind !== 'video-bg',
    }),
    defineField({
      name: 'thumb_vimeo_src_hd',
      type: 'string',
      title: '1080p Vimeo MP4 URL',
      description: 'Use a 1080p MP4 file from Vimeo’s "Video file links"',
      hidden: ({ parent }: FieldParams) => parent.kind !== 'video-bg',
    }),
  ],
})
