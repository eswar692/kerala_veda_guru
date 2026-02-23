import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import FAQ from "../Genaral/FAQ";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import ImageView from "../Genaral/VideoView";

const Home = () => {
  return (
    <div className="flex flex-col   w-full h-full">
      <ImageView />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <FAQ />
    </div>
  );
};

export default Home;

const Problems = () => {
  const problems = [
    {
      title: "Relationship Guidance",
      desc: "Vedic consultation for emotional clarity and relationship harmony.",
      img: "https://i.pinimg.com/1200x/24/19/c7/2419c77357b4f81546c1ae8f4b4242d9.jpg",
    },
    {
      title: "Marriage Support",
      desc: "Astrological insights for better understanding and marital balance.",
      img: "https://i.pinimg.com/736x/55/d8/6c/55d86c64e6d1278d7e7d73faa0d82294.jpg",
    },
    {
      title: "Career Direction",
      desc: "Personalized guidance to navigate career growth and opportunities.",
      img: "https://i.pinimg.com/1200x/ea/4a/df/ea4adf16e1e40f3570cedaff3a8bc7c3.jpg",
    },
    {
      title: "Education & Focus",
      desc: "Spiritual remedies to enhance concentration and learning progress.",
      img: "https://i.pinimg.com/1200x/41/04/77/41047752bbb211d5064516ee12e88fb9.jpg",
    },
    {
      title: "Financial Stability",
      desc: "Vedic insights to improve financial planning and positive mindset.",
      img: "https://i.pinimg.com/736x/5d/78/7f/5d787fd719617e594edb6b1fa0335f55.jpg",
    },
    {
      title: "Family Harmony",
      desc: "Consultation for resolving misunderstandings and improving peace at home.",
      img: "https://i.pinimg.com/736x/29/da/fb/29dafb844bd06001a7430df8ef675a6c.jpg",
    },
    {
      title: "Health & Well-being",
      desc: "Spiritual guidance to support emotional and mental balance.",
      img: "https://i.pinimg.com/1200x/c4/b9/85/c4b985f1a8e0ef855f514a827bc9d8d0.jpg",
    },
    {
      title: "Business Growth",
      desc: "Astrological consultation for strategic planning and growth clarity.",
      img: "https://i.pinimg.com/1200x/e3/82/9f/e3829f3f5aeeacc813cd0a0a8eebc8ac.jpg",
    },
    {
      title: "Life Path Clarity",
      desc: "Discover strengths and direction through traditional Vedic analysis.",
      img: "https://i.pinimg.com/736x/fe/c4/db/fec4dbd0406e4ae90d4cde684526f66b.jpg",
    },
    {
      title: "Spiritual Growth",
      desc: "Guidance to deepen spiritual awareness and inner peace.",
      img: "https://i.pinimg.com/736x/bd/07/98/bd07989b7867692892f45969e20442c0.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {problems.map((item, index) => (
        <div
          key={index}
          className="group bg-gradient-to-b from-emerald-950 to-teal-950
      border border-white/10 rounded-2xl overflow-hidden
      shadow-lg shadow-black/30
      hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover
          group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-serif font-semibold text-amber-300 tracking-wide">
              {item.title}
            </h3>

            <p className="text-sm text-emerald-100/90 mt-3 leading-relaxed">
              {item.desc}
            </p>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6"
            >
              <button
                className="bg-gradient-to-r from-emerald-600 to-teal-600
            text-white px-6 py-2.5 rounded-full text-sm font-medium
            shadow-md shadow-black/30
            hover:from-emerald-500 hover:to-teal-500
            transition-all duration-300"
              >
                WhatsApp Now
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const AboutAstrologer = () => {
  return (
    <section
      className="relative py-20 px-6 
      bg-gradient-to-b from-emerald-50 via-stone-50 to-amber-50 
      overflow-hidden"
    >
      {/* Background Abstract Shapes */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 
        bg-emerald-300/20 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 
        bg-amber-300/20 rounded-full blur-3xl pointer-events-none"
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left Side Content */}
        <div className="space-y-6 md:pr-6 text-center md:text-left">
          <button
            className="bg-gradient-to-r from-emerald-600 to-teal-600 
            text-white px-6 py-2.5 rounded-full text-sm font-medium 
            tracking-wide shadow-md hover:opacity-90 transition"
          >
            ✨ Know the Astrologer
          </button>

          <h2
            className="text-4xl md:text-5xl 
            font-serif font-bold text-amber-700 tracking-wide"
          >
            {company_name}
          </h2>

          <p className="text-stone-800 leading-relaxed text-lg font-light">
            Meet{" "}
            <span className="font-semibold text-emerald-700">
              {company_name}
            </span>
            , a renowned astrologer whose knowledge is rooted in traditional
            Vedic wisdom. His guidance has helped many individuals discover{" "}
            <span className="font-medium text-amber-700">
              clarity, balance, and confidence
            </span>
            .
          </p>

          <p className="text-stone-700 leading-relaxed text-lg font-light">
            Through personalized consultations and thoughtful insights,
            {company_name} supports people in navigating life decisions with
            calmness, awareness, and spiritual grounding.
          </p>

          {/* Call to Action */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 
              bg-gradient-to-r from-amber-500 to-orange-500 
              text-black px-6 py-3 rounded-full font-semibold 
              shadow-md hover:from-amber-400 hover:to-orange-400 
              transition-all"
            >
              Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 
              bg-gradient-to-r from-emerald-600 to-teal-600 
              text-white px-6 py-3 rounded-full font-semibold 
              shadow-md hover:from-emerald-500 hover:to-teal-500 
              transition-all"
            >
              Chat Now
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center relative">
          <div className="relative w-full max-w-md">
            <img
              src="https://i.pinimg.com/1200x/a2/2e/34/a22e34ab3f1765939a7825677df5861f.jpg"
              alt="Astrologer Banner"
              className="w-full h-[420px] rounded-3xl object-cover object-top
              shadow-xl transition-transform duration-500 hover:scale-105"
            />

            {/* Soft Natural Glow */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 
              bg-amber-300/30 blur-3xl rounded-full"
            ></div>
            <div
              className="absolute -top-6 -left-6 w-24 h-24 
              bg-emerald-300/30 blur-3xl rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AstrologyServices = () => {
  const services = [
    {
      title: "Breakup Problem",
      desc: "Breakup problems are common, but astrology provides remedies to heal emotional pain and restore love in relationships.",
      img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    },
    {
      title: "Gf/Bf Dispute",
      desc: "Astrological remedies help smoothen conflicts and bring balance in relationships with your partner.",
      img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    },
    {
      title: "Love Problem",
      desc: "Astrology provides a better path to resolve love issues and bring harmony and trust between partners.",
      img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    },
    {
      title: "Family Problem",
      desc: "Get rid of family disputes with astrological guidance that promotes peace, harmony, and positivity at home.",
      img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    },
  ];

  return (
    <section
      className="relative py-20 
      bg-gradient-to-b from-emerald-950 via-teal-950 to-stone-950 
      overflow-hidden"
    >
      {/* Soft Background Glows */}
      <div
        className="absolute top-0 left-0 w-72 h-72 
        bg-emerald-700/20 rounded-full blur-3xl"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 
        bg-amber-700/20 rounded-full blur-3xl"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2
          className="text-3xl md:text-5xl 
          font-serif font-bold text-amber-300 tracking-wide mb-14"
        >
          Our Astrology Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              rounded-3xl overflow-hidden 
              shadow-lg shadow-black/30 
              hover:shadow-xl hover:shadow-black/40 
              transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover 
                  group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                ></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 text-center">
                <h3
                  className="text-xl 
                  font-serif font-semibold 
                  text-amber-300 tracking-wide"
                >
                  {service.title}
                </h3>

                <p
                  className="text-emerald-100/90 
                  text-sm leading-relaxed font-light"
                >
                  {service.desc}
                </p>

                {/* Call Button */}
                <a href={`tel:${phone_number}`}>
                  <button
                    className="w-full flex items-center justify-center gap-2 
                    py-3 px-6 rounded-full 
                    bg-gradient-to-r from-amber-500 to-orange-500 
                    text-black font-semibold 
                    shadow-md hover:from-amber-400 hover:to-orange-400 
                    transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AstrologyServicesModern = () => {
  const services = [
    {
      title: "Marriage Specialist",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
    },
    {
      title: "Husband & Wife Dispute",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
    },
    {
      title: "Ex Love Back Expert",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
    },
    {
      title: "Financial Problems",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
    },
  ];

  return (
    <section
      className="py-16 px-4 
      bg-gradient-to-b from-emerald-950 via-teal-950 to-stone-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl 
          font-serif font-bold text-amber-300 
          tracking-wide text-center mb-12"
        >
          Astrology Services
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              rounded-3xl overflow-hidden
              shadow-lg shadow-black/30
              hover:shadow-xl hover:shadow-black/40
              transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover
                  group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3
                  className="text-lg 
                  font-serif font-semibold 
                  text-amber-300 tracking-wide"
                >
                  {service.title}
                </h3>

                <a href={`tel:${phone_number}`}>
                  <button
                    className="mt-5 w-full flex items-center justify-center gap-2 
                    bg-gradient-to-r from-emerald-600 to-teal-600
                    text-white text-sm font-medium 
                    py-2.5 rounded-full
                    shadow-md shadow-black/30
                    hover:from-emerald-500 hover:to-teal-500
                    transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllServicesModern = () => {
  const services = [
    {
      title: "Ex Love Back",
      icon: Heart,
      desc: "Astrological guidance to restore emotional balance and understanding.",
      gradient: "from-emerald-600 via-teal-600 to-amber-600",
    },
    {
      title: "Court Case Guidance",
      icon: Scale,
      desc: "Traditional insights to support clarity during legal matters.",
      gradient: "from-amber-600 via-orange-600 to-stone-700",
    },
    {
      title: "Family Harmony",
      icon: Users,
      desc: "Supportive consultation to improve peace in family relationships.",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
    },
    {
      title: "Business Direction",
      icon: Briefcase,
      desc: "Vedic insights to help with planning and professional growth.",
      gradient: "from-teal-600 via-cyan-700 to-slate-700",
    },
    {
      title: "Couple Well-being",
      icon: Users,
      desc: "Guidance focused on emotional well-being and togetherness.",
      gradient: "from-amber-600 via-rose-600 to-stone-700",
    },
    {
      title: "Spiritual Pooja",
      icon: Sparkles,
      desc: "Sacred rituals aimed at inner balance and spiritual grounding.",
      gradient: "from-slate-700 via-indigo-700 to-teal-700",
    },
  ];

  return (
    <section
      className="py-20 px-4 
      bg-gradient-to-br from-emerald-950 via-teal-950 to-stone-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl 
          font-serif font-bold text-center mb-16 
          text-amber-300 tracking-wide"
        >
          Our Services
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <motion.div
              key={id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 180 }}
              className={`relative rounded-3xl p-[1px] 
              bg-gradient-to-br ${service.gradient}`}
            >
              {/* Inner Card */}
              <div
                className="h-full rounded-3xl 
                bg-white/5 backdrop-blur-xl 
                p-8 text-center 
                shadow-lg shadow-black/30"
              >
                {/* Icon */}
                <div
                  className={`mx-auto mb-6 w-20 h-20 rounded-full 
                  flex items-center justify-center 
                  bg-gradient-to-br ${service.gradient} 
                  shadow-md`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl 
                  font-serif font-semibold 
                  text-amber-300 tracking-wide mb-3"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-emerald-100/90 
                  text-sm leading-relaxed font-light mb-6"
                >
                  {service.desc}
                </p>

                {/* Button */}
                <a href={`tel:${phone_number}`}>
                  <button
                    className={`w-full py-3 rounded-full 
                    font-semibold text-black
                    bg-gradient-to-r from-amber-500 to-orange-500
                    shadow-md
                    hover:from-amber-400 hover:to-orange-400
                    transition-all duration-300`}
                  >
                    Contact Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function HomeLastDesign() {
  return (
    <section
      className="mt-2 mb-2 relative 
      bg-gradient-to-br from-emerald-950 via-teal-950 to-stone-950 
      py-20 px-6 overflow-hidden"
    >
      {/* Soft Texture Overlay */}
      <div
        className="absolute inset-0 
        bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] 
        opacity-10"
      ></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div
            className="absolute -inset-4 rounded-full 
            bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-600 
            blur-3xl opacity-30"
          ></div>

          <div
            className="relative w-80 h-80 md:w-96 md:h-96 
            rounded-full overflow-hidden 
            shadow-xl border border-white/20 backdrop-blur-xl"
          >
            <img
              src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
              alt={person_name}
              className="w-full h-full object-cover 
              hover:scale-105 transition-transform duration-700"
            />

            {/* Soft Ring */}
            <div
              className="absolute inset-0 rounded-full 
              border border-amber-400/40"
            ></div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2
            className="text-4xl md:text-5xl 
            font-serif font-bold 
            text-amber-300 tracking-wide"
          >
            {person_name}
          </h2>

          <h3
            className="text-lg md:text-2xl 
            font-medium text-emerald-100 tracking-wide"
          >
            Trusted Spiritual Vedic Guidance
          </h3>

          <p className="text-emerald-100/90 leading-relaxed text-base font-light">
            With deep understanding of{" "}
            <span className="text-amber-300 font-medium">Vastu</span>,{" "}
            <span className="text-emerald-300 font-medium">
              horoscope interpretation
            </span>
            , and{" "}
            <span className="text-teal-300 font-medium">
              spiritual consultation
            </span>
            , {person_name} provides calm, thoughtful guidance to help
            individuals move forward with clarity and confidence.
          </p>

          {/* Contact Section */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-3">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 
              bg-gradient-to-r from-amber-500 to-orange-500 
              text-black px-6 py-3 rounded-full 
              font-semibold shadow-md 
              hover:from-amber-400 hover:to-orange-400 
              transition-all duration-300"
            >
              <Phone size={20} /> Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 
              bg-gradient-to-r from-emerald-600 to-teal-600 
              text-white px-6 py-3 rounded-full 
              font-semibold shadow-md 
              hover:from-emerald-500 hover:to-teal-500 
              transition-all duration-300"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* Special Note */}
          <p
            className="mt-5 text-amber-300 
            font-medium tracking-wide text-sm md:text-base"
          >
            Trusted Guidance • Calm Insights • Spiritual Clarity
          </p>
        </motion.div>
      </div>
    </section>
  );
}
