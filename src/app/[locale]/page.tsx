import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { generateSEOMetadata, generateStructuredData, StructuredDataScript } from '@/components/SEO';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'ar' 
    ? 'نوظِّف بسرعة في السعودية — من أي بلد خلال 45 يومًا'
    : 'Hire fast in Saudi Arabia — from anywhere in 45 days';
    
  const description = locale === 'ar'
    ? 'شركة سعودية للتوريد والتوظيف. توظيف سريع مع امتثال كامل من أكثر من 39 دولة. اطلب توريد موظفين اليوم.'
    : 'Saudi staffing & temporary staffing company. Global hiring from 39+ countries with full compliance. Request staffing today.';

  return generateSEOMetadata({
    title,
    description,
    locale,
    path: '',
    keywords: locale === 'ar'
      ? 'شركة توريد سعودية, توظيف مؤقت السعودية, توظيف سريع الخليج, توظيف في السعودية, Work Force'
      : 'Saudi staffing company, temporary staffing Saudi Arabia, fast recruitment GCC, hire in Saudi Arabia, Work Force',
  });
}

export default function HomePage({ params: _ }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations('home');
  const locale = useLocale();

  // Generate structured data for the homepage
  const organizationData = generateStructuredData({
    type: 'Organization',
    locale,
    data: {}
  });

  const webPageData = generateStructuredData({
    type: 'WebPage',
    locale,
    data: {
      url: `https://workforce.sa/${locale}`,
      title: locale === 'ar' 
        ? 'نوظِّف بسرعة في السعودية — من أي بلد خلال 45 يومًا'
        : 'Hire fast in Saudi Arabia — from anywhere in 45 days',
      description: locale === 'ar'
        ? 'شركة سعودية للتوريد والتوظيف. توظيف سريع مع امتثال كامل من أكثر من 39 دولة.'
        : 'Saudi staffing & temporary staffing company. Global hiring from 39+ countries with full compliance.'
    }
  });

  // Gear SVG for animations
  const AnimatedGear = ({ className = "" }) => (
    <svg className={`${className} gear-rotate`} viewBox="0 0 100 100">
      <path
        d="M50 15L58 25H42L50 15ZM85 50L75 42V58L85 50ZM50 85L42 75H58L50 85ZM15 50L25 58V42L15 50ZM71 29L67 37L79 33L71 29ZM71 71L79 67L67 63L71 71ZM29 71L33 63L21 67L29 71ZM29 29L21 33L33 37L29 29Z"
        fill="currentColor"
      />
      <circle cx="50" cy="50" r="15" fill="currentColor"/>
      <circle cx="50" cy="50" r="8" fill="white"/>
    </svg>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white section-padding relative overflow-hidden">
        {/* Background gears */}
        <div className="absolute top-10 left-10 opacity-5">
          <AnimatedGear className="w-32 h-32 text-[#ED1C24]" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5">
          <AnimatedGear className="w-24 h-24 text-[#ED1C24] gear-rotate-reverse" />
        </div>
        
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-hudson leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/employers" className="btn-primary text-lg px-8 py-4 inline-block">
                {t('hero.ctaPrimary')}
              </Link>
              <Link href="/job-seekers" className="btn-outline text-lg px-8 py-4 inline-block">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ED1C24] mb-2">480+</div>
              <div className="text-sm text-gray-600">{t('stats.contractors')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ED1C24] mb-2">20+</div>
              <div className="text-sm text-gray-600">{t('stats.clients')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ED1C24] mb-2">45</div>
              <div className="text-sm text-gray-600">{t('stats.avgTime')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ED1C24] mb-2">39+</div>
              <div className="text-sm text-gray-600">{t('stats.countries')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            {t('trustTitle')}
          </h2>
          {/* Placeholder for client logos */}
          <div className="flex justify-center items-center space-x-8 opacity-40 grayscale">
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center text-xs">Client Logo</div>
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center text-xs">Client Logo</div>
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center text-xs">Client Logo</div>
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center text-xs">Client Logo</div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('valueProps.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Speed */}
            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('valueProps.speed.title')}
              </h3>
              <p className="text-gray-600">
                {t('valueProps.speed.desc')}
              </p>
            </div>

            {/* Compliance */}
            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('valueProps.compliance.title')}
              </h3>
              <p className="text-gray-600">
                {t('valueProps.compliance.desc')}
              </p>
            </div>

            {/* Global */}
            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('valueProps.global.title')}
              </h3>
              <p className="text-gray-600">
                {t('valueProps.global.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('process.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('process.steps.scope')}</h3>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400 rtl-flip" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('process.steps.shortlist')}</h3>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400 rtl-flip" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('process.steps.interview')}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('process.steps.offer')}</h3>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                5
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('process.steps.onboard')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="bg-[#ED1C24] text-white py-16">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6">⚡</div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              {t('caseHighlight')}
            </h2>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white section-padding">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-hudson mb-8">
              {t('finalCta.title')}
            </h2>
            <Link href="/employers" className="btn-primary text-lg px-8 py-4 inline-block">
              {t('finalCta.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <StructuredDataScript data={organizationData} />
      <StructuredDataScript data={webPageData} />
    </Layout>
  );
}