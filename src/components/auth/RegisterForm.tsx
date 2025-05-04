import { motion, AnimatePresence } from "framer-motion";
import { useRegisterForm } from "../../hooks/useRegisterForm";

const RegisterForm: React.FC = () => {
  const {
    currentStep,
    formData,
    setFormData,
    fileName,
    isLoading,
    handleFileChange,
    prevStep,
    handleNext,
    handleSubmit,
  } = useRegisterForm();

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
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              maxLength={11}
              pattern="[0-9]{11}"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 11);
                setFormData({ ...formData, phoneNumber: value });
              }}
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
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 mt-6">
        {currentStep > 1 && (
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-400 cursor-pointer w-full"
            onClick={prevStep}
            disabled={isLoading}
          >
            Back
          </button>
        )}
        {currentStep < 4 && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 cursor-pointer w-full"
            onClick={handleNext}
            disabled={isLoading}
          >
            Next
          </button>
        )}
        {currentStep === 4 && (
          <button
            className={`px-4 py-2 rounded-lg shadow-sm cursor-pointer w-full ${
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
