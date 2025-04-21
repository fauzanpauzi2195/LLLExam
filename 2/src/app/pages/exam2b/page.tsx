"use client"

import { useState } from 'react';
import { FormData } from '../../types/formData';

export default function Exam2bPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    category: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Submitted:', formData);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name*</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block mb-1">Email*</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option className="text-black" value="">Select...</option>
            <option className="text-black" value="support">Support</option>
            <option className="text-black" value="feedback">Feedback</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
