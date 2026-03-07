import { person_name } from "../Genaral/secrete";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-blue-50 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-10 md:p-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          About Us {person_name}
        </h2>
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed space-y-4">
          <span className="font-bold text-indigo-700">{person_name}</span> is a
          trusted and respected traditional Kerala practitioner with decades of
          experience. With deep knowledge of ancient Kerala practices and a
          genuine commitment to helping others, he has established himself as a
          reliable consultant to individuals and families across India.
          <br />
          <br />
          Through his extensive experience and thoughtful approach,{" "}
          <span className="font-semibold text-violet-700">
            {person_name}
          </span>{" "}
          offers a wide range of services including horoscope reading, Vastu
          consultation, palmistry, and phone consultations. His knowledge spans
          traditional Kerala practices, holistic well-being, and personal
          development, making him a respected and trusted name in his field.
          <br />
          <br />
          Known for his{" "}
          <span className="font-semibold text-indigo-600">clarity</span> and
          thoughtful insights,{" "}
          <span className="font-semibold text-violet-700">{person_name}</span>{" "}
          has built a loyal following of clients who value the positive
          direction and confidence his consultations bring to their lives.
          <br />
          <br />
          If you are looking for a trusted and experienced consultant, we
          welcome you to get in touch.
        </p>
      </div>
    </section>
  );
}
