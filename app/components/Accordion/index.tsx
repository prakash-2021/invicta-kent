// components/Accordion.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto text-white">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-700">
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center h-20 text-left font-semibold cursor-pointer"
          >
            <span className="ik-heading--h4">{item.title}</span>
            {activeIndex === index ? (
              <BiMinus size={24} />
            ) : (
              <BiPlus size={24} />
            )}
          </button>

          {/* Animated Content */}
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-4">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
