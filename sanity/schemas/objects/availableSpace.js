export default {
  name: 'availableSpace',
  title: 'Available Space',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Availability Header',
      type: 'string',
      description: 'Displays items that have been added to the Availability section (In the content column).',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Availability section',
        media,
      };
    },
  },
}