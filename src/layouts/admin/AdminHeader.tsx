import { useMemo } from 'react';

import Link from 'next/link';

import { HomeIcon } from '@heroicons/react/solid';

type BLink = { name: string; href: string };

type Props = {
  title: string;
  type: 'sites' | 'feedback';
  links?: BLink[];
};

export default function AdminHeader({ title, type, links }: Props) {
  const pages = useMemo(() => {
    let first: BLink;

    switch (type) {
      case 'sites':
        first = { name: 'Sites', href: '/sites' };
        break;
      case 'feedback':
        first = { name: 'Feedback', href: '/feedback' };
        break;

      default:
        throw new Error('Unknown type');
    }

    return links ? [first, ...links] : [first];
  }, [links, type]);

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex mb-2" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <Link href="/">
                  <a className="text-gray-400 hover:text-gray-500">
                    <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </a>
                </Link>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link href={page.href}>
                    <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                      {page.name}
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-4xl font-bold leading-tight text-gray-900">{title}</h1>
      </div>
    </header>
  );
}
