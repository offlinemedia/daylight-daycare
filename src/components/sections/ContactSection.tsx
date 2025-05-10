
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-neutral-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-dark max-w-3xl mx-auto">
            We're here to answer your questions about our services and help you discover if Daylight Adult Daycare is the perfect place for your loved one.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Last Name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="tour">Schedule a Tour</SelectItem>
                      <SelectItem value="enrollment">Enrollment Questions</SelectItem>
                      <SelectItem value="services">Services Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[100px]" />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col h-full">
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              
              <ul className="space-y-6 flex-1">
                <li className="flex items-start">
                  <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <span className="font-semibold block mb-1">Address</span>
                    <address className="not-italic">
                      2500 Scarborough Sq<br />
                      Columbus, OH 43232
                    </address>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="text-primary mr-3 mt-1 flex-shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <span className="font-semibold block mb-1">Phone</span>
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">614-123-4567</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold block mb-1">Email</span>
                    <a href="mailto:daylightdaycareohio@gmail.com" className="hover:text-primary transition-colors">daylightdaycareohio@gmail.com</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold block mb-1">Hours of Operation</span>
                    <div>
                      <div>
                        <span className="font-semibold">Monday - Friday:</span><br />
                        <span className="ml-4">7:30 AM - 6:00 PM</span>
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold">Saturday:</span><br />
                        <span className="ml-4">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold">Sunday:</span><br />
                        <span className="ml-4">Closed</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
