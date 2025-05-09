
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
            We're here to answer your questions about our services, schedule tours, and help you determine if Daylight Adult Daycare is the right fit for your loved one.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
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
                  <Input id="phone" placeholder="(123) 456-7890" />
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
          
          <div className="flex flex-col">
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold block mb-1">Address</span>
                    <address className="not-italic">
                      123 Care Lane<br />
                      Serenity City, SC 12345
                    </address>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold block mb-1">Phone</span>
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold block mb-1">Email</span>
                    <a href="mailto:info@goldenyearsoasis.com" className="hover:text-primary transition-colors">info@goldenyearsoasis.com</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold block mb-1">Hours of Operation</span>
                    <p>Monday - Friday: 7:30 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-display font-bold mb-4 flex items-center">
                <Calendar className="mr-2 text-primary" size={20} />
                Schedule a Tour
              </h3>
              <p className="mb-4">We invite you to visit our facility, meet our staff, and see our programs in action.</p>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                Book a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
