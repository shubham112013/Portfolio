import {
  FiArrowUp,
  FiBarChart2,
  FiBriefcase,
  FiCpu,
  FiDownload,
  FiFileText,
  FiGrid,
  FiMail,
  FiPhone,
  FiSend,
  FiZap,
} from 'react-icons/fi';

const metrics = [
  ['2,000+', 'annual user updates automated through a Zoom REST API integration'],
  ['98%', 'processing time reduction for IT asset request fulfillment'],
  ['30+', 'ServiceNow REST integrations configured and maintained'],
  ['99.5%', 'SLA compliance supported across high-volume ITSM operations'],
];

const expertise = [
  ['Workflow Automation', 'Flow Designer, approvals, playbooks, custom intake, email notifications, audit tracking, and fulfillment orchestration.', FiZap],
  ['ITSM & Platform Engineering', 'Incident, Problem, Change, Service Catalog, Business Rules, Client Scripts, UI Policies, ACLs, and ATF coverage.', FiGrid],
  ['Experience & Workspaces', 'UI Builder workspaces, Service Portal, Employee Center journeys, Walk-up Experience, widgets, and custom views.', FiBriefcase],
  ['Integrations & Data', 'Integration Hub, REST APIs, MID Server exports, Kafka-fed inventory mapping, MSSQL, CMDB, Discovery, and Service Mapping.', FiCpu],
  ['Now Assist & AI', 'Virtual Agent topics, GenAI integrations, prompt tooling, AI skills, knowledge automation, and multi-turn assistant flows.', FiSend],
  ['Analytics & Governance', 'Performance Analytics dashboards, SOX audit intake, procurement governance, financial tracking, and executive notifications.', FiBarChart2],
];

const caseStudies = [
  {
    company: 'HYR Global Source',
    title: 'Demand, procurement, and SOX workflow modernization',
    body: 'Enhanced Demand intake with custom forms, approval routing, financial tracking, and executive notifications while automating SOX audit intake across Network and Security partners.',
    points: ['Custom forms and approval sequences', 'Sourcing and Procurement playbooks', 'Governance-ready audit tracking'],
  },
  {
    company: 'RSC Solutions',
    title: 'Zoom user update automation with REST and Flow Designer',
    body: "Built a custom Flow Designer HTTP action to connect ServiceNow with Zoom's REST API, removing manual updates and reducing update time from hours to under 30 seconds.",
    points: ['2,000+ annual updates automated', '100% manual effort eliminated', 'Reusable integration pattern'],
  },
  {
    company: 'NYC Department of Sanitation',
    title: 'ITSM, ITAM, Service Portal, and analytics delivery',
    body: 'Delivered incident automation, IT asset catalog flows, portal experiences, MID Server exports, and Performance Analytics dashboards for inventory and budgeting visibility.',
    points: ['35% faster incident response', '98% faster IT asset request processing', '40% improvement in user engagement'],
  },
];

const timeline = [
  ['Jan 2026 - Present', 'ServiceNow Developer, HYR Global Source Inc', 'Demand intake, Sourcing and Procurement governance, approval architecture, executive notifications, and SOX audit workflow automation.'],
  ['Feb 2025 - Jan 2026', 'ServiceNow Developer, RSC Solutions', 'REST integrations, custom UI Builder workspace, Walk-up Experience, Outlook Actionable Messages, instance clones, and Yokohama upgrade support.'],
  ['Nov 2024 - Feb 2025', 'Senior Software Engineer, Work4Flow', 'Agent AI skills, Kafka-to-ServiceNow inventory mapping, GenAI Virtual Agent topics, knowledge automation, CMDB, Discovery, and Service Mapping.'],
  ['Jul 2023 - Sep 2024', 'ServiceNow Developer, NYC Department of Sanitation', 'ITSM automation, ITAM Service Catalog, Service Portal, UI Macros, UI Pages, MID Server exports, CMDB record integrity, and Performance Analytics.'],
  ['Jun 2020 - Jul 2022', 'Software Developer, Futuretech Bizsoft LLP', 'Service Catalogs, Knowledge workflows, 30+ REST integrations, ITSM modules, CSM portals, Agile delivery, scheduled jobs, and approval notifications.'],
];

const certifications = [
  'Certified System Administrator',
  'Now Assist Executive',
  'Virtual Agent',
  'Performance Analytics',
  'Flow Designer',
  'Integration Hub',
  'Agile Development Fundamentals',
  'Now Assist for Creator Implementation Bootcamp',
];

const stack = [
  'ServiceNow ITSM',
  'CSM',
  'CMDB',
  'UI Builder',
  'Service Portal',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'MSSQL',
  'OpenAI',
  'AWS Bedrock',
];

const App = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shubham Mishra home">
          <span className="brand-mark">SM</span>
          <span>
            <strong>Shubham Mishra</strong>
            <small>ServiceNow Developer</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="icon-button" href="/assets/Shubham-Mishra-Resume.pdf" aria-label="Download resume" title="Download resume">
          <FiDownload />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img src="/assets/servicenow-workflow-hero.png" alt="" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">ServiceNow Developer | ITSM, automation, integrations, AI workflows</p>
            <h1 id="hero-title">Building reliable ServiceNow workflows for enterprise teams.</h1>
            <p className="hero-copy">
              I design and deliver ServiceNow solutions across ITSM, CSM, CMDB, Service Portal,
              UI Builder, Flow Designer, Integration Hub, Performance Analytics, and Now Assist.
              My work turns manual intake, approvals, audits, notifications, and support processes
              into measurable platform outcomes.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">
                <FiBriefcase />
                View selected work
              </a>
              <a className="secondary-action" href="mailto:shubham.mishra0796@gmail.com">
                <FiMail />
                Email me
              </a>
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
            <h2>ServiceNow delivery from process design to production support.</h2>
          </div>
          <div className="expertise-grid">
            {expertise.map(([title, body, Icon]) => (
              <article className="expertise-item" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects shaped around measurable business outcomes.</h2>
          </div>
          <div className="case-grid">
            {caseStudies.map((item) => (
              <article className="case-card" key={item.company}>
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
            <div className="credential-panel">
              <h3>Certifications</h3>
              <div className="tag-list">
                {certifications.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="credential-panel">
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
            <h2>Let&apos;s talk about platform workflows, integrations, and enterprise automation.</h2>
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
            <a className="secondary-action" href="/assets/Shubham-Mishra-Resume.pdf">
              <FiFileText />
              Download resume
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
