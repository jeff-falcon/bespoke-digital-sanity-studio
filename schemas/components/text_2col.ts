import {InlineIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'text_2col',
  type: 'document',
  title: 'Text 2 Column',
  icon: InlineIcon,
  preview: {
    select: {
      title: 'name',
    },
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'col1',
      type: 'array',
      title: 'Column 1',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Heading 1', value: 'h1'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'col2',
      type: 'array',
      title: 'Column 2',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Heading 4', value: 'h4'},
            {title: 'Normal', value: 'normal'},
          ],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'background_color',
      type: 'string',
      title: 'Background color',
      initialValue: 'transparent',
      options: {
        list: [
          {title: 'Transparent', value: 'transparent'},
          {title: 'Dark', value: 'dark'},
          {title: 'Darker', value: 'darker'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
  ],
})
