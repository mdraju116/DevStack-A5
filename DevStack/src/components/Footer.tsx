import footerLogo from "../assets/logo-text.png"

export interface FooterProps {
    prop: string
}

export default function Footer() {
    
    return (
        <div >
            <hr className=" text-[#f1f5f9]" />

           <div className=" container mx-auto px-6 md:px-10 lg:px-16 py-8 flex justify-between items-center gap-10 ">
               
                {/* left side */}
                <div className=" space-y-4 ">
                    <img src={footerLogo} alt="" />
                    <p className="text-[#64748b]">Curated tools, technologies, and resources for developers building <br />
                    modern software.</p>

                    <div className="text-[#475569] font-semibold flex  gap-4 ">
                        <button >Github</button>
                        <button>Twitter</button>
                        <button>LinkedIn</button>
                    </div>
                </div>


                {/* right side */}
                <div className="flex gap-35">

                    <div className="space-y-3">
                        <h1 className="text-[#0f172a] font-bold ">PRODUCT</h1>
                        <div className="text-[#64748b] font-normal flex flex-col items-baseline space-y-2 ">
                            <button>Home</button>
                            <button>Technologies</button>
                            <button>Projects</button>
                        </div>
                    </div>
                    
                    <div className="space-y-3" >
                        <h1 className="text-[#0f172a] font-bold ">COMPANY</h1>
                        <div className="text-[#64748b] font-normal flex flex-col items-baseline space-y-2">
                            <button>About</button>
                            <button>Contact</button>
                            <button>Careers</button>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <h1 className="text-[#0f172a] font-bold "> LEGAL</h1>
                        <div className="text-[#64748b] font-normal flex flex-col items-baseline space-y-2">
                            <button>Privacy Policy</button>
                            <button>Terms of Service</button>
                           
                        </div>
                    </div>
                    
                    

                </div>

           </div>


            {/* copyright section */}
            <hr className=" text-[#f1f5f9] mx-24" />
            
            <div className=" text-[#94a3b8] font-normal container mx-auto px-6 md:px-10 lg:px-16 py-6 flex justify-between">
                <p className="">© 2026 Dev Stack. All rights reserved.</p>

                <div className="flex gap-6  text-[#94a3b8]">
                    <button>Privacy</button>
                    <button>Terms</button>
                </div>
            </div>

        </div>
    )
}