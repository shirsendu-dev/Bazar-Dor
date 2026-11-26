"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

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

interface CategoryProductsProps {
    products: Product[];
}

const CategoryProducts = ({ products }: CategoryProductsProps) => {
    const [sort, setSort] = useState("default");

    const sortedProducts = [...products];

    if (sort === "low") {
        sortedProducts.sort((a, b) => a.today - b.today);
    }

    if (sort === "high") {
        sortedProducts.sort((a, b) => b.today - a.today);
    }

    if (sort === "name") {
        sortedProducts.sort((a, b) =>
            a.nameBn.localeCompare(b.nameBn, "bn")
        );
    }

    return (
        <>
            {/* Sorting */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-6">
                <div className="flex items-center justify-end gap-3">
                    <span className="text-gray-500">
                        সাজান
                    </span>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="select select-bordered w-auto"
                    >
                        <option value="default">ডিফল্ট</option>
                        <option value="low">দাম: কম থেকে বেশি</option>
                        <option value="high">দাম: বেশি থেকে কম</option>
                        <option value="name">নাম অনুযায়ী</option>
                    </select>
                </div>
            </div>

            {/* Product Count */}
            <p className="text-gray-500 mt-5 mb-4">
                মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
            </p>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};

export default CategoryProducts;