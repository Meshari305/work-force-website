import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  // Work Force Gear Logo SVG (smaller version)
  const GearLogo = () => (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <div className="relative">
        <svg width="32" height="32" viewBox="0 0 100 100" className="gear-rotate">
          <path
            d="M50 15L58 25H42L50 15ZM85 50L75 42V58L85 50ZM50 85L42 75H58L50 85ZM15 50L25 58V42L15 50ZM71 29L67 37L79 33L71 29ZM71 71L79 67L67 63L71 71ZM29 71L33 63L21 67L29 71ZM29 29L21 33L33 37L29 29Z"
            fill="#ED1C24"
          />
          <circle cx="50" cy="50" r="15" fill="#ED1C24"/>
          <circle cx="50" cy="50" r="8" fill="white"/>
        </svg>
      </div>
      <span className="text-lg font-hudson text-white">WORK FORCE</span>
    </div>
  );

  const quickLinks = [
    { key: 'about', href: `/${locale}/about` },
    { key: 'services', href: `/${locale}/services` },
    { key: 'industries', href: `/${locale}/industries` },
    { key: 'employers', href: `/${locale}/employers` },
    { key: 'jobSeekers', href: `/${locale}/job-seekers` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <GearLogo />
            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-md">
              {t('about.intro')}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-[#ED1C24] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">{t('contact.address')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-[#ED1C24] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">{t('contact.email')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-[#ED1C24] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">{t('contact.phone')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{t('services.staffing.title')}</li>
              <li>{t('services.tempStaffing.title')}</li>
              <li>{t('services.recruitment.title')}</li>
              <li>{t('services.gro.title')}</li>
              <li>{t('services.businessSetup.title')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-sm text-gray-300 text-center lg:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <Link href={`/${locale}/privacy`} className="text-sm text-gray-300 hover:text-white transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="text-sm text-gray-300 hover:text-white transition-colors">
                {t('footer.terms')}
              </Link>
              <Link href={`/${locale}/careers`} className="text-sm text-gray-300 hover:text-white transition-colors">
                {t('footer.careers')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}