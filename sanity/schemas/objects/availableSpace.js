export default {
  name: 'availableSpace',
  title: 'Available Space',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Availability Header',
      type: 'string',
    },
    {
      name: 'availability',
      title: 'Availability',
      description: 'A list of our current available office/treatment rooms/studios',
      type: 'array',
      of: [{ name:'availability', title: 'Available space', type: 'availablity'}]
    }
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