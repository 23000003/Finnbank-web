import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { showToast } from "../utils/toast";
import { AuthService } from "../services/auth.service";

export const useRegisterForm = () => {
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

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const validateForm = () => {
    if (currentStep === 1) {
      if (
        !formData.surname ||
        !formData.firstname ||
        !formData.middlename ||
        !formData.nationality
      ) {
        showToast.error("Please fill in all fields");
        return false;
      }
    } else if (currentStep === 2) {
      const { email, password, confirmPassword } = formData;
      if (!email || !password || !confirmPassword) {
        showToast.error("Please fill in all fields");
        return false;
      }
      if (email.length < 5 || !email.includes("@")) {
        showToast.error("Email must be valid");
        return false;
      }
      if (password.length < 8) {
        showToast.error("Password must be at least 8 characters");
        return false;
      }
      if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        showToast.error("Password must contain at least one letter and one number");
        return false;
      }
      if (password !== confirmPassword) {
        showToast.error("Passwords do not match");
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.phoneNumber || !formData.country || !formData.province || !formData.city) {
        showToast.error("Please fill in all fields");
        return false;
      }
    } else if (currentStep === 4) {
      if (!formData.nationalID || !formData.birthdate || !formData.account_type) {
        showToast.error("Please fill in all fields");
        return false;
      }
      const birthDate = new Date(formData.birthdate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (
        age < 18 ||
        (age === 18 &&
          today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()))
      ) {
        showToast.error("You must be at least 18 years old to register");
        return false;
      }
    }
    return true;
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const address = `${formData.country}, ${formData.province}, ${formData.city}`;
    try {
      const data = await AuthService.register(
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
      console.log("Registration data:", data);
      showToast.success("Registration successful");
      navigate({ to: "/welcome/signin" });
    } catch (error) {
      if ((error as Error).message.includes("Somethings wrong...")) {
        showToast.error("Somethings wrong...");
        return;
      }
      showToast.error("Registration failed");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currentStep,
    formData,
    setFormData,
    fileName,
    isLoading,
    handleFileChange,
    nextStep,
    prevStep,
    handleNext,
    handleSubmit,
  };
};
