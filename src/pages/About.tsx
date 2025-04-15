import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";



const About = () => {
  return (
    <div className="min-h-screen text-white
     bg-develup-darker
     "
    >

      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Develupers</span>
            </h1>
            <p className="text-xl text-gray-300">
              From Idea to Impact – We Develup.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -bottom-48 -left-48"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center mb-16 reveal-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Story</span></h2>
              <p className="text-gray-300 mb-6">
                Founded in 2023, Develupers started with a simple mission: to help businesses
                leverage technology to achieve their goals. What began as a small team of
                passionate developers has grown into a comprehensive digital solutions provider.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that technology should be accessible, adaptable, and aligned with
                business objectives. Our remote-first approach allows us to bring together
                top talent from around the world.
              </p>
              <p className="text-gray-300">
                Today, we serve clients ranging from startups to enterprises, delivering
                solutions that drive growth, efficiency, and innovation.
              </p>
            </div>
            <div className="order-first lg:order-last reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="relative">
                <div className="aspect-square overflow-hidden grid-pattern">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-develup-blue rounded-full opacity-20 animate-pulse absolute"></div>
                    <div className="w-60 h-60 bg-develup-purple rounded-full opacity-10 animate-pulse delay-300 absolute"></div>
                    <div className="z-10 relative">
                      <div className="bg-develup-mint text-develup-darker font-bold px-6 py-3 rounded-full shadow-md">
                        From Idea to Impact
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-develup-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Value</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                text: "We explore new tech to deliver future-ready solutions.",
                color: "blue",
              },
              {
                title: "Excellence",
                text: "Committed to top-tier quality and long-term impact.",
                color: "purple",
              },
              {
                title: "Collaboration",
                text: "We achieve more together—teamwork fuels success.",
                color: "mint",
              },
              {
                title: "Transparency",
                text: "Honest communication builds trust and clarity.",
                color: "blue",
              },
              {
                title: "Adaptability",
                text: "We stay flexible and thrive on change.",
                color: "purple",
              },
              {
                title: "Integrity",
                text: "We do what’s right, even when it’s hard.",
                color: "mint",
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-develup-gray p-8 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-develup-${item.color} hover:shadow-xl`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className={`h-12 w-12 bg-develup-${item.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                  <span className={`text-develup-${item.color} text-2xl font-bold`}>{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Process</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A systematic approach to turning ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Discovery",
                text: "Understanding your goals through consultation.",
                color: "blue",
              },
              {
                step: "Planning",
                text: "Crafting a roadmap of scope, timeline, and impact.",
                color: "purple",
              },
              {
                step: "Execution",
                text: "Agile development, testing, and refining.",
                color: "mint",
              },
              {
                step: "Launch & Support",
                text: "Deployment plus post-launch maintenance.",
                color: "blue",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-develup-gray p-8 rounded-xl relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-develup-${item.color} hover:shadow-2xl`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-${item.color} flex items-center justify-center`}>
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.step}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-develup-gray relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Work With Us?
            </h2>


            <p className="text-xl text-gray-300 mb-8">
              Let's turn your ideas into impactful digital solutions.
            </p>

            <a
              href="mailto:business@develupers.in?subject=Project%20Request%20from%20Website&body=Hi%20Develupers%2C%0A%0AI%20am%20interested%20in%20starting%20a%20project%20with%20your%20team.%20Please%20get%20back%20to%20me%20with%20more%20details.%0A%0AThanks!"
            >
              <Button className="bg-develup-blue hover:bg-develup-purple text-white px-8 py-6 text-lg rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]">
                Start a Project
              </Button>
            </a>

          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-mint rounded-full blur-[120px] -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -bottom-48 -left-48"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
