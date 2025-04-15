
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex gap-4 p-6 rounded-lg glass-morphism">
      <div className="shrink-0">
        <div className="bg-develup-purple/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-develup-purple" />
        </div>
      </div>
      <div>
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
