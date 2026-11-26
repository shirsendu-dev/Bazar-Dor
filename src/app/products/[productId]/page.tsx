import Link from "next/link";
import { notFound } from "next/navigation";

interface Market {
    market: string;
    division: string;
    min: number;
    max: number;
}

interface Product {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;

    change: {
        dir: string;
        pct: number;
    };

    markets: Market[];
}

interface ProductDetailsPageProps {
    params: Promise<{
        productId: string;
    }>;
}

const ProductDetailsPage = async ({
    params,
}: ProductDetailsPageProps) => {
    const { productId } = await params;

    // Fetch Product
    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${productId}`
    );

    // Product not found
    if (!res.ok) {
        notFound();
    }

    const product: Product = await res.json();

    // Lowest Price
    const lowestPrice = Math.min(
        ...product.markets.map(
            (market) => market.min
        )
    );

    // Highest Price
    const highestPrice = Math.max(
        ...product.markets.map(
            (market) => market.max
        )
    );

    return (
        <main className="min-h-screen bg-[#f3f8f4]">
            <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">

                {/* Breadcrumb */}
                <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-600">

                    <Link
                        href="/"
                        className="hover:text-green-700"
                    >
                        হোম
                    </Link>

                    <span>›</span>

                    <Link
                        href={`/category/${product.category}`}
                        className="hover:text-green-700"
                    >
                        {product.categoryNameBn}
                    </Link>

                    <span>›</span>

                    <span className="text-[#263128]">
                        {product.nameBn}
                    </span>

                </div>

                {/* Product Header */}
                <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        {/* Product Info */}
                        <div className="flex items-center gap-4">

                            {/* Icon */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f3f8f4] text-4xl md:h-20 md:w-20">
                                {product.image}
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-[#263128] md:text-3xl">
                                    {product.nameBn}
                                </h1>

                                <p className="mt-1 text-gray-500">
                                    প্রতি {product.unit} ·{" "}
                                    {product.categoryNameBn}
                                </p>

                                <p className="mt-2 text-sm text-gray-600">
                                    গতকালের তুলনায় আজ দাম{" "}
                                    {product.change.dir === "up"
                                        ? "বেড়েছে"
                                        : product.change.dir === "down"
                                            ? "কমেছে"
                                            : "অপরিবর্তিত"}
                                    ।
                                </p>
                            </div>

                        </div>

                        {/* Today's Price */}
                        <div className="rounded-2xl bg-[#f3f8f4] px-6 py-4 text-center md:min-w-[170px]">
                            <p className="text-sm text-gray-500">
                                আজকের দাম
                            </p>

                            <p className="mt-1 text-3xl font-bold text-[#263128]">
                                {product.today.toLocaleString(
                                    "bn-BD"
                                )}
                            </p>

                            <p className="text-sm text-gray-500">
                                টাকা / {product.unit}
                            </p>

                            {/* Price Increased */}
                            {product.change.dir === "up" && (
                                <p className="mt-2 font-medium text-red-500">
                                    ▲{" "}
                                    {product.change.pct.toLocaleString(
                                        "bn-BD"
                                    )}
                                    %
                                </p>
                            )}

                            {/* Price Decreased */}
                            {product.change.dir === "down" && (
                                <p className="mt-2 font-medium text-green-600">
                                    ▼{" "}
                                    {product.change.pct.toLocaleString(
                                        "bn-BD"
                                    )}
                                    %
                                </p>
                            )}

                            {/* No Change */}
                            {product.change.dir === "flat" && (
                                <p className="mt-2 font-medium text-gray-500">
                                    —{" "}
                                    {product.change.pct.toLocaleString(
                                        "bn-BD"
                                    )}
                                    %
                                </p>
                            )}

                        </div>
                    </div>
                </section>

                {/* Price Details */}
                <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 text-[#263128] shadow-sm md:p-7">

                    {/* Summary Heading */}
                    <h2 className="mb-5 text-xl font-bold md:text-2xl">
                        দামের সারসংক্ষেপ
                    </h2>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                        {/* Lowest */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="text-sm text-gray-500">
                                সর্বনিম্ন দাম
                            </p>

                            <p className="mt-1 text-2xl font-bold text-green-600">
                                {lowestPrice.toLocaleString(
                                    "bn-BD"
                                )}{" "}
                                টাকা
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                সবচেয়ে কম বাজার মূল্য
                            </p>
                        </div>

                        {/* Highest */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="text-sm text-gray-500">
                                সর্বাধিক দাম
                            </p>

                            <p className="mt-1 text-2xl font-bold text-red-500">
                                {highestPrice.toLocaleString(
                                    "bn-BD"
                                )}{" "}
                                টাকা
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                সবচেয়ে বেশি বাজার মূল্য
                            </p>
                        </div>

                        {/* Today's Price */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="text-sm text-gray-500">
                                আজকের দাম
                            </p>

                            <p className="mt-1 text-2xl font-bold text-green-700">
                                {product.today.toLocaleString(
                                    "bn-BD"
                                )}{" "}
                                টাকা
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                প্রতি {product.unit}
                            </p>
                        </div>

                    </div>

                    {/* Market Table Heading */}
                    <h2 className="mb-4 mt-8 text-xl font-bold md:text-2xl">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    {/* Market Table */}
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">

                        <table className="table w-full text-[#263128]">

                            <thead>
                                <tr className="border-b border-gray-200 bg-[#f3f8f4] text-[#263128]">

                                    <th className="px-5 py-4 text-left font-semibold">
                                        বাজার
                                    </th>

                                    <th className="px-5 py-4 text-left font-semibold">
                                        বিভাগ
                                    </th>

                                    <th className="px-5 py-4 text-left font-semibold">
                                        সর্বনিম্ন
                                    </th>

                                    <th className="px-5 py-4 text-left font-semibold">
                                        সর্বাধিক
                                    </th>

                                    <th className="px-5 py-4 text-left font-semibold">
                                        গড়
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                {product.markets.map(
                                    (market, index) => {
                                        const average = Math.round(
                                            (market.min +
                                                market.max) /
                                            2
                                        );

                                        return (
                                            <tr
                                                key={index}
                                                className={`border-b border-gray-100 transition hover:bg-green-50 ${index % 2 === 0
                                                        ? "bg-white"
                                                        : "bg-gray-50/50"
                                                    }`}
                                            >
                                                <td className="px-5 py-4 font-medium">
                                                    {market.market}
                                                </td>

                                                <td className="px-5 py-4 text-gray-600">
                                                    {market.division}
                                                </td>

                                                <td className="px-5 py-4">
                                                    {market.min.toLocaleString(
                                                        "bn-BD"
                                                    )}{" "}
                                                    টাকা
                                                </td>

                                                <td className="px-5 py-4">
                                                    {market.max.toLocaleString(
                                                        "bn-BD"
                                                    )}{" "}
                                                    টাকা
                                                </td>

                                                <td className="px-5 py-4 font-semibold text-green-700">
                                                    {average.toLocaleString(
                                                        "bn-BD"
                                                    )}{" "}
                                                    টাকা
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>

                        </table>

                    </div>
                </section>

            </div>
        </main>
    );
};

export default ProductDetailsPage;