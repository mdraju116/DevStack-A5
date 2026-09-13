
import footerLogo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="mt-10">
      <hr className="border-[#f1f5f9]" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Left side */}
          <div className="space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src={footerLogo}
              alt="Dev Stack"
              className="w-auto"
            />

            <p className="text-[#64748b] max-w-md leading-6">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="text-[#475569] font-semibold flex gap-5">
              <button>Github</button>
              <button>Twitter</button>
              <button>LinkedIn</button>
            </div>
          </div>

          {/* Right side - hidden on mobile */}
          <div className="hidden lg:grid grid-cols-3 gap-10 sm:gap-16 lg:gap-24">
            <div className="space-y-3">
              <h2 className="text-[#0f172a] font-bold">PRODUCT</h2>

              <div className="text-[#64748b] flex flex-col items-start space-y-2">
                <button>Home</button>
                <button>Technologies</button>
                <button>Projects</button>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#0f172a] font-bold">COMPANY</h2>

              <div className="text-[#64748b] flex flex-col items-start space-y-2">
                <button>About</button>
                <button>Contact</button>
                <button>Careers</button>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#0f172a] font-bold">LEGAL</h2>

              <div className="text-[#64748b] flex flex-col items-start space-y-2">
                <button>Privacy Policy</button>
                <button>Terms of Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <hr className="border-[#f1f5f9] mx-24" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#94a3b8] text-center">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-6">
          <button>Privacy</button>
          <button>Terms</button>
        </div>
      </div>
    </footer>
  );
}
