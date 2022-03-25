import { FiLink } from 'react-icons/fi'

export default {
  name: 'route',
  type: 'document',
  title: 'Menu',
  icon: FiLink,
  fields: [
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      description:
        'Add, edit and rearrange menu items. The top item is far left in the navigation menu.',

      of: [{ type: 'menu', name: 'menu', title: 'menu' }],
    },
  ],
  // preview: {
  //   select: {
  //     title: 'slug.current',
  //     subtitle: 'page.title',
  //   },
  //   prepare({ title, subtitle }) {
  //     return {
  //       title: ['/', title].join(''),
  //       subtitle,
  //     }
  //   },
  // },
}
