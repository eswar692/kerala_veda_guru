import { company_name } from "../Genaral/secrete";

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-indigo-900 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-8">
          Welcome to <span className="font-semibold">{company_name}</span>. By
          accessing or using our website, services, or communicating with us via
          WhatsApp, you agree to be bound by these Terms & Conditions. Please
          read them carefully.
        </p>

        {/* Sections */}
        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              1. About {company_name}
            </h2>
            <p>
              {company_name} provides genuine business services and guidance as
              described on this website. We strive to keep all information
              transparent, accurate, and up to date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              2. Use of Our Services
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You will use our services only for lawful purposes</li>
              <li>You will not misuse or attempt to disrupt our website</li>
              <li>
                You will not copy or resell our content without permission
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
            <h2 className="text-xl font-bold text-indigo-900 mb-2">
              3. WhatsApp Communication & User Consent
            </h2>
            <p>
              By submitting your contact details, you explicitly agree (opt-in)
              to receive messages from {company_name} via WhatsApp. These
              messages may include service-related updates, responses to
              inquiries, or important notifications.
            </p>
            <p className="mt-2 font-medium">
              You may opt out at any time by replying{" "}
              <span className="font-bold">“STOP”</span>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              4. Data Usage
            </h2>
            <p>
              Any personal data shared with us is handled responsibly and in
              accordance with our Privacy Policy. We do not sell or misuse your
              personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, and
              branding, belongs to {company_name} unless stated otherwise.
              Unauthorized use is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              {company_name} shall not be held liable for any direct or indirect
              damages arising from the use of our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              7. Changes to These Terms
            </h2>
            <p>
              We may update these Terms & Conditions from time to time.
              Continued use of our services indicates acceptance of the updated
              terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us via the details provided on our Contact page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermsAndConditions;
