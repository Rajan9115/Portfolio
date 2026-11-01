"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { validateContactForm, ContactFormData } from "@/lib/validations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField((curr) => (curr === field ? null : curr));
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      } else {
        setServerError(
          result.message || "Failed to send message. Please try direct email."
        );
      }
    } catch {
      setServerError(
        "Network connection error. Please email rajank5038383@gmail.com directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-card border-b border-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Initiate Collaboration"
          title="Let's build something dependable together."
          description="Have an open engineering role, a high-stakes project, or a technical inquiry? Send a direct message or connect through official channels."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn direction="up">
              <div className="p-6 sm:p-8 rounded-2xl bg-background border border-border shadow-xs flex flex-col gap-5">
                <h3 className="font-sans font-bold text-xl text-foreground">
                  Direct Contact Information
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  I typically respond to inquiries within 24 business hours. Feel
                  free to contact me via email, phone, or schedule a conversation.
                </p>

                <div className="flex flex-col gap-3.5 pt-2">
                  {/* Email */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors group">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      <div className="p-2.5 rounded-lg bg-accent-soft text-accent shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-mono text-foreground-secondary">
                          Direct Email
                        </span>
                        <span className="text-sm font-semibold text-foreground group-hover:text-accent truncate">
                          {personalInfo.email}
                        </span>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={(e) => handleCopy(personalInfo.email, "email", e)}
                      className="p-1.5 ml-2 rounded-lg text-foreground-secondary hover:text-accent hover:bg-background-secondary transition-colors cursor-pointer shrink-0"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copiedField === "email" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-success">
                          <Check className="w-3.5 h-3.5" />
                          Copied
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors group">
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      <div className="p-2.5 rounded-lg bg-accent-soft text-accent shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-mono text-foreground-secondary">
                          Phone / WhatsApp
                        </span>
                        <span className="text-sm font-semibold text-foreground group-hover:text-accent truncate">
                          {personalInfo.phone}
                        </span>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={(e) => handleCopy(personalInfo.phone, "phone", e)}
                      className="p-1.5 ml-2 rounded-lg text-foreground-secondary hover:text-accent hover:bg-background-secondary transition-colors cursor-pointer shrink-0"
                      title="Copy phone to clipboard"
                      aria-label="Copy phone number"
                    >
                      {copiedField === "phone" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-success">
                          <Check className="w-3.5 h-3.5" />
                          Copied
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                    <div className="p-2.5 rounded-lg bg-background-secondary text-foreground">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono text-foreground-secondary">
                        Base Location
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability Notice */}
                <div className="pt-4 border-t border-border flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-success mt-1.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-foreground">
                      Employment Status
                    </span>
                    <span className="text-xs text-foreground-secondary">
                      Actively evaluating Full-Stack Engineer, Frontend Engineer, and
                      Backend Developer roles.
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in-50 duration-300">
                    <div className="p-4 rounded-full bg-emerald-500/10 text-success border border-success/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Message Received
                    </h3>
                    <p className="text-foreground-secondary max-w-md text-sm leading-relaxed">
                      Thank you for reaching out. Your message has been safely
                      delivered to Rajan. You will receive a response shortly.
                    </p>
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <h3 className="font-sans font-bold text-lg text-foreground">
                        Send a Message
                      </h3>
                      <span className="text-xs font-mono text-foreground-secondary">
                        All fields required
                      </span>
                    </div>

                    {/* Server Error Alert */}
                    {serverError && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Honeypot field for bot suppression */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="name"
                          className="font-mono text-xs font-semibold text-foreground"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Connor"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder-foreground-secondary/60 focus:bg-card focus:outline-none transition-all ${
                            errors.name
                              ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                              : "border-border focus:border-accent focus:ring-2 focus:ring-accent/20"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-xs text-red-600 dark:text-red-400">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="font-mono text-xs font-semibold text-foreground"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder-foreground-secondary/60 focus:bg-card focus:outline-none transition-all ${
                            errors.email
                              ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                              : "border-border focus:border-accent focus:ring-2 focus:ring-accent/20"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-xs text-red-600 dark:text-red-400">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="subject"
                        className="font-mono text-xs font-semibold text-foreground"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Full-Stack Engineering Role Inquiry"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder-foreground-secondary/60 focus:bg-card focus:outline-none transition-all ${
                          errors.subject
                            ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                            : "border-border focus:border-accent focus:ring-2 focus:ring-accent/20"
                        }`}
                      />
                      {errors.subject && (
                        <span className="text-xs text-red-600 dark:text-red-400">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="font-mono text-xs font-semibold text-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share details regarding your team, the scope of work, timeline, or position requirements..."
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder-foreground-secondary/60 focus:bg-card focus:outline-none resize-none transition-all ${
                          errors.message
                            ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                            : "border-border focus:border-accent focus:ring-2 focus:ring-accent/20"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-xs text-red-600 dark:text-red-400">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isLoading}
                      className="w-full mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Deliver Message</span>
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
