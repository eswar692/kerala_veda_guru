import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import useInViewOnce from "./InView";
import {
  address,
  company_name,
  person_name,
  phone_number,
  website_url,
  whatsapp_number,
} from "./secrete";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  return (
    <motion.footer
      className="relative mt-2 w-full overflow-hidden text-white z-[999]
      bg-gradient-to-br from-emerald-950 via-teal-950 to-stone-950 pt-20"
    >
      {/* Soft Background Glows */}
      <div
        className="absolute -top-24 -left-24 w-[450px] h-[450px] 
        bg-emerald-700/20 rounded-full blur-3xl"
      ></div>
      <div
        className="absolute top-1/4 -right-32 w-[520px] h-[520px] 
        bg-amber-700/20 rounded-full blur-3xl"
      ></div>
      <div
        className="absolute bottom-0 left-1/3 w-[420px] h-[420px] 
        bg-teal-700/20 rounded-full blur-3xl"
      ></div>

      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-12 
        grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* ABOUT */}
        <h2
          className="text-3xl font-serif font-semibold 
  text-amber-300  tracking-wide"
        >
          About {company_name}
        </h2>

        <p className="pl-5 poppins text-xl leading-relaxed text-emerald-100/90 font-sans font-light">
          <span className="font-medium text-emerald-100">{company_name}</span>{" "}
          offers traditional Vedic guidance rooted in experience and ethical
          practice.
          <span className="font-medium text-amber-300">
            {" "}
            {person_name}
          </span>{" "}
          provides thoughtful consultations focused on clarity, balance, and
          personal well-being across relationships, career, and life decisions.
        </p>

        {/* CONTACT */}
        <div className="flex flex-col gap-2 ">
          <h2
            className="text-3xl font-serif font-semibold 
  text-amber-300  tracking-wide mb-4"
          >
            Get in Touch
          </h2>
          <div className="poppins text-xl pl-5 flex flex-col gap-3 border-l border-white/20 ">
            <p className="flex items-center gap-2 text-emerald-100/90 ">
              <Phone className="w-5 h-5 text-amber-300" />
              <span className="tracking-wide">{phone_number}</span>
            </p>

            <p className="flex items-center gap-2 text-emerald-100/90  ">
              <MessageCircle className="w-5 h-5 text-amber-300" />
              <span className="tracking-wide">{whatsapp_number}</span>
            </p>

            <p className="  leading-relaxed text-emerald-100/80 font-light ">
              <span className="font-medium text-emerald-100">
                {address.line1}
              </span>
              <br />
              {address.line2}
              <br />
              {address.District}, {address.state} – {address.pincode}
              <br />
              {address.country}
            </p>

            <a
              href={`tel:${phone_number}`}
              className="inline-block  text-amber-300 underline tracking-wide"
            >
              📞 Call for Consultation
            </a>

            <p className=" text-sm font-medium text-amber-300">
              Ethical • Confidential • Respectful
            </p>
          </div>
        </div>

        {/* Policy */}
        <div className="poppins ">
          <h2
            className="text-3xl font-serif font-semibold 
            text-amber-300 mb-3 tracking-wide"
          >
            Policy & Support
          </h2>
          <ul className="space-y-2 text-xl pl-5">
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </motion.div>

      <CopyRightAndContact />
    </motion.footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <div
      className="
      bottom-0 left-0 right-0 
      bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-950 
      py-6 border-t border-white/10 shadow-inner
    "
    >
      <div
        className="max-w-7xl mx-auto px-6 
        flex flex-col md:flex-row 
        justify-between items-center gap-4"
      >
        {/* Left */}
        <div
          className="text-center md:text-left 
          flex flex-col md:flex-row gap-4 items-center"
        >
          <p className="text-sm text-emerald-100/80 font-light tracking-wide">
            Designed with care by
          </p>

          <a
            href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
            className="transition-transform hover:scale-105"
          >
            <button
              className="
              bg-gradient-to-r from-amber-500 to-orange-500
              text-black font-semibold 
              py-2 px-5 rounded-full 
              shadow-md shadow-black/30
              hover:from-amber-400 hover:to-orange-400 
              transition-all
            "
            >
              Eswar – Pro Daddy Agency
            </button>
          </a>
        </div>

        {/* Right */}
        <div
          className="text-center md:text-right 
          text-sm text-emerald-100/80 font-light tracking-wide"
        >
          © {new Date().getFullYear()}{" "}
          <a
            href={website_url}
            target="_blank"
            className="font-medium text-amber-300 hover:text-amber-200 transition"
          >
            {company_name}
          </a>{" "}
          • All Rights Reserved
        </div>
      </div>
    </div>
  );
};
