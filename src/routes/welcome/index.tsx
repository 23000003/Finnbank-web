import { createFileRoute, Link } from "@tanstack/react-router";
import LandingPageImage from "../../assets/landingpageimage.png"; // Adjust the path as necessary
// import { useState } from "react";

// const features = [
//   {
//     title: "Fast, Easy, and Safe",
//     desc: "Experience seamless and secure banking with FinnBank.",
//   },
//   {
//     title: "Secured Transactions",
//     desc: "Your financial data is protected with state-of-the-art encryption.",
//   },
//   {
//     title: "Financial Security",
//     desc: "Rest assured with our robust financial security measures.",
//   },
//   {
//     title: "Encrypted Personal Data",
//     desc: "Your personal data is encrypted and kept private.",
//   },
//   {
//     title: "Account Service",
//     desc: "Manage your accounts effortlessly with our intuitive tools.",
//   },
// ];

export const Route = createFileRoute("/welcome/")({
  component: RouteComponent,
});

function RouteComponent() {
  // const [currentIndex, setCurrentIndex] = useState(2); // Start with the 3rd item

  // const handlePrev = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  // };

  // const getVisibleIndices = () => {
  //   const total = features.length;
  //   const prev = (currentIndex - 1 + total) % total;
  //   const next = (currentIndex + 1) % total;
  //   return [prev, currentIndex, next];
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-blue-900">
      {/* Hero Section */}
      <section
        className="relative bg-white text-black py-20 px-8 overflow-hidden"
        style={{
          backgroundImage: `url(/bottom.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-8xl font-bold mb-4">Welcome to FinnBank!</h1>
            <h2 className="text-3xl font-bold mb-4">Where convenience meets security</h2>
            <p className="text-lg mb-9">
              Experience seamless online banking with Finnbank. Join us today and take control of
              your finances.
            </p>
            <Link
              to="/welcome/signup"
              className="px-6 py-4 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
            >
              Apply Now
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={LandingPageImage} alt="Landing Page" />
          </div>
        </div>
      </section>

      <div className="bg-[#A3B9EF] p-4">
        <div className="grid gap-12 md:grid-cols-3 text-center px-6 max-w-7xl mx-auto">
          {[
            { value: "$2.5B+", label: "Transactions Processed" },
            { value: "99.99%", label: "Uptime Guarantee" },
            { value: "150+", label: "Countries Supported" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl font-extrabold text-blue-700 mb-2">{stat.value}</div>
              <div className="text-lg text-blue-800 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section
        className="relative bg-white text-black pt-20 px-8 overflow-hidden"
        style={{
          backgroundImage: `url(/top.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]"></div> */}
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <h1 className="max-w-4xl text-5xl sm:text-6xl mt-50 md:text-7xl font-extrabold tracking-tight text-blue-950 leading-tight">
            Banking Reimagined for the <span className="text-blue-600">Digital Age</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-blue-700/80 font-medium">
            Experience the future of finance with our cutting-edge banking platform. Secure, fast,
            and designed for tomorrow's economy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
            <Link
              to="/welcome/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 px-8 rounded-xl shadow-md flex items-center justify-center transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/welcome/signup"
              className="border border-blue-500 text-blue-600 hover:bg-blue-100 font-semibold h-12 px-8 rounded-xl shadow-sm flex items-center justify-center transition duration-300"
            >
              Learn More
              <img
                src="/placeholder.svg?height=16&width=16"
                alt="Arrow right"
                className="ml-2 h-4 w-4"
              />
            </Link>
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-blue-800 mt-50 mb-16">Why Choose FinnBank ?</h2>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              className="text-blue-600 hover:text-blue-800 text-3xl font-bold px-4"
              aria-label="Previous"
            >
              ←
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">
              {getVisibleIndices().map((i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                    i === currentIndex ? "scale-105 bg-blue-100" : "opacity-90"
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

            <button
              onClick={handleNext}
              className="text-blue-600 hover:text-blue-800 text-3xl font-bold px-4"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-5xl sm:text-6xl font-extrabold text-blue-800 mt-50 mb-16">
            Why Choose FinnBank
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                {/* Replace with an actual icon */}
                <p className="text-white text-3xl font-bold">1</p>
              </div>
              <h3 className="text-2xl font-bold mb-2">Fast, Easy, and Safe</h3>
              <p className="text-gray-600 text-center">
                Experience seamless and secure banking with FinnBank.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                {/* Replace with an actual icon */}
                <p className="text-white text-3xl font-bold">2</p>
              </div>
              <h3 className="text-2xl font-bold mb-2">Secured Transactions</h3>
              <p className="text-gray-600 text-center">
                Your financial data is protected with state-of-the-art encryption.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                {/* Replace with an actual icon */}
                <p className="text-white text-3xl font-bold">3</p>
              </div>
              <h3 className="text-2xl font-bold mb-2">Financial Security</h3>
              <p className="text-gray-600 text-center">
                Rest assured with our robust financial security measures.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                {/* Replace with an actual icon */}
                <p className="text-white text-3xl font-bold">4</p>
              </div>
              <h3 className="text-2xl font-bold mb-2">Encrypted Personal Data</h3>
              <p className="text-gray-600 text-center">
                Your personal data is encrypted and kept private.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                {/* Replace with an actual icon */}
                <p className="text-white text-3xl font-bold">5</p>
              </div>
              <h3 className="text-2xl font-bold mb-2">Account Service</h3>
              <p className="text-gray-600 text-center">
                Manage your accounts effortlessly with our intuitive tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}

      {/* middle section */}

      {/* Statistics Section */}

      {/* Bottom Section */}
      <section
        className="relative bg-white text-black py-40 px-8 overflow-hidden"
        // style={{
        //   backgroundImage: `url(/blob-scene-haikei2.svg)`, //repalce
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={LandingPageImage}
              alt="Additional Section Image"
              className="w-2/4 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-right">
            <h2 className="text-6xl font-bold mb-4">About US</h2>
            <p className="text-lg mb-9 text-justify">
              FinnBank delivers seamless digital banking with advanced security, ensuring fast
              transactions and reliable financial management anytime, anywhere. Built on a robust
              microservices architecture, FinnBank offers Account Services for account management
              and verification, Transaction Services for secure fund transfers and payments,
              Statement Services for generating detailed financial records, Bank Card Services for
              issuing and managing virtual and physical cards, and Notification Services for
              real-time alerts on transactions and security events. Designed for efficiency and
              reliability, FinnBank provides a secure and streamlined banking experience.
            </p>
            <Link
              to="/welcome/signup"
              className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
