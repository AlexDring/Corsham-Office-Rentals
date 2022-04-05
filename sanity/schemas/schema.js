// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Docucments
import page from './documents/page'
// import route from './documents/route'
// Objects
import menu from './objects/menu'
import banner from './objects/banner'
import highlights from './objects/highlights'
import highlightsText from './objects/highlightsText'
import availability from './objects/availability'
import availableSpace from './objects/availableSpace'
import titleWithDescription from './objects/titleWithDescription'
import gallery from './objects/gallery'
import galleryItem from './objects/galleryItem'
import seo from './objects/seo'
import contact from './objects/contact'
import siteSettings from './documents/siteSettings'
import route from './objects/route'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Documents */
    page,
    siteSettings,
    /* Objects */
    menu,
    route,
    contact,
    banner,
    highlights,
    highlightsText,
    availability,
    availableSpace,
    gallery,
    galleryItem,
    titleWithDescription,
    seo,
  ]),
})
