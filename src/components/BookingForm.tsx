import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export default function BookingForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    areaSize: '',
    description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Property location is required';
    }

    if (!formData.areaSize) {
      newErrors.areaSize = 'Area size is required';
    } else if (parseInt(formData.areaSize) < 1000) {
      newErrors.areaSize = 'We only work on projects above 1000 sq ft';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      if (!isSupabaseConfigured || !supabase) {
        throw new Error('Database not configured');
      }

      const { error } = await supabase.from('bookings').insert([
        {
          name: formData.name,
          phone: formData.phone,
          property_location: formData.location,
          area_size: parseInt(formData.areaSize),
          project_description: formData.description || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        location: '',
        areaSize: '',
        description: '',
      });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        submit: 'Failed to submit form. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-6 sm:mb-8 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Book Your Free Consultation
          </h1>
          <p className="text-gray-600 mb-8 sm:mb-10">
            Fill out the form below and our team will be in touch within 24 hours.
          </p>

          {submitSuccess && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-6 sm:mb-8">
              <p className="text-green-700 font-semibold">
                Thank you! Your consultation request has been received. Redirecting...
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-2 font-medium text-base transition-colors ${
                  errors.name
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 hover:border-green-400 focus:border-green-500'
                } focus:outline-none focus:ring-0`}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1 font-medium">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-2 font-medium text-base transition-colors ${
                  errors.phone
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 hover:border-green-400 focus:border-green-500'
                } focus:outline-none focus:ring-0`}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1 font-medium">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                Property Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter property location (city/area)"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-2 font-medium text-base transition-colors ${
                  errors.location
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 hover:border-green-400 focus:border-green-500'
                } focus:outline-none focus:ring-0`}
              />
              {errors.location && (
                <p className="text-red-600 text-sm mt-1 font-medium">{errors.location}</p>
              )}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                Approximate Area Size (sq ft) *
              </label>
              <input
                type="number"
                name="areaSize"
                value={formData.areaSize}
                onChange={handleChange}
                placeholder="Minimum 1000 sq ft"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-2 font-medium text-base transition-colors ${
                  errors.areaSize
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 hover:border-green-400 focus:border-green-500'
                } focus:outline-none focus:ring-0`}
              />
              {errors.areaSize && (
                <p className="text-red-600 text-sm mt-1 font-medium">{errors.areaSize}</p>
              )}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                Brief Project Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your landscaping project..."
                rows={4}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-2 border-gray-300 hover:border-green-400 focus:border-green-500 font-medium text-base transition-colors focus:outline-none focus:ring-0"
              />
            </div>

            {errors.submit && (
              <p className="text-red-600 text-sm font-medium">{errors.submit}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-lg text-base sm:text-lg transition-all transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
            >
              {loading ? 'Booking...' : 'Book My Free Consultation'}
            </button>
          </form>

          <p className="text-gray-600 text-sm sm:text-base text-center mt-6 sm:mt-8">
            We respect your privacy. Your information is safe with us.
          </p>
        </div>
      </div>
    </div>
  );
}
