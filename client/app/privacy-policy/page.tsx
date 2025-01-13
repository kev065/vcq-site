import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about how Valcheq Technologies collects, uses, and protects your personal data. Our privacy policy ensures transparency and compliance with data protection laws.",
  openGraph: {
    title: "Privacy Policy | Valcheq Technologies",
    description: "Understand how Valcheq Technologies handles your personal data and protects your privacy.",
    url: "https://valcheq.com/privacy-policy",
    siteName: "Valcheq Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 4, 2025";

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Privacy Policy</h1>
      
      <article className="bg-blue-50 shadow-md rounded-lg p-8">
        <p className="text-sm text-gray-600 mb-6 italic">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Valcheq Technologies. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we collect, use, and safeguard your personal data and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Data We Collect</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Contact Data: We collect your email address when you fill out forms on our website.</li>
              <li>Usage Data: We track anonymous user interactions within our app to enhance your experience and tailor our future features. This data is anonymized to ensure it is not linked to any personal information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. How We Use Your Data</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To provide and maintain our service.</li>
              <li>To notify you about changes to our service.</li>
              <li>To provide customer support.</li>
              <li>To gather analysis or valuable information so that we can improve our service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or alteration. You can be assured that your personal data is safe with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Data Deletion/Modification</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to request deletion or modification of your personal data at any time. Please <Link href="/#contact" className="text-blue-600 hover:underline">contact us</Link> to exercise this right.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. The updated version will be effective as soon as it is accessible. We will notify you of any material changes to our privacy policy by email or through a prominent notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about our privacy policy, please contact us at: <a href="mailto:kelvinkayoi@gmail.com" className="text-blue-600 hover:underline">kelvinkayoi@gmail.com</a>. We will respond to your inquiry as soon as possible.
            </p>
          </section>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "Valcheq Technologies privacy policy detailing how we collect, use, and protect your personal data.",
        "publisher": {
          "@type": "Organization",
          "name": "Valcheq Technologies",
          "logo": {
            "@type": "ImageObject",
            "url": "https://valcheq.com/images/valcheq_logo.png"
          }
        },
        "datePublished": "2025-01-04",
        "dateModified": lastUpdated
      })}} />
    </main>
  );
}

