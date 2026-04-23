import React from 'react';

export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="bg-white shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <nav className="text-sm text-gray-500 mb-2">
            {Array.isArray(breadcrumb) ? breadcrumb.join(' > ') : breadcrumb}
          </nav>
          
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>

        <div className="flex gap-2">
          {children}
        </div>
      </div>
    </div>
  );
}