import { Mail, Phone } from "lucide-react";
import Form from "../Genaral/Form";
import {
  address,
  company_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-pink-300/30 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-violet-300/30 blur-[120px] rounded-full z-0" />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent drop-shadow-lg">
          {company_name}
        </h2>
        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
          We are here to support you on your personal journey. Reach out via{" "}
          <span className="font-medium text-fuchsia-600">WhatsApp</span>,{" "}
          <span className="font-medium text-fuchsia-600">Phone</span>, or fill
          the form below to connect with us directly.
        </p>
      </div>

      {/* Grid: Contact Info & Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Contact Info Panel */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-10">
          <h3 className="text-3xl font-semibold text-violet-700 mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Whether you are looking for clarity about{" "}
            <span className="text-fuchsia-600 font-medium">career</span>,{" "}
            <span className="text-fuchsia-600 font-medium">relationships</span>,
            or{" "}
            <span className="text-fuchsia-600 font-medium">life planning</span>,
            our consultations are here to help.
          </p>

          <h3 className="font-semibold text-gray-800">{company_name}</h3>

          <p className="open-sans text-xs md:text-sm mt-1 max-w-[340px] leading-relaxed text-gray-700">
            {address.line1}
            <br />
            {address.line2}
            <br />
            {address.District}, {address.state} – {address.pincode},{" "}
            {address.country}
            <br />
            <span className="text-purple-400 font-semibold">
              Phone: {phone_number}
            </span>
            <br />
            <span className="text-pink-400 font-semibold">
              WhatsApp: {whatsapp_number}
            </span>
          </p>

          <br />
          <div className="space-y-5 text-lg text-gray-800">
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-pink-600" />
              <span>
                <span className="font-semibold">WhatsApp:</span>{" "}
                {whatsapp_number}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-pink-600" />
              <span>
                <span className="font-semibold">Phone:</span> {phone_number}
              </span>
            </p>
          </div>
        </div>

        {/* Form Panel */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-10">
          <h3 className="text-3xl font-semibold text-center text-rose-700 mb-6">
            Book a Session
          </h3>
          <Form />
        </div>
      </div>

      {/* Services Info Section */}
      <div className="mt-24 max-w-5xl mx-auto text-center relative z-10">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent drop-shadow-sm">
          Our Consultation Services
        </h3>
        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
          Offering detailed{" "}
          <span className="text-fuchsia-600 font-medium">
            palmistry sessions
          </span>
          ,{" "}
          <span className="text-fuchsia-600 font-medium">
            horoscope analysis
          </span>
          ,{" "}
          <span className="text-fuchsia-600 font-medium">
            personal well-being reviews
          </span>
          , and{" "}
          <span className="text-fuchsia-600 font-medium">
            Vastu consultations
          </span>
          . Gain clarity and direction through personalized traditional Kerala
          insights into{" "}
          <span className="italic text-gray-800">
            relationships, career, financial planning, and personal well-being
          </span>
          .
        </p>
      </div>
    </div>
  );
}
