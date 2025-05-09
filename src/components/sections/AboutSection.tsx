
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-neutral-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-70 z-0"></div>
            <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg">
              <img
                src="/images/about/about_1.jpg"
                alt="Caregiver with senior"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-lg max-w-xs z-20">
              <p className="text-white italic text-sm">
                "Our mission is to create a safe, nurturing environment where seniors can enjoy their golden years with dignity and joy."
              </p>
            </div>
          </div>
          
          <div>
            <span className="text-primary font-semibold">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              A Community Built on Compassion and Respect
            </h2>
            
            <p className="text-neutral-dark mb-4">
              Daylight Adult Daycare is opening soon with a simple yet powerful mission: to provide exceptional care for seniors in a warm, home-like environment that celebrates their individuality and nurtures their well-being.
            </p>
            
            <p className="text-neutral-dark mb-6">
              Our team of dedicated professionals brings decades of experience in senior care, along with genuine passion for making each day meaningful for our members. We believe that the later years of life should be filled with joy, purpose, and dignity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Experienced Staff</h4>
                  <p className="text-sm text-neutral-dark">Licensed professionals with specialized senior care training</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Safe Environment</h4>
                  <p className="text-sm text-neutral-dark">Secure facilities designed with senior safety and comfort in mind</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Person-Centered Care</h4>
                  <p className="text-sm text-neutral-dark">Individualized approaches respecting unique needs and preferences</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Family Involvement</h4>
                  <p className="text-sm text-neutral-dark">Regular communication and opportunities for family participation</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 text-base">
              Learn About Our Values
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
