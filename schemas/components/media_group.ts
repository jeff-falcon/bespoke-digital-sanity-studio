import { ThLargeIcon } from '@sanity/icons';
import React from 'react';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { makeCloudinaryThumb } from '../../lib/util';
import { LayoutRadioInput } from '../../tools/LayoutButtons';

const layoutMediaCount: Record<string, number> = {
  one_full: 1,
  one_text: 1,
  text_one: 1,
  one_two: 3,
  two_one: 3,
  one_three: 4,
  three_one: 4,
  three: 3,
  four: 4,
  one_half_half: 3,
  half_half_one: 3,
};

// schemas/project.ts
export default defineType({
  name: 'media_group',
  type: 'document',
  title: 'Media Group',
  icon: ThLargeIcon,
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      imageUrl: 'media.0.image.secure_url',
    },
    prepare(value, viewOptions) {
      const { title, subtitle, imageUrl } = value as { title: string; subtitle: string; imageUrl: string };
      return {
        title,
        subtitle: subtitle ? `Section title: ${subtitle}` : '',
        media: imageUrl ? React.createElement('img', { src: makeCloudinaryThumb(imageUrl) }) : undefined,
      };
    },
  },
  fieldsets: [{ name: 'intro', title: 'Intro title & description', options: { collapsible: true, collapsed: false } }],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'optional',
      fieldset: 'intro',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      description: 'optional',
      fieldset: 'intro',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
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
      name: 'text_align',
      type: 'string',
      title: 'Text alignment',
      hidden: ({ parent }) => parent.title == '' && parent.description == '',
      initialValue: 'centered',
      fieldset: 'intro',
      options: {
        list: [
          { title: 'Centered', value: 'centered' },
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Layout',
      hidden: ({ parent }) => parent.title == '' && parent.description == '',
      initialValue: 'one_two',
      components: { input: LayoutRadioInput },
      options: {
        list: [
          { title: '1 + 2', value: 'one_two' },
          { title: '2 + 1', value: 'two_one' },
          { title: '3 + 1', value: 'three_one' },
          { title: '1 + 3', value: 'one_three' },
          { title: '1 full', value: 'one_full' },
          { title: 'Three across', value: 'three' },
          { title: 'Four across', value: 'four' },
          { title: '1 + 1/2 + 1/2', value: 'one_half_half' },
          { title: '1/2 + 1/2 + 1', value: 'half_half_one' },
          { title: '1 + text', value: 'one_text' },
          { title: 'text + 1', value: 'text_one' },
        ],
      },
    }),
    defineField({
      name: 'media',
      type: 'array',
      title: 'Media',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const layout = (context.parent as any)?.layout as string | undefined;
          const required = layout ? layoutMediaCount[layout] : undefined;
          const count = Array.isArray(value) ? value.length : 0;
          if (!required) return count >= 1 ? true : 'At least 1 media item is required.';
          if (count !== required) {
            return `The "${layout}" layout requires exactly ${required} media item${required !== 1 ? 's' : ''}.`;
          }
          return true;
        }),
      of: [
        defineField({
          name: 'media',
          weak: true,
          type: 'reference',
          to: [{ type: 'project_media' }],
        }),
      ],
    }),
  ],
});
