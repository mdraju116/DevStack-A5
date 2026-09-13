import heroIcon from "../assets/banner-stack.png"

export interface BannerProps {
    prop: string
}

export default function Banner() {

    return (
        <div className="flex container mx-auto mt-12 px-6 md:px-10 lg:px-16 py-4 items-center justify-between">

            {/* left side */}
            <div className="flex flex-col gap-6">
                <h1 className="font-bold font-inter text-4xl">
                    Build Your Ideal <br />
                    <span className="bg-linear-to-r from-[#fa4f2d] to-purple-700 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="text-[#475569] font-400">
                    Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.
                </p>

                <div className="flex gap-4">
                    <button className="bg-linear-to-r from-[#f76f21] to-[#ed4a94] text-white px-6 py-3 rounded-xl">
                        Explore Technologies
                    </button>

                    <button className="bg-white text-black border border-gray-200 px-10 py-3 rounded-xl">
                        Learn More
                    </button>
                </div>
            </div>

            {/* right side */}
            <div>
                <img src={heroIcon} alt="" />
            </div>

        </div>
    )
}