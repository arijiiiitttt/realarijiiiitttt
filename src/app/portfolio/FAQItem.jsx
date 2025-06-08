"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-gray-800 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left font-semibold text-gray-800 dark:text-white"
      >
        <span>{question}</span>
        <span>{open ? <FaMinus size={14} /> : <FaPlus size={14} />}</span>
      </button>
      {open && (
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
