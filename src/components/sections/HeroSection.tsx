
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-neutral-light to-secondary overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <span className="text-primary font-semibold text-lg mb-2 block">Welcome to Golden Years Oasis</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Compassionate <span className="gradient-text">Senior Care</span> in a Warm Community
          </h1>
          <p className="text-neutral-dark text-lg mb-8 max-w-lg">
            Providing engaging activities, personalized care, and a vibrant community where seniors thrive while families have peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
              <Calendar className="mr-2" size={20} />
              Schedule a Tour
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative z-10">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full"></div>
            <div className="rounded-xl overflow-hidden shadow-xl relative z-10">
              <img 
                src="/images/hero/hero_1.png" 
                alt="Happy seniors enjoying activities together" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg absolute -bottom-5 -left-5 flex items-center">
            <div className="bg-primary/10 rounded-full p-3 mr-3">
              <span className="text-primary font-bold text-xl">4.9</span>
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-neutral-dark">Trusted by 250+ families</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
