'use client';

import { useState } from 'react';

const initialStatus = {
  type: 'idle',
  message: ''
};

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('_gotcha')) {
      setStatus({ type: 'success', message: 'Thanks! Your request has been received.' });
      form.reset();
      return;
    }

    setIsSubmitting(true);
    setStatus(initialStatus);

    try {
      const response = await fetch('https://formspree.io/f/myknpbyk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your quote request was submitted successfully. We will be in touch soon.'
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your request. Please try again or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <input
        name="fullName"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Full Name"
        required
      />
      <input
        name="phone"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Phone"
        type="tel"
        required
      />
      <input
        name="email"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="moveDate"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        type="date"
        aria-label="Move Date"
        required
      />
      <input
        name="serviceType"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Service Type"
        required
      />
      <input
        name="pickupLocation"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Pickup Location"
        required
      />
      <input
        name="dropoffLocation"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Dropoff Location"
        required
      />
      <input
        name="moveSize"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Move Size"
      />
      <input
        name="stairsElevator"
        className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Stairs/Elevator"
      />
      <textarea
        name="message"
        className="min-h-24 rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm"
        placeholder="Message"
      />
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      {status.type === 'success' && (
        <p className="rounded-md border border-emerald-400/50 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
          {status.message}
        </p>
      )}
      {status.type === 'error' && (
        <p className="rounded-md border border-red-400/50 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {status.message}
        </p>
      )}
      <button
        type="submit"
        className="rounded-md bg-gold-400 px-5 py-3 font-medium text-black transition hover:bg-gold-500 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
}
