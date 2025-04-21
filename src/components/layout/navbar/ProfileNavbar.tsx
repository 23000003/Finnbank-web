import { Link, useLocation } from "@tanstack/react-router";

type NavLinks = "profile/wallet" | "profile/settings";

export default function ProfileNavbar() {
  const location = useLocation();

  const matchPaths = (link: string): boolean => {
    if (link === "account") {
      return location.pathname === "/home/profile";
    }
    return location.pathname.includes(link);
  };

  const linkPaths = (link: string): NavLinks | "profile" => {
    if (link === "account") {
      return "profile";
    }
    return ("profile/" + link) as NavLinks;
  };

  return (
    <div className="bg-gray-200 text-black h-16 flex items-center justify-center">
      <div className="flex gap-4">
        {["account", "wallet", "settings"].map((link) => {
          const match = matchPaths(link);
          return (
            <Link
              key={link}
              to={`/home/${linkPaths(link)}`}
              className={`px-4 py-2 rounded-lg hover:bg-gray-300 duration-300 ${match ? "underline" : ""}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
