import { getCollection } from "astro:content";

export async function getAllPosts() {
  return await getCollection("posts");
}

export async function countPostsByTopic(topic) {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.data.topics.includes(topic)).length;
}

export function formatTopic(topic) {
  return topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
