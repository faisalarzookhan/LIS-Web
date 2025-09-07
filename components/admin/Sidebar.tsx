import React from 'react';
import Link from 'next/link';

const adminSections = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Pages', href: '/admin/content/pages' },
  { name: 'Products', href: '/admin/content/products' },
  { name: 'Portfolio', href: '/admin/content/portfolio' },
  { name: 'Reviews', href: '/admin/reviews' },
  { name: 'Appearance', href: '/admin/appearance' },
  { name: 'Analytics', href: '/admin/analytics' },
  { name: 'Users', href: '/admin/users' },
  { name: 'Settings', href: '/admin/settings' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
      <nav>
        <ul>
          {adminSections.map(section => (
            <li key={section.name}>
              <Link href={section.href}>
                <a className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                  {section.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
