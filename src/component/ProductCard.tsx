import Link from "next/link";

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

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Link href={`/products/${product.id}`}>
            <div className="card bg-white border border-gray-200 rounded-2xl shadow-none hover:shadow-sm transition h-full">
                <div className="card-body p-5">
                    {/* Product */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#f3f8f4] rounded-xl flex items-center justify-center text-2xl">
                            {product.image}
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg text-[#263128]">
                                {product.nameBn}
                            </h2>

                            <p className="text-sm text-gray-500">
                                প্রতি {product.unit}
                            </p>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-end justify-between mt-4">
                        <div>
                            <p className="text-sm text-gray-500">
                                আজকের দাম
                            </p>

                            <p className="text-xl font-bold text-[#263128]">
                                {product.today.toLocaleString("bn-BD")} টাকা
                            </p>
                        </div>

                        {/* Increased */}
                        {product.change.dir === "up" && (
                            <span className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
                                ▲ {product.change.pct.toLocaleString("bn-BD")}%
                            </span>
                        )}

                        {/* Decreased */}
                        {product.change.dir === "down" && (
                            <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                                ▼ {product.change.pct.toLocaleString("bn-BD")}%
                            </span>
                        )}

                        {/* No Change */}
                        {product.change.dir === "flat" && (
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                                — {product.change.pct.toLocaleString("bn-BD")}%
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;