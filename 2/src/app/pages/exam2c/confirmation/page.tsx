"use client";
import { useFormContext } from '../../../context/FormContext';

export default function ConfirmationPage() {
  const { formData } = useFormContext();

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Confirmation</h1>
      <div className="bg-gray-100 p-4 rounded">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex border-b py-1">
            <span className="font-medium capitalize text-black">{key}: {value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}