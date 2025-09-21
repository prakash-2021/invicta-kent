// components/Accordion.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const FaqAccordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={twMerge(
            items.length === index + 1 ? "" : "border-b border-border"
          )}
        >
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center h-23 text-left font-semibold cursor-pointer"
          >
            <span className="ik-body--lg--500">{item.title}</span>
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
                <p className="pb-10 text-blue-gray">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
