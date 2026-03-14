export default function ContactPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 max-w-xl text-white/75">Tell us about your upcoming move and our team will respond with a personalized plan.</p>
      <form className="mt-8 grid max-w-2xl gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
        <input className="rounded-md border border-white/20 bg-black/50 px-4 py-3" placeholder="Full Name" />
        <input className="rounded-md border border-white/20 bg-black/50 px-4 py-3" placeholder="Email" type="email" />
        <input className="rounded-md border border-white/20 bg-black/50 px-4 py-3" placeholder="Phone Number" />
        <textarea className="min-h-28 rounded-md border border-white/20 bg-black/50 px-4 py-3" placeholder="How can we help?" />
        <button className="rounded-md bg-gold-400 px-5 py-3 font-medium text-black hover:bg-gold-500" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
