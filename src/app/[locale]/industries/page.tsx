import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function IndustriesPage() {
  const t = useTranslations('industries');

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

      {/* Industries Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* IT */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mr-6 rtl:ml-6">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Information Technology</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {t('it')}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Software Engineers</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>DevOps Engineers</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Data Scientists</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Cloud Architects</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Project Managers</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>QA Engineers</span>
                </div>
              </div>
            </div>

            {/* Hospitality */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mr-6 rtl:ml-6">
                  <span className="text-3xl">🏨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Hospitality</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {t('hospitality')}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Front Office</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>F&B Service</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Housekeeping</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Event Management</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Concierge</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Guest Relations</span>
                </div>
              </div>
            </div>

            {/* Construction */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mr-6 rtl:ml-6">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Construction</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {t('construction')}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>HSE Officers</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Site Engineers</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Project Managers</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Technicians</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Quality Control</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Supervisors</span>
                </div>
              </div>
            </div>

            {/* Banking */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mr-6 rtl:ml-6">
                  <span className="text-3xl">🏦</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Banking & Finance</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {t('banking')}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Operations</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Compliance</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Digital Banking</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Customer Experience</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Risk Management</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                  <span>Business Analysis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Defense */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mr-6 rtl:ml-6">
                      <span className="text-3xl">🛡️</span>
                    </div>
                    <h3 className="text-2xl font-bold">Defense & Security</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {t('defense')}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                      <span>Technical Support</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                      <span>Logistics</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                      <span>Project Operations</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="w-2 h-2 bg-[#ED1C24] rounded-full"></span>
                      <span>Systems Integration</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <p className="text-gray-400">Specialized security clearance and compliance management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Deployments
            </h2>
            <p className="text-xl text-gray-600">
              Real projects, real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-center mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">IT Project Team</h3>
              <p className="text-gray-600 text-sm mb-3">25 software engineers and data analysts for a fintech project in Riyadh</p>
              <div className="text-xs text-[#ED1C24] font-medium">42 days deployment</div>
            </div>

            <div className="card">
              <div className="text-center mb-4">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Construction Crew</h3>
              <p className="text-gray-600 text-sm mb-3">50 technicians and supervisors for a NEOM infrastructure project</p>
              <div className="text-xs text-[#ED1C24] font-medium">32 days deployment</div>
            </div>

            <div className="card">
              <div className="text-center mb-4">
                <span className="text-3xl">🏨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hospitality Team</h3>
              <p className="text-gray-600 text-sm mb-3">35 F&B and front office staff for a luxury resort opening</p>
              <div className="text-xs text-[#ED1C24] font-medium">38 days deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ED1C24] text-white section-padding">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need talent in your industry?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            We understand sector-specific requirements and can mobilize teams fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/employers" className="btn-outline text-lg px-8 py-4">
              Request Staffing
            </Link>
            <Link href="/contact" className="bg-white text-[#ED1C24] hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-lg">
              Discuss Requirements
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}