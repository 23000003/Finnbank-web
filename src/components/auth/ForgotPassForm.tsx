import React, { useState } from "react";
import { showToast } from "../../utils/toast";
import { useNavigate } from "@tanstack/react-router";

const ForgotPassForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!email) {
      showToast.error("Please enter your email.");
      return;
    }

    showToast.success("A password reset link has been sent to your email.");
    setEmail("");
    setHasSubmitted(false);
    nav({ to: "/welcome/signin", replace: true });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md ${
            hasSubmitted && !email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {hasSubmitted && !email && <p className="text-sm text-red-600">Email is required</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPassForm;
