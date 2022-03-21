export default {
  name: 'titleWithDescription',
  title: 'Title with Description',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      // description: 'Displays items that have been added to the Availability section (In the content column).',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      // description: 'Displays items that have been added to the Availability section (In the content column).',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    },
  }
}