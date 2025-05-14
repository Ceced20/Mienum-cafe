
import React from 'react';

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  icon?: string;
  bgColor?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ 
  title, 
  items, 
  icon, 
  bgColor = "bg-white" 
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-8 max-w-4xl mx-auto`}>
      <div className="flex items-center mb-8">
        {icon && (
          <span className="mr-3 text-mienum-red">
            {icon}
          </span>
        )}
        <h3 className="text-2xl font-medium tracking-tight text-gray-900">{title}</h3>
      </div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0 transition-all duration-300 hover:translate-x-1">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-medium text-lg text-gray-900">{item.name}</h4>
              <span className="font-medium text-mienum-red">Rp {item.price}</span>
            </div>
            {item.description && (
              <p className="text-gray-500 text-sm italic">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
