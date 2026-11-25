import Hero from "@/component/Hero";
import ProductCard from "@/component/ProductCard";

interface Product {
  id: number;
  nameBn: string;
  image: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const HomePage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products...");
  }

  const products: Product[] = await res.json();

  const increasedProducts = products
    .filter((product) => product.change.dir === "up")
    .slice(0, 6);

  const decreasedProducts = products
    .filter((product) => product.change.dir === "down")
    .slice(0, 6);

  return (
    <main className="bg-[#f3f8f4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">

        {/* Hero */}
        <Hero />

        {/* Price Increased */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#263128] mb-5">
            <span className="text-red-500 mr-2">▲</span>
            আজ দাম বেড়েছে
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {increasedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        {/* Price Decreased */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#263128] mb-5">
            <span className="text-green-600 mr-2">▼</span>
            আজ দাম কমেছে
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {decreasedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section
          id="all-products"
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-[#263128]">
            সব পণ্য
          </h2>

          <p className="text-gray-500 mt-1 mb-5">
            মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;