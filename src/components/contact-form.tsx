import { component$, useSignal, $ } from '@builder.io/qwik';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  budget: string;
  neighborhood: string;
  message: string;
}

export default component$(() => {
  const formData = useSignal<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    budget: '',
    neighborhood: '',
    message: '',
  });

  const errors = useSignal<Partial<Record<keyof FormData, string>>>({});
  const isSubmitting = useSignal(false);
  const isSubmitted = useSignal(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.value.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.value.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.value.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.value.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.value.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service interest';
    }

    if (!formData.value.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.value.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    errors.value = newErrors;
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = $((value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  });

  const handlePhoneInput = $(async (event: Event) => {
    const input = event.target as HTMLInputElement;
    const formatted = await formatPhone(input.value);
    formData.value = { ...formData.value, phone: formatted };
  });

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    isSubmitting.value = true;

    try {
      // Simulate API call - replace with actual form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      formData.value = {
        name: '',
        email: '',
        phone: '',
        serviceInterest: '',
        budget: '',
        neighborhood: '',
        message: '',
      };
      errors.value = {};
      isSubmitted.value = true;

      // Reset success message after 5 seconds
      setTimeout(() => {
        isSubmitted.value = false;
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      isSubmitting.value = false;
    }
  });

  return (
    <div class="w-full max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-lg p-8 md:p-10">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            Get In Touch
          </h2>
          <p class="text-gray-600">
            Fill out the form below and Dr. Jan Duffy will get back to you within 24 hours.
          </p>
        </div>

        {isSubmitted.value ? (
          <div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div class="mb-4">
              <svg
                class="w-16 h-16 text-green-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-green-900 mb-2">
              Thank You!
            </h3>
            <p class="text-green-700">
              Your message has been sent successfully. Dr. Jan Duffy will contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit$={handleSubmit} class="space-y-6" noValidate>
            {/* Name and Email Row */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.value.name}
                  onInput$={(event) => {
                    formData.value = {
                      ...formData.value,
                      name: (event.target as HTMLInputElement).value,
                    };
                    if (errors.value.name) {
                      delete errors.value.name;
                    }
                  }}
                  class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.value.name
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                  aria-invalid={!!errors.value.name}
                  aria-describedby={errors.value.name ? 'name-error' : undefined}
                />
                {errors.value.name && (
                  <p id="name-error" class="mt-1 text-sm text-red-600">
                    {errors.value.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address <span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.value.email}
                  onInput$={(event) => {
                    formData.value = {
                      ...formData.value,
                      email: (event.target as HTMLInputElement).value,
                    };
                    if (errors.value.email) {
                      delete errors.value.email;
                    }
                  }}
                  class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.value.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                  placeholder="john@example.com"
                  aria-invalid={!!errors.value.email}
                  aria-describedby={errors.value.email ? 'email-error' : undefined}
                />
                {errors.value.email && (
                  <p id="email-error" class="mt-1 text-sm text-red-600">
                    {errors.value.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Service Interest Row */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="phone"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number <span class="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.value.phone}
                  onInput$={handlePhoneInput}
                  class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.value.phone
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                  placeholder="(702) 555-1234"
                  aria-invalid={!!errors.value.phone}
                  aria-describedby={errors.value.phone ? 'phone-error' : undefined}
                />
                {errors.value.phone && (
                  <p id="phone-error" class="mt-1 text-sm text-red-600">
                    {errors.value.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  for="serviceInterest"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service Interest <span class="text-red-500">*</span>
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.value.serviceInterest}
                  onChange$={(event) => {
                    formData.value = {
                      ...formData.value,
                      serviceInterest: (event.target as HTMLSelectElement).value,
                    };
                    if (errors.value.serviceInterest) {
                      delete errors.value.serviceInterest;
                    }
                  }}
                  class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white ${
                    errors.value.serviceInterest
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                  aria-invalid={!!errors.value.serviceInterest}
                  aria-describedby={
                    errors.value.serviceInterest ? 'service-error' : undefined
                  }
                >
                  <option value="">Select a service...</option>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="valuation">Home Valuation</option>
                  <option value="investment">Investment Properties</option>
                  <option value="california">California Equity Buyer</option>
                  <option value="relocation">Corporate Relocation</option>
                  <option value="general">General Inquiry</option>
                </select>
                {errors.value.serviceInterest && (
                  <p id="service-error" class="mt-1 text-sm text-red-600">
                    {errors.value.serviceInterest}
                  </p>
                )}
              </div>
            </div>

            {/* Budget and Neighborhood Row */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="budget"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Budget/Price Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.value.budget}
                  onChange$={(event) => {
                    formData.value = {
                      ...formData.value,
                      budget: (event.target as HTMLSelectElement).value,
                    };
                  }}
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-400k">Under $400K</option>
                  <option value="400k-600k">$400K - $600K</option>
                  <option value="600k-1m">$600K - $1M</option>
                  <option value="over-1m">Over $1M</option>
                </select>
              </div>

              <div>
                <label
                  for="neighborhood"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Preferred Neighborhood
                </label>
                <select
                  id="neighborhood"
                  name="neighborhood"
                  value={formData.value.neighborhood}
                  onChange$={(event) => {
                    formData.value = {
                      ...formData.value,
                      neighborhood: (event.target as HTMLSelectElement).value,
                    };
                  }}
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                >
                  <option value="">Select neighborhood...</option>
                  <option value="centennial-hills">Centennial Hills</option>
                  <option value="summerlin">Summerlin</option>
                  <option value="red-rock">Red Rock Country Club</option>
                  <option value="ridges">The Ridges</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                for="message"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.value.message}
                onInput$={(event) => {
                  formData.value = {
                    ...formData.value,
                    message: (event.target as HTMLTextAreaElement).value,
                  };
                  if (errors.value.message) {
                    delete errors.value.message;
                  }
                }}
                rows={5}
                class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y ${
                  errors.value.message
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                placeholder="Tell us about your real estate needs..."
                aria-invalid={!!errors.value.message}
                aria-describedby={errors.value.message ? 'message-error' : undefined}
              />
              {errors.value.message && (
                <p id="message-error" class="mt-1 text-sm text-red-600">
                  {errors.value.message}
                </p>
              )}
            </div>

            {/* Privacy Note */}
            <p class="text-sm text-gray-500">
              We respect your privacy. Your information will only be used to contact you about your real estate inquiry.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting.value}
              class={`w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitting.value ? 'cursor-wait' : ''
              }`}
            >
              {isSubmitting.value ? (
                <span class="flex items-center justify-center">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
});

