import { useState } from "react";

const RegisterForm: React.FC = () => {
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
    city: "",
    street: "",
    nationalID: "",
    birthdate: "",
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  function renderStep() {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1 gap-1">
              <label className="text-sm font-bold text-gray-600">Surname</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                type="text"
                placeholder="Surname"
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              />
              <label className="text-sm font-bold text-gray-600">Firstname</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                type="text"
                placeholder="Firstname"
                value={formData.firstname}
                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
              />
              <label className="text-sm font-bold text-gray-600">Middlename</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                type="text"
                placeholder="Middlename"
                value={formData.middlename}
                onChange={(e) => setFormData({ ...formData, middlename: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-1 gap-1">
              <label className="text-sm font-bold text-gray-600">Email</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <label className="text-sm font-bold text-gray-600">Password</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <label className="text-sm font-bold text-gray-600">Confirm Password</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col space-y-0.5 gap-1">
            <label className="text-sm font-bold text-gray-600">Phone Number</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
            <label className="text-sm font-bold text-gray-600">Address</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
            <label className="text-sm font-bold text-gray-600">City</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
            <label className="text-sm font-bold text-gray-600">Street</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Street"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
            />
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col space-y-2 gap-1">
            <label className="text-sm font-bold text-gray">National ID Number</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              type="text"
              placeholder="National ID Number"
              value={formData.nationalID}
              onChange={(e) => setFormData({ ...formData, nationalID: e.target.value })}
            />
            <label className="text-sm font-bold text-gray">National ID File</label>
            <label className="font-bold flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer text-sm text-gray-500 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <span className="truncate">Upload ID</span>
              <input type="file" className="hidden" />
            </label>
            <label className="text-sm font-bold text-gray">Birthdate</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              type="date"
              placeholder="Birthdate"
              value={formData.birthdate}
              onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
            />
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {renderStep()}
      <div className="flex gap-2 mt-4">
        {currentStep > 1 && (
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-400"
            onClick={prevStep}
          >
            Back
          </button>
        )}
        {currentStep < 3 && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600"
            onClick={nextStep}
          >
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
