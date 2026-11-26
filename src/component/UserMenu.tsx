"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
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
            <div className="h-12 w-44 animate-pulse rounded-2xl bg-gray-100"></div>
        );
    }

    // =========================
    // Logged Out
    // =========================

    if (!session) {
        if (mobile) {
            return (
                <div className="flex flex-col gap-2">
                    <Link
                        href="/signin"
                        className="btn btn-outline w-full rounded-xl border-green-700 text-green-700 hover:border-green-700 hover:bg-green-700 hover:text-white"
                    >
                        <FiLogIn />
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signup"
                        className="btn w-full rounded-xl border-none bg-green-700 text-white hover:bg-green-800"
                    >
                        <FiUserPlus />
                        সাইন আপ
                    </Link>
                </div>
            );
        }

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
                    className="rounded-lg bg-green-700 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-green-800 hover:shadow-md"
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
                {/* User Card */}
                <div className="mb-4 rounded-2xl border border-green-100 bg-gradient-to-br from-white to-[#eef8f1] p-4 shadow-[0_8px_24px_rgba(22,101,52,0.10)]">
                    <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="rounded-full bg-white p-1 shadow-[0_4px_14px_rgba(0,0,0,0.18)] ring-1 ring-gray-200">
                                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-green-700 font-bold text-white">
                                    {session.user.image ? (
                                        <Image
                                            src={session.user.image}
                                            alt={session.user.name || "User"}
                                            width={48}
                                            height={48}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-lg">
                                            {session.user.name?.charAt(0).toUpperCase()}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Active Dot */}
                            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 shadow-sm"></span>
                        </div>

                        {/* Name / Email */}
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

                {/* Profile */}
                <Link
                    href="/profile"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 font-medium text-[#263128] transition hover:bg-green-50 hover:text-green-700"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-green-100 bg-green-50 text-green-700 shadow-sm">
                        <FiUser />
                    </div>

                    আমার প্রোফাইল
                </Link>

                {/* Sign Out */}
                <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 font-medium text-red-500 transition hover:bg-red-50"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 shadow-sm">
                        <FiLogOut />
                    </div>

                    সাইন আউট
                </button>
            </div>
        );
    }

    // =========================
    // Logged In - Desktop
    // =========================

    return (
        <div className="dropdown dropdown-end">
            {/* Profile Trigger */}
            <button
                tabIndex={0}
                type="button"
                className="
          group
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-gray-200
          bg-gradient-to-br
          from-white
          to-[#f3f8f4]
          px-3
          py-2
          shadow-[0_5px_18px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-green-200
          hover:shadow-[0_8px_24px_rgba(22,101,52,0.14)]
        "
            >
                {/* Avatar */}
                <div className="relative shrink-0">
                    <div className="rounded-full bg-white p-1 ring-1 ring-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.22)]">
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-green-700 font-bold text-white">
                            {session.user.image ? (
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name || "User"}
                                    width={40}
                                    height={40}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span>
                                    {session.user.name?.charAt(0).toUpperCase()}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Active Dot */}
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 shadow-sm"></span>
                </div>

                {/* Name */}
                <div className="hidden min-w-0 text-left lg:block">
                    <p className="max-w-[180px] truncate text-sm font-semibold text-[#263128]">
                        {session.user.name}
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-500">
                        প্রোফাইল
                    </p>
                </div>

                {/* Chevron */}
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm ring-1 ring-gray-100 transition group-hover:text-green-700">
                    <FiChevronDown className="text-sm" />
                </div>
            </button>

            {/* Dropdown */}
            <div
                tabIndex={0}
                className="
          dropdown-content
          z-50
          mt-3
          w-80
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-3
          shadow-[0_18px_45px_rgba(0,0,0,0.16)]
        "
            >
                {/* User Header */}
                <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-[#f8fcf9] to-[#eaf6ed] p-4 shadow-inner">
                    <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="rounded-full bg-white p-1 shadow-[0_4px_14px_rgba(0,0,0,0.16)] ring-1 ring-gray-200">
                                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-green-700 font-bold text-white">
                                    {session.user.image ? (
                                        <Image
                                            src={session.user.image}
                                            alt={session.user.name || "User"}
                                            width={48}
                                            height={48}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-lg">
                                            {session.user.name?.charAt(0).toUpperCase()}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Active Dot */}
                            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 shadow-sm"></span>
                        </div>

                        {/* Name / Email */}
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
                <div className="mt-3 space-y-1">
                    <Link
                        href="/profile"
                        className="flex items-center gap-3 rounded-xl px-3 py-3 font-medium text-[#263128] transition hover:bg-green-50 hover:text-green-700"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-green-100 bg-green-50 text-green-700 shadow-sm">
                            <FiUser />
                        </div>

                        আমার প্রোফাইল
                    </Link>

                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 font-medium text-red-500 transition hover:bg-red-50"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 shadow-sm">
                            <FiLogOut />
                        </div>

                        সাইন আউট
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserMenu;