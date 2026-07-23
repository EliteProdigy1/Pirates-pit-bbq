"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site.config";

/**
 * Netlify-compatible catering inquiry form.
 *
 * Netlify detects the form at build time from /public/__forms.html (App Router
 * pages are client-rendered, so the static file is what registers the form).
 * This component submits the same field set via fetch. Spam protection: a
 * honeypot field ("bot-field"). reCAPTCHA can be layered on later.
 */

const MEATS = [
  "Brisket",
  "Pulled Pork",
  "Smoked Ribs",
  "Smoked Chicken",
  "Wings",
  "Smoked Sausage",
] as const;

const FORM_NAME = "catering";

type Errors = Partial<Record<string, string>>;

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k] ?? "")
    )
    .join("&");
}

export function CateringForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function validate(form: HTMLFormElement): Errors {
    const next: Errors = {};
    const get = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | null)?.value.trim() ?? "";

    if (!get("name")) next.name = "Please enter your name.";
    const email = get("email");
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!get("phone")) next.phone = "Please enter a phone number.";
    if (!get("event_date")) next.event_date = "Please choose an event date.";
    const guests = get("guest_count");
    if (!guests) next.guest_count = "Please estimate your guest count.";
    else if (Number(guests) < 1) next.guest_count = "Guest count must be at least 1.";
    if (!get("event_location"))
      next.event_location = "Please enter the event city or venue.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("submitting");
    const formData = new FormData(form);
    const data: Record<string, string> = { "form-name": FORM_NAME };
    formData.forEach((value, key) => {
      data[key] = data[key] ? `${data[key]}, ${value}` : String(value);
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-sm border border-gold/40 bg-gold/5 p-8 text-center"
      >
        <p className="font-display text-2xl font-bold uppercase text-gold">
          Inquiry Received
        </p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-bone/80">
          Thanks for reaching out. We&rsquo;ll get back to you soon to talk
          through your event. For anything urgent, call{" "}
          <a href={siteConfig.contact.phoneHref} className="text-gold underline">
            {siteConfig.contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldBase =
    "mt-2 w-full rounded-sm border bg-charcoal px-4 py-3 font-sans text-sm text-bone placeholder:text-smoke/60 focus-visible:outline-2 focus-visible:outline-gold";
  const labelBase =
    "font-accent text-xs uppercase tracking-widest text-bone/80";

  const err = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} role="alert" className="mt-1 font-sans text-xs text-ember">
        {errors[name]}
      </p>
    ) : null;

  const invalid = (name: string) => (errors[name] ? true : undefined);
  const border = (name: string) =>
    errors[name] ? "border-ember" : "border-white/10";

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Netlify plumbing */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Do not fill this out if you&rsquo;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name <span className="text-ember">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={invalid("name")}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${fieldBase} ${border("name")}`}
          />
          {err("name")}
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>
            Email <span className="text-ember">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={invalid("email")}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${fieldBase} ${border("email")}`}
          />
          {err("email")}
        </div>

        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone <span className="text-ember">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={invalid("phone")}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${fieldBase} ${border("phone")}`}
          />
          {err("phone")}
        </div>

        <div>
          <label htmlFor="event_date" className={labelBase}>
            Event Date <span className="text-ember">*</span>
          </label>
          <input
            id="event_date"
            name="event_date"
            type="date"
            required
            aria-invalid={invalid("event_date")}
            aria-describedby={errors.event_date ? "event_date-error" : undefined}
            className={`${fieldBase} ${border("event_date")}`}
          />
          {err("event_date")}
        </div>

        <div>
          <label htmlFor="guest_count" className={labelBase}>
            Guest Count <span className="text-ember">*</span>
          </label>
          <input
            id="guest_count"
            name="guest_count"
            type="number"
            min={1}
            inputMode="numeric"
            required
            aria-invalid={invalid("guest_count")}
            aria-describedby={errors.guest_count ? "guest_count-error" : undefined}
            className={`${fieldBase} ${border("guest_count")}`}
          />
          {err("guest_count")}
        </div>

        <div>
          <label htmlFor="event_location" className={labelBase}>
            Event City or Venue <span className="text-ember">*</span>
          </label>
          <input
            id="event_location"
            name="event_location"
            type="text"
            required
            aria-invalid={invalid("event_location")}
            aria-describedby={
              errors.event_location ? "event_location-error" : undefined
            }
            className={`${fieldBase} ${border("event_location")}`}
          />
          {err("event_location")}
        </div>
      </div>

      <fieldset>
        <legend className={labelBase}>Preferred Meats</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {MEATS.map((meat) => (
            <label
              key={meat}
              className="flex items-center gap-2 font-sans text-sm text-bone/80"
            >
              <input
                type="checkbox"
                name="preferred_meats"
                value={meat}
                className="h-4 w-4 accent-[#B58A3B]"
              />
              {meat}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="catering_needs" className={labelBase}>
          Catering Needs
        </label>
        <textarea
          id="catering_needs"
          name="catering_needs"
          rows={3}
          placeholder="Drop-off, on-site serving, sides, desserts…"
          className={`${fieldBase} border-white/10`}
        />
      </div>

      <div>
        <label htmlFor="notes" className={labelBase}>
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className={`${fieldBase} border-white/10`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="font-sans text-sm text-ember">
          Something went wrong sending your inquiry. Please try again, or email{" "}
          <a
            href={`mailto:${siteConfig.contact.cateringEmail}`}
            className="underline"
          >
            {siteConfig.contact.cateringEmail}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-[#c99a45] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}

export default CateringForm;
