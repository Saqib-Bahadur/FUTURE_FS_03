import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Membership", id: "membership" },
    { name: "Trainers", id: "trainers" },
    { name: "Contact", id: "contact" },
  ];

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom =
            sectionTop + section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            currentSection = item.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-18">

          {/* LOGO */}
          <button
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-lime-400 flex items-center justify-center">
              <span className="text-black font-black text-xl">
                IP
              </span>
            </div>

            <div className="text-left">
              <h1 className="text-white font-black text-xl tracking-wide">
                IRON<span className="text-lime-400">PULSE</span>
              </h1>

              <p className="text-gray-400 text-[10px] tracking-[3px]">
                FITNESS
              </p>
            </div>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`relative py-2 font-medium transition duration-300 ${
                    isActive
                      ? "text-lime-400"
                      : "text-gray-300 hover:text-lime-400"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-lime-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}

          </div>

          {/* JOIN NOW */}
          <button
            onClick={() => handleNavigation("membership")}
            className="hidden md:block bg-lime-400 text-black px-5 py-3 rounded-full font-bold hover:bg-lime-300 hover:scale-105 transition"
          >
            Join Now
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden pb-6">

            <div className="flex flex-col gap-5 pt-5">

              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`text-left font-medium transition ${
                      isActive
                        ? "text-lime-400"
                        : "text-gray-300 hover:text-lime-400"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}

              <button
                onClick={() => handleNavigation("membership")}
                className="bg-lime-400 text-black text-center px-5 py-3 rounded-full font-bold"
              >
                Join Now
              </button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;