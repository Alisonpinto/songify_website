import { ArrowRight, Github, Linkedin, Mail, MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'hello@songify.app', href: 'mailto:hello@songify.app' },
  { icon: Github, label: 'GitHub', value: 'github.com/Alisonpinto/Songify', href: 'https://github.com/Alisonpinto/Songify.git' },
];

const teamMembers = [
  { name: 'Alison Pinto', role: 'Co-creator', icon: Github, label: 'GitHub project', href: 'https://github.com/Alisonpinto/Songify.git' },
  { name: 'Praful Mohite', role: 'Co-creator', icon: Linkedin, label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/praful-mohite/' },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f5] text-[#151515]">
      <header className="border-b border-black/[0.06] bg-[#f8f8f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="Songify" className="h-11 w-11 rounded-full" />
            <span className="text-[20px] font-black tracking-[-0.06em]">Songify<span className="text-[#f2bd00]">.</span></span>
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] font-semibold text-black/60 md:flex">
            <a className="transition-colors hover:text-black" href="/#features">Features</a>
            <a className="transition-colors hover:text-black" href="/#showcase">Showcase</a>
            <a className="transition-colors hover:text-black" href="/#download">Download</a>
            <Link className="transition-colors hover:text-black" to="/open-source">Open source</Link>
            <Link className="transition-colors hover:text-black" to="/contact">Contact</Link>
          </nav>

          <Link to="/open-source" className="hidden items-center gap-2 rounded-full bg-[#facc15] px-5 py-3 text-[13px] font-bold transition-all hover:-translate-y-0.5 hover:bg-[#eab308] sm:flex">
            Open source <ArrowRight size={15} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b28a00]">Contact us</p>
            <h1 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Let’s build a better listening experience together.</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-black/60">
              Whether you have a feature idea, a question about the project, or want to collaborate, we’d love to hear from you.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {teamMembers.map(({ name, role, icon: Icon, label, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[20px] border border-black/10 bg-[#fff4b8] p-4 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-lg font-black tracking-[-0.03em]">{name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-black/40">{role}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-black/65"><Icon size={14} /> {label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-[20px] border border-black/10 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#facc15] text-black">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">{label}</p>
                    <p className="mt-1 text-base font-semibold text-black/75">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-2xl shadow-black/[0.06] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4b8] text-[#9a7700]">
                <MessageSquareText size={20} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">Send a message</p>
                <h2 className="text-2xl font-black tracking-[-0.04em]">Tell us what you need</h2>
              </div>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-black/70">Name</label>
                <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-black/10 bg-[#f8f8f5] px-4 py-3 text-sm outline-none transition focus:border-[#facc15]" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-black/70">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-black/10 bg-[#f8f8f5] px-4 py-3 text-sm outline-none transition focus:border-[#facc15]" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-black/70">Message</label>
                <textarea rows={5} placeholder="Tell us about your idea, project, or question..." className="w-full rounded-2xl border border-black/10 bg-[#f8f8f5] px-4 py-3 text-sm outline-none transition focus:border-[#facc15]" />
              </div>

              <button type="button" className="inline-flex items-center gap-3 rounded-full bg-[#facc15] px-6 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-[#eab308]">
                Send message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
