function sortPostsByDate(allPosts) {
  return allPosts.sort(
    (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate)
  );
}

export { sortPostsByDate };
