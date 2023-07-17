import type { APIRoute } from "astro";

export const prerender = false;

export const post: APIRoute = async ({ redirect }) => {
  // DO SOMETHING
  return redirect("/");
};
