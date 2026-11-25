import Link from "next/link";

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

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${productId}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch product...");
    }

    const product: Product = await res.json();

    // Lowest price
    const lowestPrice = Math.min(
        ...product.markets.map((market) => market.min)
    );

    // Highest price
    const highestPrice = Math.max(
        ...product.markets.map((market) => market.max)
    );

    return (
        <main className="bg-[#f3f8f4] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <Link href="/" className="hover:text-green-700">
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
                <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* Product Info */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f3f8f4] rounded-2xl flex items-center justify-center text-4xl">
                                {product.image}
                            </div>

                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-[#263128]">
                                    {product.nameBn}
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    প্রতি {product.unit} · {product.categoryNameBn}
                                </p>

                                <p className="text-sm text-gray-600 mt-2">
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
                        <div className="bg-[#f3f8f4] rounded-2xl px-6 py-4 text-center md:min-w-[150px]">
                            <p className="text-sm text-gray-500">
                                আজকের দাম
                            </p>

                            <p className="text-3xl font-bold text-[#263128] mt-1">
                                {product.today.toLocaleString("bn-BD")}
                            </p>

                            <p className="text-sm text-gray-500">
                                টাকা / {product.unit}
                            </p>

                            {product.change.dir === "up" && (
                                <p className="text-red-500 font-medium mt-2">
                                    ▲ {product.change.pct.toLocaleString("bn-BD")}%
                                </p>
                            )}

                            {product.change.dir === "down" && (
                                <p className="text-green-600 font-medium mt-2">
                                    ▼ {product.change.pct.toLocaleString("bn-BD")}%
                                </p>
                            )}

                            {product.change.dir === "flat" && (
                                <p className="text-gray-500 font-medium mt-2">
                                    — {product.change.pct.toLocaleString("bn-BD")}%
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Price Details */}
                <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 mt-6">

                    <h2 className="text-xl font-bold text-[#263128] mb-5">
                        দামের সারসংক্ষেপ
                    </h2>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                        {/* Lowest */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                সর্বনিম্ন দাম
                            </p>

                            <p className="text-2xl font-bold text-green-600 mt-1">
                                {lowestPrice.toLocaleString("bn-BD")} টাকা
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>

                        {/* Highest */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                সর্বাধিক দাম
                            </p>

                            <p className="text-2xl font-bold text-red-500 mt-1">
                                {highestPrice.toLocaleString("bn-BD")} টাকা
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>

                        {/* Average */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                গড় দাম
                            </p>

                            <p className="text-2xl font-bold text-green-600 mt-1">
                                {product.today.toLocaleString("bn-BD")} টাকা
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                প্রতি {product.unit}-এর হিসাবে
                            </p>
                        </div>
                    </div>

                    {/* Market Table */}
                    <h2 className="text-xl md:text-2xl font-bold text-[#263128] mt-8 mb-4">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
                        <table className="table w-full text-[#263128]">
                            <thead>
                                <tr className="bg-[#f3f8f4] text-[#263128] border-b border-gray-200">
                                    <th className="py-4 px-5 text-left font-semibold">
                                        বাজার
                                    </th>

                                    <th className="py-4 px-5 text-left font-semibold">
                                        বিভাগ
                                    </th>

                                    <th className="py-4 px-5 text-left font-semibold">
                                        সর্বনিম্ন
                                    </th>

                                    <th className="py-4 px-5 text-left font-semibold">
                                        সর্বাধিক
                                    </th>

                                    <th className="py-4 px-5 text-left font-semibold">
                                        গড়
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {product.markets.map((market, index) => {
                                    const average = Math.round(
                                        (market.min + market.max) / 2
                                    );

                                    return (
                                        <tr
                                            key={index}
                                            className={`
              border-b border-gray-100
              hover:bg-green-50
              transition
              ${index % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-gray-50/50"
                                                }
            `}
                                        >
                                            <td className="py-4 px-5 font-medium">
                                                {market.market}
                                            </td>

                                            <td className="py-4 px-5 text-gray-600">
                                                {market.division}
                                            </td>

                                            <td className="py-4 px-5">
                                                {market.min.toLocaleString("bn-BD")} টাকা
                                            </td>

                                            <td className="py-4 px-5">
                                                {market.max.toLocaleString("bn-BD")} টাকা
                                            </td>

                                            <td className="py-4 px-5 font-semibold text-green-700">
                                                {average.toLocaleString("bn-BD")} টাকা
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProductDetailsPage;