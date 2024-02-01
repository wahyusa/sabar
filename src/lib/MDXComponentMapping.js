import Pharagraph from "@/components/Pharagraph.astro";
import Heading2 from "@/components/Heading2.astro";
import Heading3 from "@/components/Heading3.astro";
import UnorderedList from "@/components/UnorderedList.astro";
// import InlineCode from "@/components/InlineCode.astro";
// import Pre from "@/components/Pre.astro";

const MDXComponentMapping = {
  p: Pharagraph,
  h2: Heading2,
  h3: Heading3,
  ul: UnorderedList,
  // code: InlineCode,
  // pre: Pre,
};

export default MDXComponentMapping;
