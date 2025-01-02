import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, BarChart, Brain } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Your Digital Journey</h1>
          <p className="text-xl mb-8">Web Development | Data Analytics | AI Solutions</p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
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
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
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
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
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
      <section id="about" className="bg-blue-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">About Valcheq Technologies</h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-blue-900">
            At Valcheq Technologies, we&apos;re passionate about leveraging cutting-edge technology to solve complex business challenges. Our team of experts specializes in web development, data analytics, and AI solutions, providing tailored services to help businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Get In Touch</h2>
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

    </div>
  )
}

