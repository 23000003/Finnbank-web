import { Dialog } from "@headlessui/react";
import { PostTransaction } from "../../types/entities/transaction.entity";
import { motion } from "framer-motion";

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  transferData: PostTransaction | null;
  executeTransfer: (data: PostTransaction) => Promise<void>;
}

const TransferModal: React.FC<TransferModalProps> = ({
  isOpen,
  onClose,
  transferData,
  executeTransfer,
}) => {
  if (!transferData) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          as={motion.div}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
        >
          {/* Receipt Header */}
          <div className="bg-blue-600 p-6 text-white">
            <Dialog.Title className="text-2xl font-bold flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Transfer
            </Dialog.Title>
          </div>
          {/* Receipt Body */}
          <div className="p-6 space-y-6">
            <div className="border-t border-b border-gray-100 py-4 space-y-3">
              <div className="flex justify-between">
                <p className="text-gray-500">Amount</p>
                <p className="font-bold text-lg">₱{transferData.amount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Fee</p>
                <p className="text-red-500">-₱{transferData.transaction_fee.toFixed(2)}</p>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <p className="text-gray-700 font-medium">Total</p>
                <p className="text-blue-600 font-bold">
                  ₱{(transferData.amount + transferData.transaction_fee).toFixed(2)}
                </p>
              </div>
            </div>

            {transferData.notes && (
              <div>
                <p className="text-gray-500 text-sm">Notes</p>
                <p className="text-gray-700">"{transferData.notes}"</p>
              </div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-blue-700 text-sm">
                This transaction will be processed immediately. Please review carefully before
                confirming.
              </p>
            </div>
          </div>

          {/* Receipt Footer */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                executeTransfer(transferData);
                onClose();
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
            >
              Confirm Transfer
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default TransferModal;
