export default {
  name: 'highlights',
  title: 'Highlights',
  type: 'object',
  fields: [
    {
      name: 'firstImage',
      title: 'Image',
      type: 'image',
      description: 'Top row image'
    },
    {
      name: 'text',
      type: 'object',
      title: 'Top row text',  
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Top row title'
        },
        { 
          name: 'text',
          title: 'Text',
          type: 'text',
          description: 'Top row text'
        },
      ]
    },
     {
      name: 'bottomText',
      type: 'object',
      title: 'Bottom row text',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Bottom row title'
        },
        { 
          name: 'text',
          title: 'Text',
          type: 'text',
          description: 'Bottom row text'
        },
      ]
    },
    {
      name: 'secondImage',
      title: 'Bottom Row Image',
      type: 'image',
      description: 'Banner image'
    },
],
  options: {
    columns: 2,
    editModal: 'fullscreen'
  },
  preview: {
    select: {
      title: 'text.title',
      media: 'firstImage'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Highlights section',
        media,
      };
    },
  },

}