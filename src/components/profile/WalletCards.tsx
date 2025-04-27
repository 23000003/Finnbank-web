import { Bankcard } from "../../types/entities/bankcard.entity";
import { hideAccountNumber } from "../../utils/hide-account-number";
import { motion } from "framer-motion";

type WalletCardProps = {
  bankcards: Bankcard[];
  selected: Bankcard | null;
  setSelected: React.Dispatch<React.SetStateAction<Bankcard | null>>;
};

const WalletCards: React.FC<WalletCardProps> = ({ bankcards, selected, setSelected }) => {
  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center lg:text-start">
        Wallet Accounts
      </h1>
      <div className="flex flex-col gap-4">
        {bankcards.map((bc) => {
          const isSelected = selected?.bankcard_id === bc.bankcard_id;

          return (
            <motion.div
              key={bc.bankcard_id}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
                ${
                  isSelected
                    ? "bg-blue-50 border-2 border-blue-400 shadow-md"
                    : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm"
                }`}
              onClick={() => setSelected(bc)}
              whileHover={!isSelected ? { scale: 1.01 } : {}}
              whileTap={!isSelected ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Rest of your card content */}
              <div className="p-2 bg-white rounded-lg shadow-xs">
                <img
                  src="https://pics.paypal.com//00/s/OTY5WDE1MzZYUE5H/p/MGEzZWI5MTktMmUzOS00YjU1LTk5ZmEtNjUwYzQ0OGFmMjBl/image__141.png"
                  alt="credit-card"
                  className="w-12 h-8 object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 truncate">{bc.card_type} Card</h3>
                <p className="text-sm text-gray-500 font-mono">
                  {hideAccountNumber(bc.card_number)}
                </p>
              </div>

              {isSelected && (
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WalletCards;
