export default {
  name: 'menu',
  type: 'object',
  title: 'Menu',
  fields: [
    {
      title: 'Navigation title',
      name: 'title',
      type: 'string',
      description: 'This is the name of the page in the navigation menu.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'page',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      description:
        'The page you want to appear at this path. Remember it needs to be published.',
      to: [
        {
          type: 'page',
        },
      ],
    },
  ],
}
