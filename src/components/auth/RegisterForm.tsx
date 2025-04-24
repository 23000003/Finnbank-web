import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { showToast } from "../../utils/toast";
import { AccountService } from "../../services/account.service";
const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    surname: "",
    firstname: "",
    middlename: "",
    phoneNumber: "",
    country: "",
    province: "",
    city: "",
    nationalID: "",
    birthdate: "",
    nationality: "",
    account_type: "",
  });
  const [fileName, setFileName] = useState("Upload ID");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (file) setFileName(file.name);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const validateForm = () => {
    if (currentStep === 1) {
      return formData.surname && formData.firstname && formData.middlename && formData.nationality;
    } else if (currentStep === 2) {
      return formData.email && formData.password && formData.confirmPassword;
    } else if (currentStep === 3) {
      return formData.phoneNumber && formData.country && formData.province && formData.city;
    } else if (currentStep === 4) {
      return formData.nationalID && formData.birthdate && formData.account_type;
    }
    return true;
  };
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    } else {
      showToast.error("Please fill in all fields");
    }
  };
  const handleEdgeCases = () => {
    if (!validateForm()) {
      showToast.error("Please fill in all fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      showToast.error("Passwords do not match");
      return;
    }
    if (formData.account_type === "") {
      showToast.error("Please select an account type");
      return;
    }
    if (formData.nationalID === "") {
      showToast.error("Please upload your ID");
      return;
    }
    if (formData.birthdate === "") {
      showToast.error("Please select your birthdate");
      return;
    }
    if (formData.phoneNumber === "") {
      showToast.error("Please enter your phone number");
      return;
    }
    if (formData.country === "") {
      showToast.error("Please enter your country");
      return;
    }
    if (formData.province === "") {
      showToast.error("Please enter your province");
      return;
    }
    if (formData.city === "") {
      showToast.error("Please enter your city");
      return;
    }
    if (formData.surname === "") {
      showToast.error("Please enter your surname");
      return;
    }
    if (formData.firstname === "") {
      showToast.error("Please enter your firstname");
      return;
    }
    if (formData.middlename === "") {
      showToast.error("Please enter your middlename");
      return;
    }
    if (isLoading) return;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEdgeCases();
    setIsLoading(true);
    console.log(formData);
    handleRegister();
  };

  const handleRegister = async () => {
    const address = `${formData.country}, ${formData.province}, ${formData.city}`;
    try {
      await AccountService.register(
        formData.surname,
        formData.firstname,
        formData.middlename,
        formData.email,
        formData.password,
        formData.phoneNumber,
        address,
        formData.nationalID,
        formData.birthdate,
        formData.nationality,
        formData.account_type
      );
      showToast.success("Registration successful");
      console.log("Registration OK");
      navigate({ to: "/welcome/signin" });
    } catch (error) {
      showToast.error("Registration failed");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function renderStep() {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">Surname</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              type="text"
              placeholder="Surname"
              value={formData.surname}
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
            />
            <label className="text-sm font-medium text-gray-600">Firstname</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              type="text"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
            />
            <label className="text-sm font-medium text-gray-600">Middlename</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              type="text"
              placeholder="Middlename"
              value={formData.middlename}
              onChange={(e) => setFormData({ ...formData, middlename: e.target.value })}
            />
            <label className="text-sm font-medium text-gray-600">Nationality</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              type="text"
              placeholder="Nationality"
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label className="text-sm font-medium text-gray-600">Password</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <label className="text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col space-y-0.5 gap-1">
            <label className="text-sm font-medium text-gray-600">Phone Number</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
            <label className="text-sm font-medium text-gray-600">Country</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
            <label className="text-sm font-medium text-gray-600">Province</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="City"
              value={formData.province}
              onChange={(e) => setFormData({ ...formData, province: e.target.value })}
            />
            <label className="text-sm font-medium text-gray-600">City</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Street"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col space-y-2 gap-1">
            <label className="text-sm font-medium text-gray">National ID Number</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              type="text"
              placeholder="National ID Number"
              value={formData.nationalID}
              onChange={(e) => setFormData({ ...formData, nationalID: e.target.value })}
            />
            <label className="text-sm font-medium text-gray">National ID File</label>
            <label className="font-bold flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer text-sm text-gray-500 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <span className="truncate">{fileName ? fileName : "Upload ID"}</span>
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
            <label className="text-sm font-medium text-gray">Birthdate</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              type="date"
              placeholder="Birthdate"
              value={formData.birthdate}
              onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
            />

            <label className="text-sm font-medium text-gray-600">Account Type</label>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none  text-sm"
              value={formData.account_type}
              onChange={(e) => setFormData({ ...formData, account_type: e.target.value })}
            >
              <option value="">Select Account Type</option>
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-full space-y-6 overflow-hidden max-h-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 mt-6 justify-end">
        {currentStep > 1 && (
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-400"
            onClick={prevStep}
            disabled={isLoading}
          >
            Back
          </button>
        )}
        {currentStep < 4 && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600"
            onClick={handleNext}
            disabled={isLoading}
          >
            Next
          </button>
        )}
        {currentStep === 4 && (
          <button
            className={`px-4 py-2 rounded-lg shadow-sm ${
              isLoading
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              // Loading spinner copied from uiverse
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
