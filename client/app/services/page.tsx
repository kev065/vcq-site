import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Our Services | Valcheq Technologies",
  description: "Explore Valcheq Technologies' comprehensive range of services including Web Development, Data Analytics, and AI & Machine Learning Solutions.",
  openGraph: {
    title: "Our Services | Valcheq Technologies",
    description: "Discover our expert services in Web Development, Data Analytics, and AI & Machine Learning Solutions.",
    url: "https://www.valcheq.com/services",
    siteName: "Valcheq Technologies",
    images: [
      {
        url: "https://www.valcheq.com/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Valcheq Technologies Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    title: "Web Development",
    items: [
      {
        name: "Web Application Development",
        description: "Build scalable, responsive, and secure web apps tailored to your business needs."
      },
      {
        name: "Cross-Platform App Development",
        description: "Deliver seamless user experiences across web and mobile platforms using a single codebase."
      },
      {
        name: "E-commerce Solutions",
        description: "Launch or enhance your online store with robust, customizable e-commerce platforms."
      },
      {
        name: "Content Management System (CMS)",
        description: "Simplify content creation and management with tailored CMS solutions."
      },
      {
        name: "Personal & Portfolio Websites",
        description: "Showcase your work or brand with elegant, personalized websites."
      },
      {
        name: "Payment Integration",
        description: "Implement secure and reliable payment systems for hassle-free transactions."
      }
    ],
  },
  {
    title: "Data Analytics & Business Intelligence",
    items: [
      {
        name: "Data Strategy Consulting",
        description: "Develop actionable strategies to maximize the value of your data."
      },
      {
        name: "Dashboard Creation",
        description: "Visualize key metrics with interactive, user-friendly dashboards."
      },
      {
        name: "Business Reporting",
        description: "Generate insightful reports to guide decision-making and measure success."
      },
      {
        name: "Customer Behaviour Analysis",
        description: "Understand customer patterns to drive engagement and retention."
      },
      {
        name: "Real-Time Analytics",
        description: "Gain instant insights to respond quickly to changing business dynamics."
      }
    ],
  },
  {
    title: "AI & Machine Learning Solutions",
    items: [
      {
        name: "Predictive Analytics/Modeling",
        description: "Anticipate trends and outcomes to stay ahead in your industry."
      },
      {
        name: "AI-Powered Applications",
        description: "Leverage AI to automate processes and deliver smarter solutions."
      },
      {
        name: "Business Chatbots",
        description: "Enhance customer support with intelligent, conversational AI bots."
      },
      {
        name: "Machine Learning Pipelines",
        description: "Build end-to-end pipelines to streamline ML workflows and deployments."
      },
      {
        name: "NLP & Sentiment Analysis",
        description: "Extract meaningful insights from text data to understand user sentiment."
      },
      {
        name: "Recommendation Systems",
        description: "Deliver personalized user experiences with advanced recommendation engines."
      }
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Our Services</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Empowering businesses with cutting-edge technology solutions</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <section key={index} className="mb-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>
      </main>
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Ready to Transform Your Business?</h2>
          <p className="text-center mb-8 text-gray-600">Let&apos;s discuss how our services can help you achieve your goals.</p>
          <div className="text-center">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": service.title,
          "description": `${service.title} services offered by Valcheq Technologies`,
          "url": `https://www.valcheq.com/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
        }))
      })}} />
    </>
  );
}

