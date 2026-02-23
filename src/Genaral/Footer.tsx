import { motion } from "framer-motion";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
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

  const services = [
    "Love Expert",
    "Astrology Specialist",
    "Love Problem Expert",
    "Love Marriage Approval",
    "Quick Rishta Marriage",
  ];

  const whyChoose = [
    "Relationship Problem",
    "Husband-Wife Dispute Specialist",
    "Happy Clients",
    "Online Astrologer",
  ];

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
        <div
          className="rounded-3xl p-6 
          bg-white/5 backdrop-blur-xl 
          border border-white/10"
        >
          <h2
            className="text-2xl font-serif font-semibold 
            text-amber-300 mb-3 tracking-wide"
          >
            About {company_name}
          </h2>
          <p className="text-sm leading-relaxed text-emerald-100/90 font-light">
            <span className="font-medium text-emerald-100">{company_name}</span>{" "}
            offers trusted Vedic guidance rooted in traditional wisdom.
            <span className="font-medium text-amber-300">
              {" "}
              {person_name}
            </span>{" "}
            provides thoughtful consultation in relationships, career, and
            personal growth.
          </p>
        </div>

        {/* CONTACT */}
        <div
          className="rounded-3xl p-6 
          bg-white/5 backdrop-blur-xl 
          border border-white/10"
        >
          <h2
            className="text-2xl font-serif font-semibold 
            text-amber-300 mb-4 tracking-wide"
          >
            Contact Us
          </h2>

          <p className="flex items-center gap-2 text-emerald-100/90">
            <Phone className="w-5 h-5 text-amber-300" />
            {phone_number}
          </p>

          <p className="flex items-center gap-2 text-emerald-100/90 mt-2">
            <MessageCircle className="w-5 h-5 text-amber-300" />
            {whatsapp_number}
          </p>

          <p
            className="text-sm mt-3 leading-relaxed 
            text-emerald-100/80 font-light"
          >
            <b className="text-emerald-100">{address.line1}</b>
            <br />
            {address.line2}
            <br />
            {address.District}, {address.state} – {address.pincode},{" "}
            {address.country}
            <br />
            <a
              href={`tel:${phone_number}`}
              className="underline text-amber-300"
            >
              📞 +91 {phone_number}
            </a>
          </p>

          <p className="mt-3 font-medium text-amber-300">
            Trusted Vedic Guidance
          </p>
        </div>

        {/* SERVICES */}
        <div
          className="rounded-3xl p-6 
          bg-white/5 backdrop-blur-xl 
          border border-white/10"
        >
          <h2
            className="text-2xl font-serif font-semibold 
            text-amber-300 mb-3 tracking-wide"
          >
            Our Services
          </h2>
          <ul className="space-y-2 text-sm">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex items-center gap-2 
                text-emerald-100/90 font-light"
              >
                <ChevronRight className="w-4 h-4 text-amber-300" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div
          className="rounded-3xl p-6 
          bg-white/5 backdrop-blur-xl 
          border border-white/10"
        >
          <h2
            className="text-2xl font-serif font-semibold 
            text-amber-300 mb-3 tracking-wide"
          >
            Why Choose Us?
          </h2>
          <ul className="space-y-2 text-sm">
            {whyChoose.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 
                text-emerald-100/90 font-light"
              >
                <ChevronRight className="w-4 h-4 text-amber-300" />
                {item}
              </li>
            ))}
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
