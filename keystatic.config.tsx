import { config, fields, singleton, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: {
	    owner: 'wahyusa',
	    name: 'sabar'
    },
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/_homepage',
      schema: {
        headline: fields.text({ label: 'Headline' }),
      },
    }),
  },
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'src/content/posts/*',
      // directory: 'src/content/posts/',
      slugField: 'title_2',
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { length: { min: 4 } },
        }),
        title_2: fields.slug({
          name: {
            label: 'Title',
            description: 'The title of the post',
          },
          // Optional slug label overrides
          slug: {
            label: 'SEO-friendly slug',
            description: 'This will define the file/folder name for this entry'
          }
        }),
        publishedDate: fields.date({
          label: 'Published Date',
        }),
        summary: fields.text({
          label: 'Summary',
          validation: { length: { min: 4, max: 120 } },
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          layouts: [
            [1, 1],
            [1, 1, 1],
            [2, 1],
            [1, 2, 1],
          ],
        }),
      },
    }),
  },
})