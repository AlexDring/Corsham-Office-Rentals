export default {
  name: 'highlights',
  title: 'Highlights',
  type: 'object',
  fields: [
    {
      name: 'firstImage',
      title: 'Top row image',
      type: 'image',
    },
    {
      name: 'topHighlightsText',
      title: 'Top row text', 
      type: 'highlightsText', 
    },
    {
      name: 'bottomHighlightsText',
      title: 'Bottom row text', 
      type: 'highlightsText', 
    },
    {
      name: 'secondImage',
      title: 'Bottom row image',
      type: 'image',
    },
],
  options: {
    columns: 2,
    editModal: 'fullscreen'
  },
  preview: {
    select: {
      title: 'topHighlightsText.title',
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