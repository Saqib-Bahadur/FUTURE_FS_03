import React, { useState } from "react";
import axios from "axios";

const Membership = () => {

  const [selectedPlan, setSelectedPlan] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      name: "Silver",
      duration: "3 Months",
      price: 500,
      icon: "🥈",
      description: "Perfect for beginners starting their fitness journey.",
    },
    {
      name: "Gold",
      duration: "6 Months",
      price: 1000,
      icon: "🥇",
      description: "Our most popular plan for consistent training.",
      popular: true,
    },
    {
      name: "Diamond",
      duration: "1 Year",
      price: 1500,
      oldPrice: 2000,
      discount: "25% OFF",
      icon: "💎",
      description: "Best value for long-term fitness transformation.",
    },
  ];

  // Open membership form
  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setSubmitted(false);

    // Scroll to form
    setTimeout(() => {
      document
        .getElementById("membership-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add your backend API URL here laterconst API_URL = "https://script.google.com/macros/s/AKfycbzLHCzIRgxxtScbtdeHBzv_jkrqWsEzh4D5bhvW4YhxmP6IhIfmAJ_cTMIliQ00Z9vWww/exec";;
  // Submit form
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!selectedPlan) return;

  setLoading(true);

  const data = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,

    membership: {
      plan: selectedPlan.name,
      duration: selectedPlan.duration,
      price: selectedPlan.price,
    },
  };

  try {
    const API_URL = "https://script.google.com/macros/s/AKfycbzLHCzIRgxxtScbtdeHBzv_jkrqWsEzh4D5bhvW4YhxmP6IhIfmAJ_cTMIliQ00Z9vWww/exec";

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });

    // Google Apps Script receives the data
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error("Submission Error:", error);

    alert("Something went wrong. Please try again.");

  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="membership"
      className="scroll-mt-24 bg-zinc-950 text-white py-24 px-6 lg:px-8"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-lime-400 uppercase tracking-[4px] font-semibold text-sm mb-4">
            Membership Plans
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            CHOOSE YOUR
            <span className="text-lime-400"> PLAN.</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Choose the membership that fits your fitness goals.
            Start today and become your strongest version.
          </p>

        </div>


        {/* Membership Cards */}
        <div className="grid md:grid-cols-3 gap-7">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative bg-black rounded-3xl p-8 border transition duration-300 hover:-translate-y-2
                ${plan.popular
                  ? "border-lime-400 shadow-lg shadow-lime-400/10"
                  : "border-white/10 hover:border-lime-400/50"
                }
              `}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-5 right-5">

                  <span className="bg-lime-400 text-black text-xs font-black px-3 py-2 rounded-full">
                    MOST POPULAR
                  </span>

                </div>
              )}


              {/* Icon */}
              <div className="text-5xl mb-7">
                {plan.icon}
              </div>


              {/* Plan Name */}
              <h3 className="text-3xl font-black">
                {plan.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {plan.duration}
              </p>


              {/* Price */}
              <div className="mt-7">

                {plan.oldPrice && (
                  <div className="text-gray-600 line-through text-lg">
                    ₹{plan.oldPrice}
                  </div>
                )}

                <div className="flex items-end gap-2">

                  <span className="text-5xl font-black">
                    ₹{plan.price}
                  </span>

                </div>

                {plan.discount && (
                  <span className="inline-block mt-3 bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-sm font-bold">
                    {plan.discount}
                  </span>
                )}

              </div>


              {/* Description */}
              <p className="text-gray-500 mt-6 leading-relaxed min-h-[60px]">
                {plan.description}
              </p>


              {/* Features */}
              <div className="border-t border-white/10 mt-7 pt-7 space-y-4">

                <div className="flex gap-3 text-gray-300">
                  <span className="text-lime-400">✓</span>
                  Access to gym equipment
                </div>

                <div className="flex gap-3 text-gray-300">
                  <span className="text-lime-400">✓</span>
                  Basic workout guidance
                </div>

                <div className="flex gap-3 text-gray-300">
                  <span className="text-lime-400">✓</span>
                  Locker facility
                </div>

                <div className="flex gap-3 text-gray-300">
                  <span className="text-lime-400">✓</span>
                  Flexible workout hours
                </div>

              </div>


              {/* Choose Button */}
              <button
                onClick={() => handleChoosePlan(plan)}
                className={`w-full mt-8 py-4 rounded-xl font-bold transition duration-300
                  ${plan.popular
                    ? "bg-lime-400 text-black hover:bg-lime-300"
                    : "border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black"
                  }
                `}
              >
                Choose {plan.name}
              </button>

            </div>

          ))}

        </div>


        {/* Membership Form */}

        {selectedPlan && (

          <div
            id="membership-form"
            className="max-w-3xl mx-auto mt-20"
          >

            <div className="bg-black border border-white/10 rounded-3xl p-7 md:p-10">

              {!submitted ? (

                <>
                  {/* Form Header */}

                  <div className="mb-8">

                    <p className="text-lime-400 text-sm uppercase tracking-wider font-bold">
                      Membership Registration
                    </p>

                    <h3 className="text-3xl md:text-4xl font-black mt-2">
                      Join Our
                      <span className="text-lime-400">
                        {" "}{selectedPlan.name}
                      </span>
                      {" "}Plan
                    </h3>

                  </div>


                  {/* Selected Plan */}

                  <div className="bg-zinc-900 border border-lime-400/30 rounded-2xl p-5 mb-8">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                      <div>

                        <p className="text-gray-500 text-sm">
                          Selected Membership
                        </p>

                        <h4 className="text-xl font-bold mt-1">
                          {selectedPlan.name} Membership
                        </h4>

                        <p className="text-gray-500">
                          {selectedPlan.duration}
                        </p>

                      </div>

                      <div className="text-left sm:text-right">

                        <p className="text-gray-500 text-sm">
                          Total Price
                        </p>

                        <p className="text-lime-400 text-3xl font-black">
                          ₹{selectedPlan.price}
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* Form */}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* Name */}

                    <div>

                      <label className="block text-sm text-gray-400 mb-2">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-lime-400 transition"
                      />

                    </div>


                    {/* Email */}

                    <div>

                      <label className="block text-sm text-gray-400 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-lime-400 transition"
                      />

                    </div>


                    {/* Phone */}

                    <div>

                      <label className="block text-sm text-gray-400 mb-2">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-lime-400 transition"
                      />

                    </div>


                    {/* Message */}

                    <div>

                      <label className="block text-sm text-gray-400 mb-2">
                        Message
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us anything you would like us to know..."
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-lime-400 transition resize-none"
                      />

                    </div>


                    {/* Submit */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-lime-400 text-black py-4 rounded-xl font-black text-lg hover:bg-lime-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >

                      {loading
                        ? "Submitting..."
                        : `Confirm ${selectedPlan.name} Membership →`
                      }

                    </button>

                  </form>

                </>

              ) : (

                /* Success Message */

                <div className="text-center py-12">

                  <div className="w-20 h-20 mx-auto rounded-full bg-lime-400/10 border border-lime-400 flex items-center justify-center text-4xl">
                    ✓
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black mt-7">
                    Thank You!
                  </h3>

                  <p className="text-lime-400 text-xl font-bold mt-3">
                    Thanks for choosing us!
                  </p>

                  <p className="text-gray-400 mt-3 max-w-md mx-auto leading-relaxed">
                    Your {selectedPlan.name} membership request has been
                    received. Our team will contact you soon.
                  </p>

                  <button
                    onClick={() => {
                      setSelectedPlan(null);
                      setSubmitted(false);
                    }}
                    className="mt-8 border border-white/20 px-6 py-3 rounded-xl text-gray-300 hover:bg-white hover:text-black transition"
                  >
                    Back to Membership Plans
                  </button>

                </div>

              )}

            </div>

          </div>

        )}

      </div>

    </section>
  );
};

export default Membership;