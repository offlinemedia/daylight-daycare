
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rekha Basnet",
    relation: "Daughter of Member",
    quote: "Daylight Adult Daycare has been a blessing for our family. My father looks forward to going every day, and the staff genuinely care about his wellbeing. The peace of mind this gives our family is priceless.",
    image: "/images/testimonials/testimonials_1.jpg"
  },
  {
    name: "Rohan Sharma",
    relation: "Son of Member",
    quote: "Since mom started attending Daylight Adult Daycare, we've seen a remarkable improvement in her mood and energy. The diverse activities keep her engaged and she's made wonderful friends. The staff communication is excellent.",
    image: "/images/testimonials/testimonials_2.jpg"
  },
  {
    name: "Kamala Bhandari",
    relation: "Member",
    quote: "I was hesitant to join a day program, but Daylight Adult Daycare has exceeded my expectations. The staff are compassionate, the activities are fun and stimulating, and I've made wonderful friends. I feel valued and cared for here.",
    image: "/images/testimonials/testimonials_3.jpg"
  },
  {
    name: "Narayan Acharya",
    relation: "Husband of Member",
    quote: "The care my wife receives at Daylight Adult Daycare is exceptional. As her caregiver, having reliable respite care allows me to recharge while knowing she's in good hands. The staff is professional, attentive, and truly caring.",
    image: "/images/testimonials/testimonials_4.jpg"
  },
  {
    name: "Kamala Devi Sharma",
    relation: "Member",
    quote: "Coming to Daylight Adult Daycare has given me something to look forward to each day. The staff know me by name and the activities are tailored to what I enjoy. It's become like a second family to me.",
    image: "/images/testimonials/testimonials_5.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-neutral-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            What Families and Members Say
          </h2>
          <p className="text-neutral-dark max-w-3xl mx-auto">
            Hear directly from the families and seniors who are part of our community.
          </p>
        </div>
        
        <div className="relative px-4 md:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="border-none shadow-lg">
                      <CardContent className="flex flex-col p-6 h-full">
                        <div className="mb-4">
                          <svg className="w-8 h-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>
                        <p className="text-neutral-dark mb-6 flex-grow italic">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center">
                          <div className="mr-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-neutral">{testimonial.relation}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-6">
              <CarouselPrevious className="relative static translate-y-0 bg-white hover:bg-primary hover:text-white" />
              <CarouselNext className="relative static translate-y-0 bg-white hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
