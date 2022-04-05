import { FiLink } from 'react-icons/fi'

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: FiLink,
  fields: [
    // { name: 'route', title: 'Navigation Menu', type: 'route' },
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      description:
        'Add, edit and rearrange menu items. The top item is far left in the navigation menu.',

      of: [{ type: 'menu', name: 'menu', title: 'menu' }],
    },
    { name: 'contact', title: 'Contact Details', type: 'contact'}
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings - Navigation & Contact Details',
      }
    },
  },
}
