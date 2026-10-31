export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot check for bots
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = "Bot detected.";
    return { isValid: false, errors };
  }

  // Name validation
  const name = (data.name || "").trim();
  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Name cannot exceed 80 characters.";
  }

  // Email validation
  const email = (data.email || "").trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please provide a valid email address.";
  } else if (email.length > 100) {
    errors.email = "Email cannot exceed 100 characters.";
  }

  // Subject validation
  const subject = (data.subject || "").trim();
  if (!subject) {
    errors.subject = "Subject is required.";
  } else if (subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  } else if (subject.length > 120) {
    errors.subject = "Subject cannot exceed 120 characters.";
  }

  // Message validation
  const message = (data.message || "").trim();
  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 2000) {
    errors.message = "Message cannot exceed 2000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

