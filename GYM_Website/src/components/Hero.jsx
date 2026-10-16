import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 lg:px-8 flex items-center">

        <div className="max-w-3xl pt-20">

          {/* Small Label */}
          <div className="inline-flex items-center gap-2 border border-lime-400/40 bg-lime-400/10 px-4 py-2 rounded-full mb-6">

            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />

            <span className="text-lime-400 text-sm font-semibold tracking-wider">
              PREMIUM FITNESS EXPERIENCE
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">

            BUILD YOUR

            <span className="block text-lime-400">
              STRONGEST
            </span>

            <span className="block">
              VERSION.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Train harder. Get stronger. Live better.
            Join IronPulse Fitness and transform your body
            with expert trainers, modern equipment and
            powerful workout programs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-9">

            <a
              href="#membership"
              className="group bg-lime-400 text-black px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-lime-300 hover:scale-105 transition duration-300"
            >
              Get Membership
              <span className="ml-2 group-hover:ml-3 transition-all">
                →
              </span>
            </a>

            <a
              href="#programs"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-lg text-center hover:bg-white hover:text-black transition duration-300"
            >
              Explore Programs
            </a>

          </div>

          {/* Statistics */}
          <div className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-white/10">

            <div>
              <h3 className="text-3xl font-black text-white">
                5+
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">
                1K+
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Active Members
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">
                15+
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Expert Trainers
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
};

export default Hero;