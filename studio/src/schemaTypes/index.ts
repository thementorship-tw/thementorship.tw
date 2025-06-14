import person from './documents/person'
import page from './documents/page'
import post from './documents/post'
import faq from './documents/faq'
import faqCategory from './documents/faqCategory'
import activity from './documents/activity'
import activityCategory from './documents/activityCategory'
import callToAction from './objects/callToAction'
import infoSection from './objects/infoSection'
import settings from './singletons/settings'
import link from './objects/link'
import blockContent from './objects/blockContent'
import timeRange from './objects/timeRange'
// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  faq,
  faqCategory,
  activity,
  activityCategory,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
  timeRange,
]
