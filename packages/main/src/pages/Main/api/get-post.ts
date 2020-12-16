import type {TPost} from "../types";

export const getPost = async (): Promise<TPost[]> => {
  const response = await fetch('https://dayz.geeklog.in/wp-json/wp/v2/posts');
  return response.json();
}