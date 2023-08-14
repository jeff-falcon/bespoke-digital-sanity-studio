import { defineField, defineType } from 'sanity'
import { makeCloudinaryThumb } from '../lib/util'

interface FieldParams {
  parent: any
  value: any
}

export default defineType({
  name: 'project_media',
  type: 'document',
  title: 'Project Media',
  preview: {
    select: {
      title: 'name',
      kind: 'kind',
      imageUrl: 'image.secure_url',
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
      title: 'Name',
    }),
    defineField({
      name: 'image',
      type: 'cloudinary.asset',
      title: 'Image (or video placeholder)',
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
      title: 'Vimeo HLS (.m3u8) URL',
      description: 'Embeds a video player with controls. Use the HLS (.m3u8) url from Vimeo’s "Video file links"',
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
