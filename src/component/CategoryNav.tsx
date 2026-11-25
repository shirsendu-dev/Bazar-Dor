"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Category = {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
};

type Props = {
    categories: Category[];
};

const CategoryNav = ({ categories }: Props) => {
    const pathname = usePathname();

    return (
        <nav className="overflow-x-auto scrollbar-hide">
            <div className="h-[48px] flex items-center gap-1 min-w-max">
                {categories.map((category) => {
                    const href = `/category/${category.slug}`;

                    const isActive = pathname === href;

                    return (
                        <Link
                            key={category.id}
                            href={href}
                            className={`
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                text-sm font-medium
                transition
                ${isActive
                                    ? "bg-[#07883f] text-white"
                                    : "text-[#263128] hover:bg-[#f1f7f2] hover:text-[#07883f]"
                                }
              `}
                        >
                            <span>{category.icon}</span>
                            <span>{category.nameBn}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default CategoryNav;