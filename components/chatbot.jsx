// src/pages/Bot.jsx
import React, { useState, useEffect, useRef } from "react";
import { generateResponse } from "@/app/services/gemini";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-input";

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  const placeholders = [
    "I have a headache, what should I do?",
    "What are the symptoms of cold and flu?",
    "How can I boost my immunity?",
    "Is my fever something to worry about?",
    "Give me some daily health tips",
    "What should I eat for better digestion?",
    "How much water should I drink daily?",
    "Why am I feeling tired all the time?",
    "How to relieve stress quickly?",
    "What are common signs of dehydration?",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const botResponse = await generateResponse(inputMessage);
      const botMessage = {
        text: botResponse,
        sender: "bot",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          text: "⚠️ Something went wrong. Please try again.",
          sender: "bot",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-b from-[#e8f8f5] to-[#d6f0ff]">
      {/* MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 scroll-smooth">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-xl text-sm sm:text-base break-words ${
                m.sender === "user"
                  ? "bg-gradient-to-r from-[#27a5bf] to-[#1b8772] text-white"
                  : "bg-white text-gray-800 border border-teal-100"
              } shadow`}
            >
              {m.text}
              <div className="text-[10px] sm:text-xs opacity-60 mt-1 text-right">
                {new Date(m.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-teal-100 p-3 rounded-xl shadow-md flex space-x-2">
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* INPUT AREA */}
      <div className="p-2 sm:p-3 bg-gray-800 border-t border-gray-700">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Bot;
