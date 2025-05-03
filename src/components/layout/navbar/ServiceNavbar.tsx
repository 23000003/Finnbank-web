import { Link, useLocation } from "@tanstack/react-router";

type NavLinks = "transfer" | "pay-bills";

const ServiceNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-200 text-black h-16 flex items-center justify-center">
      <div className="flex gap-4">
        {["transfer", "pay-bills"].map((link) => {
          const match = location.pathname.includes(link);
          return (
            <Link
              key={link}
              to={`/home/service/${link as NavLinks}`}
              className={`px-4 py-2 rounded-lg hover:bg-gray-300 duration-300 ${match ? "underline" : ""}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceNavbar;
