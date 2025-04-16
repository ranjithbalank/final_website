
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'mint';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  color
}) => {
  // Color styles based on the color prop
  const colorStyles = {
    blue: {
      bg: 'bg-develup-blue/10',
      text: 'text-develup-blue',
      hoverBg: 'group-hover:bg-develup-blue'
    },
    purple: {
      bg: 'bg-develup-purple/10',
      text: 'text-develup-purple',
      hoverBg: 'group-hover:bg-develup-purple'
    },
    mint: {
      bg: 'bg-develup-mint/10',
      text: 'text-develup-mint',
      hoverBg: 'group-hover:bg-develup-mint'
    }
  };
  const style = colorStyles[color];

  return (
    <Card className="bg-develup-gray border-none shadow-xl overflow-hidden group transition-all duration-500 hover:translate-y-[-5px] card-hover">
      <CardHeader className="pb-2">
        <div className={`inline-flex p-3 rounded-lg ${style.bg} mb-4`}>
          <Icon className={`w-6 h-6 ${style.text}`} />
        </div>
        <CardTitle className="text-white text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 mb-6">{description}</CardDescription>
{/*         <a href="/services">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
            Learn More
            <span className={`ml-2 text-xs opacity-0 transition-all duration-300 ${style.text} group-hover:opacity-100`}>→</span>
          </Button>
        </a> */}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
