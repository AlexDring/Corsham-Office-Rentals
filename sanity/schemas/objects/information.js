export default {
  name: 'information',
  title: 'Information',
  type: 'object',
  fields: [
    {
      name: 'firstImage',
      title: 'Top Row Image',
      type: 'image',
      description: 'Banner image'
    },
    {
      name: 'text',
      type: 'object',
      title: 'Top Row Text',
      fields: [
        {
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
      ]
    },
     {
      name: 'bottomText',
      type: 'object',
      title: 'Bottom Row Text',
      fields: [
        {
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
        subtitle: 'Information section',
        media,
      };
    },
  },

}