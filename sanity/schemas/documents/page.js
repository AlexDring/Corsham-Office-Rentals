export default {
  title: 'Pages',
  name: 'page',
  type: 'document',
  icon: () => '📑',
  fields: [
    { title: 'Title', name: 'title', type: 'string'},
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'banner' },
        { type: 'information' },
        { type: 'availableSpace' }
        ],
      options: {
        sortable: false,
        layout: 'tags',
        editModal: 'fullscreen'
      }
    }
  ]
}