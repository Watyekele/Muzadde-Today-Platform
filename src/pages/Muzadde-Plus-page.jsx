import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Subscription from "../Components/Subscription";

const faqData = [
  {
    question: "What is Muzadde Today?",
    answer:
      "Muzadde Today is a parent platform for advice on how to raise children.",
  },
  {
    question: "Is Muzadde Today a paid-only support community?",
    answer:
      "Non-members are also able to get a limited service from Muzadde Today",
  },
  {
    question: "How long will it take me to get feedback from a specialist?",
    answer:
      "You will get feedback from a specialist within less than 45 minutes",
  },
];

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Nav />
      <div className="page text-lg mt-8 md:mt-16 flex flex-col items-center max-w-screen-md mx-auto bg-zinc-300/20 p-4 md:p-10 rounded-md">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-3xl font-bold text-green-900">
            Upgrade to Muzadde Plus
          </h2>
          <p className="text-gray-600 mt-2 md:mt-4">
            Offer your child the best parenting and care as you get guidance
            from leading Doctors and Child Specialists.
          </p>
          <h3 className="text-2xl text-green-900 font-bold mt-4 mb-2">
            What you get with Muzadde Plus
          </h3>
          <ul className="list-disc flex flex-col list-inside text-lg text-left">
            <li className="mb-2">Unlimited Q&A with child Experts</li>
            <li className="mb-2">VIP access to all workshops</li>
            <li className="mb-2">
              Ability to ask questions and be answered by fellow parents
            </li>
          </ul>
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="text-2xl font-bold text-green-900 mb-4">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div key={index} className="border-b w-full">
            <div
              className={`py-4 font-bold cursor-pointer transition-colors ${
                activeIndex === index ? "bg-pink-100" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && <div className="py-4">{item.answer}</div>}
          </div>
        ))}
        
        <div className="mt-4 md:mt-8">
          {/* Use of the Link component makes the button clickable */}
          <Link to="/Subscription">
            <button className="bg-green-900 text-white py-2 px-4 rounded hover:bg-pink-500 focus:outline-none focus:shadow-outline-blue">
              Upgrade Now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
