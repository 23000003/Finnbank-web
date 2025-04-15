import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/welcome/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-500 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">testk</h1>
            <h2 className="text-2xl font-bold mb-4">Where convenience meets security</h2>
            <p className="text-lg mb-6">
              Experience seamless online banking with Finnbank. Join us today and take control of
              your finances.
            </p>
            <Link
              to="/welcome/signup"
              className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
            >
              Apply Now
            </Link>
          </div>

          {/* placeholder image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-3/4 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* bottom section */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Our Features</h2>
          <div className="flex flex-col space-y-4">
            <Link
              to="/welcome/signin"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
            >
              Go to Sign In
            </Link>
            <Link
              to="/home/dashboard"
              className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-600 transition"
            >
              Go to Protected Route (Dashboard)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
