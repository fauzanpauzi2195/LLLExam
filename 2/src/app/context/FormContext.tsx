'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormData } from '../types/formData';

type FormContextType = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, updateFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    category: ''
  });

  const setFormData = (data: Partial<FormData>) => {
    updateFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
