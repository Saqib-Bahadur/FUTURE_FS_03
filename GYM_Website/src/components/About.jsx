import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-zinc-950 text-white py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-16">

          <p className="text-lime-400 uppercase tracking-[4px] font-semibold text-sm mb-4">
            About IronPulse
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            MORE THAN A
            <span className="text-lime-400"> GYM.</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            IronPulse Fitness is built for people who are serious about
            becoming stronger, healthier and more confident. We combine
            modern equipment, expert guidance and a motivating environment
            to help you reach your fitness goals.
          </p>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
              alt="Gym workout"
              className="w-full h-[500px] object-cover rounded-3xl"
            />

            {/* Experience Card */}
            <div className="absolute bottom-6 right-6 bg-lime-400 text-black p-6 rounded-2xl">

              <h3 className="text-4xl font-black">
                5+
              </h3>

              <p className="font-bold">
                Years of Excellence
              </p>

            </div>

          </div>

          {/* Text */}
          <div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Your Goals.
              <span className="text-lime-400"> Our Mission.</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Whether you are starting your fitness journey or looking to
              take your performance to the next level, IronPulse provides
              everything you need under one roof.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              From strength training and cardio to functional workouts,
              our programs are designed for beginners, athletes and
              everyone in between.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div className="border border-white/10 p-5 rounded-2xl hover:border-lime-400/50 transition">
                <div className="text-2xl mb-3">🏋️</div>

                <h4 className="font-bold text-lg">
                  Modern Equipment
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  Premium machines and free weights.
                </p>
              </div>

              <div className="border border-white/10 p-5 rounded-2xl hover:border-lime-400/50 transition">
                <div className="text-2xl mb-3">🔥</div>

                <h4 className="font-bold text-lg">
                  Expert Trainers
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  Professional guidance for better results.
                </p>
              </div>

              <div className="border border-white/10 p-5 rounded-2xl hover:border-lime-400/50 transition">
                <div className="text-2xl mb-3">⚡</div>

                <h4 className="font-bold text-lg">
                  High Energy
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  A motivating environment every day.
                </p>
              </div>

              <div className="border border-white/10 p-5 rounded-2xl hover:border-lime-400/50 transition">
                <div className="text-2xl mb-3">🎯</div>

                <h4 className="font-bold text-lg">
                  Goal Focused
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  Training designed around your goals.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;