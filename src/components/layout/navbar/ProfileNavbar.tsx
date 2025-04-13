// import { Link } from "@tanstack/react-router";

// type NavLinks = 'account' | 'bankcard' | 'privacy' | 'settings'

export default function ProfileNavbar() {
  return (
    <nav className="bg-gray-200 text-black h-16 flex items-center justify-between px-16">
      <div className="flex gap-4">
        {["account", "bankcard", "privacy", "settings"].map((link) => {
          const match = location.pathname.includes(link);
          return (
            // <Link
            //     key={link}
            //     to={`/home/${link as NavLinks}`}
            //     className={`px-4 py-2 rounded-lg hover:bg-gray-300 duration-300 ${match ? 'underline' : ''}`}
            // >
            //     {link.charAt(0).toUpperCase() + link.slice(1)}
            // </Link>
            <span
              key={link}
              className={`px-4 py-2 rounded-lg hover:bg-gray-300 duration-300 ${match ? "underline" : ""}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
