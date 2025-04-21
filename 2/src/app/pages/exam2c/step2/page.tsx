"use client";

import { useRouter } from 'next/navigation';
import { useFormContext } from '../../../context/FormContext';

export default function Step2Page() {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    router.push('/pages/exam2c/confirmation');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Step 2</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            value={formData.message || ''}
            onChange={(e) => setFormData({ message: e.target.value })}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>
        <div>
          <label className="block mb-1">Category</label>
          <select
            value={formData.category || ''}
            onChange={(e) => setFormData({ category: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option className="text-black" value="">Select...</option>
            <option className="text-black" value="support">Support</option>
            <option className="text-black" value="feedback">Feedback</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => router.back()}
            className="text-blue-500 p-2"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
