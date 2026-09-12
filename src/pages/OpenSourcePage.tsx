import { ArrowRight, BookOpen, Code2, Github, Heart, Sparkles, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import splashLogo from '../../assets/splashlogo.png';

const repoUrl = 'https://github.com/Alisonpinto/Songify.git';

const contributionSteps = [
  ['01', 'Fork the repo', 'Create your own copy of the project and start experimenting locally.'],
  ['02', 'Build & test', 'Run the app, test your idea, and make sure the experience stays smooth.'],
  ['03', 'Open a PR', 'Share your work with the community and collaborate on the next release.'],
];

const techStack = [
  'React + TypeScript',
  'Vite build tooling',
  'Tailwind CSS for styling',
  'Lucide icons and motion-friendly UI',
];

function OpenSourcePage() {
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

          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#facc15] px-5 py-3 text-[13px] font-bold transition-all hover:-translate-y-0.5 hover:bg-[#eab308] sm:flex"
          >
            GitHub <ArrowRight size={15} />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b28a00]">Open source project</p>
            <h1 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Build music software that feels human.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
              Songify is a community-driven music experience focused on clean design, privacy, and freedom.
              It is built for listeners who want better control, less clutter, and a more personal way to enjoy music.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-black"
              >
                <Github size={17} /> View repository
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-black/15 bg-white/60 px-6 py-4 text-sm font-bold transition-all hover:-translate-y-1 hover:border-black/30 hover:bg-white">
                Contact the team
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white p-4 shadow-2xl shadow-black/[0.06]">
            <div className="rounded-[24px] border border-black/10 bg-[#171717] p-4">
              <img src={splashLogo} alt="Songify splash logo" className="mx-auto h-24 w-24 rounded-[20px] border border-white/10 bg-white/5 p-3" />
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#0f0f10] p-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3">Songify repo</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  <span className="text-[#facc15]">$</span> git clone <span className="text-white/50">{repoUrl}</span>
                </p>
                <p className="text-sm leading-7 text-white/70"><span className="text-[#facc15]">$</span> cd songify</p>
                <p className="text-sm leading-7 text-white/70"><span className="text-[#facc15]">$</span> npm install</p>
                <p className="text-sm leading-7 text-white/70"><span className="text-[#facc15]">$</span> npm run dev</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Sparkles, title: 'Design-first', text: 'A music player that feels premium without being overwhelming.' },
            { icon: BookOpen, title: 'Transparent', text: 'Open collaboration and a clear roadmap for every feature.' },
            { icon: Users, title: 'Community-led', text: 'Built by people who care about listening culture and accessibility.' },
            { icon: Heart, title: 'Made for music lovers', text: 'Focused on discovery, emotion, and the joy of replaying a favorite track.' },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-[24px] border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#facc15]">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/55">{text}</p>
            </article>
          ))}
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-lg shadow-black/[0.05]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b28a00]">What we use</p>
            <h2 className="text-3xl font-black tracking-[-0.05em]">A clean stack for a smooth music experience.</h2>
            <ul className="mt-6 space-y-4">
              {techStack.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-black/65">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#facc15]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b28a00]">Contribute</p>
            <h2 className="text-3xl font-black tracking-[-0.05em]">Start small. Ship something meaningful.</h2>
            <div className="mt-8 grid gap-5">
              {contributionSteps.map(([number, title, description]) => (
                <div key={number} className="rounded-[22px] border border-black/10 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff4b8] text-sm font-black text-[#9a7700]">{number}</span>
                    <h3 className="text-lg font-black tracking-[-0.03em]">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-black/55">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[28px] bg-[#171717] p-8 text-white shadow-2xl shadow-black/10 lg:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#facc15]">Join the project</p>
              <h3 className="text-3xl font-black tracking-[-0.05em]">Help shape the future of Songify.</h3>
            </div>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#facc15] px-6 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-[#eab308]"
            >
              <Code2 size={17} /> Explore the code
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OpenSourcePage;
