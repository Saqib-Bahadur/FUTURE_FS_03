import React from "react";

const trainers = [
  {
    name: "Alex Morgan",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sarah Wilson",
    role: "Fitness Coach",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Daniel Carter",
    role: "Personal Trainer",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85",
  },
];

const Trainers = () => {
  return (
    <section
      id="trainers"
      className="scroll-mt-24 bg-zinc-950 text-white py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-lime-400 uppercase tracking-[4px] font-semibold text-sm mb-4">
            Meet Our Team
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            TRAIN WITH THE
            <span className="text-lime-400"> BEST.</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Our experienced trainers are here to guide you, motivate you
            and help you achieve measurable results.
          </p>

        </div>

        {/* Trainers */}
        <div className="grid md:grid-cols-3 gap-8">

          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group"
            >

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl">

                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Trainer Info */}
                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <p className="text-lime-400 text-sm font-semibold uppercase tracking-wider">
                    {trainer.role}
                  </p>

                  <h3 className="text-2xl font-bold mt-1">
                    {trainer.name}
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Trainers;