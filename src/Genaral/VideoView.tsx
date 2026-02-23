import { phone_number, whatsapp_number, company_name } from "./secrete";

const ImageView = () => {
  return (
    <div className="my-2 relative w-full h-[500px] overflow-hidden mb-4">
      {/* Image Background */}
      <img
        src="https://i.pinimg.com/1200x/67/24/c1/6724c1236dfb7f5f96e422ef92cb6fd2.jpg"
        alt="Astrology Banner"
        className="w-full h-full object-cover scale-105"
      />

      {/* Natural Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-black/90 to-amber-950/90"></div>

      {/* Text & Buttons Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-amber-300 tracking-wide drop-shadow-md">
          {company_name}
        </h1>

        <p className="mt-4 text-emerald-100 text-sm md:text-lg leading-relaxed max-w-xs md:max-w-xl font-light tracking-wide">
          Renowned astrologer offering personalized Vedic guidance for clarity,
          spiritual growth, and meaningful life direction. Trusted worldwide.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href={`tel:${phone_number}`}
            className="bg-gradient-to-r from-amber-500 to-orange-500 
            text-black px-7 py-3 rounded-full 
            font-semibold shadow-md 
            hover:from-amber-400 hover:to-orange-400 
            transition-all duration-300"
          >
            Call Now
          </a>

          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 
            text-white px-7 py-3 rounded-full 
            font-semibold shadow-md 
            hover:from-emerald-500 hover:to-teal-500 
            transition-all duration-300"
          >
            Chat Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
