
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
    <div className={`${bgColor} rounded-lg p-6 shadow-md mb-8`}>
      <div className="flex items-center mb-6">
        {icon && (
          <span className="mr-2 text-mienum-red">
            {icon}
          </span>
        )}
        <h3 className="text-2xl font-bold text-mienum-red">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="flex justify-between">
              <h4 className="font-bold">{item.name}</h4>
              <span className="menu-price">Rp {item.price}</span>
            </div>
            {item.description && (
              <p className="menu-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
