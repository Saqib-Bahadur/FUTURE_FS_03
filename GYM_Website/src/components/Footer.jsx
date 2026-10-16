import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >

              <div className="w-11 h-11 rounded-xl bg-lime-400 flex items-center justify-center">
                <span className="text-black font-black text-xl">
                  IP
                </span>
              </div>

              <div>
                <h2 className="font-black text-xl tracking-wide">
                  IRON<span className="text-lime-400">PULSE</span>
                </h2>

                <p className="text-gray-500 text-[9px] tracking-[3px]">
                  FITNESS
                </p>
              </div>

            </a>

            <p className="text-gray-500 leading-relaxed max-w-md mt-6">
              Build your strongest version with IronPulse Fitness.
              Train harder, stay consistent and become better every day.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-7">

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
              >
                ◎
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <a
                href="#home"
                className="text-gray-500 hover:text-lime-400 transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-500 hover:text-lime-400 transition"
              >
                About
              </a>

              <a
                href="#programs"
                className="text-gray-500 hover:text-lime-400 transition"
              >
                Programs
              </a>

              <a
                href="#membership"
                className="text-gray-500 hover:text-lime-400 transition"
              >
                Membership
              </a>

              <a
                href="#trainers"
                className="text-gray-500 hover:text-lime-400 transition"
              >
                Trainers
              </a>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-500">

              <p>
                📍 Maharashtra, India
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p className="break-all">
                ✉️ hello@ironpulsefitness.com
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-7 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 IronPulse Fitness. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Designed & Developed by{" "}
            <span className="text-lime-400 font-semibold">
              Saqib Bahadur
            </span>
          </p>

          <p className="text-gray-600 text-sm">
            Built with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;