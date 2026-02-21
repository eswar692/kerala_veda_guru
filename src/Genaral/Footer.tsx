import { motion } from "framer-motion";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import useInViewOnce from "./InView";
import {
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
      className="relative mt-2 w-full overflow-hidden text-white
  bg-gradient-to-br from-fuchsia-800 via-purple-900 to-indigo-950 pt-20"
    >
      {/* Strong Color Blobs */}
      <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-pink-600 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/4 -right-32 w-[520px] h-[520px] bg-indigo-700 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-yellow-500 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* ABOUT */}
        <div className="rounded-3xl p-6 bg-purple-950 border border-white/20">
          <h2 className="text-2xl font-extrabold montserrat text-white mb-3">
            About {company_name}
          </h2>
          <p className="text-sm leading-relaxed text-white">
            <b className="text-white">{company_name}</b> is one of South India’s
            trusted astrologers. <b>{person_name}</b> provides guidance in love,
            marriage, career & life.
          </p>
        </div>

        {/* CONTACT */}
        <div className="rounded-3xl p-6 bg-indigo-950 border border-white/20">
          <h2 className="text-2xl font-bold montserrat text-white mb-4">
            Contact Us
          </h2>

          <p className="flex items-center gap-2 text-white">
            <Phone className="w-5 h-5 text-white" />
            {phone_number}
          </p>

          <p className="flex items-center gap-2 text-white mt-2">
            <MessageCircle className="w-5 h-5 text-white" />
            {whatsapp_number}
          </p>

          <p className="text-sm mt-3 leading-relaxed text-white">
            <b>No. 34, 7th Cross, Vijay Nagar</b>
            <br />
            98/3 DC Road, Kuttiyappa Garden
            <br />
            Bilekahalli, Bengaluru – 560076
            <br />
            Karnataka, India
            <br />
            <a href="tel:9110222675" className="underline">
              📞 +91 91102 22675
            </a>
          </p>

          <p className="mt-3 font-semibold text-white">
            Best Astro Guidance 🌟
          </p>
        </div>

        {/* SERVICES */}
        <div className="rounded-3xl p-6 bg-fuchsia-950 border border-white/20">
          <h2 className="text-2xl font-bold montserrat text-white mb-3">
            Our Services
          </h2>
          <ul className="space-y-2 text-sm">
            {services.map((service, i) => (
              <li key={i} className="flex items-center gap-2 text-white">
                <ChevronRight className="w-4 h-4 text-white" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div className="rounded-3xl p-6 bg-emerald-950 border border-white/20">
          <h2 className="text-2xl font-bold montserrat text-white mb-3">
            Why Choose Us?
          </h2>
          <ul className="space-y-2 text-sm">
            {whyChoose.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-white">
                <ChevronRight className="w-4 h-4 text-white" />
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
    <div className=" bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-800 py-5 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="text-center md:text-left flex flex-col md:flex-row gap-4 items-center">
          <p className="font-montserrat text-sm text-gray-100">
            Designed with ❤️ by
          </p>
          <a
            href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
            className="transition transform hover:scale-110"
          >
            <button className="bg-yellow-400 text-black font-bold py-2 px-5 rounded-full shadow-lg hover:shadow-yellow-500/70 transition-all">
              Eswar – Pro Daddy Agency
            </button>
          </a>
        </div>

        {/* Right */}
        <div className="text-center md:text-right text-sm text-gray-200">
          © {new Date().getFullYear()}{" "}
          <a
            href={website_url}
            target="_blank"
            className="font-semibold hover:text-yellow-300 transition"
          >
            {company_name}
          </a>{" "}
          – All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
