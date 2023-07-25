// schemas/project.ts
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client',
    },
    {
      name: 'image',
      type: 'cloudinary.asset',
      title: 'Thumbnail',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
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
        },
      ],
    },
    {
      name: 'credits',
      type: 'array',
      title: 'Credits',
      of: [
        {
          name: 'credit',
          type: 'object',
          title: 'Credit',
          fields: [
            {name: 'name', type: 'string', title: 'Title'},
            {name: 'credit', type: 'string', title: 'Credit'},
          ],
        },
      ],
    },
  ],
}
