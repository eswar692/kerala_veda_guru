import { phone_number, whatsapp_number, company_name } from "./secrete";

const ImageView = () => {
  return (
    <div className="relative w-full h-[450px] overflow-hidden rounded-none mb-2">
      {/* Image Background */}
      <img
        src="https://i.pinimg.com/736x/b6/60/33/b66033ad954c9e1efbe66fe079e4ab75.jpg" // 👉 mee image path ikkada
        alt="Astrology Banner"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text & Buttons Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg montserrat">
          {company_name}
        </h1>

        <p className="mt-4 text-white text-sm md:text-lg open-sans leading-snug max-w-xs md:max-w-lg">
          Renowned astrologer providing personalized astrology services for
          accurate guidance, spiritual growth, and life solutions. Trusted
          worldwide.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href={`tel:${phone_number}`}
            className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Call Now
          </a>

          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Chat Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
