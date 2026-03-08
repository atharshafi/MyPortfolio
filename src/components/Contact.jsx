import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import { FadeUp, SlideLeft, SlideRight } from '../animations/ScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyan-accent/5 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-20">
          <div className="section-tag mx-auto mb-6"><span>06</span> Contact</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-bright">Get In Touch</h2>
          <p className="font-body text-slate-text mt-4 max-w-lg mx-auto">Available for full-time roles, freelance projects, and collaborations. Let's build something together.</p>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-12">
          <SlideLeft className="lg:col-span-2 space-y-8">
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: MapPin, label: 'Location', value: 'Discovery Gardens, Dubai, UAE', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-cyan-accent/40 transition-colors">
                    <Icon size={18} className="text-cyan-accent/60" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-text/40 uppercase tracking-widest">{label}</div>
                    {href ? (
                      <a href={href} className="font-body text-slate-text hover:text-cyan-accent transition-colors text-sm">{value}</a>
                    ) : (
                      <div className="font-body text-slate-text text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <div className="font-mono text-xs text-slate-text/40 uppercase tracking-widest mb-4">Social Links</div>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: ExternalLink, href: personalInfo.portfolio, label: 'Portfolio' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center text-slate-text hover:text-cyan-accent hover:border-cyan-accent/40 transition-all duration-200"
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-bright rounded-sm p-5 border-l-2 border-cyan-accent/50">
              <div className="font-mono text-xs text-cyan-accent/60 mb-2">STATUS</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse" />
                <span className="font-body text-sm text-slate-text">Open to new opportunities</span>
              </div>
              <p className="font-mono text-xs text-slate-text/50 mt-2">UAE Employment Visa • Available Immediately</p>
            </div>
          </SlideLeft>

          <SlideRight delay={0.2} className="lg:col-span-3">
            <div className="glass-bright rounded-sm p-8">
              <h3 className="font-display font-bold text-slate-bright text-xl mb-6">Send a Message</h3>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                    { key: 'email', label: 'Your Email', placeholder: 'john@example.com', type: 'email' },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="font-mono text-xs text-slate-text/50 uppercase tracking-widest block mb-2">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        className="w-full bg-surface border border-border px-4 py-3 text-sm font-body text-slate-bright placeholder-slate-text/30 focus:outline-none focus:border-cyan-accent/50 transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-text/50 uppercase tracking-widest block mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project inquiry / Job opportunity"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full bg-surface border border-border px-4 py-3 text-sm font-body text-slate-bright placeholder-slate-text/30 focus:outline-none focus:border-cyan-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-text/50 uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-surface border border-border px-4 py-3 text-sm font-body text-slate-bright placeholder-slate-text/30 focus:outline-none focus:border-cyan-accent/50 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  onClick={handleSubmit}
                  className="w-full py-4 font-display font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
                  style={{ background: sent ? '#10b981' : 'linear-gradient(135deg, #00e5ff, #0077b6)', color: '#050810' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sent ? <><CheckCircle size={16} /> Message Sent!</> : <><Send size={16} /> Send Message</>}
                </motion.button>
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
