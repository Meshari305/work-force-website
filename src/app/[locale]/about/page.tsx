import { useTranslations } from 'next-intl';
import Layout from '@/components/Layout';

export default function AboutPage() {
  const t = useTranslations('about');

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
              {t('intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('ourDifference.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('ourDifference.desc')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Speed</h3>
                    <p className="text-gray-600">Average 45-day mobilization from anywhere to KSA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance</h3>
                    <p className="text-gray-600">Full Qiwa, Mudad, and GOSI compliance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Communication</h3>
                    <p className="text-gray-600">Clear SLAs and transparent processes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-center">
                <div className="text-6xl mb-6">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-lg text-gray-600 mb-6">
                  {t('globalReach')}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>🇮🇳 India</div>
                  <div>🇵🇰 Pakistan</div>
                  <div>🇧🇩 Bangladesh</div>
                  <div>🇵🇭 Philippines</div>
                  <div>🇪🇬 Egypt</div>
                  <div>🇯🇴 Jordan</div>
                  <div>🇱🇧 Lebanon</div>
                  <div>🇸🇾 Syria</div>
                </div>
                <p className="text-sm text-gray-500 mt-4">+31 more countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#ED1C24] text-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">🎯</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl lg:text-2xl text-red-100 leading-relaxed">
              {t('mission')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#ED1C24] mb-2">480+</div>
              <div className="text-sm text-gray-600">Professionals Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#ED1C24] mb-2">20+</div>
              <div className="text-sm text-gray-600">Client Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#ED1C24] mb-2">39+</div>
              <div className="text-sm text-gray-600">Countries Sourced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#ED1C24] mb-2">45</div>
              <div className="text-sm text-gray-600">Days Average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Speed</h3>
              <p className="text-gray-600">
                We move fast without compromising quality. Time-to-hire is critical for project success.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Full transparency in processes, pricing, and compliance. No hidden fees or surprises.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We deliver measurable SLAs and predictable outcomes for every client engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}