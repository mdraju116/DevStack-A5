
import navLogo from "../assets/logo-text.png"

export default function Nav() {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">

                {/* Desktop Navbar */}
                <div className="hidden md:flex items-center justify-between py-4">

                    {/* Logo */}
                    <div className="shrink-0">
                        <img
                            src={navLogo}
                            alt="Dev Stack"
                            className="w-auto h-10"
                        />
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-4 lg:gap-6 text-[16px] text-[#475569]">
                        <li className="text-[#db2777]">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3 lg:gap-4 text-[#475569]">
                        <button className="whitespace-nowrap">
                            Sign In
                        </button>

                        {/* <button className="bg-linear-to-r from-[#f76f21] to-[#ed4a94] text-white px-5 py-2 rounded-full whitespace-nowrap">
                            Sign Up
                        </button> */}
                        <button className="brand-gradient text-white px-5 py-2 rounded-full whitespace-nowrap">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden flex items-center justify-between py-4">

                    {/* Hamburger */}
                    <button
                        className="text-2xl text-[#475569]"
                        aria-label="Open menu"
                    >
                        ☰
                    </button>

                    {/* Center Logo */}
                    <img
                        src={navLogo}
                        alt="Dev Stack"
                        className="h-9 w-auto"
                    />

                    {/* Mobile Auth Buttons */}
                    <div className="flex items-center gap-2 text-sm">
                        <button className="text-[#475569] whitespace-nowrap">
                            Sign In
                        </button>

                        {/* <button className="bg-linear-to-r from-[#f76f21] to-[#ed4a94] text-white px-3 py-1.5 rounded-full whitespace-nowrap">
                            Sign Up
                        </button> */}
                        <button className="brand-gradient text-white px-3 py-1.5 rounded-full whitespace-nowrap">
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>

            <hr className="border-[#f1f5f9]" />
        </nav>
    )
}

