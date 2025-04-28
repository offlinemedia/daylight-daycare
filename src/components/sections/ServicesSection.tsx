
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, Calendar, Users, Utensils, Activity } from "lucide-react";

const servicesData = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Tailored care plans addressing each senior's unique health needs and preferences."
  },
  {
    icon: Activity,
    title: "Engaging Activities",
    description: "Daily programs promoting physical health, mental stimulation, and social interaction."
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description: "Freshly prepared, balanced meals accommodating dietary requirements and preferences."
  },
  {
    icon: Users,
    title: "Social Connection",
    description: "A vibrant community fostering meaningful friendships and reducing isolation."
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Convenient scheduling options including full-day, half-day, and extended hours care."
  },
  {
    icon: Calendar,
    title: "Respite Care",
    description: "Short-term care solutions giving family caregivers much-needed breaks."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Comprehensive Senior Care Services
          </h2>
          <p className="text-neutral-dark max-w-3xl mx-auto">
            We provide a wide range of services designed to enhance the well-being, independence, and quality of life for seniors in our care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-dark text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
