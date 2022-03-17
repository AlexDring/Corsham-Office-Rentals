export default {
  name: 'banner',
  title: 'Banner',
  type: 'object',
  fields: [{
    name: 'title',
    title: 'Title',
    type: 'string',
    description: 'Banner title text'
  },
  { 
    name: 'text',
    title: 'Text',
    type: 'text',
    description: 'Banner body text'
  },
  {
    name: 'image',
    title: 'Image',
    type: 'image',
    description: 'Banner image'
  }
],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Banner section',
        media,
      };
    },
  },

}