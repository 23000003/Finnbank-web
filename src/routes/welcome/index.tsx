import { createFileRoute, Link } from "@tanstack/react-router";
import LandingPageImage from "../../assets/landingpageimage.png"; // Adjust the path as necessary
import { motion } from "framer-motion";

export const Route = createFileRoute("/welcome/")({
  component: RouteComponent,
});

function RouteComponent() {
  const fadeInUp = (delay = 0) => ({
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
        delay: delay,
      },
    },
  });

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
          height: "100vh",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-center md:text-left space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(0.2)}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight text-blue-900">
              Finnbank <span className="text-blue-600">.</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700">
              Where convenience meets security
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-xl">
              Experience seamless online banking with Finnbank. Join us today and take full control
              of your financial future—fast, secure, and always within reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Link
                to="/welcome/signup"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Apply Now
              </Link>
              <Link
                to="/welcome/learnmore"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold rounded-lg shadow-sm transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(0.4)}
          >
            <motion.img
              src={LandingPageImage}
              alt="Landing Page"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>
      <div
        className="bg-[#A3B9EF] p-4"
        style={{
          backgroundImage: `url(./top.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "45vh",
        }}
      >
        <div className="grid gap-12 md:grid-cols-3 text-center px-6 max-w-7xl mx-auto">
          {[
            { value: "$2.5B+", label: "Transactions Processed" },
            { value: "99.99%", label: "Uptime Guarantee" },
            { value: "150+", label: "Countries Supported" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl duration-400 cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.2 + index * 0.2)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-5xl font-extrabold text-blue-700 mb-2">{stat.value}</div>
              <div className="text-lg text-blue-800 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="relative bg-white text-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.1)}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
                Why Choose Finnbank
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.2)}
            >
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with financial expertise to deliver exceptional
                service
              </p>
            </motion.div>
          </div>
          {/* Static Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {[
              {
                title: "Fast, Easy, and Safe",
                desc: "Experience seamless and secure banking with Finnbank.",
                icon: "⚡",
              },
              {
                title: "Secured Transactions",
                desc: "Your financial data is protected with state-of-the-art encryption.",
                icon: "🔒",
              },
              {
                title: "Financial Security",
                desc: "Rest assured with our robust financial security measures.",
                icon: "🛡️",
              },
              {
                title: "Encrypted Personal Data",
                desc: "Your personal data is encrypted and kept private.",
                icon: "📝",
              },
              {
                title: "Account Service",
                desc: "Manage your accounts effortlessly with our intuitive tools.",
                icon: "💳",
              },
              {
                title: "User-Friendly Interface",
                desc: "Navigate our platform with ease, designed for all users.",
                icon: "🖥️",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center cursor-pointer p-8 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp(0.2 + index * 0.2)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}

      {/* middle section */}

      {/* Statistics Section */}

      {/* About Section */}
      <section className="relative bg-gray-50 text-black py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 flex justify-center cursor-pointer duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(0.1)}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={LandingPageImage}
              alt="About Finnbank"
              className="w-full max-w-md rounded-xl shadow-2xl border-8 border-white"
            />
          </motion.div>
          <div className="md:w-1/2 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.2)}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800">About Finnbank</h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.3)}
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Finnbank delivers seamless digital banking with advanced security, ensuring fast
                transactions and reliable financial management anytime, anywhere. Built on a robust
                microservices architecture, Finnbank offers Account Services for account management
                and verification, Transaction Services for secure fund transfers and payments,
                Statement Services for generating detailed financial records, Bank Card Services for
                issuing and managing virtual and physical cards, and Notification Services for
                real-time alerts on transactions and security events. Designed for efficiency and
                reliability, Finnbank provides a secure and streamlined banking experience.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.3)}
            >
              <Link
                to="/welcome/signup"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
              >
                Discover More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
