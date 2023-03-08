import { parseISO, format } from "date-fns";
import { useSanityClient, createImageBuilder } from "astro-sanity";

const builder = createImageBuilder(useSanityClient());

export function formatBlogPostDate(date: string) {
  const dateString = parseISO(date);
  const formattedDateString = format(dateString, "MMMM do, yyyy");
  return `${formattedDateString}`;
}

export function getSanityImageURL(source: string) {
  return builder.image(source);
}
