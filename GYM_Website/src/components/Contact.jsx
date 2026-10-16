import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-zinc-950 text-white py-24 px-6 lg:px-8"
    >

      <div className="max-w-7xl mx-auto">

        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <p className="text-lime-400 uppercase tracking-[4px] font-semibold text-sm mb-4">
                Get In Touch
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                LET'S BUILD YOUR
                <span className="text-lime-400">
                  {" "}STRONGEST
                </span>
                {" "}SELF.
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mt-6 max-w-xl">
                Have questions about IronPulse Fitness?
                Our team is always ready to help you choose
                the right fitness program and membership.
              </p>

              <a
                href="#membership"
                className="inline-block mt-8 bg-lime-400 text-black px-8 py-4 rounded-full font-bold hover:bg-lime-300 hover:scale-105 transition"
              >
                View Membership Plans →
              </a>

            </div>


            {/* Right */}

            <div className="space-y-5">

              <div className="flex gap-5 p-6 border border-white/10 rounded-2xl">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-lime-400/10 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Visit Us
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Main Road, Fitness Avenue
                    <br />
                    Maharashtra, India
                  </p>
                </div>

              </div>


              <div className="flex gap-5 p-6 border border-white/10 rounded-2xl">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-lime-400/10 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Call Us
                  </h3>

                  <p className="text-gray-500 mt-1">
                    +91 98765 43210
                  </p>
                </div>

              </div>


              <div className="flex gap-5 p-6 border border-white/10 rounded-2xl">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-lime-400/10 flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-500 mt-1">
                    saqib@ironpulsefitness.com
                  </p>
                </div>

              </div>


              <div className="flex gap-5 p-6 border border-white/10 rounded-2xl">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-lime-400/10 flex items-center justify-center text-2xl">
                  🕐
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Opening Hours
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Monday - Sunday
                    <br />
                    5:00 AM - 11:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;