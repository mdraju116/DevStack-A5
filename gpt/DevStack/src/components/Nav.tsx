import navLogo from "../assets/logo-text.png"


export interface NavProps {
    prop: string
}

export default function Nav() {

    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="container mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center py-4 font-sans">
                <img src={navLogo} alt="" />

                <ul className="flex gap-4 text-[16px] text-[#475569]">
                    <li className="text-[#db2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex gap-4 text-[#475569]">
                    <button>Sign In</button>
                    <button className="btn btn-secondary rounded-full text-white">
                        Sign Up
                    </button>
                </div>
            </div>

             <hr className=" text-[#f1f5f9]" />
        </nav>
    )
}