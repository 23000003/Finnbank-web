import { Link } from "@tanstack/react-router";

export default function LandingFooter() {
  return (
    <section className="bg-blue-500 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience modern banking?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust FinnBank with their finances.
        </p>
        <Link
          to="/welcome/signup"
          className="inline-block px-10 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-lg shadow-lg hover:shadow-xl transition text-lg"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
