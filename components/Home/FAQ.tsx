'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from '../Reusable/Icons';

const FAQData = [
  {
    question: 'How do I place an order?',
    answer:
      'You can place an order by selecting your desired bracelet, customizing it if needed, and proceeding to checkout. We accept various payment methods including Cash on Delivery.',
  },
  {
    question: 'What is your delivery timeline?',
    answer:
      'We typically deliver within 5-7 business days across India. Delivery time may vary based on your location and customization requirements.',
  },
  {
    question: 'Do you offer customization?',
    answer:
      'Yes! We offer personalized customization for our bracelets. You can choose colors, add names, or select specific designs to make your bracelet unique.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We accept returns within 7 days of delivery if the product is unused and in its original packaging. Please contact our customer service for return instructions. Unboxing video is required for the return policy.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 sm:p-10 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Frequently Asked <span className="text-[#E82A4C]">Questions</span>
        </h1>
      </div>
      <div className="flex flex-col gap-6 w-full md:w-3/4 mx-auto">
        {FAQData.map((item, index) => (
          <motion.div
            key={index}
            className="overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="p-4 cursor-pointer flex justify-between items-center transition"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {item.question}
              </h2>
              {openIndex === index ? (
                <ArrowUp className="text-2xl text-gray-600" />
              ) : (
                <ArrowDown className="text-2xl text-gray-600" />
              )}
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openIndex === index
                  ? { height: 'auto', opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 text-gray-600">
                <p>{item.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
