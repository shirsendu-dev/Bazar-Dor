import CategoryProducts from "@/component/CategoryProducts";


interface CategoryPageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { categoryId } = await params;

    // Fetch category
    const categoryRes = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/categories/${categoryId}`
    );

    if (!categoryRes.ok) {
        throw new Error("Failed to fetch category...");
    }

    const category = await categoryRes.json();

    // Fetch category products
    const productsRes = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
    );

    if (!productsRes.ok) {
        throw new Error("Failed to fetch products...");
    }

    const products = await productsRes.json();

    return (
        <main className="bg-[#f3f8f4] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">

                {/* Category Header */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f3f8f4] rounded-xl flex items-center justify-center text-3xl">
                            {category.icon}
                        </div>

                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-[#263128]">
                                {category.nameBn}
                            </h1>

                            <p className="text-gray-500 mt-1">
                                {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
                                পরিবর্তন
                            </p>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <CategoryProducts products={products} />

            </div>
        </main>
    );
};

export default CategoryPage;