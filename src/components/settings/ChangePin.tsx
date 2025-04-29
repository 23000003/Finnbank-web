import { Dialog } from "@headlessui/react";
import { useState } from "react";
import ChangePinModal from "./ChangePinModal";

interface ChangePinProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChangePin({ isOpen, onClose }: ChangePinProps) {
  const [step, setStep] = useState<"select" | "pin">("select");
  const [selectedCard, setSelectedCard] = useState("");

  const handleSelect = (card: string) => {
    if (card) {
      setSelectedCard(card);
      setStep("pin");
    }
  };

  const handleClose = () => {
    setStep("select");
    setSelectedCard("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          {step === "select" ? (
            <>
              <Dialog.Title className="text-xl font-semibold mb-4">Select Card</Dialog.Title>
              <div className="flex flex-col gap-4">
                <select
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={(e) => handleSelect(e.target.value)}
                >
                  <option value="">-- Select a Card --</option>
                  <option value="5106583635918">1275106583635918</option>
                  <option value="5208249471403">3175208249471403</option>
                  <option value="5259511534540">5256329511534540</option>
                </select>
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-sm text-gray-700">
                    Cancel
                  </button>
                </div>
              </div>
            </>
          ) : (
            <ChangePinModal
              selectedCard={{
                cardNumber: selectedCard,
                cardId: 1,
              }}
              handleClose={handleClose}
            />
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
