import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import notif from "../../../assets/notif.svg";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import logo from "../../../assets/finnbank-logo.png";
import { useSocketConnection } from "../../../hooks/useSocketConnection";
import { useNotification } from "../../../hooks/useNotification";
import { menuItems } from "../../../data/menu";

type NavLinks = "dashboard" | "service" | "activity";

const HomeNavbar: React.FC = () => {
  const location = useLocation();
  const { logout, username, userId } = useAuth();

  const [toggle, setToggle] = useState<"burger" | "user" | null>(null);
  const outsideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    interface ClickEvent {
      target: EventTarget | null;
    }

    function handleClickOutside(event: ClickEvent): void {
      if (outsideRef.current && !outsideRef.current.contains(event.target as Node)) {
        console.log("Clicked outside");
        setToggle(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [outsideRef]);

  return (
    <nav className="bg-blue-500 text-white px-4 md:px-12 lg:px-24">
      <div className="flex flex-wrap items-center justify-between h-16 mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <img src={logo} alt="finnbank-logo" className="h-12 w-16" />
            <h1 className="text-2xl font-bold">Finnbank</h1>
          </div>

          <div className="lg:hidden flex" ref={toggle === "burger" ? outsideRef : null}>
            <button
              className="text-white focus:outline-none cursor-pointer hover:opacity-70 duration-300"
              onClick={() => setToggle(toggle === "burger" ? null : "burger")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <Toggle
              toggle={toggle}
              setToggle={setToggle}
              outsideRef={outsideRef}
              handleLogout={logout}
            />
          </div>
        </div>

        <div className="hidden lg:flex gap-4 ml-0 lg:ml-10">
          {["dashboard", "service", "activity"].map((link) => {
            const match = location.pathname.includes(link);
            return (
              <Link
                key={link}
                to={`/home/${link as NavLinks}`}
                className={`px-3 py-2 rounded-lg hover:bg-blue-600 duration-300 ${
                  match ? "underline" : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            );
          })}
        </div>

        {/* Profile section */}
        <div className="hidden lg:flex items-center">
          <Profile
            logout={logout}
            toggle={toggle}
            setToggle={setToggle}
            outsideRef={outsideRef}
            userId={userId as string}
            username={username as string}
          />
        </div>
      </div>
    </nav>
  );
};
export default HomeNavbar;

type ProfileProps = {
  logout: () => void;
  username: string;
  userId: string;
  toggle: "user" | "burger" | null;
  setToggle: React.Dispatch<React.SetStateAction<"user" | "burger" | null>>;
  outsideRef: React.RefObject<HTMLDivElement | null>;
};

const Profile: React.FC<ProfileProps> = ({
  logout,
  username,
  userId,
  toggle,
  setToggle,
  outsideRef,
}) => {
  const navigate = useNavigate();
  const { unreadNotif, setUnreadNotif } = useNotification(userId);

  useSocketConnection({
    url: "listen-to-notification",
    type: "notification",
    setNotifCount: setUnreadNotif,
    userId: userId,
  });

  const handleLogout = () => {
    logout();
    setToggle(null);
    navigate({ to: "/welcome", replace: true });
  };

  return (
    <div className="flex items-center w-full gap-6 justify-end">
      {/* notif and settings icon */}
      <div className="flex gap-8 mr-5">
        <Link
          className="flex flex-col cursor-pointer hover:opacity-40 duration-300"
          to="/home/updates"
        >
          {(unreadNotif as number) > 0 ? (
            <span className="absolute -mt-1 ml-2 bg-red-500 text-white rounded-full w-fit h-fit px-1 flex items-center justify-center text-[10px] font-light ">
              {unreadNotif as number}
            </span>
          ) : null}
          <img src={notif} alt="notif-icon" className="w-4 h-5" />
        </Link>
      </div>
      {/* user view bar */}
      <div className="flex flex-col">
        <div
          className="flex flex-col items-center gap-4 p-2 cursor-pointer duration-300"
          onClick={() => setToggle(toggle === "user" ? null : "user")}
          ref={toggle === "user" ? outsideRef : null}
        >
          <div className="flex items-center gap-4 hover:opacity-70">
            <span className="bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold">
              {username[0]}
            </span>
            <span>{username}</span>
          </div>
          <Toggle
            toggle={toggle}
            setToggle={setToggle}
            outsideRef={outsideRef}
            handleLogout={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

type ToggleProps = {
  toggle: "user" | "burger" | null;
  setToggle: React.Dispatch<React.SetStateAction<"user" | "burger" | null>>;
  outsideRef: React.RefObject<HTMLDivElement | null>;
  handleLogout: () => void;
};

const Toggle: React.FC<ToggleProps> = ({ toggle, setToggle, handleLogout }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width >= 1024 && toggle === "burger") {
        setToggle(null);
      } else if (width < 1024 && toggle === "user") {
        setToggle(null);
      } else if (windowWidth === 10000) {
        // silence linter
        console.log("10000");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, [toggle, setToggle, windowWidth]);

  if (!toggle) return null;

  return (
    <div
      className={`
        absolute w-64 bg-white rounded-lg shadow-xl border border-gray-100 z-50
        ${toggle === "user" ? "mt-11" : "right-0 mt-8"}
      `}
    >
      <div className="p-4 border-b border-gray-100">
        <span className="font-medium text-gray-800">
          {toggle === "burger" ? "Menu" : "User Menu"}
        </span>
      </div>

      <div className="flex flex-col p-2 gap-3">
        {menuItems.map((item) => {
          if (toggle === "user" && item.type !== "user") return null;
          return toggle === "burger" || toggle === "user" ? (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-all duration-200 flex items-center gap-2"
              onClick={() => setToggle(null)}
            >
              {item.icon}
              {item.label}
            </Link>
          ) : null;
        })}

        {/* Logout button */}
        <button
          onClick={() => {
            handleLogout();
            setToggle(null);
          }}
          className="px-3 py-2 cursor-pointer text-red-600 hover:bg-red-50 rounded-md transition-all duration-200 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};
