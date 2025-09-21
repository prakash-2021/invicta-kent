// components/Accordion.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const AccordionContent = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto text-primary-dark-blue">
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
            className="w-full flex justify-between items-center h-22 text-left font-semibold cursor-pointer"
          >
            <span className="ik-heading--h4">{item.title}</span>
            {activeIndex === index ? (
              <BiChevronUp size={24} />
            ) : (
              <BiChevronDown size={24} />
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
                <div>{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
