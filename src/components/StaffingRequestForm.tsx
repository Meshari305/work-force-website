'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function StaffingRequestForm() {
  const t = useTranslations('employers.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    roles: '',
    startDate: '',
    location: '',
    sponsorship: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const response = await fetch('/api/staffing-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: '',
          roles: '',
          startDate: '',
          location: '',
          sponsorship: '',
          notes: ''
        });
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
      <div className="bg-white text-gray-900 rounded-lg p-8 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {t('success')}
        </h3>
        <p className="text-gray-600 mb-8">
          Our team will contact you within one business day to discuss your requirements.
        </p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="btn-secondary"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-lg p-8">
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            There was an error submitting your request. Please try again or contact us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('company')} *
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="form-input"
            placeholder={t('company')}
            disabled={isSubmitting}
          />
        </div>
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
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('roles')} *
          </label>
          <input
            type="text"
            name="roles"
            required
            value={formData.roles}
            onChange={handleChange}
            className="form-input"
            placeholder="e.g., 5x Software Engineers, 2x Project Managers"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('startDate')}
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="form-input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('location')}
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-input"
            placeholder="Riyadh, Jeddah, etc."
            disabled={isSubmitting}
          />
        </div>
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('sponsorship')}
          </label>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="sponsorship" 
                value="ours" 
                checked={formData.sponsorship === 'ours'}
                onChange={handleChange}
                className="mr-2 rtl:ml-2"
                disabled={isSubmitting}
              />
              {t('sponsorshipOurs')}
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="sponsorship" 
                value="yours" 
                checked={formData.sponsorship === 'yours'}
                onChange={handleChange}
                className="mr-2 rtl:ml-2" 
                disabled={isSubmitting}
              />
              {t('sponsorshipYours')}
            </label>
          </div>
        </div>
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('notes')}
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Additional requirements, budget, timeline..."
            disabled={isSubmitting}
          ></textarea>
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