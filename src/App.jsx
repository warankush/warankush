import './App.css';

function WarankushLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="2.5" y="2.5" width="27" height="27" rx="9" />
      <path d="M8 10 12.1 22 16 12.6 19.9 22 24 10" />
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="5.5" />
      <path d="m15.2 15.2 4.1 4.1" />
      <path d="M9 11h4" />
      <path d="M11 9v4" />
    </svg>
  );
}

function MetaAdsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4a8 8 0 1 0 8 8" />
      <path d="M12 8v4l3 2" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M19 5h-4" />
      <path d="M19 5v4" />
    </svg>
  );
}

function SmmIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 12.5 17 6.5" />
      <path d="M7 12.5 17 18.5" />
      <circle cx="6" cy="13" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="18" cy="17" r="2.2" />
    </svg>
  );
}

const services = [
  {
    title: 'SEO Strategy',
    Icon: SeoIcon,
    description:
      'Keyword research, on-page optimization, content planning, and technical fixes designed to improve rankings and bring in qualified traffic.',
  },
  {
    title: 'Meta Ads',
    Icon: MetaAdsIcon,
    description:
      'Audience targeting, ad creative testing, and conversion-focused campaign management for lead generation and stronger return on ad spend.',
  },
  {
    title: 'Social Media Marketing',
    Icon: SmmIcon,
    description:
      'Content calendars, brand storytelling, and engagement strategies that build trust, improve reach, and keep the brand active online.',
  },
];

const skills = [
  'SEO',
  'Meta Ads',
  'Google Analytics',
  'Content Strategy',
  'Social Media Marketing',
  'Campaign Optimization',
  'Lead Generation',
  'Brand Positioning',
];

function App() {
  return (
    <main className="page-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <a className="site-brand" href="#home" aria-label="Warankush home">
          <span className="site-brand-mark" aria-hidden="true">
            <WarankushLogo />
          </span>
          <span className="site-brand-text">Warankush</span>
        </a>
        <nav className="site-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Connect Now
        </a>
      </header>

      <section className="hero section-card" id="home">
        <div className="hero-copy">
          <span className="eyebrow">Digital Marketing Portfolio</span>
          <h1>Ankush Jaiswar</h1>
          <p className="hero-text">
            I help businesses grow through practical SEO, Meta Ads, and Social Media Marketing strategies
            that improve visibility, bring in qualified leads, and strengthen brand presence.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Connect Now
            </a>
            <a className="secondary-button" href="#services">
              View Services
            </a>
          </div>

          <div className="hero-stats" aria-label="Portfolio highlights">
            <div>
              <strong>SEO</strong>
              <span>Search visibility and content growth</span>
            </div>
            <div>
              <strong>Meta Ads</strong>
              <span>Lead-focused campaign optimization</span>
            </div>
            <div>
              <strong>Social</strong>
              <span>Consistent brand engagement</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="profile-card">
            <div className="profile-ring" aria-hidden="true">
              <span className="profile-monogram">AJ</span>
            </div>
            <div className="profile-content">
              <span className="profile-label">SEO, Meta Ads, Social Media</span>
              <h2>Performance marketing with a clean, conversion-first approach.</h2>
              <p>
                I combine research, creative direction, and data-driven execution to help brands stand out,
                attract the right audience, and convert attention into business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card about" id="about">
        <div className="section-heading">
          <span className="eyebrow">About Me</span>
          <h2>Built for brands that want clear positioning and measurable growth.</h2>
        </div>
        <p>
          I am Ankush Jaiswar, a digital marketer focused on helping businesses strengthen their online
          presence through SEO, Meta Ads, and Social Media Marketing. My process is simple: understand the
          audience, sharpen the message, and execute with discipline so every channel supports growth.
        </p>
        <div className="about-grid">
          <article>
            <h3>SEO-Driven Thinking</h3>
            <p>Every SEO plan starts with keyword intent, technical health, and content that matches search demand.</p>
          </article>
          <article>
            <h3>Paid Growth Focus</h3>
            <p>Meta Ads campaigns are structured to test, learn, and scale with a strong focus on lead quality.</p>
          </article>
          <article>
            <h3>Social Consistency</h3>
            <p>Social media systems keep the brand active, recognizable, and relevant across every touchpoint.</p>
          </article>
        </div>
      </section>

      <section className="section-card" id="services">
        <div className="section-heading">
          <span className="eyebrow">Services</span>
          <h2>Services focused on search visibility, paid performance, and social reach.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">
                <service.Icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" id="skills">
        <div className="section-heading">
          <span className="eyebrow">Skills</span>
          <h2>Core skills used to build stronger digital performance.</h2>
        </div>
        <div className="skills-grid" aria-label="Skills list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-card contact" id="contact">
        <div className="section-heading">
          <span className="eyebrow">Contact Section</span>
          <h2>Let’s build a search, paid, and social strategy that drives results.</h2>
        </div>
        <div className="contact-layout">
          <div className="contact-copy">
            <p>
              If you need SEO improvements, Meta Ads management, or a social media marketing plan, I am ready
              to discuss your goals and shape the next move.
            </p>
            <div className="contact-actions">
              <a className="primary-button" href="mailto:ankush.jaiswar@gmail.com">
                Connect Now
              </a>
              <a
                className="whatsapp-button"
                href="https://wa.me/919004311742?text=Hello%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project."
                target="_blank"
                rel="noreferrer"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M20.52 3.48A11.79 11.79 0 0 0 12.01 0C5.37 0 .01 5.36.01 12c0 2.12.56 4.2 1.63 6.02L0 24l6.18-1.62A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.22-1.25-6.25-3.48-8.52Zm-8.51 18.44c-1.86 0-3.68-.5-5.28-1.44l-.38-.23-3.66.96.98-3.57-.24-.39A9.86 9.86 0 0 1 2.9 12c0-5.01 4.1-9.1 9.12-9.1 2.43 0 4.72.95 6.44 2.66a9.04 9.04 0 0 1 2.68 6.44c0 5.02-4.1 9.92-9.12 9.92Zm5.27-7.2c-.29-.14-1.72-.85-1.98-.94-.26-.1-.45-.14-.64.15-.19.28-.73.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.33.43-.49.14-.16.19-.28.29-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49-.17-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-1 1-.96 2.44.05 1.44 1.05 2.83 1.2 3.02.14.19 2 3.1 4.85 4.35.68.3 1.21.48 1.62.61.68.22 1.31.19 1.81.12.55-.08 1.72-.7 1.97-1.36.24-.66.24-1.22.17-1.36-.07-.14-.26-.21-.55-.35Z" />
                </svg>
                WhatsApp Me
              </a>
            </div>
          </div>
          <div className="contact-details">
            <div>
              <span>Based In</span>
              <strong>India</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>ankush.jaiswar@gmail.com</strong>
            </div>
            <div>
              <span>Specialty</span>
              <strong>SEO, Meta Ads, Social Media</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;