import Link from "next/link";
import { FiHome, FiSearch } from "react-icons/fi";

const NotFound = () => {
    return (
        <main className="min-h-screen bg-[#f3f8f4]">
            <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 py-12 md:px-6">
                <div className="w-full max-w-2xl text-center">
                    {/* 404 */}
                    <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full border border-green-100 bg-gradient-to-br from-white to-green-50 shadow-[0_12px_35px_rgba(22,101,52,0.12)] md:h-48 md:w-48">
                        <span className="text-6xl font-bold text-green-700 md:text-7xl">
                            404
                        </span>

                        <div className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-green-100 bg-white text-xl text-green-700 shadow-md">
                            <FiSearch />
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-[#263128] md:text-4xl">
                        পেজটি খুঁজে পাওয়া যায়নি
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                        আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, ঠিকানাটি ভুল হয়েছে
                        অথবা পেজটি বর্তমানে পাওয়া যাচ্ছে না।
                    </p>

                    {/* Home Button */}
                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/"
                            className="flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-[0_5px_16px_rgba(22,101,52,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-[0_8px_22px_rgba(22,101,52,0.28)]"
                        >
                            <FiHome />
                            হোম পেজে ফিরে যান
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;