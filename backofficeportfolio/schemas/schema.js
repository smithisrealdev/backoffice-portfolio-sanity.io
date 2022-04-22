// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import socailCategory from './socialMedia'
import post from './test'
import about from './about'
import backEnd from './backEnd'
import frontEnd from './frontEnd'
import other from './other'
import hobby from './hobby'
import toolList from './toolList'
import componentPage from './componentPage'
import experaince from './experaince'
import project from './project'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // post,
    about,
    socailCategory,
    backEnd,
    frontEnd,
    other,
    hobby,
    toolList,
    componentPage,
    experaince,
    project,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
})
