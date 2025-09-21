// components/Accordion.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface AccordionItem {
  title: string;
  content: string;
  description: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export const SafetyAccordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#DEE1E6]">
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex flex-col lg:flex-row gap-4 lg:gap-31 py-8 lg:py-0 items-center lg:h-24 text-left cursor-pointer"
          >
            <div className="flex lg:hidden items-center justify-between gap-4 w-full ">
              <span className="ik-heading--h4 w-full max-w-96">
                {item.title}
              </span>
              <div className="lg:hidden">
                {activeIndex === index ? (
                  <BiChevronUp size={24} />
                ) : (
                  <BiChevronDown size={24} />
                )}
              </div>
            </div>
            <span className="hidden lg:block ik-heading--h4 w-full max-w-96">
              {item.title}
            </span>
            <div className="flex items-center justify-between gap-4 w-full">
              <span>{item.content}</span>
              <div className="hidden lg:block">
                {activeIndex === index ? (
                  <BiChevronUp size={24} />
                ) : (
                  <BiChevronDown size={24} />
                )}
              </div>
            </div>
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
                <div className="pb-6 lg:pl-127 space-y-3">
                  {item.description.map((desc, idx) => (
                    <p key={idx} className="flex gap-3">
                      <span className="min-w-0.5 h-0.5 rounded-full bg-primary-dark-blue mt-3" />
                      <span>{desc}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
