import Pharagraph from "@/components/Pharagraph.astro";
import Heading2 from "@/components/Heading2.astro";
import Heading3 from "@/components/Heading3.astro";
import UnorderedList from "@/components/UnorderedList.astro";

const MDXComponentMapping = {
  p: Pharagraph,
  h2: Heading2,
  h3: Heading3,
  ul: UnorderedList,
};

export default MDXComponentMapping;
