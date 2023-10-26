import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    paragraph: {
      render: component("./src/components/Paragraph.astro"),
    },
    list: {
      render: component("./src/components/List.astro"),
      attributes: {
        ordered: { type: Boolean },
        marker: { type: String },
      },
    },
    item: {
      render: component("./src/components/Item.astro"),
    },
    link: {
      render: component("./src/components/Link.astro"),
      attributes: {
        // Markdoc requires type defs for each attribute.
        // These should mirror the `Props` type of the component
        // you are rendering.
        // See Markdoc's documentation on defining attributes
        // https://markdoc.dev/docs/attributes#defining-attributes
        href: { type: String },
      },
    },
  },
  tags: {
    figure: {
      render: component("./src/components/Figure.astro"),
      attributes: {
        // Markdoc requires type defs for each attribute.
        // These should mirror the `Props` type of the component
        // you are rendering.
        // See Markdoc's documentation on defining attributes
        // https://markdoc.dev/docs/attributes#defining-attributes
        imgUrl: { type: String },
      },
    },
  },
});
