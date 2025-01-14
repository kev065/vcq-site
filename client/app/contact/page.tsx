import type { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Valcheq Technologies for cutting-edge web development, data analytics, and AI solutions. We\'re here to help your business thrive in the digital age.',
  openGraph: {
    title: 'Contact Valcheq Technologies',
    description: 'Reach out to us for innovative tech solutions tailored to your business needs.',
    url: 'https://valcheq.com/contact',
    siteName: 'Valcheq Technologies',
    images: [
      {
        url: 'https://valcheq.com/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact page - Valcheq Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Contact Us</h1>
        <p className="text-center text-lg mb-12 text-gray-600">Email, call, visit or fill out the form below to reach us anytime.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="43c9e142-62d3-4ed8-85ca-e5bf52a7399f"
                />

                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                <p>1st Flr, Milele Center, Kitengela, KE</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <a href="tel:+254703649833" className="text-blue-600 hover:underline">
                    +254 703649833
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <a href="mailto:kelvinkayoi@gmail.com" className="text-blue-600 hover:underline">kelvinkayoi@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <p>Monday - Friday: 8:00 AM - 5:00 PM (EAT)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Ready to Get Started?</h2>
          <p className="mb-6 text-gray-600">Explore our services and see how we can help your business grow.</p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Valcheq Technologies",
        "description": "Get in touch with Valcheq Technologies for cutting-edge Web Development, Data Analytics, and AI solutions.",
        "url": "https://valcheq.com/contact",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254 703649833",
          "contactType": ["sales", "technical support", "general inquiries", "project inquiries", "technical consultations"],
          "email": "kelvinkayoi@gmail.com",
          "areaServed": "EA",
          "availableLanguage": ["English"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Milele Centre, Kitengela",
          "addressLocality": "Nairobi, Nairobi County",
          "addressRegion": "NBO",
          "postalCode": "46-00242, Kitengela",
          "addressCountry": "KE"
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "sameAs": [
          "https://www.linkedin.com/company/valcheq"
        ]
      })}} />
    </main>
  )
}

