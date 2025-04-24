import { Dialog } from "@headlessui/react";
import { useState } from "react";

interface ChangePinNumberProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChangePinNumber({ isOpen, onClose }: ChangePinNumberProps) {
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
                  <option value="5106583635918">5106583635918</option>
                  <option value="5208249471403">5208249471403</option>
                  <option value="5259511534540">5259511534540</option>
                </select>
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-sm text-gray-700">
                    Cancel
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Dialog.Title className="text-xl font-semibold mb-4">
                Change PIN for {selectedCard}
              </Dialog.Title>
              <div className="flex flex-col gap-4">
                <input
                  type="password"
                  placeholder="Current PIN"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="password"
                  placeholder="New PIN"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="password"
                  placeholder="Confirm New PIN"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <div className="flex justify-end gap-6 mt-4">
                  <button onClick={handleClose} className="text-sm text-gray-700">
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert("PIN changed for card " + selectedCard);
                      handleClose();
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
