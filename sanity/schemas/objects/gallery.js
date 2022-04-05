import { FiGrid as icon } from 'react-icons/fi'

export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  icon,
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        { type: 'galleryItem' }
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0.image',
    },
    prepare(selection) {
      const { images } = selection;

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `Gallery section`,
      };
    },
  },
};
