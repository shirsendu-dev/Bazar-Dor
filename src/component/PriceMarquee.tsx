import MarqueeContent from "./MarqueeContent";

const PriceMarquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products...");
  }

  const products = await res.json();

  return <MarqueeContent products={products} />;
};

export default PriceMarquee;