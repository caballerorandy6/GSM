interface JsonLdForProductProps {
  name: string;
  description: string;
  image: string;
}

/**
 * Generates the JSON-LD structured data for a product page.
 *
 * @prop {string} name - The name of the product.
 * @prop {string} description - The description of the product.
 * @prop {string} image - The URL of an image representing the product.
 *
 * @example
 *  <JsonLdForProduct
 *    name="Nova.js"
 *    description="A modern collection of dependency-free React hooks."
 *    image="https://novajs.dev/logo.png"
 *  />
 */
export const JsonLdForProduct = ({
  name,
  description,
  image,
}: JsonLdForProductProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
