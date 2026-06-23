import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [btnText, setBtnText] = useState('Send on WhatsApp →');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setBtnText('Fill all fields');
      setTimeout(() => setBtnText('Send on WhatsApp →'), 1600);
      return;
    }
    const text = `Hi NLR Group, I'd like to discuss a project.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Requirement:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/916302245307?text=${text}`, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-[88px]">
      <div className="wrap grid grid-cols-[1.1fr_1fr] max-lg:grid-cols-1 gap-[60px]">
        <div>
          <h2 id="contact-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1] mb-[18px]">
            Start a project
          </h2>
          <p className="text-ink-soft max-w-[46ch]">
            Tell us what you're building — an app, a website, a brand that needs to show up in AI
            search. We reply within a day.
          </p>

          <ul className="mt-[34px] list-none flex flex-col gap-3.5">
            {[
              { k: 'Phone', v: <a href="tel:+917989505968" className="text-saffron-deep no-underline border-b border-transparent hover:border-saffron-deep">+91 79895 05968</a> },
              { k: 'Email', v: <a href="mailto:nlrgroupofcompany@gmail.com" className="text-saffron-deep no-underline border-b border-transparent hover:border-saffron-deep">nlrgroupofcompany@gmail.com</a> },
              { k: 'Web', v: <a href="https://nlrgroupofcompany.in" target="_blank" rel="noopener" className="text-saffron-deep no-underline border-b border-transparent hover:border-saffron-deep">nlrgroupofcompany.in</a> },
              { k: 'Location', v: <span>India · serving India + US</span> },
            ].map((item) => (
              <li key={item.k} className="flex gap-3.5 items-baseline text-[0.95rem]">
                <span className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft w-[84px] flex-shrink-0">
                  {item.k}
                </span>
                {item.v}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 bg-card border border-line p-8">
          <div>
            <label htmlFor="f-name" className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft block mb-1.5">
              Your name
            </label>
            <input
              id="f-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-line bg-paper px-3.5 py-3 font-body text-[0.95rem] text-ink focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30"
            />
          </div>
          <div>
            <label htmlFor="f-email" className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft block mb-1.5">
              Email
            </label>
            <input
              id="f-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-line bg-paper px-3.5 py-3 font-body text-[0.95rem] text-ink focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30"
            />
          </div>
          <div>
            <label htmlFor="f-msg" className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft block mb-1.5">
              What do you need?
            </label>
            <textarea
              id="f-msg"
              name="message"
              required
              placeholder="e.g. A website for my business that ranks in AI search…"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-line bg-paper px-3.5 py-3 font-body text-[0.95rem] text-ink min-h-[120px] resize-y focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30"
            />
          </div>
          <button
            type="submit"
            className="font-mono text-[0.82rem] bg-ink text-paper border-none py-3.5 cursor-pointer hover:bg-saffron-deep transition-colors duration-150"
          >
            {btnText}
          </button>
          <p className="text-[0.75rem] text-ink-soft font-mono">
            Opens WhatsApp with your message pre-filled — just hit send.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
