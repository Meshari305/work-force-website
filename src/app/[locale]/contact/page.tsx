import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const t = useTranslations('contact');

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
              Get in touch for staffing, recruitment, or GRO services in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">{t('address')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${t('email')}`} className="text-[#ED1C24] hover:underline">
                      {t('email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${t('phone')}`} className="text-[#ED1C24] hover:underline">
                      {t('phone')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/employers" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <div className="font-medium text-gray-900">Need Staff Fast?</div>
                        <div className="text-sm text-gray-600">Request staffing for your project</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/job-seekers" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <span className="text-2xl">📄</span>
                      <div>
                        <div className="font-medium text-gray-900">Looking for Work?</div>
                        <div className="text-sm text-gray-600">Submit your CV for KSA opportunities</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="bg-[#ED1C24] text-white py-12">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <p className="text-xl font-semibold">
              We respond within 24 hours during business days
            </p>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Business Hours
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Saudi Arabia Time</h3>
              <div className="space-y-2 text-gray-600">
                <div>Sunday - Thursday: 9:00 AM - 6:00 PM</div>
                <div>Friday - Saturday: Closed</div>
              </div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact</h3>
              <div className="text-gray-600">
                <p>For urgent staffing matters:</p>
                <p className="font-medium text-[#ED1C24] mt-2">Available 24/7 for active projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}