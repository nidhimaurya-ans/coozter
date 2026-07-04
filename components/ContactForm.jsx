"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MagneticButton from "./MagneticButton";

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  interest: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSubmitMessage("");
  }

  async function submit(e) {
    e.preventDefault();
    const next = {};
    ["name", "email", "company", "interest", "message"].forEach((field) => {
      if (!form[field]) next[field] = "Required";
    });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Use a valid email";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setSubmitMessage(
        "Email is not connected yet. Add your EmailJS keys in .env.local.",
      );
      return;
    }

    setStatus("sending");
    setSubmitMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          company: form.company,
          website: form.website || "Not provided",
          service_interest: form.interest,
          monthly_budget: form.budget || "Not selected",
          message: form.message,
        },
        { publicKey },
      );
      setSent(true);
      setStatus("success");
      setSubmitMessage(
        "Thanks. Your brief has been sent to our inbox successfully.",
      );
      setForm(initial);
    } catch (error) {
      const emailError = error?.text || error?.message || "Unknown EmailJS error";
      setStatus("error");
      setSubmitMessage(
        `EmailJS error: ${emailError}`,
      );
      console.error("EmailJS send failed:", error);
    }
  }

  const inputClass =
    "peer h-[62px] w-full rounded-2xl border border-slate-300/80 bg-white px-4 pb-3 pt-6 text-ink outline-none transition placeholder:text-transparent focus:border-coral focus:shadow-[0_14px_38px_rgba(43,188,255,0.12)]";
  const selectClass =
    "peer h-[62px] w-full rounded-2xl border border-slate-300/80 bg-white px-4 pb-2 pt-6 text-ink outline-none transition focus:border-coral focus:shadow-[0_14px_38px_rgba(43,188,255,0.12)]";
  const fields = [
    ["name", "Full Name", "text"],
    ["email", "Work Email", "email"],
    ["phone", "Phone Number", "tel"],
    ["company", "Company Name", "text"],
    ["website", "Website URL", "url"],
  ];

  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] border border-slate-300/80 bg-white p-5 shadow-[0_24px_80px_rgba(14,62,128,0.09)] md:p-8"
    >
      <div className="mb-7 border-b border-slate-300/80 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss">
          Get in touch
        </p>
        <h3 className="mt-3 font-serif text-4xl leading-tight text-ink">
          Share your brief Details
        </h3>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map(([field, label, type]) => (
          <label
            key={field}
            className={`relative block ${field === "website" ? "sm:col-span-2" : ""}`}
          >
            <input
              className={inputClass}
              type={type}
              value={form[field]}
              onChange={(e) => update(field, e.target.value)}
              placeholder=" "
            />
            <span className="pointer-events-none absolute left-4 top-2 text-xs text-ink/50 transition peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-coral">
              {label}
            </span>
            <Error text={errors[field]} />
          </label>
        ))}
        <label className="relative block">
          <span className="pointer-events-none absolute left-4 top-2 z-10 text-xs text-ink/50">
            Service Interest
          </span>
          <select
            className={selectClass}
            value={form.interest}
            onChange={(e) => update("interest", e.target.value)}
          >
            <option value="">Select one</option>
            <option>Affiliate Branding</option>
            <option>Digital Marketing</option>
            <option>SEO Growth</option>
            <option>Lead Generation</option>
          </select>
          <Error text={errors.interest} />
        </label>
        <label className="relative block">
          <span className="pointer-events-none absolute left-4 top-2 z-10 text-xs text-ink/50">
            Monthly Marketing Budget
          </span>
          <select
            className={selectClass}
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="">Select range</option>
            <option>$3k-$7k</option>
            <option>$7k-$15k</option>
            <option>$15k+</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-ink/55">
          Message
        </span>
        <textarea
          className="min-h-36 w-full rounded-2xl border border-slate-300/80 bg-white p-4 text-ink outline-none transition focus:border-coral focus:shadow-[0_14px_38px_rgba(43,188,255,0.12)]"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
        <Error text={errors.message} />
      </label>
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <MagneticButton>
          {status === "sending" ? "Sending..." : "Send the Brief"}
        </MagneticButton>
        <AnimatePresence>
          {(sent || submitMessage) && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-sm ${
                status === "error" ? "text-coral" : "text-ink/65"
              }`}
            >
              {submitMessage ||
                "Thanks. We will reply with useful next steps, not a canned pitch."}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Error({ text }) {
  return (
    <AnimatePresence>
      {text && (
        <motion.span
          className="mt-2 block text-sm text-coral"
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {text}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
