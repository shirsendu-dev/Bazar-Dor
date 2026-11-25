import Link from "next/link";
import {
    FiShoppingCart,
    FiMenu,
    FiLogIn,
    FiUserPlus,
} from "react-icons/fi";
import CurrentDate from "./CurrentDate";

const NavHeader = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch categories...");
    }

    const categories = await res.json();

    return (
        <header className="bg-white border-b border-gray-200">
            {/* =========================
          Mobile Navbar
      ========================== */}
            <div className="md:hidden">
                <div className="navbar px-4 py-2 min-h-[68px]">
                    {/* Logo */}
                    <div className="navbar-start">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-green-700 text-white p-2.5 rounded-xl">
                                <FiShoppingCart className="text-xl" />
                            </div>

                            <div>
                                <h1 className="text-xl font-bold text-[#263128] leading-tight">
                                    বাজার দর
                                </h1>

                                <CurrentDate />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Dropdown */}
                    <div className="navbar-end">
                        <details className="dropdown dropdown-end">
                            <summary className="btn btn-ghost btn-square list-none">
                                <FiMenu className="text-2xl text-[#263128]" />
                            </summary>

                            <div className="dropdown-content bg-white rounded-xl shadow-xl border border-gray-200 mt-3 w-64 p-3 z-50">
                                {/* Category Title */}
                                <p className="text-xs text-gray-500 px-3 py-2">
                                    ক্যাটাগরি
                                </p>

                                {/* Categories */}
                                <ul className="menu p-0">
                                    {categories.map(
                                        (category: {
                                            id: string;
                                            slug: string;
                                            nameBn: string;
                                            icon: string;
                                        }) => (
                                            <li key={category.id}>
                                                <Link
                                                    href={`/category/${category.slug}`}
                                                    className="flex items-center gap-3 text-[#263128] font-medium"
                                                >
                                                    <span className="text-lg">
                                                        {category.icon}
                                                    </span>

                                                    <span>{category.nameBn}</span>
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>

                                {/* Divider */}
                                <div className="divider my-2"></div>

                                {/* Authentication */}
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href="/signin"
                                        className="btn btn-outline border-green-700 text-green-700 hover:bg-green-700 hover:text-white w-full"
                                    >
                                        <FiLogIn />
                                        সাইন ইন
                                    </Link>

                                    <Link
                                        href="/signup"
                                        className="btn bg-green-700 text-white border-none hover:bg-green-800 w-full"
                                    >
                                        <FiUserPlus />
                                        সাইন আপ
                                    </Link>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>

            {/* =========================
          Tablet + Desktop Header
      ========================== */}
            <div className="hidden md:block">
                {/* Top Header */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="bg-green-700 text-white p-3 rounded-xl">
                                <FiShoppingCart className="text-xl" />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-[#263128]">
                                    বাজার দর
                                </h1>

                                <CurrentDate />
                            </div>
                        </Link>

                        {/* Authentication */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/signin"
                                className="font-medium text-[#263128] hover:text-green-700"
                            >
                                সাইন ইন
                            </Link>

                            <Link
                                href="/signup"
                                className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
                            >
                                সাইন আপ
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Category Navigation */}
                <div className="border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-2">
                        <div className="flex items-center justify-start gap-2 py-3">
                            {categories.map(
                                (category: {
                                    id: string;
                                    slug: string;
                                    nameBn: string;
                                    icon: string;
                                }) => (
                                    <Link
                                        key={category.id}
                                        href={`/category/${category.slug}`}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#263128] font-medium opacity-100 hover:bg-green-50 hover:text-green-700 whitespace-nowrap"
                                    >
                                        <span>{category.icon}</span>
                                        <span>{category.nameBn}</span>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavHeader;