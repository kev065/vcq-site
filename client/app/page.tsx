import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, BarChart, Brain } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Your Digital Journey</h1>
          <p className="text-xl mb-8">Web Development | Data Analytics | AI Solutions</p>
          <Button asChild size="lg">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" /> Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Custom Website Development</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Web Application Development</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Personal & Portfolio Sites</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Payment Integration</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2" /> Data Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Exploratory Data Analysis (EDA)</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Dashboard Creation</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Business Reporting</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Data Strategy Consulting</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2" /> AI & Data Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Predictive Modeling</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> AI-Powered Applications</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Business Chatbots</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> NLP & Sentiment Analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Valcheq Technologies</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At Valcheq Technologies, we're passionate about leveraging cutting-edge technology to solve complex business challenges. Our team of experts specializes in web development, data analytics, and AI solutions, providing tailored services to help businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

