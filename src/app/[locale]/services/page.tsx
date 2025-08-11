import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-hudson text-gray-900 leading-tight mb-6">
              {t('title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Staffing */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center mr-4 rtl:ml-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('staffing.title')}</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('staffing.desc')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Project Teams</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Visa Sponsorship</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Payroll</span>
              </div>
            </div>

            {/* Temporary Staffing */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center mr-4 rtl:ml-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('tempStaffing.title')}</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('tempStaffing.desc')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Peak Seasons</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Events</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Flexible</span>
              </div>
            </div>

            {/* Recruitment */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center mr-4 rtl:ml-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('recruitment.title')}</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('recruitment.desc')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Executive Search</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Fixed Fees</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Direct Hire</span>
              </div>
            </div>

            {/* GRO */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center mr-4 rtl:ml-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('gro.title')}</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('gro.desc')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Qiwa</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Mudad</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">GOSI</span>
                <span className="px-3 py-1 bg-red-100 text-[#ED1C24] rounded-full text-sm">Visas</span>
              </div>
            </div>
          </div>

          {/* Business Setup */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center mr-4 rtl:ml-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zM9 12a1 1 0 100 2h6a1 1 0 100-2H9z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">{t('businessSetup.title')}</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('businessSetup.desc')}
                  </p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-4xl mb-4">🏢</div>
                  <p className="text-gray-400">End-to-end business setup and compliance management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined process for predictable results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Requirements</h3>
              <p className="text-gray-600 text-sm">Define roles, timeline, and specifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sourcing</h3>
              <p className="text-gray-600 text-sm">7-10 day shortlist from global talent pool</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
              <p className="text-gray-600 text-sm">Visa processing and documentation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ED1C24] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600 text-sm">Onboarding and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss your staffing requirements and create a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/employers" className="btn-primary text-lg px-8 py-4">
              Request Staffing
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}