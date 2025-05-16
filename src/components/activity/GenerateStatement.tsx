import React, { useState } from "react";
import StatementService from "../../services/statement.service";
import DownloadStatementButton from "./DownloadStatementButton";
import useActionStatus from "../../hooks/useActionStatus";

type GenerateStatementProps = {
  openedAccountIds: number[];
  startDate: Date | null;
  endDate: Date | null;
};

const GenerateStatement: React.FC<GenerateStatementProps> = ({
  openedAccountIds,
  startDate,
  endDate,
}) => {
  const { setErrorMessage, setSuccessMessage } = useActionStatus(false);

  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfBuffer, setPdfBuffer] = useState<string | null>(null);

  const formatDate = (date: Date | null): string => {
    if (!date) return formatDate(new Date());
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  console.log(formatDate(startDate), formatDate(endDate), "startDate", "endDate");

  const handleGenerateStatement = async () => {
    setIsGenerating(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const buffer = await StatementService.getAllStatements({
        creditId: openedAccountIds[0],
        debitId: openedAccountIds[1],
        savingsId: openedAccountIds[2],
        startDate: startDate === null ? "2020-05-13T00:00:00Z" : startDate.toISOString(),
        endDate: endDate === null ? new Date().toISOString() : endDate.toISOString(),
      });

      if (!buffer) {
        throw new Error("No PDF data received from server");
      }

      // The buffer comes as a string representation of bytes, convert to Base64
      const byteArray = buffer
        .replace(/[[\]]/g, "") // Remove brackets from the buffer
        .split(" ") // Split into individual bytes
        .filter(Boolean) // Remove empty strings
        .map(Number); // Convert to numbers

      console.log("Byte array:", byteArray);

      const uint8Array = new Uint8Array(byteArray);

      console.log("Uint8Array:", uint8Array);

      let binary = "";
      uint8Array.forEach((byte) => {
        binary += String.fromCharCode(byte);
      });
      const base64String = window.btoa(binary);

      setPdfBuffer(base64String);
    } catch (err) {
      console.error("Error generating statement:", err);
      setErrorMessage("Failed to generate statement. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      {!pdfBuffer ? (
        <button
          onClick={handleGenerateStatement}
          disabled={isGenerating}
          className={`px-4 py-2 rounded transition-colors cursor-pointer ${
            isGenerating
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-400 text-white"
          }`}
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating...
            </span>
          ) : (
            "Generate Statement"
          )}
        </button>
      ) : (
        <DownloadStatementButton
          pdfBuffer={pdfBuffer}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
      )}
    </div>
  );
};

export default GenerateStatement;
