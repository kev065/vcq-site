import type { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, BarChart, Brain } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RevealOnScroll } from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Valcheq Technologies | Web Development, Data Analytics, and AI Solutions',
  description: 'Empowering businesses with cutting-edge Web Development, Data Analytics, and AI solutions. Valcheq Technologies offers tailored services to help your business thrive in the digital age.',
  openGraph: {
    title: 'Valcheq Technologies - Empowering Your Digital Journey',
    description: 'Cutting-edge Web Development, Data Analytics, and AI Solutions for businesses.',
    url: 'https://valcheq.com',
    siteName: 'Valcheq Technologies',
    images: [
      {
        url: 'https://valcheq.com/images/homepage-og.jpg',
        width: 1767,
        height: 1317,
        alt: 'Valcheq Technologies - Web Development, Data Analytics, and AI Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <>
    <main className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
        <RevealOnScroll threshold={0} delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Your Digital Journey</h1>
          </RevealOnScroll>
          <RevealOnScroll threshold={0} delay={0.4}>
          <p className="text-xl mb-8">Web Development | Data Analytics | AI Solutions</p>
          </RevealOnScroll>
          <RevealOnScroll threshold={0} delay={0.6}>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="#contact">Contact Us</Link>
          </Button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
        <RevealOnScroll threshold={0.1}>
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Services</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealOnScroll threshold={0.1} delay={0.2}>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Code className="mr-2" /> Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Web Application Development</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Cross-Platform App Development</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> E-commerce Solutions</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Content Management System (CMS)</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Personal & Portfolio Websites</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Payment Integration</li>
                </ul>
              </CardContent>
            </Card>
            </RevealOnScroll>
            <RevealOnScroll threshold={0.1} delay={0.4}>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <BarChart className="mr-2" /> Data Analytics & Business Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Data Strategy Consulting</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Dashboard Creation</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Business Reporting</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Customer Behaviour Analysis</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Real-Time Analytics</li>
                </ul>
              </CardContent>
            </Card>
            </RevealOnScroll>
            <RevealOnScroll threshold={0.1} delay={0.6}>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Brain className="mr-2" /> AI & Machine Learning Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Predictive Analytics/Modeling</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> AI-Powered Applications</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Business Chatbots</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Machine Learning Pipelines</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> NLP & Sentiment Analysis</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Recommendation Systems</li>
                </ul>
              </CardContent>
            </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <RevealOnScroll threshold={0.1}>
      <section id="about" className="bg-blue-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">About Valcheq Technologies</h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-blue-900">
            At Valcheq Technologies, we&apos;re passionate about leveraging cutting-edge technology to solve complex business challenges. Our team of experts specializes in Web Development, Data Analytics, and AI solutions, providing tailored services to help businesses thrive in the digital age.
          </p>
        </div>
      </section>
      </RevealOnScroll>

      {/* Contact Section */}
      <RevealOnScroll threshold={0.1}>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Start your project with us</h2>
          <Card className="max-w-md mx-auto">
            <CardContent>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                {/* Web3 Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="43c9e142-62d3-4ed8-85ca-e5bf52a7399f"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
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
        </div>
      </section>
      </RevealOnScroll>
    </main>

          {/* Schema Markup */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareCompany",
        "name": "Valcheq Technologies",
        "url": "https://valcheq.com",
        "logo": "https://valcheq.com/images/valcheq_logo.png",
        "description": "Empowering businesses with cutting-edge Web Development, Data Analytics, and AI Solutions.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Milele Centre, Kitengela",
          "addressLocality": "Nairobi, Nairobi County",
          "addressRegion": "NBO",
          "postalCode": "46-00242, Kitengela",
          "addressCountry": "KE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254 703649833",
          "contactType": ["technical support", "general inquiries"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/valcheq"
        ]
      })}} />
    </>
  )
}


