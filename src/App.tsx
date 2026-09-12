import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Code2,
  Download,
  Github,
  Headphones,
  Library,
  Menu,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import heroImage from '../assets/hero_img.jpeg';
import logoImage from '../assets/logo.png';
import ss3Image from '../assets/SS3.jpeg';
import ss5Image from '../assets/SS5.jpeg';
import ContactPage from './pages/ContactPage';
import OpenSourcePage from './pages/OpenSourcePage';

const repoUrl = 'https://github.com/Alisonpinto/Songify.git';

const features = [
  {
    icon: Sparkles,
    eyebrow: '01 / DISCOVER',
    title: 'Smart recommendations',
    description: 'Find the next track before you know you need it. Songify learns your rhythm, not your data.',
  },
  {
    icon: Search,
    eyebrow: '02 / EXPLORE',
    title: 'A better way to search',
    description: 'Browse artists, albums, and forgotten favorites with a search experience that stays out of your way.',
  },
  {
    icon: Library,
    eyebrow: '03 / ORGANIZE',
    title: 'Your library, your rules',
    description: 'Build playlists and albums around the way you listen. No locked-in algorithms. No clutter.',
  },
  {
    icon: Code2,
    eyebrow: '04 / COMMUNITY',
    title: 'Made to be open',
    description: 'Inspect the code, shape the roadmap, and help make music software more human for everyone.',
  },
];

const steps = [
  ['01', 'Fork the repo', 'Click the fork button on GitHub to make your own copy.'],
  ['02', 'Clone & build', 'Bring it local, make your changes, and test your ideas.'],
  ['03', 'Submit a PR', 'Push your work and open a pull request for the community.'],
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f8f5] text-[#151515]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#f8f8f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logoImage} alt="Songify" className="h-11 w-11 rounded-full" />
            <span className="text-[20px] font-black tracking-[-0.06em]">Songify<span className="text-[#f2bd00]">.</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-[13px] font-semibold text-black/60 md:flex">
            <a className="transition-colors hover:text-black" href="#features">Features</a>
            <a className="transition-colors hover:text-black" href="#showcase">Showcase</a>
            <a className="transition-colors hover:text-black" href="#download">Download</a>
            <Link className="transition-colors hover:text-black" to="/open-source">Open source</Link>
            <Link className="transition-colors hover:text-black" to="/contact">Contact</Link>
          </nav>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#facc15] px-5 py-3 text-[13px] font-bold transition-all hover:-translate-y-0.5 hover:bg-[#eab308] sm:flex">
            GitHub <ArrowRight size={15} />
          </a>
          <button aria-label="Toggle menu" className="rounded-full p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-black/[0.06] bg-[#f8f8f5] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm font-semibold">
              <a href="#features" onClick={closeMenu}>Features</a>
              <a href="#showcase" onClick={closeMenu}>Showcase</a>
              <a href="#download" onClick={closeMenu}>Download</a>
              <Link to="/open-source" onClick={closeMenu}>Open source</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-36 sm:pt-44 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:pb-28">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-black/55">
              <span className="h-2 w-2 rounded-full bg-[#facc15] shadow-[0_0_0_4px_#facc1533]" /> The open music player
            </div>
            <h1 className="max-w-[680px] text-[clamp(3.8rem,8vw,7.2rem)] font-black leading-[0.88] tracking-[-0.085em]">Play what<br /><span className="text-[#dcae00]">moves you.</span></h1>
            <p className="mt-8 max-w-[490px] text-[18px] leading-8 text-black/60">A beautiful, open-source music player designed to give you full control of your library — and the freedom to make it yours.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#download" className="group inline-flex items-center gap-3 rounded-full bg-[#facc15] px-6 py-4 text-sm font-bold transition-all hover:-translate-y-1 hover:bg-[#eab308] hover:shadow-xl hover:shadow-yellow-300/30">Download now <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>
              <a href={repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-black/15 bg-white/50 px-6 py-4 text-sm font-bold transition-all hover:-translate-y-1 hover:border-black/30 hover:bg-white"><Github size={17} /> View on GitHub</a>
            </div>
            <div className="mt-12 flex items-center gap-4 text-xs font-medium text-black/45">
              <div className="flex -space-x-2">
                {['#171717', '#facc15', '#757575', '#d7b7ff'].map((color) => <span key={color} className="h-7 w-7 rounded-full border-2 border-[#f8f8f5]" style={{ background: color }} />)}
              </div>
              <span>Built with care by the community</span>
            </div>
          </div>

          <div className="relative flex min-h-[540px] items-center justify-center lg:min-h-[620px]">
            <div className="absolute h-[410px] w-[410px] rounded-full bg-[#facc15]/30 blur-[75px]" />
            <div className="absolute right-[5%] top-[9%] h-3 w-3 rounded-full bg-[#facc15]" />
            <div className="absolute bottom-[15%] left-[7%] h-2 w-2 rounded-full bg-black/25" />
            <div className="absolute right-[12%] top-[22%] rounded-full border border-black/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">For listeners</div>
            <div className="phone-shadow relative z-10 w-[285px] rotate-[5deg] rounded-[38px] bg-[#101114] p-[9px] transition-transform duration-500 hover:rotate-0 sm:w-[320px]">
              <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
              <div className="overflow-hidden rounded-[30px] bg-[#272330]">
                <img src={heroImage} alt="Songify recommendations screen" className="block aspect-[0.49] w-full object-cover object-top" />
              </div>
            </div>
            <div className="absolute bottom-[9%] right-[4%] z-20 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#facc15]"><Headphones size={17} /></span>
              <div><p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Now playing</p><p className="text-xs font-bold">Empire · ATLXS</p></div>
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-black/[0.07] bg-white/50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b28a00]">Why Songify</p><h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.06em] sm:text-5xl">All the music.<br />None of the noise.</h2></div>
              <p className="max-w-xs text-sm leading-6 text-black/50">A focused listening experience made for the way you actually enjoy music.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, eyebrow, title, description }) => <article key={title} className="group bg-[#f8f8f5] p-7 transition-colors hover:bg-[#fff8d9] lg:p-8"><div className="mb-14 flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#facc15] transition-transform group-hover:rotate-6"><Icon size={20} /></span><span className="text-[10px] font-bold tracking-widest text-black/30">{eyebrow}</span></div><h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{description}</p></article>)}
            </div>
          </div>
        </section>

        <section id="showcase" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b28a00]">The experience</p><h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl">Made for deep listening.</h2></div><div className="flex items-center gap-2 text-xs font-semibold text-black/40"><span className="h-2 w-2 rounded-full bg-[#facc15]" /> Swipe through the vibe</div></div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Home', 'Your daily mix, made personal.', heroImage],
              ['Discover', 'Find something worth replaying.', ss3Image],
              ['Library', 'Everything you love, in one place.', ss5Image],
            ].map(([label, caption, src], index) => (
              <div key={label} className={`group ${index === 1 ? 'md:translate-y-10' : ''}`}>
                <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#171719] p-2 shadow-2xl shadow-black/[0.08]">
                  <img src={src} alt={`${label} screen in Songify`} className="aspect-[0.63] w-full rounded-[21px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="font-black tracking-[-0.03em]">{label}</h3>
                    <p className="mt-1 text-sm text-black/50">{caption}</p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-all group-hover:bg-[#facc15]"><ChevronRight size={15} /></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="mx-6 mb-20 overflow-hidden rounded-[32px] bg-[#fff4b8] lg:mx-auto lg:max-w-7xl">
          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20"><div className="absolute -right-16 -top-28 h-64 w-64 rounded-full border-[28px] border-[#facc15]/30" /><div className="absolute -bottom-36 -left-20 h-72 w-72 rounded-full border-[35px] border-[#facc15]/20" /><div className="relative"><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#a07a00]">Your next favorite track</p><h2 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Ready to listen?</h2><p className="mx-auto mt-5 max-w-md text-sm leading-6 text-black/55">Take your music with you. Songify is free, open, and ready when you are.</p><a href={repoUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-black hover:shadow-xl"><Download size={17} /> Download for Android</a><p className="mt-4 text-xs font-medium text-black/40">Available on iOS and Web soon.</p></div></div>
        </section>

        <section id="open-source" className="bg-[#171717] text-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#facc15]">Open source / open ears</p><h2 className="max-w-lg text-4xl font-black leading-[0.95] tracking-[-0.065em] sm:text-6xl">Built by the community, for the community.</h2><p className="mt-7 max-w-md text-sm leading-7 text-white/55">The best music apps should belong to the people who use them. Join a growing group of listeners and makers shaping Songify together.</p><a href={repoUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#facc15] px-6 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-[#eab308]"><Github size={17} /> Contribute on GitHub</a></div><div className="grid gap-8 sm:grid-cols-3">{steps.map(([number, title, description]) => <div key={number} className="border-t border-white/15 pt-5"><span className="text-xs font-bold text-[#facc15]">{number}</span><h3 className="mt-10 text-lg font-black tracking-[-0.03em]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{description}</p></div>)}</div></div><div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0e] shadow-2xl"><div className="flex items-center gap-2 border-b border-white/10 px-5 py-4"><span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" /><span className="ml-3 text-[10px] font-bold tracking-widest text-white/25">TERMINAL — SONGIFY</span></div><div className="overflow-x-auto p-6 font-mono text-sm leading-8"><p><span className="text-[#facc15]">$</span> git clone <span className="text-white/50">https://github.com/Alisonpinto/Songify.git</span></p><p><span className="text-[#facc15]">$</span> cd songify</p><p><span className="text-[#facc15]">$</span> npm install</p><p><span className="text-[#facc15]">$</span> npm run dev</p></div></div></div></section>
      </main>

      <footer className="border-t-4 border-[#facc15] bg-[#101010] text-white/50"><div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:px-10 lg:py-24"><div><div className="flex items-center gap-4 text-white"><img src={logoImage} alt="Songify" className="h-14 w-14 rounded-full ring-4 ring-[#facc15]/15" /><div><span className="block text-3xl font-black tracking-[-0.07em]">Songify<span className="text-[#facc15]">.</span></span><span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#facc15]">Open music player</span></div></div><p className="mt-7 max-w-sm text-sm leading-7 text-white/45">A beautiful, open-source music player made for focused listening and community-powered ideas.</p><a href={repoUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#facc15]"><Github size={16} /> Explore the project <ArrowRight size={15} /></a></div><div><h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc15]">Quick links</h2><div className="mt-6 flex flex-col items-start gap-4 text-sm"><a href="#features" className="transition-colors hover:text-white">Features</a><a href="#showcase" className="transition-colors hover:text-white">Showcase</a><a href="#download" className="transition-colors hover:text-white">Download</a></div></div><div><h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc15]">Connect</h2><div className="mt-6 flex flex-col items-start gap-4 text-sm"><Link to="/open-source" className="transition-colors hover:text-white">Open source</Link><Link to="/contact" className="transition-colors hover:text-white">Contact us</Link><a href={repoUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">GitHub repository</a></div></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2024 Songify. Made for the music lovers.</p><a href="#top" className="font-semibold text-white/60 transition-colors hover:text-white">Back to top ↑</a></div></div></footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/open-source" element={<OpenSourcePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
