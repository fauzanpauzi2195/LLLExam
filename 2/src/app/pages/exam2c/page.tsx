"use client";

import { useRouter } from 'next/navigation';
import { useFormContext } from '../../context/FormContext';
import { useState } from 'react';
import { FormData } from '../../types/formData';

export default function Step1Page() {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
      const newErrors: Partial<FormData> = {};
      
      if (!formData.name) newErrors.name = 'Name is required';
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      return newErrors;
    };
  

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    console.log('Form submitted:', formData);
    if (Object.keys(validationErrors).length === 0) {
      router.push('/pages/exam2c/step2');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Start Your Application</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1">Full Name*</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ name: e.target.value })}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-1">Email*</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ email: e.target.value })}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Continue to Step 2
        </button>
      </div>
    </div>
  );
}
