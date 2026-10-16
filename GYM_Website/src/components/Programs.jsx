import React from "react";

const programs = [
  {
    number: "01",
    title: "Strength Training",
    description:
      "Build muscle, increase strength and improve your overall physical performance.",
    icon: "🏋️",
  },
  {
    number: "02",
    title: "Weight Loss",
    description:
      "Burn calories and develop healthier habits with structured training programs.",
    icon: "🔥",
  },
  {
    number: "03",
    title: "Personal Training",
    description:
      "Get one-on-one guidance from experienced trainers focused on your goals.",
    icon: "🎯",
  },
  {
    number: "04",
    title: "Functional Fitness",
    description:
      "Improve mobility, balance, endurance and strength through functional workouts.",
    icon: "⚡",
  },
  {
    number: "05",
    title: "Cardio Training",
    description:
      "Improve cardiovascular health and stamina with effective cardio sessions.",
    icon: "🏃",
  },
  {
    number: "06",
    title: "Muscle Building",
    description:
      "Follow structured workouts designed to support lean muscle growth.",
    icon: "💪",
  },
];

const Programs = () => {
  return (
    <section
      id="programs"
      className="scroll-mt-24 bg-zinc-950 text-white py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div>

            <p className="text-lime-400 uppercase tracking-[4px] font-semibold text-sm mb-4">
              Our Programs
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              TRAIN
              <span className="text-lime-400"> SMARTER.</span>
            </h2>

          </div>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            Choose a program that matches your goals. Our training options
            are designed to help you become stronger, fitter and healthier.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {programs.map((program) => (
            <div
              key={program.number}
              className="group relative bg-black border border-white/10 rounded-3xl p-7 hover:border-lime-400/60 transition duration-300 hover:-translate-y-2"
            >

              {/* Number */}
              <div className="flex items-center justify-between mb-10">

                <span className="text-gray-600 font-bold text-sm">
                  {program.number}
                </span>

                <span className="text-4xl">
                  {program.icon}
                </span>

              </div>

              <h3 className="text-2xl font-bold mb-4">
                {program.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-7">
                {program.description}
              </p>

              <a
                href="#contact"
                className="text-lime-400 font-semibold group-hover:text-lime-300"
              >
                Learn More →
              </a>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-7 right-7 h-[2px] bg-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Programs;