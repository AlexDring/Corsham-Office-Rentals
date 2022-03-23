// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import home from './documents/page'
import banner from './objects/banner'
import highlights from './objects/highlights'
import highlightsText from './objects/highlightsText'
import availability from './documents/availability'
import availableSpace from './objects/availableSpace'
import titleWithDescription from './objects/titleWithDescription'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Documents */
    home,
    availability,
    /* Objects */
    banner,
    highlights,
    highlightsText,
    availableSpace,
    titleWithDescription
  ]),
})
