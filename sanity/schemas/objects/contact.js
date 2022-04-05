export default {
  name: 'contact',
  title: 'Contact',
  type: 'object',
  description: 'Contact information added here is pulled through to all pages that include an email and phone number.',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }
  ]
}