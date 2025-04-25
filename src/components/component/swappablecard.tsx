import { useState } from "react";

const features = [
  {
    title: "Fast, Easy, and Safe",
    desc: "Experience seamless and secure banking with FinnBank.",
  },
  {
    title: "Secured Transactions",
    desc: "Your financial data is protected with state-of-the-art encryption.",
  },
  {
    title: "Financial Security",
    desc: "Rest assured with our robust financial security measures.",
  },
  {
    title: "Encrypted Personal Data",
    desc: "Your personal data is encrypted and kept private.",
  },
  {
    title: "Account Service",
    desc: "Manage your accounts effortlessly with our intuitive tools.",
  },
];

function SwappableCardSection() {
  const [centerIndex, setCenterIndex] = useState(2); // Start with 3rd card

  const getVisibleCards = () => {
    const total = features.length;
    const left = (centerIndex - 1 + total) % total;
    const right = (centerIndex + 1) % total;
    return [left, centerIndex, right];
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const visibleIndexes = getVisibleCards();

  return (
    <section
      className="relative bg-white py-36 px-6 sm:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(/top.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-blue-800 mb-16">
          Why Choose FinnBank?
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-10 bg-blue-100 hover:bg-blue-200 p-3 rounded-full shadow-md transition"
          >
            ←
          </button>

          {/* Cards */}
          <div className="flex gap-6 justify-center items-center">
            {visibleIndexes.map((i, pos) => (
              <div
                key={i}
                className={`flex flex-col items-center bg-blue-50 p-6 rounded-xl shadow-md transition-all duration-300 ${
                  pos === 1 ? "scale-105 shadow-xl bg-blue-100" : "opacity-70 scale-95"
                }`}
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <p className="text-white text-3xl font-bold">{i + 1}</p>
                </div>
                <h3 className="text-2xl font-bold mb-2">{features[i].title}</h3>
                <p className="text-gray-600 text-center">{features[i].desc}</p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-10 bg-blue-100 hover:bg-blue-200 p-3 rounded-full shadow-md transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default SwappableCardSection;
