// src/components/ChatWidget.jsx
"use client";
import React, { useState } from "react";
import Bot from "./chatbot";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#1b4872] to-[#27a5bf] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <IoChatboxEllipsesOutline size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            fixed bottom-6 right-6 z-50 
            w-[90vw] max-w-[380px] 
            h-[70vh] max-h-[540px]
            bg-white rounded-2xl shadow-2xl 
            overflow-hidden border border-gray-200 flex flex-col
            sm:w-[360px] sm:h-[520px]
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-[#1b4872] to-[#27a5bf] text-white">
            <h2 className="font-semibold text-lg truncate">
              Health Chat Assistant
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-sm hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Bot */}
          <Bot />
        </div>
      )}
    </>
  );
};

export default ChatWidget;
