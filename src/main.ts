import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <a href="#platform">Platform</a>
      <a href="#plans">Plans</a>
      <a href="#about">About</a>
      <a href="#faq">FAQ</a>
      <a href="#early-access">Contact</a>
    </nav>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="main-nav">
      <span></span><span></span>
    </button>
  </header>
  <a class="floating-waitlist" href="#early-access" draggable="false"><span aria-hidden="true">♟</span> Join Waitlist <b aria-hidden="true">↗</b></a>

  <main id="top">
    <section class="diorama-hero" aria-labelledby="scene-title">
      <div class="wall-brand">
        <h1 id="scene-title">IMPERA</h1>
      </div>
      <p class="scene-tagline">KEEP YOUR BUSINESS <em>ORGANISED</em></p>

      <div class="department-diorama">
        <article class="island island-sales island-photo">
          <img class="department-diorama-image" src="/sales-diorama.png" alt="A 3D Sales workspace with a sales professional, analytics charts, and office equipment" width="1024" height="1024" decoding="async">
        </article>
        <article class="island island-hiring island-photo">
          <img class="department-diorama-image" src="/hiring-diorama.png" alt="A 3D Hiring workspace with two recruiters reviewing candidate profiles" width="1024" height="1024" decoding="async">
        </article>
        <article class="island island-projects island-photo">
          <img class="department-diorama-image" src="/project-management-diorama.png" alt="A 3D Project Management workspace with two team members and a visual task board" width="1478" height="1064" decoding="async">
        </article>
        <article class="island island-attendance island-photo">
          <img class="department-diorama-image" src="/attendance-diorama.png" alt="A 3D Attendance workspace with an employee checking in at a biometric terminal" width="1024" height="1024" decoding="async">
        </article>
        <article class="island island-accounts island-photo">
          <img class="department-diorama-image" src="/accounts-diorama.png" alt="A 3D Accounts workspace with an accountant, financial charts, and office equipment" width="1024" height="1024" decoding="async">
        </article>
      </div>
    </section>

    <section class="what-is-section" id="about" aria-labelledby="what-is-title">
      <div class="network-video-stage" role="img" aria-label="Animated diagram showing Impera connected to sales, hiring, human resources, accounting, and projects">
        <video class="network-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="/impera-network.mp4" type="video/mp4">
        </video>
        <span class="network-video-brand" aria-hidden="true">IMPERA</span>
      </div>
      <div class="what-is-copy">
        <h2 id="what-is-title">What is <span>Impera</span>?</h2>
        <p>Impera is an AI-powered business operating system designed for startups and growing businesses. Instead of managing different software for hiring, HR, sales, accounting, and project management, Impera connects every department into one intelligent platform.</p>
        <p class="connected-line">Everything stays connected.</p>
        <div class="what-is-actions">
          <a class="blue-action contact-action" href="#early-access"><span aria-hidden="true">☎</span> Contact Us</a>
        </div>
      </div>
    </section>

    <section class="platform-features" id="platform" aria-labelledby="features-title">
      <div class="features-heading">
        <h2 id="features-title">Everything Your<br>Business Needs. Built<br>Into One Platform.</h2>
        <div class="feature-tabs" role="tablist" aria-label="Choose a department">
          <button class="feature-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="feature-workflow" data-department="Hiring">Hiring</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="HRMS">HRMS</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Sales">Sales</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Projects">Projects</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Accounts">Accounts</button>
        </div>
      </div>
      <div class="workflow-panel" id="feature-workflow" role="tabpanel" aria-labelledby="tab-hiring">
        <h3 class="workflow-title">Hiring workflow</h3>
        <ol class="workflow-list" aria-live="polite">
          <li class="workflow-step"><span class="flow-icon" aria-hidden="true">✦</span><span class="flow-name">AI Job Description</span><span class="flow-route" aria-hidden="true"></span></li>
          <li class="workflow-step"><span class="flow-icon" aria-hidden="true">◎</span><span class="flow-name">Applicant Tracking</span><span class="flow-route" aria-hidden="true"></span></li>
          <li class="workflow-step"><span class="flow-icon" aria-hidden="true">▤</span><span class="flow-name">Resume Parsing</span><span class="flow-route" aria-hidden="true"></span></li>
          <li class="workflow-step"><span class="flow-icon" aria-hidden="true">♙</span><span class="flow-name">Candidate Profiles</span><span class="flow-route" aria-hidden="true"></span></li>
          <li class="workflow-step"><span class="flow-icon" aria-hidden="true">◉</span><span class="flow-name">AI Candidate Matching</span><span class="flow-route" aria-hidden="true"></span></li>
          <li class="workflow-step"><span class="flow-icon" aria-hidden="true">▣</span><span class="flow-name">Interview Scheduling</span><span class="flow-route" aria-hidden="true"></span></li>
          <li class="workflow-step"><span class="flow-icon" aria-hidden="true">▱</span><span class="flow-name">Hiring Pipeline</span><span class="flow-route" aria-hidden="true"></span></li>
          <li class="workflow-step"><span class="flow-icon" aria-hidden="true">◌</span><span class="flow-name">Analytics</span><span class="flow-route" aria-hidden="true"></span></li>
        </ol>
      </div>
    </section>

    <section class="whatsapp-section" aria-labelledby="whatsapp-title">
      <div class="whatsapp-scene" role="img" aria-label="A business owner asks Impera for updates through WhatsApp, with information connected across the team">
        <img class="whatsapp-scene-image" src="/whatsapp-connected-team.png" alt="A business owner uses WhatsApp to stay connected with teams working across the business" width="1528" height="1029" loading="lazy" decoding="async">
      </div>
      <div class="whatsapp-copy">
        <h2 id="whatsapp-title">Manage Everything<br>From <span>WhatsApp</span></h2>
        <p>Ask Impera anything about your business in a single message. Attendance, deals, invoices, and project updates: Impera reads across every module and replies right inside the app you already use. No extra logins, no dashboards, no waiting for someone to send a report.</p>
        <p class="whatsapp-tagline">Your entire company, one message away.</p>
      </div>
    </section>

    <section class="assistant-demo-section" aria-label="Impera AI assistant connected to every department">
      <div class="assistant-demo">
        <div class="assistant-cables" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
        <article class="module-card module-sales"><span class="module-symbol sales-symbol">▥</span><strong>Sales</strong><b>128</b><small>New leads</small></article>
        <article class="module-card module-hiring"><span class="module-symbol hiring-symbol">♙</span><strong>Hiring</strong><b>24</b><small>Candidates in process</small></article>
        <article class="module-card module-finance"><span class="module-symbol finance-symbol">$</span><strong>Finance</strong><b>$96,400</b><small>Revenue this month</small></article>
        <article class="module-card module-projects"><span class="module-symbol projects-symbol">▣</span><strong>Projects</strong><b>18</b><small>Active projects</small></article>
        <div class="assistant-chat" role="img" aria-label="Illustrative Impera AI chat: summary of sales, ranked candidates, and processed invoices">
          <div class="chat-header"><span class="chat-back" aria-hidden="true">‹</span><span class="chat-brand-mark">i</span><span class="chat-brand"><strong>Impera AI Agent</strong><small>Online</small></span><span class="chat-header-icon" aria-hidden="true">▰</span><span class="chat-header-icon phone-icon" aria-hidden="true">☎</span><span class="chat-more" aria-hidden="true">⋮</span></div>
          <div class="chat-body">
            <div class="chat-message sent">Summarize today’s sales <small>10:30 AM&nbsp; ✓✓</small></div>
            <div class="chat-message received"><span class="chat-answer-icon sales-answer">▥</span><span><strong>Sales Report</strong><small>Total Sales: $128,450<br>+18% vs yesterday</small></span><time>10:30 AM</time></div>
            <div class="chat-message sent">Rank candidates <small>10:31 AM&nbsp; ✓✓</small></div>
            <div class="chat-message received"><span class="chat-answer-icon people-answer">♙</span><span><strong>Top Candidates</strong><small>5 Candidates Ranked<br>View full list</small></span><time>10:31 AM</time></div>
            <div class="chat-message sent">Process invoices <small>10:32 AM&nbsp; ✓✓</small></div>
            <div class="chat-message received"><span class="chat-answer-icon finance-answer">$</span><span><strong>Invoices Processed</strong><small>12 Invoices Processed<br>Total: $45,230</small></span><time>10:32 AM</time></div>
          </div>
          <div class="chat-input"><span aria-hidden="true">☺</span><span>Type a message</span><span aria-hidden="true">⌁</span><span aria-hidden="true">▣</span><i aria-hidden="true">●</i></div>
        </div>
        <span class="demo-node node-left-top" aria-hidden="true"></span><span class="demo-node node-right-top" aria-hidden="true"></span><span class="demo-node node-left-bottom" aria-hidden="true"></span><span class="demo-node node-right-bottom" aria-hidden="true"></span>
      </div>
    </section>

      <section class="automation-section" aria-labelledby="automation-title">
        <div class="automation-layout">
          <div class="automation-content">
            <h2 id="automation-title">AI-Powered Business<br><span>Automation</span></h2>
            <h3>AI Capabilities</h3>
            <ul class="automation-list">
              <li><span class="capability-logo" aria-hidden="true"><img src="/innovative-icon.png" alt="" width="1024" height="1024" decoding="async"></span><p><strong>INNOVATIVE:</strong> Smarter solutions for modern businesses.</p></li>
              <li><span class="capability-logo" aria-hidden="true"><img src="/multitasker-icon.png" alt="" width="1024" height="1024" decoding="async"></span><p><strong>MULTITASKER:</strong> Multiple workflows. One intelligent system.</p></li>
              <li><span class="capability-logo" aria-hidden="true"><img src="/performant-icon.png" alt="" width="1024" height="1024" decoding="async"></span><p><strong>PERFORMANT:</strong> Delivering fast, reliable, high-level performance.</p></li>
              <li><span class="capability-logo efficient-logo" aria-hidden="true"><svg viewBox="0 0 72 72" focusable="false"><path d="M18 10C33 3 51 7 61 19"/><path d="m58 11 10 11-15 2Z"/><path d="M66 35c0 16-10 28-24 33"/><path d="m45 61-13 8 13 3Z"/><path d="M24 65C11 59 5 46 8 32"/><path d="m2 35 7-14 7 14Z"/><g class="efficient-gear"><rect x="33" y="15" width="6" height="12" rx="1"/><rect x="33" y="15" width="6" height="12" rx="1" transform="rotate(45 36 36)"/><rect x="33" y="15" width="6" height="12" rx="1" transform="rotate(90 36 36)"/><rect x="33" y="15" width="6" height="12" rx="1" transform="rotate(135 36 36)"/><rect x="33" y="15" width="6" height="12" rx="1" transform="rotate(180 36 36)"/><rect x="33" y="15" width="6" height="12" rx="1" transform="rotate(225 36 36)"/><rect x="33" y="15" width="6" height="12" rx="1" transform="rotate(270 36 36)"/><rect x="33" y="15" width="6" height="12" rx="1" transform="rotate(315 36 36)"/><circle cx="36" cy="36" r="16"/><circle class="efficient-ring" cx="36" cy="36" r="10"/><circle class="efficient-core" cx="36" cy="36" r="7"/><path class="efficient-check" d="m31.5 36.5 3.2 3.2 6.3-7"/></g></svg></span><p><strong>EFFICIENT:</strong> Optimizing workflows and maximizing productivity.</p></li>
              <li><span class="capability-logo" aria-hidden="true"><img src="/responsive-icon.png" alt="" width="1024" height="1024" decoding="async"></span><p><strong>RESPONSIVE:</strong> Adapting instantly to every business need.</p></li>
              <li><span class="capability-logo" aria-hidden="true"><img src="/automated-icon.png" alt="" width="1024" height="1024" decoding="async"></span><p><strong>AUTOMATED:</strong> Turning repetitive tasks into smart workflows.</p></li>
            </ul>
          </div>
          <figure class="automation-poster">
            <img src="/automation-poster.png" alt="What Impera can automate, from manual work to automated business processes" width="1120" height="1408" loading="lazy" decoding="async">
          </figure>
        </div>
      </section>

    <section class="comparison-section" aria-labelledby="comparison-title">
      <div class="comparison-intro">
        <h2 id="comparison-title">Before <span>VS</span> After</h2>
        <p>With Impera, move from juggling apps and chasing updates to managing your entire business through one intelligent system.</p>
      </div>
      <div class="comparison-stage" style="--compare-position: 50%">
        <div class="comparison-before" aria-hidden="true">
          <div class="office-window"><i></i><i></i><i></i></div>
          <div class="before-note note-tasks"><b>URGENT TASKS</b><i></i><i></i><i></i></div>
          <div class="before-note note-feedback"><b>CLIENT FEEDBACK</b><i></i><i></i></div>
          <div class="before-note note-inbox"><b>INBOX (127)</b><i></i><i></i></div>
          <div class="clutter-desk"><span class="clutter-laptop"></span><span class="paper-stack"></span><span class="coffee-cup"></span></div>
          <div class="comparison-person before-person"><i></i><b></b></div>
          <span class="floating-paper paper-one">DUE TODAY</span><span class="floating-paper paper-two">REVIEW</span>
        </div>
        <div class="comparison-after" aria-hidden="true">
          <div class="after-wallboard"><span>TEAM PLAN</span><i></i><i></i><i></i></div>
          <div class="impera-control"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><strong>IMPERA</strong><small>STRATEGY</small><small>PEOPLE</small><small>PROJECTS</small><small>GROWTH</small></div>
          <div class="after-table"><span class="plant-pot"><i></i><i></i><b></b></span><span class="after-cup"></span></div>
          <div class="comparison-person after-person"><i></i><b></b></div>
        </div>
        <span class="comparison-label before-label">BEFORE</span>
        <span class="comparison-label after-label">AFTER</span>
        <div class="comparison-divider" aria-hidden="true"><span>‹</span><span>›</span></div>
        <input class="comparison-range" type="range" min="0" max="100" value="50" aria-label="Drag to compare before and after using Impera" aria-valuetext="Before and after shown equally">
      </div>
    </section>

    <section class="org-chat-section" aria-labelledby="org-chat-title">
      <div class="org-chat-content">
        <h2 id="org-chat-title">Chat Within<br>Your <span>Organization</span></h2>
        <p>Bring team conversations into Impera. Chat works like the messaging apps your team already knows, so you can message anyone, start group threads, schedule a call, and share files without leaving the conversation. Every module is one tap away, so work happens where your team already is.</p>
        <p class="org-chat-tagline">No onboarding. Everyone already knows how to use it.</p>
        <ul class="org-chat-features">
          <li><span aria-hidden="true">♟</span> Team &amp; group chats</li>
          <li><span aria-hidden="true">▣</span> Schedule calls, send invites</li>
          <li><span aria-hidden="true">⌁</span> Share files &amp; attachments</li>
          <li><span aria-hidden="true">☎</span> Voice &amp; video, built in</li>
        </ul>
      </div>
    </section>

    <section class="team-section" aria-labelledby="team-title">
      <div class="team-intro">
        <p class="eyebrow">THE PEOPLE BEHIND IMPERA</p>
        <h2 id="team-title">Built by people.<br><span>Growing together.</span></h2>
      </div>
      <div class="team-portraits">
        <figure class="team-portrait">
          <div class="team-portrait-media ceo-media">
            <img class="ceo-portrait" src="/ceo-eco-green-developers.jpeg" alt="CEO of Eco Green Developers" width="1086" height="1448" loading="lazy" decoding="async">
          </div>
          <figcaption><strong>CEO</strong><span>ECO GREEN DEVELOPERS</span></figcaption>
        </figure>
        <figure class="team-portrait">
          <div class="team-portrait-media impera-media">
            <img src="/impera-leadership.jpeg" alt="Impera leadership" width="1024" height="1537" loading="lazy" decoding="async">
          </div>
          <figcaption><strong>IMPERA</strong><span>Leadership</span></figcaption>
        </figure>
        <figure class="team-portrait">
          <div class="team-portrait-media director-media">
            <img src="/impera-development-director.jpeg" alt="Impera Development Director" width="1064" height="1478" loading="lazy" decoding="async">
          </div>
          <figcaption><strong>IMPERA</strong><span>Development Director</span></figcaption>
        </figure>
      </div>
    </section>

    <section class="about-story-section" id="story" aria-labelledby="about-story-title">
      <div class="about-story-content">
        <h2 id="about-story-title"><span>About</span> Us</h2>
        <p>We built Impera because we lived the problem. Instead of juggling separate apps for hiring, attendance, and invoices, Impera brings your business workflows together. Candidates can become employees and deals can flow into invoicing in one connected platform, giving teams more time to focus on growing their business.</p>
        <p>We’re building Impera as a single, intuitive ecosystem from day one. Our goal is to reduce the friction between teams and give growing businesses a clearer view of the work that matters.</p>
        <a class="blue-action about-contact" href="#early-access"><span aria-hidden="true">☎</span> Contact Us</a>
      </div>
    </section>

    <section class="plans-section" id="plans" aria-labelledby="plans-title">
      <div class="plans-heading">
        <p class="eyebrow">PLANS</p>
        <h2 id="plans-title">Explore Features<br>by Module</h2>
        <p>Select a module to explore what could be included in each plan.</p>
        <div class="plan-tabs" role="tablist" aria-label="Choose a module plan">
          <button class="plan-tab is-active" type="button" role="tab" aria-selected="true" data-plan-module="Hiring">Hiring</button>
          <button class="plan-tab" type="button" role="tab" aria-selected="false" data-plan-module="HRMS">HRMS</button>
          <button class="plan-tab" type="button" role="tab" aria-selected="false" data-plan-module="Sales">Sales</button>
          <button class="plan-tab" type="button" role="tab" aria-selected="false" data-plan-module="Projects">Projects</button>
          <button class="plan-tab" type="button" role="tab" aria-selected="false" data-plan-module="Accounts">Accounts</button>
        </div>
      </div>
      <div class="plan-groups" id="plan-features" role="tabpanel" aria-label="Hiring plan features" aria-labelledby="plan-tab-hiring">
        <section class="plan-group basic-plan">
          <h3>Basic Plan</h3>
          <ul class="plan-feature-list basic-features"></ul>
        </section>
        <section class="plan-group pro-plan">
          <h3>Pro Plan</h3>
          <p class="plan-includes">Includes everything in Basic Plan</p>
          <ul class="plan-feature-list pro-features"></ul>
        </section>
        <section class="plan-group addon-plan">
          <h3>Optional Add-ons</h3>
          <ul class="plan-feature-list addon-features"></ul>
        </section>
      </div>
      <p class="plans-note">Plan features are being finalized. Pricing and availability will be shared before launch.</p>
    </section>

    <section class="faq-section" id="faq" data-page-number="15" aria-labelledby="faq-title">
      <div class="faq-heading">
        <p class="eyebrow">IMPERA FAQ</p>
        <h2 id="faq-title">Frequently asked<br><span>questions.</span></h2>
        <p>Quick answers about bringing your business into one connected workspace.</p>
      </div>
      <div class="faq-list">
        <details class="faq-item">
          <summary>What is Impera?</summary>
          <p>Impera is an AI-powered business operating system that brings core workflows like hiring, HR, sales, projects, and accounting together in one platform.</p>
        </details>
        <details class="faq-item">
          <summary>Who is Impera designed for?</summary>
          <p>Impera is being designed for startups and growing businesses that want their teams and business information to work together more smoothly.</p>
        </details>
        <details class="faq-item">
          <summary>Which departments can use Impera?</summary>
          <p>The platform brings together hiring, people operations, sales and CRM, project management, finance, and accounting workflows.</p>
        </details>
        <details class="faq-item">
          <summary>How does AI help in Impera?</summary>
          <p>AI can help with tasks such as drafting job descriptions, organizing candidate information, summarizing activity, and surfacing patterns. Teams remain in control of decisions and should review AI-generated results.</p>
        </details>
        <details class="faq-item">
          <summary>Can I ask questions about my business in WhatsApp?</summary>
          <p>The Impera concept includes a WhatsApp-based assistant for asking about business updates. Availability will depend on the integrations and features offered at launch.</p>
        </details>
        <details class="faq-item">
          <summary>Can Impera connect with the tools we already use?</summary>
          <p>Impera is designed to bring workflows together. Specific third-party integrations will depend on what is supported when the platform launches.</p>
        </details>
        <details class="faq-item">
          <summary>How can I get early access?</summary>
          <p>Join the waitlist with your work email and we’ll share updates about early access as they become available.</p>
        </details>
      </div>
    </section>

    <section class="contact-section" id="early-access" data-page-number="16" aria-labelledby="contact-title">
      <div class="contact-copy">
        <p class="eyebrow">CONTACT US</p>
        <h2 id="contact-title">Let’s Start a<br>Conversation</h2>
        <p>Have a question about Impera, early access, or working with Eco Green Developers? Send us a note.</p>
        <p class="contact-note">We’re preparing the launch. Contact details will be shared here soon.</p>
      </div>
      <form class="contact-form" id="waitlist-form">
        <label for="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" placeholder="Enter your name" autocomplete="name">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Enter your email" autocomplete="email" required>
        <label for="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="Enter your message" rows="4"></textarea>
        <button class="button button-blue" type="submit">Send Message <span aria-hidden="true">↗</span></button>
        <p class="form-note" id="form-note">This preview form does not send or store messages yet.</p>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand-group">
        <a class="brand footer-brand" href="#top"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><span class="brand-name">impera</span></a>
        <p>Built to keep your venture organised.</p>
        <span class="footer-credit">Powered by <b>eco green developers</b></span>
      </div>
      <nav class="footer-links" aria-label="Footer navigation">
        <div><h2>Company</h2><a href="#top">Home</a><a href="#platform">Features</a><a href="#plans">Plans</a></div>
        <div><h2>Support</h2><a href="#about">About Us</a><a href="#faq">FAQ</a><a href="#early-access">Contact Us</a></div>
      </nav>
    </div>
    <div class="footer-bottom"><span>© 2026 Impera</span><a href="#top">Back to top ↑</a></div>
  </footer>
`

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')!
const mainNav = document.querySelector<HTMLElement>('.main-nav')!

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation')
  mainNav.classList.toggle('is-open', !isOpen)
})

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    mainNav.classList.remove('is-open')
  })
})

const workflowFeatures: Record<string, { icon: string; label: string }[]> = {
  Hiring: [
    { icon: '✦', label: 'AI Job Description' },
    { icon: '◎', label: 'Applicant Tracking' },
    { icon: '▤', label: 'Resume Parsing' },
    { icon: '♙', label: 'Candidate Profiles' },
    { icon: '◉', label: 'AI Candidate Matching' },
    { icon: '▣', label: 'Interview Scheduling' },
    { icon: '▱', label: 'Hiring Pipeline' },
    { icon: '◌', label: 'Analytics' },
  ],
  HRMS: [
    { icon: '♧', label: 'Employee Records' },
    { icon: '▣', label: 'Onboarding Journeys' },
    { icon: '◷', label: 'Time & Attendance' },
    { icon: '▤', label: 'Leave Management' },
    { icon: '✦', label: 'Performance Reviews' },
    { icon: '◎', label: 'Learning & Growth' },
    { icon: '♙', label: 'Team Directory' },
    { icon: '◌', label: 'People Analytics' },
  ],
  Sales: [
    { icon: '✦', label: 'AI Lead Enrichment' },
    { icon: '◎', label: 'Lead Management' },
    { icon: '♙', label: 'Contact Profiles' },
    { icon: '↗', label: 'Deal Pipeline' },
    { icon: '▤', label: 'Proposals & Quotes' },
    { icon: '▣', label: 'Follow-up Reminders' },
    { icon: '▱', label: 'Sales Forecasting' },
    { icon: '◌', label: 'Revenue Analytics' },
  ],
  Projects: [
    { icon: '✦', label: 'AI Project Plans' },
    { icon: '▤', label: 'Task Management' },
    { icon: '♙', label: 'Team Assignments' },
    { icon: '◷', label: 'Timeline & Milestones' },
    { icon: '▣', label: 'Team Collaboration' },
    { icon: '↗', label: 'Progress Tracking' },
    { icon: '▱', label: 'Workload Planning' },
    { icon: '◌', label: 'Project Analytics' },
  ],
  Accounts: [
    { icon: '✦', label: 'Smart Bookkeeping' },
    { icon: '↗', label: 'Income & Expenses' },
    { icon: '▤', label: 'Invoices & Billing' },
    { icon: '▣', label: 'Receipts & Expenses' },
    { icon: '◷', label: 'Payroll Overview' },
    { icon: '◎', label: 'Cash Flow Tracking' },
    { icon: '▱', label: 'Tax Preparation' },
    { icon: '◌', label: 'Financial Analytics' },
  ],
}

const featureTabs = document.querySelectorAll<HTMLButtonElement>('.feature-tab')
const workflowTitle = document.querySelector<HTMLElement>('.workflow-title')!
const workflowList = document.querySelector<HTMLOListElement>('.workflow-list')!

featureTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const department = tab.dataset.department!
    featureTabs.forEach((otherTab) => {
      const isActive = otherTab === tab
      otherTab.classList.toggle('is-active', isActive)
      otherTab.setAttribute('aria-selected', String(isActive))
      otherTab.tabIndex = isActive ? 0 : -1
    })
    document.querySelector('.workflow-panel')?.setAttribute('aria-labelledby', `tab-${department.toLowerCase()}`)
    workflowTitle.textContent = `${department} workflow`
    workflowList.innerHTML = workflowFeatures[department].map(({ icon, label }) => `
      <li class="workflow-step"><span class="flow-icon" aria-hidden="true">${icon}</span><span class="flow-name">${label}</span><span class="flow-route" aria-hidden="true"></span></li>
    `).join('')
  })
  tab.addEventListener('keydown', (event) => {
    const currentIndex = [...featureTabs].indexOf(tab)
    const nextIndex = event.key === 'ArrowRight' ? (currentIndex + 1) % featureTabs.length
      : event.key === 'ArrowLeft' ? (currentIndex - 1 + featureTabs.length) % featureTabs.length
        : event.key === 'Home' ? 0
          : event.key === 'End' ? featureTabs.length - 1
            : -1
    if (nextIndex >= 0) {
      event.preventDefault()
      featureTabs[nextIndex].focus()
      featureTabs[nextIndex].click()
    }
  })
  tab.id = `tab-${tab.dataset.department!.toLowerCase()}`
  tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1
})

const planFeatures: Record<string, { basic: string[]; pro: string[] }> = {
  Hiring: {
    basic: ['Job Posting', 'Applicant Tracking System', 'Candidate Profiles', 'Hiring Pipeline', 'Interview Scheduling', 'Stage Configurator', 'Hiring Analytics & Reports', 'Role-Based Access'],
    pro: ['Advanced Job Posting', 'AI Job Descriptions', 'AI Candidate Matching', 'Resume Parsing', 'Mobile App'],
  },
  HRMS: {
    basic: ['Employee Records', 'Team Directory', 'Onboarding', 'Time & Attendance', 'Leave Management', 'HR Reports', 'Role-Based Access'],
    pro: ['Performance Reviews', 'Advanced Onboarding', 'Workforce Analytics', 'Policy Management', 'Mobile App'],
  },
  Sales: {
    basic: ['Contact Management', 'Lead Tracking', 'Sales Pipeline', 'Tasks & Reminders', 'Quotes', 'Sales Reports', 'Role-Based Access'],
    pro: ['AI Lead Scoring', 'Sales Forecasting', 'Email Sequences', 'Advanced Automation', 'Mobile App'],
  },
  Projects: {
    basic: ['Project Boards', 'Task Management', 'Team Assignments', 'Due Dates', 'File Sharing', 'Project Reports', 'Role-Based Access'],
    pro: ['AI Project Plans', 'Workload Planning', 'Dependencies', 'Advanced Analytics', 'Mobile App'],
  },
  Accounts: {
    basic: ['Invoices', 'Income & Expenses', 'Receipt Capture', 'Cash Flow Overview', 'Tax Categories', 'Finance Reports', 'Role-Based Access'],
    pro: ['Automated Reconciliation', 'Duplicate Detection', 'Cash Flow Forecasts', 'Recurring Invoices', 'Mobile App'],
  },
}

const planTabs = document.querySelectorAll<HTMLButtonElement>('.plan-tab')
const planGroups = document.querySelector<HTMLElement>('.plan-groups')!
const planLists = {
  basic: document.querySelector<HTMLUListElement>('.basic-features')!,
  pro: document.querySelector<HTMLUListElement>('.pro-features')!,
  addon: document.querySelector<HTMLUListElement>('.addon-features')!,
}
const addonFeatures = ['Custom Domain', 'Impera WhatsApp Agent', 'Impera Chat', 'Impera Meet']

const renderPlanList = (list: HTMLUListElement, features: string[], tier: string) => {
  list.replaceChildren(...features.map((feature) => {
    const item = document.createElement('li')
    const check = document.createElement('span')
    const label = document.createElement('span')
    const badge = document.createElement('span')
    check.className = 'plan-check'
    check.setAttribute('aria-hidden', 'true')
    check.textContent = '✓'
    label.className = 'plan-feature-name'
    label.textContent = feature
    badge.className = 'plan-tier'
    badge.textContent = tier
    item.append(check, label, badge)
    return item
  }))
}

const renderPlanModule = (module: string, activeTab: HTMLButtonElement) => {
  planTabs.forEach((tab) => {
    const isActive = tab === activeTab
    tab.classList.toggle('is-active', isActive)
    tab.setAttribute('aria-selected', String(isActive))
    tab.tabIndex = isActive ? 0 : -1
  })
  planGroups.setAttribute('aria-label', `${module} plan features`)
  planGroups.setAttribute('aria-labelledby', activeTab.id)
  renderPlanList(planLists.basic, planFeatures[module].basic, 'Basic')
  renderPlanList(planLists.pro, planFeatures[module].pro, 'Pro')
  renderPlanList(planLists.addon, addonFeatures, 'Pro+')
}

planTabs.forEach((tab, index) => {
  tab.id = `plan-tab-${tab.dataset.planModule!.toLowerCase()}`
  tab.setAttribute('aria-controls', 'plan-features')
  tab.tabIndex = index === 0 ? 0 : -1
  tab.addEventListener('click', () => renderPlanModule(tab.dataset.planModule!, tab))
  tab.addEventListener('keydown', (event) => {
    const currentIndex = [...planTabs].indexOf(tab)
    const nextIndex = event.key === 'ArrowRight' ? (currentIndex + 1) % planTabs.length
      : event.key === 'ArrowLeft' ? (currentIndex - 1 + planTabs.length) % planTabs.length
        : event.key === 'Home' ? 0
          : event.key === 'End' ? planTabs.length - 1
            : -1
    if (nextIndex >= 0) {
      event.preventDefault()
      planTabs[nextIndex].focus()
      planTabs[nextIndex].click()
    }
  })
})

renderPlanModule('Hiring', planTabs[0])

const floatingWaitlist = document.querySelector<HTMLAnchorElement>('.floating-waitlist')!
let draggingWaitlist = false
let movedWaitlist = false
let suppressWaitlistClick = false
let waitlistOffsetX = 0
let waitlistOffsetY = 0

const moveWaitlist = (clientX: number, clientY: number) => {
  const bounds = floatingWaitlist.getBoundingClientRect()
  const maxLeft = Math.max(0, window.innerWidth - bounds.width)
  const maxTop = Math.max(0, window.innerHeight - bounds.height)
  const left = Math.max(0, Math.min(maxLeft, clientX - waitlistOffsetX))
  const top = Math.max(0, Math.min(maxTop, clientY - waitlistOffsetY))
  floatingWaitlist.style.left = `${left}px`
  floatingWaitlist.style.top = `${top}px`
  floatingWaitlist.style.right = 'auto'
  floatingWaitlist.style.bottom = 'auto'
}

floatingWaitlist.addEventListener('pointerdown', (event) => {
  if (!event.isPrimary || event.button !== 0) return
  const bounds = floatingWaitlist.getBoundingClientRect()
  draggingWaitlist = true
  movedWaitlist = false
  waitlistOffsetX = event.clientX - bounds.left
  waitlistOffsetY = event.clientY - bounds.top
  floatingWaitlist.style.left = `${bounds.left}px`
  floatingWaitlist.style.top = `${bounds.top}px`
  floatingWaitlist.style.right = 'auto'
  floatingWaitlist.style.bottom = 'auto'
  floatingWaitlist.classList.add('is-dragging')
  floatingWaitlist.setPointerCapture(event.pointerId)
})

floatingWaitlist.addEventListener('pointermove', (event) => {
  if (!draggingWaitlist) return
  movedWaitlist = true
  event.preventDefault()
  moveWaitlist(event.clientX, event.clientY)
})

const stopWaitlistDrag = (event: PointerEvent) => {
  if (!draggingWaitlist) return
  draggingWaitlist = false
  suppressWaitlistClick = movedWaitlist
  floatingWaitlist.classList.remove('is-dragging')
  if (floatingWaitlist.hasPointerCapture(event.pointerId)) floatingWaitlist.releasePointerCapture(event.pointerId)
  window.setTimeout(() => { suppressWaitlistClick = false }, 0)
}

floatingWaitlist.addEventListener('pointerup', stopWaitlistDrag)
floatingWaitlist.addEventListener('pointercancel', stopWaitlistDrag)
floatingWaitlist.addEventListener('click', (event) => {
  if (suppressWaitlistClick) event.preventDefault()
})

const comparisonStage = document.querySelector<HTMLElement>('.comparison-stage')!
const comparisonRange = document.querySelector<HTMLInputElement>('.comparison-range')!

const updateComparison = () => {
  const afterPercentage = Number(comparisonRange.value)
  comparisonStage.style.setProperty('--compare-position', `${100 - afterPercentage}%`)
  comparisonRange.setAttribute('aria-valuetext', `${100 - afterPercentage}% before, ${afterPercentage}% after`)
}

let draggingComparison = false

const setComparisonFromPointer = (event: PointerEvent) => {
  const bounds = comparisonStage.getBoundingClientRect()
  const percentage = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100))
  comparisonRange.value = String(percentage)
  updateComparison()
}

comparisonStage.addEventListener('pointerdown', (event) => {
  draggingComparison = true
  if (event.isTrusted) comparisonStage.setPointerCapture(event.pointerId)
  setComparisonFromPointer(event)
})
comparisonStage.addEventListener('pointermove', (event) => {
  if (draggingComparison) setComparisonFromPointer(event)
})
comparisonStage.addEventListener('pointerup', () => { draggingComparison = false })
comparisonStage.addEventListener('pointercancel', () => { draggingComparison = false })
comparisonRange.addEventListener('input', updateComparison)
comparisonRange.addEventListener('keydown', (event) => {
  const currentValue = Number(comparisonRange.value)
  const nextValue = event.key === 'ArrowRight' || event.key === 'ArrowUp' ? currentValue + 1
    : event.key === 'ArrowLeft' || event.key === 'ArrowDown' ? currentValue - 1
      : event.key === 'PageUp' ? currentValue + 10
        : event.key === 'PageDown' ? currentValue - 10
          : event.key === 'Home' ? 0
            : event.key === 'End' ? 100
              : null
  if (nextValue !== null) {
    event.preventDefault()
    comparisonRange.value = String(Math.max(0, Math.min(100, nextValue)))
    updateComparison()
  }
})
updateComparison()

const teamSection = document.querySelector<HTMLElement>('.team-section')
const teamPortraits = document.querySelectorAll<HTMLElement>('.team-portrait')
const reduceTeamMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (teamSection && teamPortraits.length && !reduceTeamMotion && 'IntersectionObserver' in window) {
  teamSection.classList.add('team-motion-ready')
  const teamObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' })

  teamPortraits.forEach((portrait) => teamObserver.observe(portrait))
} else {
  teamPortraits.forEach((portrait) => portrait.classList.add('is-visible'))
}

document.querySelector<HTMLFormElement>('#waitlist-form')!.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.currentTarget as HTMLFormElement
  const formData = new FormData(form)
  const name = String(formData.get('name') || '').trim()
  const formNote = document.querySelector<HTMLParagraphElement>('#form-note')!
  formNote.textContent = name
    ? `Thanks, ${name}. This preview form is not connected yet.`
    : 'Thanks. This preview form is not connected yet.'
  formNote.classList.add('form-success')
  form.reset()
})
