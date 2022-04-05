import { FiCompass as icon } from 'react-icons/fi'

export default { 
  name: 'seo',
  title: "Page SEO Settings",
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      description: 'The meta title is used to determine the title used on search engine result pages.',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      description: 'The meta description is used to determine the text used under the title on search engine results pages.',
      type: 'text'
    }
  ],
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
  }
}