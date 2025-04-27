// Turn input field to red if empty
export const getInputBorderClass = (value: string | number, hasSubmitted: boolean) => {
  return hasSubmitted &&
    (!value || (typeof value === "string" && value.trim() === "") || value === 0)
    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500";
};
