import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import ServiceCard from '@/components/ServiceCard';
import ValueCard from '@/components/ValueCard';
import { Button } from '@/components/ui/button';
import { Code, Globe, Smartphone, Shield, Database, Palette, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [revealedSections, setRevealedSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealedSections[entry.target.id]) {
            entry.target.classList.add('is-revealed');
            setRevealedSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const sections = document.querySelectorAll('.reveal-on-scroll');
    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      clearTimeout(timer);
    };
  }, [revealedSections]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-develup-dark">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-develup-blue mx-auto mb-4"></div>
          <h2 className="text-xl">
            <b>Devel</b>
            <span className="text-gradient">
              <b>uping</b>
            </span>
            ...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-develup-dark text-white">
      <Navbar />
      <ThreeBackground />

      <section id="hero" className="relative h-screen overflow-hidden hero-section reveal-on-scroll">
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              From <span className="text-gradient">Idea</span> to <span className="text-gradient">Impact</span> – We Develup.
            </h1>

            <p className="text-xl text-light-300 max-w-3xl mx-auto">
              A Tech company building scalable digital products that drive innovation and growth.
            </p><br />
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://forms.office.com/pages/responsepage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UNFBTQUhaMlMzWldIWDQzSEQ2QTNKVUw1SS4u&embed=true&route=shorturl" className="button snake-border">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-develup-darker reveal-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <ServiceCard
                title="Web Development"
                description="Custom websites and web applications with responsive design and optimal performance."
                icon={Globe}
                color="blue"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <ServiceCard
                title="App Development"
                description="Native and cross-platform mobile applications for iOS and Android devices."
                icon={Smartphone}
                color="mint"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <ServiceCard
                title="Software Development"
                description="Tailored software solutions to automate processes and improve efficiency."
                icon={Code}
                color="purple"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <ServiceCard
                title="Cybersecurity"
                description="Protecting your digital assets with robust security measures and monitoring."
                icon={Shield}
                color="blue"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '500ms' }}>
              <ServiceCard
                title="Data Analytics"
                description="Extracting meaningful insights from your data to drive informed decisions."
                icon={Database}
                color="mint"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '600ms' }}>
              <ServiceCard
                title="UI/UX Design"
                description="Creating intuitive and engaging user experiences for your digital products."
                icon={Palette}
                color="purple"
              />
            </div>
          </div>

          <div className="text-center mt-12 reveal-on-scroll">
            <Link to="/services">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="unique" className="py-24 reveal-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <div className="relative">
                <div className="aspect-square bg-develup-gray rounded-3xl overflow-hidden grid-pattern">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-develup-blue rounded-full opacity-20 animate-pulse absolute"></div>
                    <div className="w-60 h-60 bg-develup-purple rounded-full opacity-10 animate-pulse delay-300 absolute"></div>
                    <div className="w-80 h-80 bg-develup-mint rounded-full opacity-5 animate-float absolute"></div>
                    <div className="z-10 relative transform rotate-12">
                      <div
                        className="w-12 h-12 bg-develup-blue rounded-lg absolute -top-6 -left-6 animate-float"
                        style={{ animationDelay: '0.5s' }}
                      ></div>
                      <div
                        className="w-8 h-8 bg-develup-mint rounded-lg absolute top-20 -right-4 animate-float"
                        style={{ animationDelay: '1.5s' }}
                      ></div>
                      <div
                        className="w-10 h-10 bg-develup-purple rounded-lg absolute -bottom-6 left-10 animate-float"
                        style={{ animationDelay: '1s' }}
                      ></div>
                      <div className="bg-develup-gray glass-morphism p-4 rounded-lg w-60">
                        <div className="h-2 w-10 bg-develup-blue rounded mb-3"></div>
                        <div className="h-2 w-20 bg-white/20 rounded mb-3"></div>
                        <div className="h-2 w-16 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Makes Us <span className="text-gradient">Unique</span>
              </h2>
              <p className="text-gray-300 mb-8">
                At Develupers, we combine technical expertise with a passion for innovation. Our team of skilled
                professionals is committed to delivering top-quality solutions that help businesses thrive in an
                increasingly digital world.
              </p>
              <div className="space-y-6">
                <ValueCard title="Automation" description="We leverage automation to streamline processes and increase efficiency." icon={Code} />
                <ValueCard
                  title="AI Integration"
                  description="Advanced artificial intelligence solutions to give your business a competitive edge."
                  icon={Database}
                />
                <ValueCard
                  title="Security First"
                  description="Your data and systems are protected with industry-leading security measures."
                  icon={Shield}
                />
                <ValueCard
                  title="Transparent Process"
                  description="Clear communication and visibility throughout the development lifecycle."
                  icon={Briefcase}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 bg-develup-gray relative overflow-hidden reveal-on-scroll">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Develup</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to turn your ideas into impactful digital solutions.
            </p>
            <a href="https://forms.office.com/r/b4UwCawL7h?embed=true">


              <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white px-8 py-6 text-lg">
                Get a Free Consultation
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -bottom-48 -left-48"></div>
        </div>
      </section>

      <Footer />
      <style>
        {`
          /* Existing styles */
          .hero-section {
            background: linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%);
            position: relative;
            height: 100vh;
            overflow: hidden;
          }

          .hero-section .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            height: 100%;
          }

          .hero-section .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            color: #1A1A1A;
            border-radius: 9999px;
            padding: 10px 20px;
            font-weight: 600;
            font-size: 16px;
            text-decoration: none;
            transition: background 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .hero-section .button:hover {
            background: #e0e0e0;
          }

          .snake-border::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(
              45deg,
              #6495ED,
              #40E0D0,
              #8A2BE2,
              #FFD700,
              #6495ED
            );
            background-size: 400%;
            border-radius: 9999px;
            z-index: -1;
            animation: snake 8s linear infinite;
            filter: blur(2px);
          }

          @keyframes snake {
            0% { background-position: 0% 50%; }
            100% { background-position: 400% 50%; }
          }

          .hero-section .text {
            color: #ffffff;
            font-size: 16px;
            margin-bottom: 16px;
          }

          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 20% 20%, rgba(30, 30, 30, 0.3) 0%, transparent 20%),
                        radial-gradient(circle at 80% 80%, rgba(50, 50, 50, 0.4) 0%, transparent 20%),
                        radial-gradient(circle at 30% 70%, rgba(30, 30, 30, 0.3) 0%, transparent 20%),
                        radial-gradient(circle at 70% 30%, rgba(50, 50, 50, 0.4) 0%, transparent 20%);
            background-size: 300px 300px;
            z-index: 0;
            animation: twinkle 8s infinite;
          }

          .hero-section::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M10 20 L12 18 L14 20 L12 22 Z' fill='rgba(100, 149, 237, 0.7)'/%3E%3Cpath d='M50 60 L52 58 L54 60 L52 62 Z' fill='rgba(64, 224, 208, 0.6)'/%3E%3Cpath d='M80 30 L82 28 L84 30 L82 32 Z' fill='rgba(138, 43, 226, 0.8)'/%3E%3Cpath d='M30 80 L32 78 L34 80 L32 82 Z' fill='rgba(255, 215, 0, 0.5)'/%3E%3C/svg%3E");
            background-size: 250px 250px;
            animation: moveStars 20s linear infinite;
            z-index: 1;
          }

          @keyframes twinkle {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }

          @keyframes moveStars {
            0% { background-position: 0 0; }
            100% { background-position: 150px 150px; }
          }

          .animate-spin {
            border-top-color: #ffffff;
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .reveal-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .reveal-on-scroll.is-revealed {
            opacity: 1;
            transform: translateY(0);
          }

          /* New CSS to remove horizontal scrollbar */
          body {
            overflow-x: hidden;
            margin: 0; /* Ensure no default margin adds width */
          }

          html {
            overflow-x: hidden;
          }

          .container {
            width: 100%;
            max-width: 1280px; /* Adjust based on your design's max width */
            margin-left: auto;
            margin-right: auto;
          }

          /* Ensure hero section and other sections don’t overflow */
          #hero, #services, #unique, #cta {
            width: 100%;
            overflow-x: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
