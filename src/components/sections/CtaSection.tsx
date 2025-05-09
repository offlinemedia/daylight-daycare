
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Give Your Loved One the Care They Deserve?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today to learn more about our services or to schedule a personal tour of our facility.
            Our team is ready to answer your questions and help you make the best decision for your family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-neutral-light px-8 py-6 text-lg">
              Schedule a Tour
            </Button>
            <Button className="bg-transparent border border-white text-white hover:bg-primary-dark hover:text-white px-8 py-6 text-lg">
              <Phone className="mr-2" size={20} />
              Call Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
