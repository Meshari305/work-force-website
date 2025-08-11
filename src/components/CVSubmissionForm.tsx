'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function CVSubmissionForm() {
  const t = useTranslations('jobSeekers.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    currentLocation: '',
    desiredRole: '',
    noticePeriod: '',
    expectedSalary: '',
    linkedin: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);

      const response = await fetch('/api/cv-submission', {
        method: 'POST',
        body: formDataObj
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          nationality: '',
          currentLocation: '',
          desiredRole: '',
          noticePeriod: '',
          expectedSalary: '',
          linkedin: ''
        });
        form.reset();
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-lg p-8 shadow-sm text-center">
        <div className="text-6xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {t('success')}
        </h3>
        <p className="text-gray-600 mb-8">
          We&apos;ll contact you if your profile matches current roles in our database.
        </p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="btn-secondary"
        >
          Submit Another CV
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm">
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            There was an error submitting your CV. Please try again or contact us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('name')} *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder={t('name')}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('email')} *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder={t('email')}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('phone')} *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder={t('phone')}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('nationality')} *
          </label>
          <select 
            name="nationality"
            className="form-select" 
            required
            value={formData.nationality}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">{t('nationality')}</option>
            <option value="SA">Saudi Arabia</option>
            <option value="IN">India</option>
            <option value="PK">Pakistan</option>
            <option value="BD">Bangladesh</option>
            <option value="PH">Philippines</option>
            <option value="EG">Egypt</option>
            <option value="JO">Jordan</option>
            <option value="LB">Lebanon</option>
            <option value="SY">Syria</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('currentLocation')}
          </label>
          <input
            type="text"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            className="form-input"
            placeholder="City, Country"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('desiredRole')} *
          </label>
          <input
            type="text"
            name="desiredRole"
            required
            value={formData.desiredRole}
            onChange={handleChange}
            className="form-input"
            placeholder="Software Engineer, Project Manager, etc."
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('noticePeriod')}
          </label>
          <select 
            name="noticePeriod"
            className="form-select"
            value={formData.noticePeriod}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Select...</option>
            <option value="immediate">Immediate</option>
            <option value="1-month">1 Month</option>
            <option value="2-months">2 Months</option>
            <option value="3-months">3 Months</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('expectedSalary')}
          </label>
          <input
            type="number"
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
            className="form-input"
            placeholder="15000"
            disabled={isSubmitting}
          />
        </div>
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('uploadCV')} *
          </label>
          <input
            type="file"
            name="cv"
            accept=".pdf"
            required
            className="form-input file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-[#ED1C24] hover:file:bg-red-100"
            disabled={isSubmitting}
          />
        </div>
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('linkedin')}
          </label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="form-input"
            placeholder="https://linkedin.com/in/yourprofile"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button 
          type="submit" 
          className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : t('submit')}
        </button>
      </div>
    </form>
  );
}