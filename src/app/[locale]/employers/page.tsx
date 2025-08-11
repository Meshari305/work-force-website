import { useTranslations, useLocale } from 'next-intl';
import Layout from '@/components/Layout';
import StaffingRequestForm from '@/components/StaffingRequestForm';
import { generateSEOMetadata, generateStructuredData, StructuredDataScript } from '@/components/SEO';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'ar' 
    ? 'كوِّن فريقك خلال 45 يوم — من أي بلد إلى السعودية'
    : 'Build your team in 45 days — anywhere to KSA';
    
  const description = locale === 'ar'
    ? 'تعبئة سريعة للمشاريع مع امتثال كامل. توظيف تحت Work Force أو شركتكم. اطلب توريد موظفين اليوم.'
    : 'Fast mobilization for projects with full compliance. Sponsorship under Work Force or your company. Request staffing today.';

  return generateSEOMetadata({
    title,
    description,
    locale,
    path: '/employers',
    keywords: locale === 'ar'
      ? 'توريد موظفين السعودية, توظيف مشاريع, كفالة موظفين, تأشيرات عمل السعودية'
      : 'Saudi Arabia staffing, project staffing, employee sponsorship, work visas Saudi Arabia',
  });
}

export default function EmployersPage({ params: _ }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations('employers');
  const locale = useLocale();

  // Generate structured data for the employers page
  const serviceData = generateStructuredData({
    type: 'Service',
    locale,
    data: {
      name: locale === 'ar' ? 'خدمات التوريد والتوظيف' : 'Staffing and Recruitment Services',
      description: locale === 'ar' 
        ? 'تعبئة سريعة للمشاريع مع امتثال كامل. توظيف تحت Work Force أو شركتكم.'
        : 'Fast mobilization for projects with full compliance. Sponsorship under Work Force or your company.'
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-hudson leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Force */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {t('whyWorkForce.title')}
              </h2>
              <ul className="space-y-4">
                {t.raw('whyWorkForce.benefits').map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <svg className="w-6 h-6 text-[#ED1C24] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Deployment</h3>
                <p className="text-gray-600">Average mobilization in 45 days from anywhere to KSA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('industries.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {t.raw('industries.list').map((industry: string, index: number) => (
              <div key={index} className="bg-white card text-center py-8">
                <div className="text-2xl mb-3">
                  {index === 0 && '💻'}
                  {index === 1 && '🏨'}
                  {index === 2 && '🏗️'}
                  {index === 3 && '🏦'}
                  {index === 4 && '🛡️'}
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & SLA */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('process.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Briefing</h3>
              <p className="text-gray-600 text-sm">{t('process.briefing')}</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Shortlist</h3>
              <p className="text-gray-600 text-sm">{t('process.shortlist')}</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-4">✈️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Visas</h3>
              <p className="text-gray-600 text-sm">{t('process.offers')}</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobilization</h3>
              <p className="text-gray-600 text-sm">{t('process.mobilization')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Staffing Form */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('form.title')}
            </h2>
          </div>

          <StaffingRequestForm />
        </div>
      </section>

      {/* Structured Data */}
      <StructuredDataScript data={serviceData} />
    </Layout>
  );
}