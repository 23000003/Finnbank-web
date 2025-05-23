import { Bankcard } from "../../types/entities/bankcard.entity";
import { hideAccountNumber } from "../../utils/hide-account-number";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import ChangePinModal from "../settings/ChangePinModal";

const WalletCardInfo: React.FC<{ viewBankcard: Bankcard }> = ({ viewBankcard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date: string): string => {
    const parsedDate = new Date(date);
    return `${parsedDate.getMonth() + 1}/${parsedDate.getFullYear()}`;
  };

  const cardInfoSections = [
    {
      title: `${viewBankcard.card_type} Card`,
      content: `Finnbank Card No. ${hideAccountNumber(viewBankcard.card_number)}`,
    },
    {
      title: "Issued Date",
      content: formatDate(viewBankcard.date_created),
    },
    {
      title: "Expiration Date",
      content: formatDate(viewBankcard.expiry_date),
    },
    {
      title: "CVV",
      content: viewBankcard.cvv,
    },
  ];

  return (
    <motion.div
      className="flex flex-col items-center gap-8 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <img
          src="https://pics.paypal.com//00/s/OTY5WDE1MzZYUE5H/p/MGEzZWI5MTktMmUzOS00YjU1LTk5ZmEtNjUwYzQ0OGFmMjBl/image__140.png"
          alt="debit-card"
          className="w-full h-auto object-cover"
        />
      </motion.div>
      <div className="w-full space-y-6">
        {cardInfoSections.map((section, index) => (
          <motion.div
            key={index}
            className="flex flex-col min-h-[4rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="font-bold font-mono text-lg text-blue-600">{section.title}</span>
            <motion.span className="font-mono text-gray-700" layout>
              {section.content}
            </motion.span>
          </motion.div>
        ))}
      </div>
      <div className="w-full space-y-4">
        {viewBankcard.pin_number === "1234" ? (
          <span className="text-sm text-red-500 opacity-70">
            <b>Note:</b> Default PIN is 1234. Please change it.
          </span>
        ) : null}
        <motion.div
          className="p-3 bg-red-50 rounded-lg text-sm text-red-700 text-center cursor-pointer hover:bg-red-100 duration-300 hover:text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => setIsOpen(true)}
        >
          Change Pin
        </motion.div>
        <motion.div
          className="p-3 bg-blue-50 rounded-lg text-sm text-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          🔒 For security reasons, please don't share your card details with anyone.
        </motion.div>
      </div>
      {/* Change pin modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <ChangePinModal
              selectedCard={{
                cardNumber: viewBankcard.card_number,
                cardId: viewBankcard.bankcard_id,
              }}
              handleClose={() => setIsOpen(false)}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default WalletCardInfo;
