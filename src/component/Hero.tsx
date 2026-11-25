import Image from "next/image";
import Link from "next/link";
import CurrentDate from "./CurrentDate";

const Hero = () => {
    return (
        <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Text */}
                <div className="flex-1">
                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mb-3">
                        <CurrentDate />
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#263128]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="text-gray-600 mt-4 max-w-2xl leading-7">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন
                        এক জায়গায়।
                    </p>

                    <Link
                        href="#all-products"
                        className="btn bg-green-700 text-white border-none hover:bg-green-800 mt-6"
                    >
                        সব পণ্য দেখুন
                    </Link>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <Image
                        src="/bazar-hero.png"
                        alt="বাজারের পণ্য"
                        width={260}
                        height={220}
                        className="w-[180px] md:w-[220px] lg:w-[260px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;