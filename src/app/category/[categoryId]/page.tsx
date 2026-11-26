
import CategoryProducts from "@/component/CategoryProducts";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

const CategoryPage = async ({
    params,
}: CategoryPageProps) => {
    const { categoryId } = await params;

    // Fetch Category
    const categoryRes = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/categories/${categoryId}`
    );

    // If category does not exist
    if (!categoryRes.ok) {
        notFound();
    }

    const category = await categoryRes.json();

    // Fetch Category Products
    const productsRes = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
    );

    if (!productsRes.ok) {
        throw new Error("Failed to fetch products...");
    }

    const products = await productsRes.json();

    return (
        <main className="min-h-screen bg-[#f3f8f4]">
            <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">

                {/* Category Header */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
                    <div className="flex items-center gap-4">

                        {/* Category Icon */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f3f8f4] text-3xl md:h-16 md:w-16">
                            {category.icon}
                        </div>

                        {/* Category Info */}
                        <div>
                            <h1 className="text-2xl font-bold text-[#263128] md:text-3xl">
                                {category.nameBn}
                            </h1>

                            <p className="mt-1 text-gray-500">
                                {products.length.toLocaleString("bn-BD")}
                                টি পণ্যের আজকের দাম ও পরিবর্তন
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