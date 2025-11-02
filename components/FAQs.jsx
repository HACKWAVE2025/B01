"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQs = () => {
  const items = [
    {
      question: "What is Virtual Health?",
      answer:
        "Virtual Health is a telemedicine platform that connects patients with verified healthcare providers via video consultations, AI-powered symptom checks, and digital prescriptions.",
    },
    {
      question: "How does Virtual Health work?",
      answer:
        "Patients create an account, input their symptoms, schedule video consultations with doctors, and receive prescriptions digitally, all within one secure platform.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. Virtual Health uses end-to-end encryption and follows strict privacy policies to ensure patient data is completely safe and confidential.",
    },
    {
      question: "Can I order medicines through the platform?",
      answer:
        "Absolutely. You can scan prescriptions or select recommended medicines and get them delivered directly to your doorstep.",
    },
    {
      question: "What types of healthcare providers are available?",
      answer:
        "Virtual Health connects you with doctors, specialists, nurses, and pharmacies to provide a complete healthcare experience.",
    },
    {
      question: "Can I track my health metrics over time?",
      answer:
        "Yes. The Health Track Dashboard allows you to monitor your appointments, prescriptions, and health data all in one place.",
    },
    {
      question: "Do I need to pay for consultations?",
      answer:
        "Virtual Health offers both free and premium consultation options. Some features like AI Health Assistant are free, while video consultations may require a fee depending on the provider.",
    },
  ];

  const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        className="py-7 border-b border-white/30 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="flex-1 text-lg font-bold">{question}</span>
          <Plus
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          />
        </div>

        {isOpen && <div className="mt-3 text-white/80">{answer}</div>}
      </div>
    );
  };

  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#1f7a8c] via-[#0d3b66] to-black pb-[72px] sm:pb-24">
      <div className="p-4">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
