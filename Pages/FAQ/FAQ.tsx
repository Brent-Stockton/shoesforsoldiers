"use client";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Can we send any shoes?",
    answer:
      "We specifically utilize Brooks Shoes to emphasize the importance of foot care during physical training. As an Army veteran, I understand the value of uniformity and appropriate footwear.",
  },
  {
    question: "Doesn't the military supply footwear?",
    answer:
      "Shoe provision varies by military branch. Some provide them, while others don't. Regardless, we aim to educate soldiers about the necessity of proper running shoes, which may not always be provided.",
  },
  {
    question: "Can our soldiers not afford these shoes?",
    answer:
      "While soldiers are compensated, there's a need for awareness about investing in proper footwear. Without this knowledge, they might not prioritize the right shoes for their physical well-being.",
  },
  {
    question: "Can we ship overseas?",
    answer:
      "We have the capability to facilitate international shipping to various global destinations, including overseas military bases.",
  },
];

const FAQComponent = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const handleSelectFAQ = (index: number) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  return (
    <section
      className="flex items-center justify-center h-screen bg-white p-4 md:p-12 flex-col"
      style={{
        backgroundImage: "url(/images/runner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-[26px] md:text-[36px] font-bold mb-6 font-army text-white hover:text-red-900 mt-[-50px]">
        Intel Brief: Direct Answers
      </h2>
      <div
        className=" mx-auto p-4 border-1 bg-red-900 rounded-lg w-full md:w-1/2"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        }}
      >
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleSelectFAQ(index)}
              className="rounded-lg flex justify-between items-center w-full px-4 py-2 text-left text-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-black  hover:bg-gray-200 text-sm md:text-[12px] lg:text-[18px] lg:font-normal"
            >
              {faq.question}
              <span
                className={`transform transition-transform ${
                  selectedFAQ === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {selectedFAQ === index && (
              <div className="mt-2 p-4 bg-white border border-gray-200 rounded-md text-black text-sm md:text-[14px] lg:text-[18px]">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQComponent;
