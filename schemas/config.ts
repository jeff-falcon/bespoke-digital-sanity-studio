import { defineArrayMember, defineField, defineType } from 'sanity'
import timezones, { TimeZone } from 'timezones-list';

const timezoneOptions = timezones.map((tz: TimeZone) => { return { title: tz.label, value: tz.tzCode } })
timezoneOptions.sort((a, b) => a.title.localeCompare(b.title))

// schemas/config.ts
export default defineType({
  name: 'config',
  type: 'document',
  title: 'Config',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'socials_group',
      type: 'object',
      title: 'Socials',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
          title: 'Title',
          initialValue: 'Follow us',
        }),
        defineField({
          name: 'socials_links',
          type: 'array',
          title: 'Links',
          of: [
            defineArrayMember({
              name: 'social',
              type: 'object',
              title: 'Social',
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'url',
                  imageUrl: 'icon.asset.url'
                },
              },
              fields: [
                defineField({
                  name: 'name',
                  type: 'string',
                  title: 'Name',
                }),
                defineField({
                  name: 'url',
                  type: 'string',
                  title: 'URL',
                }),
                defineField({
                  name: 'icon',
                  type: 'file',
                  title: 'SVG Icon',
                  description: '1:1 aspect ratio, white fills or strokes, transparent background',
                  options: {
                    accept: 'image/svg+xml',
                  }
                }),
              ],
            })
          ]
        }),
      ]
    }),
    defineField({
      name: 'locations',
      type: 'array',
      title: 'Locations',
      of: [
        defineArrayMember({
          name: 'location',
          type: 'object',
          title: 'Location',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name',
            }),
            defineField({
              name: 'timezone',
              type: 'string',
              title: 'Timezone',
              options: {
                list: timezoneOptions,
                direction: 'vertical',
                layout: 'dropdown',
              }
            }),
            defineField({
              name: 'address',
              type: 'text',
              title: 'Address',
            }),
            defineField({
              name: 'email',
              type: 'string',
              title: 'Email',
            }),
          ]
        }),
      ]
    })
  ],
})
