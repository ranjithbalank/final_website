// pages/Contact.tsx
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsLoading(true);

    // Basic client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      // Store form data in Firestore
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: new Date(),
      });

      setStatus("Thanks! We're reviewing your message and will be in touch soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months or more. We’ll provide a detailed timeline during our initial consultation.',
    },
    {
      question: 'What are your payment terms?',
      answer:
        'We typically work on a milestone-based payment schedule. This includes an initial deposit, followed by payments at key project milestones, and a final payment upon project completion. We can discuss specific terms based on your project needs.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch. These can include updates, security patches, performance monitoring, and feature enhancements.',
    },
    {
      question: 'How do you handle confidentiality?',
      answer:
        'We take confidentiality seriously and are happy to sign NDAs before discussing your project in detail. All client information and project details are kept strictly confidential.',
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions or ready to start your project? Contact us today.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -bottom-48 -right-48"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      className="bg-develup-gray border-none text-white"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-develup-gray border-none text-white"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    className="bg-develup-gray border-none text-white"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    className="bg-develup-gray border-none text-white min-h-[150px]"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status && (
                  <p className={`mb-4 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                    {status}
                  </p>
                )}

                <Button
                  type="submit"
                  className="bg-develup-blue hover:bg-develup-blue/80 text-white w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Submit'}
                </Button>
              </form>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-2xl font-bold mb-6">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Reach out to us directly through any of these channels.
              </p>

              <div className="space-y-6">
                <Card className="bg-develup-gray border-none">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-develup-blue/10 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-develup-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@develupers.com"
                        className="text-gray-300 hover:text-develup-blue transition-colors"
                      >
                        contact@develupers.in
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-develup-gray border-none">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-develup-purple/10 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-develup-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+917904372139"
                        className="text-gray-300 hover:text-develup-purple transition-colors"
                      >
                        +91 9487731171
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* <Card className="bg-develup-gray border-none">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-develup-mint/10 p-3 rounded-lg mr-4">
                      <Globe className="w-6 h-6 text-develup-mint" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Website</h3>
                      <a
                        href="https://www.develupers.in"
                        className="text-gray-300 hover:text-develup-mint transition-colors"
                      >
                        www.develupers.in
                      </a>
                    </div>
                  </CardContent>
                </Card> */}

                <Card className="bg-develup-gray border-none">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-develup-blue/10 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-develup-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Headquarters</h3>
                      <p className="text-gray-300">
                        Erode, TN, India
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-develup-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Frequently <span className="text-gradient">Asked</span> Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-develup-gray p-6 rounded-lg reveal-on-scroll cursor-pointer transition-all duration-300"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-gray-400">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;