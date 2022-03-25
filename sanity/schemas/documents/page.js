import { FiFile } from 'react-icons/fi'

export default {
  title: 'Pages',
  name: 'page',
  type: 'document',
  icon: FiFile,
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Path',
      name: 'slug',
      type: 'slug',
      description: 'This is the website path the page will accessible on',
      hidden: ({document}) => document?._id === 'homePage',
      options: {
        //Change to schema title to automatically populate
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'banner' },
        { type: 'highlights' },
        { type: 'availableSpace' },
        { type: 'titleWithDescription' },
      ],
      options: {
        layout: 'tags',
        editModal: 'fullscreen',
      },
    },
  ],
}
