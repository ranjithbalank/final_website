import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CareerCardProps {
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  formUrl: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ 
  title, 
  description, 
  responsibilities,
  requirements,
  formUrl
}) => {
  return (
    <Card className="bg-develup-gray border-none shadow-xl overflow-hidden group">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 mb-4">{description}</CardDescription>
        
        <div className="mb-4">
          <h4 className="text-white text-sm font-semibold mb-2">Responsibilities:</h4>
          <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-white text-sm font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <Button 
          className="w-full bg-develup-blue hover:bg-develup-blue/80 text-white transition-all"
          asChild
        >
          <a href={formUrl} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
