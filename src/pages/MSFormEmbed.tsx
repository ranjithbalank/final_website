import React from 'react';
import { useLocation } from 'react-router-dom';

const formUrls: { [key: string]: string } = {
  'Frontend Intern': 'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UOVFCOTZMT1NNVlhZUTJTNlY2R0FVQUZGUy4u',
  'Backend Intern': 'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UMUZRUDNETTZITU9WWEdLOU03WlRZVEtEMi4u',
  'Offensive Security Intern': 'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UQUc1Q0lKWUdWRDkzUDRWVk5ENVlNUlI1NS4u',
  'Defensive Security Intern': 'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UMEJHQlVKWkYzUTRCV01GWjVUNUlCUTdFTy4u',
  'AI/ML Intern': 'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UMUdHOVE2RFVXNUdGWTdJS1Q0MThOSExXRy4u',
  'DevOps Intern': 'https://forms.office.com/Pages/ResponsePage.aspx?id=61OQyKYY8ECe51tGnZjnmkNfCDCbpxNMp8HNi9gNfO1UQTFQREYyU0ZBWkpUVVVESkI2UUdNMEJORC4u',
};

const MSFormEmbed: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role') || 'Frontend Intern'; // Default to Frontend Intern if no role
  const formUrl = formUrls[role] || formUrls['Frontend Intern']; // Fallback to default form

  return (
    <div className="p-6 bg-develup-dark text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">{role} Application Form</h1>
      <iframe
        src={formUrl}
        width="100%"
        height="1000"
        className="border-none rounded-lg shadow-lg"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title={`${role} Application Form`}
        allowFullScreen
        aria-label={`Application form for ${role}`}
      ></iframe>
    </div>
  );
};

export default MSFormEmbed;