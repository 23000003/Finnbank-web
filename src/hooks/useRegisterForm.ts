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
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      showToast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleEdgeCases()) return;

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
