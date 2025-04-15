import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerCard from '@/components/CareerCard';
import { Button } from '@/components/ui/button';

// Define CareerCard props type
interface CareerCardProps {
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  formUrl: string;
}

// Define job data
const jobOpenings: CareerCardProps[] = [
  {
    title: 'Frontend Intern',
    description: 'Join our frontend development team and work on creating responsive, user-friendly interfaces.',
    responsibilities: [
      'Develop web components using modern frameworks',
      'Implement responsive designs',
      'Collaborate with the UI/UX team',
      'Write clean, efficient code',
    ],
    requirements: [
      'Knowledge of HTML, CSS, and JavaScript',
      'Familiarity with React or similar frameworks',
      'Basic understanding of responsive design',
      'Strong problem-solving skills',
    ],
    formUrl:
      'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UOVFCOTZMT1NNVlhZUTJTNlY2R0FVQUZGUy4u',
  },
  {
    title: 'Backend Intern',
    description: 'Work on server-side logic, databases, and application architecture to power our solutions.',
    responsibilities: [
      'Develop API endpoints and services',
      'Work with databases and data models',
      'Implement security measures',
      'Optimize application performance',
    ],
    requirements: [
      'Knowledge of server-side languages (Node.js, Python, etc.)',
      'Basic understanding of databases',
      'Familiarity with API design',
      'Problem-solving approach',
    ],
    formUrl:
      'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UMUZRUDNETTZITU9WWEdLOU03WlRZVEtEMi4u',
  },
  {
    title: 'Ethical Hacking Intern',
    description: 'Join our security team to identify vulnerabilities and strengthen our defense systems.',
    responsibilities: [
      'Conduct penetration testing',
      'Perform security assessments',
      'Document security findings',
      'Research emerging threats',
    ],
    requirements: [
      'Basic knowledge of cybersecurity concepts',
      'Understanding of common vulnerabilities',
      'Familiarity with security tools',
      'Strong ethical standards',
    ],
    formUrl:
      'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UQUc1Q0lKWUdWRDkzUDRWVk5ENVlNUlI1NS4u',
  },
  {
    title: 'Defensive Security Intern',
    description: 'Help protect our systems and data by implementing robust security measures.',
    responsibilities: [
      'Monitor security systems',
      'Implement security protocols',
      'Respond to security incidents',
      'Maintain security documentation',
    ],
    requirements: [
      'Understanding of security principles',
      'Knowledge of security tools and practices',
      'Analytical mindset',
      'Attention to detail',
    ],
    formUrl:
      'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UMEJHQlVKWkYzUTRCV01GWjVUNUlCUTdFTy4u',
  },
  {
    title: 'AI/ML Intern',
    description: 'Contribute to building intelligent systems by developing and deploying machine learning models.',
    responsibilities: [
      'Assist in developing ML models and algorithms',
      'Preprocess and analyze datasets',
      'Collaborate on AI-driven features',
      'Test and optimize model performance',
    ],
    requirements: [
      'Basic understanding of machine learning concepts',
      'Familiarity with Python and libraries (e.g., TensorFlow, PyTorch)',
      'Knowledge of data preprocessing techniques',
      'Strong analytical and problem-solving skills',
    ],
    formUrl:
      'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UMUdHOVE2RFVXNUdGWTdJS1Q0MThOSExXRy4u',
  },
  {
    title: 'DevOps Intern',
    description: 'Support our infrastructure by automating deployments and optimizing cloud-based systems.',
    responsibilities: [
      'Assist in setting up CI/CD pipelines',
      'Monitor and maintain cloud infrastructure',
      'Automate deployment processes',
      'Collaborate on system scalability',
    ],
    requirements: [
      'Basic knowledge of cloud platforms (e.g., AWS, Azure)',
      'Familiarity with Docker or Kubernetes',
      'Understanding of CI/CD concepts',
      'Scripting skills (e.g., Bash, Python)',
    ],
    formUrl:
      'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UQTFQREYyU0ZBWkpUVVVESkI2UUdNMEJORC4u',
  },
];

const Careers: React.FC = () => {
  // Scroll reveal animation
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
      observer.disconnect(); // Clean up observer instance
    };
  }, []);

  return (
    <div className="min-h-screen bg-develup-dark text-white">
      <Navbar />

      {/* Hero tunnel vision */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Work with us to shape the future of technology in a collaborative, remote-first environment.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -bottom-48 right-0"></div>
        </div>
      </section>

      {/* Career Values */}
      <section className="py-16 bg-develup-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-gray-300">
              At Develupers, we believe in creating an environment where talent can thrive.
              Our remote-first approach allows you to work from anywhere while being part of a global team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: 1,
                title: 'Remote-First Culture',
                description: 'Work from anywhere in the world with flexible hours that fit your lifestyle.',
                color: 'blue',
                delay: '100ms',
              },
              {
                number: 2,
                title: 'Professional Growth',
                description: 'Continuous learning opportunities, mentorship, and a clear career progression path.',
                color: 'purple',
                delay: '200ms',
              },
              {
                number: 3,
                title: 'Cutting-Edge Projects',
                description: 'Work on innovative projects using the latest technologies and methodologies.',
                color: 'mint',
                delay: '300ms',
              },
            ].map(({ number, title, description, color, delay }) => (
              <div
                key={number}
                className="bg-develup-gray p-8 rounded-lg reveal-on-scroll"
                style={{ transitionDelay: delay }}
              >
                <div
                  className={`h-12 w-12 bg-develup-${color}/10 rounded-lg flex items-center justify-center mb-6`}
                  aria-label={`Value number ${number}`}
                >
                  <span className={`text-develup-${color} text-2xl font-bold`}>{number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Oppor<span className="text-gradient">tunities</span>
            </h2>
            <p className="text-gray-300 max-w-3xl">
              Our internship programs are designed to provide hands-on experience and mentorship
              to emerging talents. Join us and kick-start your career in tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <div
                key={job.title}
                className="reveal-on-scroll"
                style={{ transitionDelay: `${100 * (index + 1)}ms` }}
              >
                <CareerCard {...job} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-develup-gray relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Fit?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume, and we'll be in touch!
            </p>
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white px-8 py-6 text-lg">
              <a
                href="mailto:admin@develupers.in?subject=Job%20Application%20at%20Develupers&body=Dear%20Develupers%20Team,%0D%0A%0D%0AI%20am%20excited%20to%20apply%20for%20a%20position%20at%20your%20company.%20Please%20find%20my%20resume%20attached.%0D%0A%0D%0AThank%20you%20for%20considering%20my%20application.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
                className="text-gray-200 hover:underline"
                rel="noopener noreferrer"
              >
                <b>Submit Your Resume</b>
              </a>
            </Button>
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

export default Careers;
