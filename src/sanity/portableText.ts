import { portableTextToHtml } from "astro-sanity";
import { getSanityImageURL } from "./helper";

type SanityValue = {
  value: {
    asset: string;
    code: string;
    language: string;
    alt: string;
  };
};

const customComponents = {
  types: {
    mainImage: ({ value }: SanityValue) => {
      return `
        <picture>
          <source
            srcset="${getSanityImageURL(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${getSanityImageURL(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
    image: ({ value }: SanityValue) => {
      return `
        <picture>
          <source
            srcset="${getSanityImageURL(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${getSanityImageURL(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
    code: ({ value }: SanityValue) => {
      return `<code-block code='${value.code}' language='${value.language}'></code-block>`;
    },
  },
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}
