import { createFileRoute, Link } from "@tanstack/react-router";
import LandingPageImage from "../../assets/landingpageimage.png"; // Adjust the path as necessary

export const Route = createFileRoute("/welcome/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-gray-100 text-black py-30 px-8 overflow-hidden"
        style={{
          backgroundImage: `url(/bottom.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-8xl font-bold mb-4">Welcome to FinnBank!</h1>
            <h2 className="text-3xl font-bold mb-4">Where convenience meets security</h2>
            <p className="text-lg mb-9">
              Experience seamless online banking with Finnbank. Join us today and take control of
              your finances.
            </p>
            {/* changecolor red ro somerhing more fitting */}
            <Link
              to="/welcome/signup"
              className="px-6 py-4 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
            >
              Apply Now
            </Link>
          </div>

          {/* placeholder image */}
          <div className="md:w-1/2 flex justify-center">
            <img src={LandingPageImage} alt="Landing Page" />
          </div>
        </div>
      </section>

      {/* bottom section */}
      {/* middle section */}
      <section
        className="relative bg-gray-100 text-black py-40 px-8 overflow-hidden"
        style={{
          backgroundImage: `url(/top.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-6xl font-bold text-gray-800 mb-12">Why Choose FinnBank</h2>

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
      <section
        className="relative bg-gray-100 text-black py-40 px-8 overflow-hidden"
        style={{
          backgroundImage: `url(/blob-scene-haikei3.svg)`, //repalce
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={"/react.svg"} // Replace
              alt="Additional Section Image"
              className="w-2/4 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-right">
            <h2 className="text-6xl font-bold mb-4">About US</h2>
            <p className="text-lg mb-9">
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
