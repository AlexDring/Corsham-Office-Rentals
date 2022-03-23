export default {
  name: 'availablity',
  title: 'Current Availability',
  type: 'object',
  fields: [
    {
      title: 'Room Type',
      name: 'roomType',
      type: 'string',
      options: {
        list: ['Office', 'Studio', 'Treatment Room'],
        layout: 'radio',
        direction: 'horizontal'
      } 
    },
    { 
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    { 
      title: 'Text',
      name: 'text',
      type: 'text'
    },
    { 
      title: 'Image',
      name: 'image',
      type: 'image'
    }
  ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'roomType',
        media: 'image'
      }
    }
}