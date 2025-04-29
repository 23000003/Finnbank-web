import { saveAs } from "file-saver";

type DownloadStatementButtonProps = {
  pdfBuffer: string;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
};

const DownloadStatementButton: React.FC<DownloadStatementButtonProps> = ({
  pdfBuffer,
  setErrorMessage,
  setSuccessMessage,
}) => {
  const handleDownload = () => {
    try {
      // Convert the Base64 string to a proper binary string
      const binaryString = window.atob(pdfBuffer);

      // Create a Uint8Array from the binary string
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Create a Blob from the Uint8Array
      const blob = new Blob([bytes], { type: "application/pdf" });

      // Use file-saver to trigger the download
      saveAs(blob, `statement_${new Date().toISOString().split("T")[0]}.pdf`);
      setSuccessMessage("Statement downloaded successfully!");
    } catch (error) {
      console.error("Error downloading PDF:", error);
      setErrorMessage("Failed to download statement. Please try again.");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-400 transition-colors"
    >
      Download Statement
    </button>
  );
};

export default DownloadStatementButton;
