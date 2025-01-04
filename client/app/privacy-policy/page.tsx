import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Privacy Policy</h1>
        
        <div className="bg-blue-50 shadow-md rounded-lg p-8">
          <p className="text-sm text-gray-600 mb-6 italic">
            Last updated: January 4, 2025
          </p>
  
          <div className="space-y-6">
            <section>
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-blue-600 mr-4 w-12 text-right">1.</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to Valcheq Technologies. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we collect, use, and safeguard your personal data and tell you about your privacy rights and how the law protects you.
                  </p>
                </div>
              </div>
            </section>
  
            <section>
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-blue-600 mr-4 w-12 text-right">2.</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Data We Collect</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We may collect, use, store and transfer different kinds of personal data about you, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Contact Data: We collect your email address to be able to contact you when you fill the form on our website.</li>
                    <li>Usage Data - We track anonymous user interactions within our app to enhance your experience and tailor our future features. This data is anonymized to ensure it is not linked to any personal information</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section>
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-blue-600 mr-4 w-12 text-right">3.</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">How We Use Your Data</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>To provide and maintain our service.</li>
                    <li>To notify you about changes to our service.</li>
                    <li>To provide customer support.</li>
                    <li>To gather analysis or valuable information so that we can improve our service.</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section>
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-blue-600 mr-4 w-12 text-right">4.</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Data Storage and Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or alteration. You can be assured that your personal data is safe with us.
                  </p>
                </div>
              </div>
            </section>
  
            <section>
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-blue-600 mr-4 w-12 text-right">5.</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Data Deletion/Modification</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You have the right to request deletion or modification of your personal data at any time. Please contact us to exercise this right.
                  </p>
                </div>
              </div>
            </section>
  
            <section>
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-blue-600 mr-4 w-12 text-right">6.</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this privacy policy from time to time. The updated version will be effective as soon as it is accessible. We will notify you of any material changes to our privacy policy by email or through a prominent notice on our website.
                  </p>
                </div>
              </div>
            </section>
  
            <section>
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-blue-600 mr-4 w-12 text-right">7.</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions or concerns about our privacy policy, please contact us at: kelvinkayoi@gmail.com. We will respond to your inquiry as soon as possible.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  
  