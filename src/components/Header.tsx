'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  // Work Force Gear Logo SVG
  const GearLogo = () => (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <div className="relative">
        <svg width="40" height="40" viewBox="0 0 100 100" className="gear-rotate">
          <path
            d="M50 15L58 25H42L50 15ZM85 50L75 42V58L85 50ZM50 85L42 75H58L50 85ZM15 50L25 58V42L15 50ZM71 29L67 37L79 33L71 29ZM71 71L79 67L67 63L71 71ZM29 71L33 63L21 67L29 71ZM29 29L21 33L33 37L29 29Z"
            fill="#ED1C24"
          />
          <circle cx="50" cy="50" r="15" fill="#ED1C24"/>
          <circle cx="50" cy="50" r="8" fill="white"/>
        </svg>
      </div>
      <span className="text-xl font-hudson text-black">WORK FORCE</span>
    </div>
  );

  const navItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'services', href: `/${locale}/services` },
    { key: 'industries', href: `/${locale}/industries` },
    { key: 'employers', href: `/${locale}/employers` },
    { key: 'jobSeekers', href: `/${locale}/job-seekers` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`}>
            <GearLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#ED1C24] ${
                  isActive(item.href) 
                    ? 'text-[#ED1C24]' 
                    : 'text-gray-700'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <Link
              href={`/${locale}/employers`}
              className="btn-secondary text-sm px-4 py-2"
            >
              {t('requestStaffing')}
            </Link>
            <Link
              href={`/${locale}/job-seekers`}
              className="btn-primary text-sm px-4 py-2"
            >
              {t('submitCV')}
            </Link>
            <Link
              href={locale === 'en' ? '/ar' : '/en'}
              className="text-sm font-medium text-gray-700 hover:text-[#ED1C24] transition-colors px-2"
            >
              {t('switchLanguage')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#ED1C24] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-[#ED1C24] bg-red-50'
                      : 'text-gray-700 hover:text-[#ED1C24] hover:bg-red-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2">
                <Link
                  href={`/${locale}/employers`}
                  className="block w-full btn-secondary text-center text-sm px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('requestStaffing')}
                </Link>
                <Link
                  href={`/${locale}/job-seekers`}
                  className="block w-full btn-primary text-center text-sm px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('submitCV')}
                </Link>
                <Link
                  href={locale === 'en' ? '/ar' : '/en'}
                  className="block text-center text-sm font-medium text-gray-700 hover:text-[#ED1C24] transition-colors px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('switchLanguage')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}