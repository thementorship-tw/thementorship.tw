import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const linkFields = /* groq */ `
  link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current
        }
      }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        ${linkFields},
      }
    },
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`);

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkFields}
    }
  },
    ${postFields}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);

export const allFAQCategoriesQuery = defineQuery(`
  *[_type == "faqCategory"] | order(name asc)
  {
    "key": value,
    "value": label
  }
`);

export const allFAQItemsQuery = defineQuery(`
  *[_type == "faq"] | order(name asc)
  {
    question,
    answer,
    "type": type->value,
    order,
  }
`);

export const allActivityCategoriesQuery = defineQuery(`
  *[_type == "activityCategory"] | order(name asc)
   {
    "key": value,
    "value": label
  }
  `);

export const allActivitiesQuery = defineQuery(`*[_type == "activity"]{
  _id,
  title,
  "type": type->value,
  time {
    start,
    end
  },
  "imageUrl": image.asset->url,
  lecturer,
  location,
  hashTags,
  register {
    registerTime {
      start,
      end
    },
    href
  }
}`);
