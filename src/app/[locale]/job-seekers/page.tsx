import { useTranslations } from 'next-intl';
import Layout from '@/components/Layout';
import CVSubmissionForm from '@/components/CVSubmissionForm';

export default function JobSeekersPage() {
  const t = useTranslations('jobSeekers');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ED1C24] to-red-700 text-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-hudson leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 mb-8">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Apply Through Us */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {t('whyApply.title')}
              </h2>
              <ul className="space-y-4">
                {t.raw('whyApply.benefits').map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <svg className="w-6 h-6 text-[#ED1C24] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Success Rate</h3>
                <p className="text-gray-600 mb-4">{t('successNote')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Submission Form */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('form.title')}
            </h2>
          </div>

          <CVSubmissionForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('faq.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t('faq.legitimateQ')}
              </h3>
              <p className="text-gray-700">
                {t('faq.legitimateA')}
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does the process take?
              </h3>
              <p className="text-gray-700">
                Our process typically takes 45 days from initial application to mobilization in Saudi Arabia, including visa processing and onboarding.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What industries do you recruit for?
              </h3>
              <p className="text-gray-700">
                We specialize in IT, hospitality, construction, banking, and defense sectors, with expertise in both technical and operational roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#ED1C24] text-white py-16">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your career in Saudi Arabia?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join hundreds of professionals who&apos;ve successfully built their careers in KSA with our support.
          </p>
          <button className="btn-outline text-lg px-8 py-4">
            {t('form.submit')}
          </button>
        </div>
      </section>
    </Layout>
  );
}