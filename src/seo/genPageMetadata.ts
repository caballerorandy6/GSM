import type { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  pageRoute: string;
  ogImg: string;
}

interface SiteConfig {
  baseUrl: string;
  siteName: string;
}

/**
 * Site configuration
 *
 * @property {string} url - The base URL of the site.
 * @property {string} siteName - The name of the site.
 *
 */
const siteConfig: SiteConfig = {
  baseUrl: "https://www.gsmactx.com",
  siteName: "GSM A/C General & Contractor Inc",
};

/**
 * Generates the metadata for a page in Next.js, including Open Graph and Twitter metadata.
 *
 * @param {Object} params - The metadata parameters.
 * @param {string} params.title - The title of the page.
 * @param {string} params.description - The description of the page.
 * @param {string} params.pageRoute - The URL route for the page.
 * @param {string} params.ogImg - The URL of the Open Graph image.
 * @returns {Metadata} The generated metadata object.
 *
 * @example
 * export const metadata = genPageMetadata({
 *   title: "Nova.js - A collection of dependency-free React hooks",
 *   description: "Carefully developed React hooks that you can copy and paste into your project.",
 *   pageRoute: "/",
 *   ogImg: "/og-landing.png"
 * });
 *
 */
export const genPageMetadata = ({
  title,
  description,
  pageRoute,
  ogImg,
}: PageMetadata): Metadata => {
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: pageRoute,
    },
    openGraph: {
      title,
      description,
      url: pageRoute,
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImg,
        },
      ],
      type: "website",
    },
    twitter: {
      title,
      description,
      images: [ogImg],
    },
  };
};
