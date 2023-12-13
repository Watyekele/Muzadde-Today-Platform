import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    // Confirmation message
    alert(`Payment successful for ${selectedPlan} plan`);
  };

  return (
    <div className="page h-3/4 bg-zinc-200/20">
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen text-lg mt-16">
        <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md md:h-3/4 mb-4">
          <h2 className="text-2xl text-green-900 font-bold mb-4">
            Subscribe To Muzadde Plus
          </h2>
          <p className="text-gray-600 mb-4">
            Subscribe today to gain premium access!
          </p>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="monthly"
                checked={selectedPlan === "monthly"}
                onChange={() => handlePlanChange("monthly")}
                className="mr-2"
              />
              Monthly Plan - UGX 50,000
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="yearly"
                checked={selectedPlan === "yearly"}
                onChange={() => handlePlanChange("yearly")}
                className="mr-2"
              />
              Yearly Plan - UGX 500,000 (10% discount)
            </label>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 mb-2">Select Payment Method:</p>
            <select className="bg-gray-200 p-2 rounded w-full">
              <option value="mtn">MTN Mobile Money</option>
              <option value="airtel">Airtel Money</option>
            </select>
          </div>

          <button
            onClick={handlePayment}
            className="bg-green-900 text-white py-2 px-4 rounded hover:bg-pink-500 focus:outline-none focus:shadow-outline-blue"
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscription;
