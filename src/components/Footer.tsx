import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

// Modal Component with Improved Alignment and Colored Header
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; content: string }> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-develup-darker p-6 rounded-lg max-w-2xl w-full text-white transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modal-enter"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Colored Header */}
        <div className="bg-develup-blue p-4 rounded-t-lg mb-4 text-center">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>

        {/* Scrollable Content Area */}
        <div
          className="max-h-96 overflow-y-auto pr-2 custom-scrollbar animate-fade-in"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#4B5563 #1F2937" }}
        >
          <div className="p-4 text-gray-300 whitespace-pre-wrap text-left">
            {content.split("\n").map((line, index) => {
              // Bold headings (lines starting with a number followed by dot, or subheadings like 2.1, or specific lines like title and effective date)
              const isHeading = /^\d+\.\s/.test(line.trim()) || /^\d+\.\d+\s/.test(line.trim()) || index === 0 || line.includes("Effective Date:");
              return (
                <p key={index} className="mb-2 last:mb-0">
                  {isHeading ? <b>{line}</b> : line}
                </p>
              );
            })}
          </div>
        </div>

        {/* Close Button */}
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="bg-develup-blue hover:bg-develup-blue/80 text-white py-2 px-6 rounded transition-colors"
          >
            Close
          </button>
        </div>

        {/* Add custom styles for animations */}
        <style>{`
          @keyframes modalEnter {
            from {
              scale: 0.95;
              opacity: 0;
            }
            to {
              scale: 1;
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-modal-enter {
            animation: modalEnter 0.3s forwards;
          }

          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }

          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1F2937;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #4B5563;
            border-radius: 4px;
            border: 2px solid #1F2937;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #6B7280;
          }
        `}</style>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Terms and Conditions content
  const termsContent = `
    Develup Terms & Conditions
    By entering into this agreement, both Develup and the Client commit to a collaborative framework that enhances workflow efficiency, streamlines processes and fosters a productive professional relationship. This mutual agreement ensures transparency, efficiency and adherence to the highest service standards.

    1. Scope of Work
    Develup specializes in website and software development. Each service is governed by specific terms tailored to project requirements. This flexibility ensures clear engagement terms, defined deliverables, and high-quality outcomes.

    2. Definitions
    2.1 Develup
    "Develup" refers to the company, including its staff, service providers, representatives, and authorized entities responsible for delivering the agreed-upon services.

    2.2 Client
    "Client" refers to the individual, company, or organization engaging Develup's services under this Agreement.

    2.3 Services
    "Services" encompass Develup's web and software development solutions, including design, development, implementation, testing, deployment, and maintenance.

    2.4 Agreement
    "Agreement" refers to this legally binding contract outlining the terms, conditions, rights, and obligations between Develup and the Client.

    2.5 Payments/Milestones
    "Payment" denotes the Client's financial obligations to Develup as per the agreed milestone schedule, ensuring project continuity and timely delivery.

    2.6 Intellectual Property
    "Intellectual Property" includes all proprietary rights such as copyrights, trademarks, patents, trade secrets, source code, and other creations developed by Develup. Ownership and usage rights are governed by this Agreement.

    3. Client Responsibilities
    The Client is responsible for providing necessary content, approvals, and feedback for project progression. This includes:
    - Timely review and approval of designs.
    - Participation in testing phases.
    - Providing required resources or information.

    4. Payment Terms
    4.1 Initial Advance Payment
    The Client must pay 15% of the total project cost upon agreement confirmation to initiate the project.

    4.2 Second Payment (Development Stage)
    The Client must pay another 15% during the second week of development.

    4.3 Third Payment (Pre-Testing)
    Upon project completion, the Client shall pay 20%, after which the project will be available on a local host for testing.

    4.4 Testing Phase
    During testing, the Client may request corrections or modifications, which will be addressed promptly.

    4.5 Fourth Payment (Post-Testing)
    After implementing the Client's feedback, a 25% payment is due.

    4.6 Final Payment (Pre-Launch)
    The remaining 25% must be paid before the final product is hosted and handed over. Accepted Payment Methods: Bank transfer, UPI.

    5. Refund Policy
    At Develup, we strive to provide the best services to our clients. However, due to the nature of our work, the following refund conditions apply:
    5.1 Token Advance Payment
    The token advance amount, which is 15% of the total project cost, is non-refundable. This amount is required to initiate the project and secure resources.
    5.2 Refund at Development Stage
    Once the project reaches 60% completion during the development stage, no refund will be issued. The investment made by the Client during this phase covers significant time, resources, and work that has already been delivered.
    5.3 Partial Work/Project Termination
    If the Client chooses to terminate the project before completion but after work has commenced, the Client will be responsible for paying for the work already completed. The Client will not be entitled to a refund for any services or deliverables provided up to that point.
    5.4 Refund Eligibility
    Refunds may only be considered under the following circumstances:
    The Client has not received any deliverables or work within the agreed timeframe.
    There has been a substantial failure on the part of Develup to deliver the agreed-upon services, after reasonable attempts to resolve the issue.
    5.5 No Refund for Completed Services
    Any services that have been completed and approved by the Client, including design approvals, testing, and deployment phases, will not be eligible for a refund.
    5.6 Refund Process
    In the event a refund is deemed eligible, it will be processed after a thorough review of the work completed and the terms agreed upon. The refund will be made through the payment method initially used by the Client.
  `;

  // Updated Privacy Policy content
  const privacyContent = `
Privacy Policy
Effective Date: 01/04/2025
Develup ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
This Privacy Policy explains how we collect, use, and protect your information when you interact with our website, products, and services.

1. Information We Collect
We collect different types of information to provide and improve our services, including:
Personal Information: Name, email address, phone number, and company details when you contact us, request a quote, or sign up for our services.
Technical Information: IP address, browser type, device information, and website usage details collected through cookies and analytics tools.
Payment Information: If you purchase our services, we collect necessary billing details, but payment processing is handled by secure third-party providers.
Communication Data: Information from emails, chat conversations, or feedback forms.

2. How We Use Your Information
We use your information to:
- Provide, manage, and improve our services.
- Process transactions and send invoices.
- Respond to inquiries and provide customer support.
- Personalize user experience and improve website functionality.
- Comply with legal obligations and prevent fraud.

3. How WeHope Your Information
We do not sell or rent your personal data. However, we may share your information with:
Service Providers: Third-party vendors who assist with hosting, payment processing, or analytics.
Legal Authorities: When required by law or to protect our legal rights.
Business Transfers: In case of a merger, acquisition, or asset sale.

4. Data Security
We implement industry-standard security measures to protect your information. However, no data transmission over the internet can be guaranteed as 100% secure.

5. Your Rights and Choices
Depending on your location, you may have the right to:
- Access, update, or delete your personal data.
- Opt-out of marketing communications.
- Restrict processing of your information.
- Request a copy of your data.
To exercise these rights, contact us at develup.build@gmail.com.

6. Cookies and Tracking Technologies
We use cookies to enhance user experience and collect analytical data. You can manage cookie settings in your browser.

7. Third-Party Links
Our website may contain links to third-party sites. We are not responsible for their privacy practices.

8. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date."

9. Contact Us
For any questions about this Privacy Policy, please contact us at:
Develup
develup.build@gmail.com
Erode, TN
`;

  return (
    <footer className="bg-develup-darker pt-16 pb-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-gradient">Develupers.in</span>
            </h3>
            <p className="text-gray-400 mb-4">
              From Idea to Impact – We Develup. A remote-first tech company delivering innovative
              solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/develupers_?s=11"
                className="text-white/60 hover:text-develup-blue transition-colors"
              >
                <Twitter size={18} />
              </a>
              {/* <a
                href="https://facebook.com"
                className="text-white/60 hover:text-develup-blue transition-colors"
              >
                <Facebook size={18} />
              </a> */}
              <a
                href="https://www.instagram.com/develupers._?igsh=M3F2ZWNwaWM5Z2E5&utm_source=qr"
                className="text-white/60 hover:text-develup-blue transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/develupers-in"
                className="text-white/60 hover:text-develup-blue transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              <b>Company</b>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              <b>Services</b>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
              {/* <Link
                to="/contact"
                className="inline-block bg-develup-blue hover:bg-develup-blue/80 text-white py-2 px-6 rounded-full transition-colors mb-4"
              >
                Get a Quote
              </Link> */}

            <p className="text-gray-400">
              Have questions? Email us<br />
              <a
                href="mailto:contact@develupers.in?subject=enquiries"
                className="text-gray-200 hover:underline"
              >
                <b>contact@develupers.in</b>
              </a>
            </p>
            <br />
            <p className="text-gray-400">
              Connect With Our Team <br />
              <a href="tel:+917904372139" className="text-gray-200 hover:underline">
                <b>+91 9487731171</b>
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Develupers. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setIsTermsModalOpen(true);
              }}
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setIsPrivacyModalOpen(true);
              }}
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        title="Terms and Conditions"
        content={termsContent}
      />
      <Modal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
        content={privacyContent}
      />
      {typeof window !== "undefined" && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
        document.querySelectorAll('a[href="/services"]').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/services';
            setTimeout(() => window.scrollTo(0, 0), 0);
          });
        });
      `,
          }}
        />
      )}
    </footer>
  );
};

export default Footer;