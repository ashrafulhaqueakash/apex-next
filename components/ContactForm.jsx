"use client";

import { useState } from "react";

function FormField({ label, placeholder, type = "text", className = "", name, value, onChange, required }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="py-0.5 font-din text-base font-medium leading-5 text-white" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 rounded-lg border border-oxblood bg-input px-3 font-sans text-base text-ivory outline-none placeholder:text-ivory/25"
      />
    </div>
  );
}

function PhoneField({ className = "", value, onChange }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="py-0.5 font-din text-base font-medium leading-5 text-white" htmlFor="phone">
        PHONE
      </label>
      <div className="flex h-12 items-center gap-1.5 rounded-lg border border-oxblood bg-input px-3">
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone number"
          value={value}
          onChange={onChange}
          className="w-full bg-transparent font-sans text-base font-medium text-ivory outline-none placeholder:text-ivory/25"
        />
      </div>
    </div>
  );
}

const initialState = { name: "", company: "", email: "", phone: "", message: "", website: "" };

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setValues(initialState);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex w-full flex-col items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-6 py-10 text-center lg:w-[751px]">
        <h3 className="font-display text-2xl font-light text-white">Thank you.</h3>
        <p className="font-sans text-base text-white/80">
          Your message has been sent — we&apos;ll be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-2 font-sans text-sm font-medium text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 lg:w-[751px]">
      {/* Honeypot field — hidden from real visitors, catches basic bots */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 lg:flex-row lg:gap-[29px]">
        <FormField
          label="NAME"
          name="name"
          placeholder="Your name"
          className="w-full lg:w-[361px]"
          value={values.name}
          onChange={handleChange}
          required
        />
        <FormField
          label="COMPANY"
          name="company"
          placeholder="Company name"
          className="w-full lg:w-[361px]"
          value={values.company}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-[29px]">
        <FormField
          label="BUSINESS EMAIL"
          name="email"
          type="email"
          placeholder="you@company.com"
          className="w-full lg:w-[361px]"
          value={values.email}
          onChange={handleChange}
          required
        />
        <PhoneField className="w-full lg:w-[361px]" value={values.phone} onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-1">
        <label className="py-0.5 font-din text-base font-medium leading-5 text-white" htmlFor="message">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave us a message ..."
          value={values.message}
          onChange={handleChange}
          required
          className="h-[168px] resize-none rounded-lg border border-oxblood bg-input p-3 font-sans text-base font-semibold leading-6 text-ivory outline-none placeholder:text-ivory/25"
        />
      </div>

      {status === "error" && (
        <p className="font-sans text-sm font-medium text-red-300" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-outline btn-outline-ivory h-[47px] w-[220px] cursor-pointer self-center rounded-[4px] border border-ivory font-sans text-base font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="btn-label transition-colors duration-300">
          {status === "submitting" ? "Sending..." : "START THE CONVERSATION"}
        </span>
      </button>
    </form>
  );
}
