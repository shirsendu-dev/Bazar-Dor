"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.Target);

        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        };

        if (user.password.length < 8) {
            toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
            return;
        }

        if (user.password !== user.confirmPassword) {
            toast.error("পাসওয়ার্ড মিলছে না");
            return;
        }

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/",
        });

        if (error) {
            toast.error(
                error.message || "অ্যাকাউন্ট তৈরি করা সম্ভব হয়নি"
            );
            return;
        }

        if (data) {
            toast.success("আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে");
            router.push("/");
        }
    };

    const handleGoogleSignin = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(
                error.message || "Google দিয়ে সাইন ইন করা সম্ভব হয়নি"
            );
        }
    };

    const handleGithubSignin = async () => {
        const { error } = await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });

        if (error) {
            toast.error(
                error.message || "GitHub দিয়ে সাইন ইন করা সম্ভব হয়নি"
            );
        }
    };

    return (
        <main className="bg-[#f3f8f4] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#263128]">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="text-gray-600 mt-2">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </div>

                {/* Sign Up Card */}
                <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">

                    {/* Sign Up Form */}
                    <form onSubmit={onSubmit} className="space-y-5">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 font-semibold text-[#263128]"
                            >
                                নাম
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="যেমন: রহিম উদ্দিন"
                                autoComplete="name"
                                required
                                className="input w-full h-12 rounded-xl border border-gray-300 bg-white text-[#263128] placeholder:text-gray-400 focus:border-green-700 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 font-semibold text-[#263128]"
                            >
                                ইমেইল
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                                className="input w-full h-12 rounded-xl border border-gray-300 bg-white text-[#263128] placeholder:text-gray-400 focus:border-green-700 focus:outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 font-semibold text-[#263128]"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                autoComplete="new-password"
                                required
                                className="input w-full h-12 rounded-xl border border-gray-300 bg-white text-[#263128] placeholder:text-gray-400 focus:border-green-700 focus:outline-none"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block mb-2 font-semibold text-[#263128]"
                            >
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>

                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="আবার লিখুন"
                                autoComplete="new-password"
                                required
                                className="input w-full h-12 rounded-xl border border-gray-300 bg-white text-[#263128] placeholder:text-gray-400 focus:border-green-700 focus:outline-none"
                            />
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="btn w-full h-12 bg-green-700 text-white border-none rounded-xl text-base font-semibold hover:bg-green-800"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="h-px bg-gray-200 flex-1"></div>

                        <span className="text-sm text-gray-500">
                            অথবা
                        </span>

                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    {/* Social Authentication */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        {/* Google */}
                        <button
                            type="button"
                            onClick={handleGoogleSignin}
                            className="btn h-12 bg-white border border-gray-300 rounded-xl text-[#263128] hover:bg-gray-50"
                        >
                            <FcGoogle className="text-xl shrink-0" />

                            <span className="text-sm whitespace-nowrap">
                                Google দিয়ে চালিয়ে যান
                            </span>
                        </button>

                        {/* GitHub */}
                        <button
                            type="button"
                            onClick={handleGithubSignin}
                            className="btn h-12 bg-white border border-gray-300 rounded-xl text-[#263128] hover:bg-gray-50"
                        >
                            <FaGithub className="text-xl shrink-0" />

                            <span className="text-sm whitespace-nowrap">
                                GitHub দিয়ে চালিয়ে যান
                            </span>
                        </button>
                    </div>

                    {/* Sign In Link */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        অ্যাকাউন্ট আছে?{" "}

                        <Link
                            href="/signin"
                            className="text-green-700 font-semibold hover:underline"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>
                </div>

                {/* Back Home */}
                <div className="text-center mt-7">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-green-700 transition"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default SignUpPage;