import axios from "./axiosInstance";

export async function getHeaderNav() {
  const { data } = await axios.get("/navigation/main_menu");

  return data;
}

export const getPagesSlugs = async () => {
  const { data } = await axios.get("/wp/v2/pages");

  const slugs = data.map((page) => {
    const slug = { params: { slug: page.slug } };

    return slug;
  });

  return slugs;
};

export const getPageId = async (slug) => {
  let { data } = await axios.get(`/wp/v2/pages?slug=${slug}`);

  return data;
};

export const getMediaId = async (id) => {
  let { data } = await axios.get(`/media/${id}`);

  console.log("🚀 ~ file: routes.js:32 ~ getMediaId ~ data:", data);

  return data;
};
