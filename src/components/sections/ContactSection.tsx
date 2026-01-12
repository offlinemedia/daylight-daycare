
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";

import React, { useState } from "react";
import { sendContactEmail, fallbackMailto, ContactFormData } from "@/utils/emailService";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id.replace("-", "")]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPhone(phone: string) {
    // Accepts (123) 456-7890, 123-456-7890, 1234567890, etc.
    return /^\s*(?:\+?1[-.\s]?)?(\()?\d{3}(\))?[-.\s]?\d{3}[-.\s]?\d{4}\s*$/.test(phone);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validation for required fields
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill out all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      toast({
        title: "Contact Info Required",
        description: "Please provide at least an email or a phone number.",
        variant: "destructive",
      });
      return;
    }
    if (formData.email.trim() && !isValidEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    if (formData.phone.trim() && !isValidPhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const result = await sendContactEmail(formData);
    if (result === "success") {
      toast({
        title: "Message Sent",
        description: (
          <span style={{ display: 'flex', alignItems: 'center', color: '#166534' }}>
            <svg style={{ marginRight: 8 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#bbf7d0" /><path d="M7 13.5l3 3 7-7" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Thank you! Your message has been sent successfully.
          </span>
        ),
        style: { background: '#bbf7d0', color: '#166534' },
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } else if (result === "quota") {
      toast({
        title: "Monthly Limit Reached",
        description: "We've reached our email quota for this month. Your email app will open so you can send your message directly.",
        variant: "default",
      });
      fallbackMailto(formData);
    } else {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    }
    setSubmitting(false);
  };


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

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                  <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
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
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[100px]" value={formData.message} onChange={handleChange} required />
                </div>

                <Button className="w-full bg-primary hover:bg-primary-dark text-white" type="submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
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
                    <a href="tel:+13802155029" className="hover:text-primary transition-colors">(380) 215-5029</a>
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
                        <span className="ml-4">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold">Saturday - Sunday:</span><br />
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
