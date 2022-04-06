import { FiAlignLeft as icon } from 'react-icons/fi'

export default {
  name: 'titleWithDescription',
  title: 'Title with Description',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Heading & Description Section'
      };
    },
  },
}