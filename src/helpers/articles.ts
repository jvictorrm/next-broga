export const getArticleImage = (filename: string) => {
  return `/assets/images/articles/${filename}`;
};

export const getArticleUrl = (slug: string) => {
  return `/articles/${slug}`;
};
