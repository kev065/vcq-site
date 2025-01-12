import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Services",
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
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-800">Our Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

