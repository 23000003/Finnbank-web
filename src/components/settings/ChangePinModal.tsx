import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { hideAccountNumber } from "../../utils/hide-account-number";
import useActionStatus from "../../hooks/useActionStatus";
import { getInputBorderClass } from "../../utils/input-error";

type ChangePinModalProps = {
  handleClose: () => void;
  selectedCard: {
    cardNumber: string;
    cardId: number;
  };
};

const ChangePinModal: React.FC<ChangePinModalProps> = ({ selectedCard, handleClose }) => {
  const { setLoading, setErrorMessage, setSuccessMessage } = useActionStatus();

  const [pinNumbers, setPinNumbers] = useState({
    currentPin: "",
    newPin: "",
    confirmNewPin: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChangePin = async () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    if (pinNumbers.currentPin.length !== 4) {
      setPinNumbers({
        ...pinNumbers,
        currentPin: "",
      });
      setErrorMessage("Current PIN must be 4 digits");
    }
    if (pinNumbers.newPin.length !== 4) {
      setPinNumbers({
        ...pinNumbers,
        newPin: "",
      });
      setErrorMessage("New PIN must be 4 digits");
    }
    if (pinNumbers.confirmNewPin.length !== 4) {
      setPinNumbers({
        ...pinNumbers,
        confirmNewPin: "",
      });
      setErrorMessage("Confirm PIN must be 4 digits");
    }
    if (pinNumbers.newPin !== pinNumbers.confirmNewPin) {
      setErrorMessage("New PIN and Confirm PIN do not match");
      return;
    }
    setLoading(true);
    try {
      const data = {
        cardId: selectedCard.cardId,
        currentPin: pinNumbers.currentPin,
        newPin: pinNumbers.newPin,
      };
      console.log("Changing PIN for card:", data);
      // Change this to your API call
      // To services/change-pin
      setSuccessMessage("PIN changed successfully");
      handleClose();
    } catch (err) {
      setErrorMessage("Failed to change PIN");
      console.error(err);
    }
  };

  return (
    <>
      <Dialog.Title className="text-xl font-semibold mb-4">
        Change PIN for {hideAccountNumber(selectedCard.cardNumber)}
      </Dialog.Title>
      <div className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="Current PIN"
          value={pinNumbers.currentPin}
          min={4}
          max={4}
          onChange={(e) => setPinNumbers({ ...pinNumbers, currentPin: e.target.value })}
          className={`
            border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none
            ${getInputBorderClass(pinNumbers.currentPin, isSubmitted)}
          `}
        />
        <input
          type="password"
          placeholder="New PIN"
          value={pinNumbers.newPin}
          min={4}
          max={4}
          onChange={(e) => setPinNumbers({ ...pinNumbers, newPin: e.target.value })}
          className={`
            border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none
            ${getInputBorderClass(pinNumbers.newPin, isSubmitted)}
          `}
        />
        <input
          type="password"
          placeholder="Confirm New PIN"
          value={pinNumbers.confirmNewPin}
          min={4}
          max={4}
          onChange={(e) => setPinNumbers({ ...pinNumbers, confirmNewPin: e.target.value })}
          className={`
            border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none
            ${getInputBorderClass(pinNumbers.confirmNewPin, isSubmitted)}
          `}
        />
        <div className="flex justify-end gap-6 mt-4">
          <button onClick={handleClose} className="text-sm text-gray-700">
            Cancel
          </button>
          <button
            onClick={() => {
              handleChangePin();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePinModal;
