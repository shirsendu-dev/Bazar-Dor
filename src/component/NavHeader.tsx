import Link from "next/link";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import CurrentDate from "./CurrentDate";
import UserMenu from "./UserMenu";

const NavHeader = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");

    if (!res.ok) {
        throw new Error("Failed to fetch categories...");
    }

    const categories = await res.json();

    return (
        <header className="border-b border-gray-200 bg-white">


            {/* Mobile Navbar */}

            <div className="md:hidden">
                <div className="navbar min-h-[68px] px-4 py-2">

                    {/* Logo */}
                    <div className="navbar-start">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="rounded-xl bg-green-700 p-2.5 text-white">
                                <FiShoppingCart className="text-xl" />
                            </div>

                            <div>
                                <h1 className="text-xl font-bold leading-tight text-[#263128]">
                                    বাজার দর
                                </h1>

                                <CurrentDate />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="navbar-end">
                        <details className="dropdown dropdown-end">
                            <summary className="btn btn-ghost btn-square list-none">
                                <FiMenu className="text-2xl text-[#263128]" />
                            </summary>

                            <div className="dropdown-content z-50 mt-3 w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl">

                                {/* Category Title */}
                                <p className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-gray-400">
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
                                                    className="flex items-center gap-3 font-medium text-[#263128]"
                                                >
                                                    <span className="text-lg">
                                                        {category.icon}
                                                    </span>

                                                    <span>
                                                        {category.nameBn}
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>

                                {/* Divider */}
                                <div className="divider my-2"></div>

                                {/* Auth / User */}
                                <UserMenu mobile />

                            </div>
                        </details>
                    </div>

                </div>
            </div>


            {/* Tablet + Desktop */}


            <div className="hidden md:block">

                {/* Top Header */}
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center justify-between py-4">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3"
                        >
                            <div className="rounded-xl bg-green-700 p-3 text-white">
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
                        <UserMenu />

                    </div>
                </div>

                {/* Category Navigation */}
                <div className="border-t border-gray-200">
                    <div className="mx-auto max-w-7xl px-2">
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
                                        className="flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 font-medium text-[#263128] opacity-100 transition hover:bg-green-50 hover:text-green-700"
                                    >
                                        <span>
                                            {category.icon}
                                        </span>

                                        <span>
                                            {category.nameBn}
                                        </span>
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