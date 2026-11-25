"use client";

import MarqueeText from "react-marquee-text";

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

interface MarqueeContentProps {
    products: Product[];
}

const MarqueeContent = ({ products }: MarqueeContentProps) => {
    return (
        <div className="bg-white border-y border-gray-200 overflow-hidden">
            <MarqueeText
                duration={20}
                pauseOnHover={true}
                direction="right"
            >
                <div className="flex items-center">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex items-center gap-2 px-5 py-2 border-r border-gray-200 whitespace-nowrap"
                        >
                            {/* Product Icon */}
                            <span>{product.image}</span>

                            {/* Product Name */}
                            <span className="font-medium text-[#263128]">
                                {product.nameBn}
                            </span>

                            {/* Price */}
                            <span className="text-[#263128]">
                                {product.today.toLocaleString("bn-BD")} টাকা/
                                {product.unit === "kg" ? "কেজি" : product.unit}
                            </span>

                            {/* Price Change */}
                            {product.change.dir === "up" && (
                                <span className="text-red-500 font-medium">
                                    ▲{" "}
                                    {Math.abs(product.change.pct).toLocaleString("bn-BD", {
                                        minimumFractionDigits: 1,
                                    })}
                                    %
                                </span>
                            )}

                            {product.change.dir === "down" && (
                                <span className="text-green-600 font-medium">
                                    ▼{" "}
                                    {Math.abs(product.change.pct).toLocaleString("bn-BD", {
                                        minimumFractionDigits: 1,
                                    })}
                                    %
                                </span>
                            )}

                            {product.change.dir === "flat" && (
                                <span className="text-gray-500 font-medium">
                                    —{" "}
                                    {product.change.pct.toLocaleString("bn-BD", {
                                        minimumFractionDigits: 1,
                                    })}
                                    %
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </MarqueeText>
        </div>
    );
};

export default MarqueeContent;