"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
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
    } catch (err) {
      setServerError(
        "Network connection error. Please email rajank5038383@gmail.com directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E4E8F0]">
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
              <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F9FC] border border-[#E4E8F0] shadow-xs flex flex-col gap-5">
                <h3 className="font-sans font-bold text-xl text-[#17243A]">
                  Direct Contact Information
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  I typically respond to inquiries within 24 business hours. Feel
                  free to contact me via email, phone, or schedule a conversation.
                </p>

                <div className="flex flex-col gap-3.5 pt-2">
                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E4E8F0] hover:border-[#5577E8]/40 transition-colors group"
                  >
                    <div className="p-2.5 rounded-lg bg-[#E7EDFF] text-[#5577E8]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono text-[#667085]">
                        Direct Email
                      </span>
                      <span className="text-sm font-semibold text-[#17243A] group-hover:text-[#5577E8]">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E4E8F0] hover:border-[#5577E8]/40 transition-colors group"
                  >
                    <div className="p-2.5 rounded-lg bg-[#E7EDFF] text-[#5577E8]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono text-[#667085]">
                        Phone / WhatsApp
                      </span>
                      <span className="text-sm font-semibold text-[#17243A] group-hover:text-[#5577E8]">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E4E8F0]">
                    <div className="p-2.5 rounded-lg bg-[#EEF2F8] text-[#17243A]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono text-[#667085]">
                        Base Location
                      </span>
                      <span className="text-sm font-semibold text-[#17243A]">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability Notice */}
                <div className="pt-4 border-t border-[#E4E8F0] flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#21865B] mt-1.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#17243A]">
                      Employment Status
                    </span>
                    <span className="text-xs text-[#667085]">
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
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E4E8F0] shadow-sm">
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in-50 duration-300">
                    <div className="p-4 rounded-full bg-[#EBF7F0] text-[#21865B] border border-[#21865B]/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#17243A]">
                      Message Received
                    </h3>
                    <p className="text-[#667085] max-w-md text-sm leading-relaxed">
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
                    <div className="flex items-center justify-between pb-3 border-b border-[#E4E8F0]">
                      <h3 className="font-sans font-bold text-lg text-[#17243A]">
                        Send a Message
                      </h3>
                      <span className="text-xs font-mono text-[#667085]">
                        All fields required
                      </span>
                    </div>

                    {/* Server Error Alert */}
                    {serverError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
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
                          className="font-mono text-xs font-semibold text-[#17243A]"
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
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border text-sm text-[#17243A] placeholder-[#667085]/60 focus:bg-white focus:outline-none transition-all ${
                            errors.name
                              ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                              : "border-[#E4E8F0] focus:border-[#5577E8] focus:ring-2 focus:ring-[#5577E8]/20"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-xs text-red-600">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="font-mono text-xs font-semibold text-[#17243A]"
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
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border text-sm text-[#17243A] placeholder-[#667085]/60 focus:bg-white focus:outline-none transition-all ${
                            errors.email
                              ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                              : "border-[#E4E8F0] focus:border-[#5577E8] focus:ring-2 focus:ring-[#5577E8]/20"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-xs text-red-600">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="subject"
                        className="font-mono text-xs font-semibold text-[#17243A]"
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
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border text-sm text-[#17243A] placeholder-[#667085]/60 focus:bg-white focus:outline-none transition-all ${
                          errors.subject
                            ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                            : "border-[#E4E8F0] focus:border-[#5577E8] focus:ring-2 focus:ring-[#5577E8]/20"
                        }`}
                      />
                      {errors.subject && (
                        <span className="text-xs text-red-600">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="font-mono text-xs font-semibold text-[#17243A]"
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
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border text-sm text-[#17243A] placeholder-[#667085]/60 focus:bg-white focus:outline-none resize-none transition-all ${
                          errors.message
                            ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                            : "border-[#E4E8F0] focus:border-[#5577E8] focus:ring-2 focus:ring-[#5577E8]/20"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-xs text-red-600">
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
