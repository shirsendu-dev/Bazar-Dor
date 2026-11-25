"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
    FiChevronDown,
    FiLogIn,
    FiLogOut,
    FiUser,
    FiUserPlus,
} from "react-icons/fi";

interface UserMenuProps {
    mobile?: boolean;
}

const UserMenu = ({ mobile = false }: UserMenuProps) => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা সম্ভব হয়নি");
            return;
        }

        toast.success("সাইন আউট সফল হয়েছে");

        router.push("/");
        router.refresh();
    };

    // Loading
    if (isPending) {
        return (
            <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-100"></div>
        );
    }

    // =========================
    // Not Logged In
    // =========================

    if (!session) {
        // Mobile
        if (mobile) {
            return (
                <div className="flex flex-col gap-2">
                    <Link
                        href="/signin"
                        className="btn btn-outline w-full border-green-700 text-green-700 hover:border-green-700 hover:bg-green-700 hover:text-white"
                    >
                        <FiLogIn />
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signup"
                        className="btn w-full border-none bg-green-700 text-white hover:bg-green-800"
                    >
                        <FiUserPlus />
                        সাইন আপ
                    </Link>
                </div>
            );
        }

        // Desktop
        return (
            <div className="flex items-center gap-4">
                <Link
                    href="/signin"
                    className="font-medium text-[#263128] transition hover:text-green-700"
                >
                    সাইন ইন
                </Link>

                <Link
                    href="/signup"
                    className="rounded-lg bg-green-700 px-5 py-2 text-white transition hover:bg-green-800"
                >
                    সাইন আপ
                </Link>
            </div>
        );
    }

    // =========================
    // Logged In - Mobile
    // =========================

    if (mobile) {
        return (
            <div>
                {/* User Info */}
                <div className="mb-3 flex items-center gap-3 rounded-xl bg-[#f3f8f4] p-3">
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
                            {session.user.image ? (
                                <img
                                    src={session.user.image}
                                    alt={session.user.name}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span>
                                    {session.user.name?.charAt(0).toUpperCase()}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Name & Email */}
                    <div className="min-w-0">
                        <p className="truncate font-semibold text-[#263128]">
                            {session.user.name}
                        </p>

                        <p className="truncate text-xs text-gray-500">
                            {session.user.email}
                        </p>
                    </div>
                </div>

                {/* Profile */}
                <Link
                    href="/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-3 font-medium text-[#263128] hover:bg-green-50 hover:text-green-700"
                >
                    <FiUser />
                    আমার প্রোফাইল
                </Link>

                {/* Sign Out */}
                <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-3 font-medium text-red-500 hover:bg-red-50"
                >
                    <FiLogOut />
                    সাইন আউট
                </button>
            </div>
        );
    }

    // =========================
    // Logged In - Desktop
    // =========================

    return (
        <details className="dropdown dropdown-end">
            {/* User Button */}
            <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-gray-50">

                {/* Avatar */}
                <div className="avatar">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                        {session.user.image ? (
                            <img
                                src={session.user.image}
                                alt={session.user.name}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <span>
                                {session.user.name?.charAt(0).toUpperCase()}
                            </span>
                        )}
                    </div>
                </div>

                {/* Name */}
                <div className="hidden text-left lg:block">
                    <p className="max-w-[140px] truncate text-sm font-semibold text-[#263128]">
                        {session.user.name}
                    </p>

                    <p className="text-xs text-gray-500">
                        অ্যাকাউন্ট
                    </p>
                </div>

                <FiChevronDown className="text-gray-500" />
            </summary>

            {/* Dropdown */}
            <div className="dropdown-content z-50 mt-3 w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl">

                {/* User Info */}
                <div className="border-b border-gray-100 px-3 pb-3 pt-2">
                    <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <div className="avatar">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                                {session.user.image ? (
                                    <img
                                        src={session.user.image}
                                        alt={session.user.name}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span>
                                        {session.user.name?.charAt(0).toUpperCase()}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="min-w-0">
                            <p className="truncate font-semibold text-[#263128]">
                                {session.user.name}
                            </p>

                            <p className="truncate text-sm text-gray-500">
                                {session.user.email}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Menu */}
                <div className="mt-2">
                    <Link
                        href="/profile"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 font-medium text-[#263128] transition hover:bg-green-50 hover:text-green-700"
                    >
                        <FiUser />
                        আমার প্রোফাইল
                    </Link>

                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 font-medium text-red-500 transition hover:bg-red-50"
                    >
                        <FiLogOut />
                        সাইন আউট
                    </button>
                </div>

            </div>
        </details>
    );
};

export default UserMenu;