import { Billers } from "../../data/billers";
import { Link } from "@tanstack/react-router";

type Biller =
  | "credit-card"
  | "insurance"
  | "internet"
  | "loans"
  | "water-utilities"
  | "electric-utilities";

const BillerCards: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Billers.map((biller, index) => (
        <Link
          to="/home/service/billers/$billers"
          params={{ billers: biller.name.toLowerCase().replace(/\s+/g, "-") as Biller }}
          key={index}
          className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-400 cursor-pointer transition-colors hover:shadow-md"
        >
          <div className="bg-blue-100 p-3 rounded-full mb-3 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={biller.icon} />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">{biller.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BillerCards;
