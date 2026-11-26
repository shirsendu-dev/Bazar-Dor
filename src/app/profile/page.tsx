"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    FiEdit3,
    FiLogOut,
    FiMail,
    FiSave,
    FiUser,
    FiX,
} from "react-icons/fi";

const ProfilePage = () => {
    const router = useRouter();

    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const {
        data: session,
        isPending,
        refetch,
    } = authClient.useSession();

    const handleUpdateProfile = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(
            formData.entries()
        ) as {
            name: string;
        };

        if (!user.name.trim()) {
            toast.error("নাম লিখুন");
            return;
        }

        const { data, error } = await authClient.updateUser({
            name: user.name,
        });

        if (error) {
            toast.error(
                error.message || "তথ্য আপডেট করা সম্ভব হয়নি"
            );
            return;
        }

        if (data) {
            toast.success("Info updated successfully");

            await refetch();

            setShowUpdateForm(false);

            router.refresh();
        }
    };

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
            <main className="min-h-screen bg-[#f3f8f4]">
                <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
                    <div className="animate-pulse space-y-6">
                        <div className="h-10 w-48 rounded-lg bg-gray-200"></div>

                        <div className="h-36 rounded-3xl bg-white"></div>

                        <div className="h-64 rounded-3xl bg-white"></div>
                    </div>
                </div>
            </main>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <main className="min-h-screen bg-[#f3f8f4]">
            <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">

                {/* Page Heading */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-medium text-green-700">
                        অ্যাকাউন্ট
                    </p>

                    <h1 className="text-3xl font-bold text-[#263128] md:text-4xl">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-2 text-gray-600">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন ও
                        আপডেট করুন।
                    </p>
                </div>

                {/* Profile Card */}
                <section className="relative overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-white via-white to-[#edf8f0] p-5 shadow-[0_14px_40px_rgba(22,101,52,0.10)] sm:p-6 md:p-8">

                    {/* Background Decoration */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-100/60 blur-2xl"></div>

                    <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        {/* User Info */}
                        <div className="flex items-center gap-4">

                            {/* Avatar */}
                            <div className="relative shrink-0">
                                <div className="rounded-full bg-white p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.18)] ring-1 ring-gray-200">

                                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-green-700 text-xl font-bold text-white md:h-20 md:w-20">

                                        {session.user.image ? (
                                            <Image
                                                src={session.user.image}
                                                alt={session.user.name || "User"}
                                                width={80}
                                                height={80}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-2xl">
                                                {session.user.name
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </span>
                                        )}

                                    </div>
                                </div>

                                {/* Active Dot */}
                                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-[3px] border-white bg-green-500 shadow-sm"></span>
                            </div>

                            {/* Name & Email */}
                            <div className="min-w-0">
                                <h2 className="truncate text-xl font-bold text-[#263128] md:text-2xl">
                                    {session.user.name}
                                </h2>

                                <div className="mt-2 flex items-center gap-2 text-gray-500">
                                    <FiMail className="shrink-0" />

                                    <p className="truncate">
                                        {session.user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sign Out */}
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 font-semibold text-red-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50 hover:shadow-md"
                        >
                            <FiLogOut />
                            সাইন আউট
                        </button>
                    </div>
                </section>

                {/* Profile Information */}
                <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_8px_28px_rgba(0,0,0,0.05)] sm:p-6 md:p-8">

                    {/* Heading */}
                    <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-[#263128]">
                                প্রোফাইল তথ্য
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                আপনার অ্যাকাউন্টের বর্তমান তথ্য।
                            </p>
                        </div>

                        {/* Update Button */}
                        {!showUpdateForm && (
                            <button
                                type="button"
                                onClick={() => setShowUpdateForm(true)}
                                className="flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 font-semibold text-green-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:text-white hover:shadow-md"
                            >
                                <FiEdit3 />
                                তথ্য আপডেট করুন
                            </button>
                        )}
                    </div>

                    {/* Current Information */}
                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">

                        {/* Name */}
                        <div className="rounded-2xl border border-gray-100 bg-[#f8faf8] p-4 sm:p-5">
                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-700 shadow-sm">
                                    <FiUser />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        নাম
                                    </p>

                                    <p className="mt-1 font-semibold text-[#263128]">
                                        {session.user.name}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Email */}
                        <div className="rounded-2xl border border-gray-100 bg-[#f8faf8] p-4 sm:p-5">
                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-700 shadow-sm">
                                    <FiMail />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm text-gray-500">
                                        ইমেইল
                                    </p>

                                    <p className="mt-1 break-all font-semibold text-[#263128]">
                                        {session.user.email}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Update Form */}
                    {showUpdateForm && (
                        <div className="mt-6 rounded-2xl border border-green-100 bg-[#f7fbf8] p-5 shadow-inner sm:p-6">

                            {/* Form Heading */}
                            <div className="mb-5 flex items-center justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-[#263128]">
                                        তথ্য পরিবর্তন করুন
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        আপনার নতুন নাম লিখে আপডেট করুন।
                                    </p>
                                </div>

                                {/* Close */}
                                <button
                                    type="button"
                                    onClick={() => setShowUpdateForm(false)}
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:bg-gray-100 hover:text-gray-800"
                                >
                                    <FiX />
                                </button>
                            </div>

                            {/* Form */}
                            <form
                                onSubmit={handleUpdateProfile}
                                className="space-y-5"
                            >

                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block font-semibold text-[#263128]"
                                    >
                                        নাম
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        defaultValue={session.user.name}
                                        required
                                        className="input h-12 w-full rounded-xl border border-gray-300 bg-white text-[#263128] placeholder:text-gray-400 focus:border-green-700 focus:outline-none"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">

                                    {/* Cancel */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowUpdateForm(false)
                                        }
                                        className="btn h-11 rounded-xl border border-gray-300 bg-white px-6 text-[#263128] shadow-none hover:bg-gray-100"
                                    >
                                        বাতিল
                                    </button>

                                    {/* Save */}
                                    <button
                                        type="submit"
                                        className="btn h-11 rounded-xl border-none bg-green-700 px-6 font-semibold text-white shadow-[0_4px_12px_rgba(22,101,52,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-[0_7px_18px_rgba(22,101,52,0.28)]"
                                    >
                                        <FiSave />
                                        সংরক্ষণ করুন
                                    </button>

                                </div>
                            </form>
                        </div>
                    )}

                </section>
            </div>
        </main>
    );
};

export default ProfilePage;