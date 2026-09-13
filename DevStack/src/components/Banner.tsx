
import heroIcon from "../assets/banner-stack.png"

export default function Banner() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 mt-8 md:mt-12">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 py-6 md:py-10">

                {/* Left Side */}
                <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6 text-center md:text-left">

                    <h1 className="font-bold font-inter text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        Build Your Ideal{" "}
                        {/* <span className="block bg-linear-to-r from-[#fa4f2d] to-purple-700 bg-clip-text text-transparent">
                            Development Stack
                        </span> */}
                        <span className="block brand-heading">
                            Development Stack
                        </span>

                    </h1>

                    <p className="text-[#475569] leading-7 max-w-xl mx-auto md:mx-0">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

                        {/* <button className="bg-linear-to-r from-[#f76f21] to-[#ed4a94] text-white px-6 py-3 rounded-xl">
                            Explore Technologies
                        </button> */}
                        <button className="brand-gradient text-white px-6 py-3 rounded-xl">
                            Explore Technologies
                        </button>


                        <button className="bg-white text-black border border-gray-200 px-8 sm:px-10 py-3 rounded-xl">
                            Learn More
                        </button>

                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={heroIcon}
                        alt="Development stack illustration"
                        className="w-full max-w-md lg:max-w-lg h-auto"
                    />
                </div>

            </div>
        </section>
    )
}

