
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Shield, Database, Palette, Code2, Users, LucideIcon } from 'lucide-react';
import throttle from 'lodash.throttle';

// Define service data for "More Services" section
interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon; // Use LucideIcon to match Lucide's component type
  features: string[];
  color: string;
  delay: string;
}

const moreServices: Service[] = [
  {
    id: 'software',
    title: 'Software Development',
    description:
      'Tailored software solutions to automate processes and improve efficiency. Our team builds custom software that addresses your specific business needs.',
    icon: Code,
    features: ['Custom business applications', 'Process automation', 'Integration with existing systems'],
    color: 'purple',
    delay: '100ms',
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description:
      'Crafting seamless and high-performance mobile applications for both iOS and Android. From concept to launch, we build intuitive, reliable apps that users love.',
    icon: Smartphone,
    features: ['iOS and Android native apps', 'Cross-platform development', 'UI/UX mobile design'],
    color: 'mint',
    delay: '200ms',
  },
  {
    id: 'data',
    title: 'Data Analytics',
    description:
      'Extracting meaningful insights from your data to drive informed decisions. Turn your raw data into actionable business intelligence.',
    icon: Database,
    features: ['Data visualization', 'Business intelligence', 'Predictive analytics'],
    color: 'mint',
    delay: '300ms',
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'Creating intuitive and engaging user experiences for your digital products. We design interfaces that users love to interact with.',
    icon: Palette,
    features: ['User research', 'Interface design', 'Usability testing'],
    color: 'purple',
    delay: '400ms',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description:
      'Expert guidance on technology strategy, implementation, and optimization. We help you make informed technical decisions.',
    icon: Code2,
    features: ['Technology assessment', 'Digital transformation', 'Solution architecture'],
    color: 'blue',
    delay: '500ms',
  },
  {
    id: 'management',
    title: 'Project Management',
    description:
      'Ensuring your projects are delivered on time, within budget, and to specification. Our project management approach keeps everything on track.',
    icon: Users,
    features: ['Agile methodologies', 'Resource allocation', 'Risk management'],
    color: 'mint',
    delay: '600ms',
  },
];

const Services: React.FC = () => {
  // IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Scroll animation with throttling
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('section.animate-on-scroll');

      sections.forEach((section: HTMLElement) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = section.offsetHeight;

        const progress = Math.max(
          0,
          Math.min(1, (scrollPosition + windowHeight - sectionTop) / (sectionHeight + windowHeight))
        );

        section.style.transform = `translateY(${progress * -10}px)`;
        section.style.opacity = `${1 - progress * 0.1}`;
      });
    }, 16);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <div className="min-h-screen bg-develup-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden animate-on-scroll">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute w-64 h-64 bg-develup-blue rounded-full blur-[80px] -top-32 -right-32 max-w-[100vw]"></div>
          <div className="absolute w-64 h-64 bg-develup-purple rounded-full blur-[80px] -bottom-32 -left-32 max-w-[100vw]"></div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web" className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <div className="bg-develup-blue/5 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 z-0 overflow-hidden">
                  <div className="absolute w-32 h-32 bg-develup-blue rounded-full blur-[40px] top-10 right-10 max-w-[100vw]"></div>
                </div>
                <Globe className="w-16 h-16 text-develup-blue mb-6 relative z-10" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Web Development</h2>
                <p className="text-gray-300 mb-6 relative z-10">
                  Custom websites and web applications with responsive design and optimal performance.
                </p>
                <ul className="space-y-3 mb-8 relative z-10">
                  {[
                    'Responsive website design and development',
                    'Progressive web applications (PWAs)',
                    'E-commerce solutions',
                    'Content management systems',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-develup-blue mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                  <br/>
                     <a
                  href="https://forms.office.com/r/b4UwCawL7h?embed=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn More for web development"
                >
                  <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white rounded-full px-6">
                    Learn More
                  </Button>
                </a>
                </ul>
             
              </div>
            </div>
            <div className="order-first lg:order-last reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4">Modern Web Solutions</h3>
              <p className="text-gray-300 mb-6">
                Our web development team creates cutting-edge websites and web applications that are not only visually
                stunning but also functionally robust. We focus on building responsive, accessible, and high-performing web
                solutions that deliver exceptional user experiences.
              </p>
              <p className="text-gray-300 mb-6">
                Using the latest technologies and frameworks, we ensure your website stands out from the competition while
                achieving your business goals. Whether you need a simple informational website or a complex web
                application, we've got you covered.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-develup-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <p className="text-sm text-gray-400">React, Vue, Angular, Node.js</p>
                </div>
                <div className="bg-develup-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Timeline</h4>
                  <p className="text-sm text-gray-400">4-12 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section id="cybersecurity" className="py-20 bg-develup-darker animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity Solutions</h3>
              <p className="text-gray-300 mb-6">
                Our cybersecurity team protects your digital infrastructure with proactive defense strategies and real-time
                monitoring. We identify vulnerabilities before attackers can, ensuring your data and systems remain secure.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're a startup or a large enterprise, we provide scalable security assessments, audits, and
                ongoing threat detection tailored to your business.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-develup-gray p-4 rounded-lg shadow-lg shadow-blue-800/20">
                  <h4 className="font-semibold mb-2">Services</h4>
                  <p className="text-sm text-gray-400">VAPT, Monitoring, Compliance</p>
                </div>
                <div className="bg-develup-gray p-4 rounded-lg shadow-lg shadow-blue-800/20">
                  <h4 className="font-semibold mb-2">Engagement</h4>
                  <p className="text-sm text-gray-400">One-time or Retainer</p>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll">
              <div className="bg-develup-blue/5 p-10 rounded-3xl relative overflow-hidden shadow-xl shadow-mint-800/20 hover:shadow-mint-600/30 transition-all duration-500">
                <div className="absolute inset-0 opacity-30 z-0 overflow-hidden">
                  <div className="absolute w-32 h-32 bg-develup-mint rounded-full blur-[40px] bottom-10 left-10 max-w-[100vw] animate-pulse"></div>
                </div>
                <Shield className="w-16 h-16 text-develup-mint mb-6 relative z-10" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Cybersecurity</h2>
                <p className="text-gray-300 mb-6 relative z-10">
                  End-to-end protection for your digital assets, infrastructure, and data.
                </p>
                <ul className="space-y-3 mb-8 relative z-10">
                  {['Security assessments & audits', 'Penetration testing (VAPT)', '24/7 security monitoring', 'Compliance and reporting'].map(
                    (item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-develup-mint mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    )
                  )}
                  <br/>
                  <a
                  href="https://forms.office.com/r/b4UwCawL7h?embed=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn More for cybersecurity"
                >
                  <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white rounded-full px-6">
                    Learn More
                  </Button>
                </a>
                </ul>
           
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Services Grid */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal-on-scroll">More Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moreServices.map(({ id, title, description, icon: Icon, features, color, delay }) => (
              <div key={id} id={id} className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: delay }}>
                <Icon className={`w-12 h-12 text-develup-${color} mb-6`} aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-300 mb-6">{description}</p>
                <ul className="space-y-2 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className={`text-develup-${color} mr-2`}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://forms.office.com/r/b4UwCawL7h?embed=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Learn More for ${title.toLowerCase()}`}
                >
                  <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white rounded-full px-6">
                   Learn More
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-develup-gray animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how we can help bring your ideas to life.
            </p>
            <a href="https://forms.office.com/r/b4UwCawL7h?embed=true" target="_blank" rel="noopener noreferrer">
              <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white rounded-full px-6">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .reveal-on-scroll.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-on-scroll {
          transform: translateY(0);
          opacity: 1;
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default Services;
