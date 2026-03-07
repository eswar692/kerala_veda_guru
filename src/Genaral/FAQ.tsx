import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { person_name, phone_number } from "./secrete";

const faqs = [
  {
    question: `Can We Meet ${person_name} in Person?`,
    answer: `Yes, in-person sessions are available with prior appointment. 📲 WhatsApp: ${phone_number}`,
  },
  {
    question: "Is Phone Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in India. 📞 Phone: ${phone_number}`,
  },
  {
    question: "What Kind of Consultation Services Are Available?",
    answer:
      "We provide Vastu, horoscope reading, career planning, marriage support, health well-being, and business direction consultations.",
  },
  {
    question: "What Kind of Products Are Available?",
    answer:
      "Traditional Kerala wellness products, gemstones, and well-being items are available.",
  },
  {
    question: "Are Learning Sessions Offered?",
    answer:
      "Yes, traditional knowledge learning sessions are offered for different levels.",
  },
  {
    question: "What Is Covered in the Learning Sessions?",
    answer:
      "We cover horoscope reading, palmistry basics, and traditional Kerala knowledge practices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-24 px-6 
      bg-gradient-to-br from-emerald-950 via-teal-950 to-stone-950 
      text-white overflow-hidden poppins"
    >
      {/* Soft Background Glows */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-700/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl 
          font-serif font-bold text-center 
          text-amber-300 tracking-wide"
        >
          Frequently Asked Questions
        </h2>

        <p className="text-center text-emerald-100/80 mt-4 text-lg font-light">
          Clear answers to help you understand our consultation process.
        </p>

        {/* FAQ List */}
        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-2xl 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              shadow-lg shadow-black/30 
              overflow-hidden transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center 
                px-6 py-5 text-left 
                text-lg md:text-xl 
                font-medium font-serif 
                text-emerald-100 
                hover:text-amber-300 transition-colors"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-amber-300" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-amber-300" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-emerald-100/90 leading-relaxed text-base font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <a
            href={`https://wa.me/${phone_number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <button
              className="flex items-center gap-3 
              bg-gradient-to-r from-emerald-600 to-teal-600 
              text-white font-semibold 
              py-4 px-8 rounded-full 
              shadow-md shadow-black/30 
              hover:from-emerald-500 hover:to-teal-500 
              transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Chat With Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
