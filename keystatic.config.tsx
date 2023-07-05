// keystatic.config.tsx
import { config, fields, collection, component } from "@keystatic/core";
import NoPreview from "./src/components/NoPreview";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    authors: collection({
      label: "Authors",
      path: "src/content/authors/*",
      slugField: "name",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            validation: {
              length: {
                min: 1,
              },
            },
          },
        }),
        role: fields.text({ label: "Role" }),
        avatar: fields.image({
          label: "Author avatar",
          directory: "public/images/authors",
        }),
      },
    }),
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        authors: fields.array(
          fields.relationship({
            label: "Post author",
            collection: "authors",
          }),
          {
            label: "Authors",
            validation: { length: { min: 1 } },
            itemLabel: (props) => props.value || "Please select an author",
          }
        ),
        summary: fields.text({
          label: "Summary",
          validation: { length: { min: 4 } },
          multiline: true,
        }),
        publishedDate: fields.date({ label: "Published Date" }),
        coverImage: fields.image({
          label: "Cover image",
          directory: "public/images/posts",
        }),
        content: fields.document({
          label: "Content",
          componentBlocks: {
            aside: component({
              label: "Aside",
              preview: (props) => {
                return <NoPreview />;
              },
              schema: {},
            }),
          },
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/images/posts",
            publicPath: "images/posts",
          },
        }),
      },
    }),
  },
});
