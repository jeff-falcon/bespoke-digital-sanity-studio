import { makeCloudinaryThumb } from "../lib/util"

// schemas/project.ts
export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
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
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'image_desktop',
      type: 'cloudinary.asset',
      title: 'Desktop Image',
    },
    {
      name: 'image_mobile',
      type: 'cloudinary.asset',
      title: 'Mobile Image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
    },
  ],
}
