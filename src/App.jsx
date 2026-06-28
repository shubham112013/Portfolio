import { useEffect, useState } from 'react';
import {
  FiArrowUp,
  FiBriefcase,
  FiCheckCircle,
  FiCpu,
  FiGrid,
  FiLayers,
  FiMail,
  FiPhone,
  FiSend,
  FiShield,
  FiZap,
} from 'react-icons/fi';

const metrics = [
  ['2,000+', 'annual user updates achieved through automation'],
  ['98%', 'processing time reduction for IT asset request fulfillment'],
  ['30+', 'ServiceNow REST integrations configured and maintained'],
  ['99.5%', 'SLA compliance supported across high-volume operations'],
];

const expertise = [
  ['ITSM Delivery', 'Incident, Problem, Change, Service Catalog, SLAs, notifications, approvals, Flow Designer, ATF, ACLs, and platform governance.', FiGrid],
  ['ITAM & CMDB', 'Asset request fulfillment, catalog automation, inventory quality, Discovery support, Service Mapping, exports, and data integrity.', FiLayers],
  ['ITOM & Integrations', 'Integration Hub, REST APIs, MID Server patterns, Kafka-fed inventory mapping, MSSQL exports, and event-driven automation.', FiCpu],
  ['SPO / Source-to-Pay', 'Procurement intake, sourcing workflows, approval sequences, executive notifications, financial tracking, and audit-ready controls.', FiShield],
  ['Employee Center & Workspaces', 'Employee Center portal design, Service Portal, UI Builder workspaces, Walk-up Experience, widgets, and workspace configuration.', FiBriefcase],
  ['HRSD, CSM & AI', 'Now Assist, Virtual Agent, custom topics, NLU/NLM design, GenAI API integrations, knowledge automation, and assisted support flows.', FiZap],
];

const aiHighlights = [
  'Built Virtual Agent experiences using custom topics and NLU/NLM configuration for guided self-service.',
  'Integrated external GenAI services, including Google Gemini-style API patterns, into support and automation workflows.',
  'Worked with Now Assist for Creator, ITSM, CSM, and HRSD to improve developer velocity and user-facing service experiences.',
  'Created prompt evaluation and AI skill concepts for workflow products, knowledge automation, and assistant quality improvement.',
];

const caseStudies = [
  {
    company: 'HYR Global Source',
    title: 'Demand, procurement, and SOX workflow modernization',
    body: 'Enhanced Demand intake with custom forms, approval routing, financial tracking, and executive notifications while automating SOX audit intake across Network and Security partners.',
    points: ['Custom forms and approval sequences', 'SPO and procurement playbooks', 'Governance-ready audit tracking'],
  },
  {
    company: 'RSC Solutions',
    title: 'Enterprise user update automation',
    body: 'Built reusable ServiceNow automation patterns that removed manual update cycles and reduced work that previously took hours to under 30 seconds.',
    points: ['2,000+ annual user updates automated', 'Manual effort reduced at scale', 'Reusable integration approach'],
  },
  {
    company: 'Work4Flow',
    title: 'AI-assisted ServiceNow workflows',
    body: 'Delivered AI skills, prompt tooling, Virtual Agent flows, knowledge automation, and ServiceNow data automation for modern support and operations teams.',
    points: ['Now Assist and GenAI workflow concepts', 'Virtual Agent custom topics', '75% faster data processing pattern'],
  },
  {
    company: 'NYC Department of Sanitation',
    title: 'ITSM, ITAM, portal, and analytics delivery',
    body: 'Delivered incident automation, IT asset catalog flows, portal experiences, MID Server exports, and Performance Analytics dashboards for inventory and budgeting visibility.',
    points: ['35% faster incident response', '98% faster IT asset request processing', '40% improvement in user engagement'],
  },
];

const timeline = [
  ['Jan 2026 - Present', 'ServiceNow Developer, HYR Global Source Inc', 'Demand intake, SPO governance, approval architecture, executive notifications, financial tracking, and SOX audit workflow automation.'],
  ['Feb 2025 - Jan 2026', 'ServiceNow Developer, RSC Solutions', 'REST integrations, custom UI Builder workspace, Walk-up Experience, Outlook Actionable Messages, instance clones, and Yokohama upgrade support.'],
  ['Nov 2024 - Feb 2025', 'Senior Software Engineer, Work4Flow', 'Agent AI skills, prompt tooling, Kafka-to-ServiceNow inventory mapping, GenAI Virtual Agent topics, knowledge automation, CMDB, Discovery, and Service Mapping.'],
  ['Jul 2023 - Sep 2024', 'ServiceNow Developer, NYC Department of Sanitation', 'ITSM automation, ITAM Service Catalog, Service Portal, UI Macros, UI Pages, MID Server exports, CMDB record integrity, and Performance Analytics.'],
  ['Jun 2020 - Jul 2022', 'Software Developer, Futuretech Bizsoft LLP', 'Service Catalogs, Knowledge workflows, 30+ REST integrations, ITSM modules, CSM portals, Agile delivery, scheduled jobs, and approval notifications.'],
];

const certifications = [
  'Certified System Administrator',
  'Now Assist Executive',
  'Now Assist for Creator Bootcamp',
  'Virtual Agent',
  'Performance Analytics',
  'Flow Designer',
  'Integration Hub',
  'Agile Development Fundamentals',
];

const stack = [
  'ITSM',
  'ITAM',
  'ITOM',
  'HRSD',
  'CSM',
  'SPO',
  'Employee Center',
  'UI Builder',
  'Flow Designer',
  'Integration Hub',
  'CMDB',
  'Service Portal',
  'Now Assist',
  'Virtual Agent',
  'JavaScript',
  'REST APIs',
  'MSSQL',
  'OpenAI',
  'Google Gemini',
  'AWS Bedrock',
];

const navItems = [
  ['top', 'Home'],
  ['expertise', 'Expertise'],
  ['ai', 'AI'],
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
];

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const year = new Date().getFullYear();

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);
    let frameId;

    const updateActiveSection = () => {
      const checkpoint = window.innerHeight * 0.36;
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= checkpoint && rect.bottom > 120) {
          currentSection = section.id;
        }
      });

      setActiveSection((previousSection) => (
        previousSection === currentSection ? previousSection : currentSection
      ));
    };

    const handleScroll = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shubham Mishra home">
          <span className="brand-mark" aria-hidden="true">
            <span>S</span>
            <span>M</span>
          </span>
          <span className="brand-copy">
            <strong>Shubham Mishra</strong>
            <small>ServiceNow Developer</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a
              className={activeSection === id ? 'active' : undefined}
              href={`#${id}`}
              key={id}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="icon-button" href="mailto:shubham.mishra0796@gmail.com" aria-label="Email Shubham" title="Email Shubham">
          <FiMail />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-shell">
            <div className="hero-content">
              <p className="eyebrow">ServiceNow Developer | ITSM, ITAM, ITOM, HRSD, CSM, SPO, AI</p>
              <h1 id="hero-title">Enterprise ServiceNow workflows, built for scale and clarity.</h1>
              <p className="hero-copy">
                I design and deliver ServiceNow solutions across platform automation, Employee Center,
                workspaces, integrations, source-to-pay workflows, analytics, and Now Assist-enabled
                service experiences. My focus is turning complex operational processes into reliable,
                measurable workflows.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">
                  <FiBriefcase />
                  View work
                </a>
                <a className="secondary-action" href="mailto:shubham.mishra0796@gmail.com">
                  <FiMail />
                  Contact me
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <img src="/assets/servicenow-ai-hero-v2.png" alt="" />
            </div>
          </div>
        </section>

        <section className="metric-band" aria-label="Professional impact highlights">
          {metrics.map(([value, label]) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section id="expertise" className="section">
          <div className="section-heading">
            <p className="eyebrow">Platform Capability</p>
            <h2>AI and broader ServiceNow coverage across operations, procurement, and experience.</h2>
          </div>
          <div className="expertise-grid">
            {expertise.map(([title, body, Icon]) => (
              <article className="glass-card expertise-item" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ai" className="section ai-section">
          <div className="section-heading compact-heading">
            <p className="eyebrow">AI + Now Assist</p>
            <h2>Practical AI inside ServiceNow, not just AI on a slide.</h2>
          </div>
          <div className="ai-layout">
            <div className="ai-copy glass-panel">
              <FiZap />
              <h3>AI-enabled service experiences</h3>
              <p>
                I have worked with Now Assist for Creator, ITSM, CSM, and HRSD, and built Virtual Agent
                experiences that connect custom topics, NLU/NLM configuration, and external GenAI APIs
                into guided support workflows.
              </p>
            </div>
            <div className="ai-list">
              {aiHighlights.map((item) => (
                <article className="glass-card" key={item}>
                  <FiCheckCircle />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects shaped around measurable business outcomes.</h2>
          </div>
          <div className="case-grid">
            {caseStudies.map((item) => (
              <article className="glass-card case-card" key={item.company}>
                <span>{item.company}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section timeline-section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>ServiceNow-focused engineering across enterprise and consulting environments.</h2>
          </div>
          <div className="timeline">
            {timeline.map(([date, title, body]) => (
              <article key={title}>
                <time>{date}</time>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials-section" aria-labelledby="credentials-title">
          <div className="section-heading">
            <p className="eyebrow">Credentials</p>
            <h2 id="credentials-title">Certified, current, and hands-on.</h2>
          </div>
          <div className="credentials-layout">
            <div className="glass-panel credential-panel">
              <h3>Certifications</h3>
              <div className="tag-list">
                {certifications.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="glass-panel credential-panel">
              <h3>Technical Stack</h3>
              <div className="tag-list">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="eyebrow">Available for ServiceNow delivery</p>
            <h2>Let&apos;s talk about workflows, integrations, AI, and enterprise automation.</h2>
            <p>
              Based in the New York City area, I bring ServiceNow development experience across public sector,
              consulting, AI-enabled workflow products, and enterprise operations.
            </p>
          </div>
          <div className="contact-actions">
            <a className="primary-action" href="mailto:shubham.mishra0796@gmail.com">
              <FiSend />
              shubham.mishra0796@gmail.com
            </a>
            <a className="secondary-action" href="tel:+15513446156">
              <FiPhone />
              551 344 6156
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {year} Shubham Mishra. ServiceNow Developer.</p>
        <a href="#top" aria-label="Back to top" title="Back to top">
          <FiArrowUp />
        </a>
      </footer>
    </>
  );
};

export default App;
