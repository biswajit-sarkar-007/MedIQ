// User types
export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

// Symptom check types
export interface SymptomCheck {
  id: string;
  userId: string;
  symptoms: string;
  result: SymptomResult;
  timestamp: string;
}

export interface SymptomResult {
  conditions: Condition[];
  urgency: 'mild' | 'moderate' | 'emergency';
  remedies: string[];
  consultDoctor: {
    required: boolean;
    reason: string;
  };
}

export interface Condition {
  name: string;
  description: string;
  probability?: number;
}

// Doctor types
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  location: string;
  rating: number;
  photoUrl: string;
  availability: string[];
  isAvailableToday: boolean;
}

// Appointment types
export interface Appointment {
  id: string;
  doctorId: string;
  userId: string;
  doctor: {
    name: string;
    specialization: string;
    photoUrl: string;
  };
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// FAQ types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Theme type
export type Theme = 'light' | 'dark';

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}