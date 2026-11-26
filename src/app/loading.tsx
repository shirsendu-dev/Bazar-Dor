const Loading = () => {
    return (
        <main className="min-h-screen bg-[#f3f8f4]">
            <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">

                {/* Hero Skeleton */}
                <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        {/* Hero Text */}
                        <div className="flex-1 animate-pulse">
                            <div className="h-6 w-40 rounded-full bg-gray-200"></div>

                            <div className="mt-5 h-10 w-full max-w-xl rounded-lg bg-gray-200"></div>

                            <div className="mt-3 h-10 w-4/5 max-w-lg rounded-lg bg-gray-200"></div>

                            <div className="mt-6 space-y-3">
                                <div className="h-4 w-full max-w-2xl rounded bg-gray-200"></div>

                                <div className="h-4 w-11/12 max-w-xl rounded bg-gray-200"></div>

                                <div className="h-4 w-3/4 max-w-lg rounded bg-gray-200"></div>
                            </div>

                            <div className="mt-6 h-11 w-36 rounded-xl bg-gray-200"></div>
                        </div>

                        {/* Hero Image */}
                        <div className="flex justify-center animate-pulse">
                            <div className="h-44 w-44 rounded-3xl bg-gray-200 md:h-52 md:w-52 lg:h-60 lg:w-60"></div>
                        </div>
                    </div>
                </section>

                {/* Price Increased */}
                <section className="mt-10">
                    <div className="mb-5 h-8 w-52 animate-pulse rounded-lg bg-gray-200"></div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-gray-200 bg-white p-5"
                            >
                                <div className="animate-pulse">
                                    {/* Product Top */}
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-xl bg-gray-200"></div>

                                        <div className="flex-1 space-y-2">
                                            <div className="h-5 w-32 rounded bg-gray-200"></div>

                                            <div className="h-4 w-20 rounded bg-gray-200"></div>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="mt-5 flex items-end justify-between">
                                        <div className="space-y-2">
                                            <div className="h-4 w-20 rounded bg-gray-200"></div>

                                            <div className="h-6 w-28 rounded bg-gray-200"></div>
                                        </div>

                                        <div className="h-7 w-16 rounded-full bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Price Decreased */}
                <section className="mt-10">
                    <div className="mb-5 h-8 w-52 animate-pulse rounded-lg bg-gray-200"></div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-gray-200 bg-white p-5"
                            >
                                <div className="animate-pulse">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-xl bg-gray-200"></div>

                                        <div className="flex-1 space-y-2">
                                            <div className="h-5 w-32 rounded bg-gray-200"></div>

                                            <div className="h-4 w-20 rounded bg-gray-200"></div>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex items-end justify-between">
                                        <div className="space-y-2">
                                            <div className="h-4 w-20 rounded bg-gray-200"></div>

                                            <div className="h-6 w-28 rounded bg-gray-200"></div>
                                        </div>

                                        <div className="h-7 w-16 rounded-full bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* All Products */}
                <section className="mt-12">
                    <div className="animate-pulse">
                        <div className="h-8 w-36 rounded-lg bg-gray-200"></div>

                        <div className="mt-3 h-4 w-44 rounded bg-gray-200"></div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-gray-200 bg-white p-5"
                            >
                                <div className="animate-pulse">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-xl bg-gray-200"></div>

                                        <div className="flex-1 space-y-2">
                                            <div className="h-5 w-32 rounded bg-gray-200"></div>

                                            <div className="h-4 w-20 rounded bg-gray-200"></div>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex items-end justify-between">
                                        <div className="space-y-2">
                                            <div className="h-4 w-20 rounded bg-gray-200"></div>

                                            <div className="h-6 w-28 rounded bg-gray-200"></div>
                                        </div>

                                        <div className="h-7 w-16 rounded-full bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
};

export default Loading;