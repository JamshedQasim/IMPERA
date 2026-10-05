import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Impera home">
      <span class="brand-mark" aria-hidden="true"><i></i><b></b></span>
    </a>
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

  <main id="top">
    <section class="diorama-hero" aria-labelledby="scene-title">
      <div class="wall-brand">
        <h1 id="scene-title">IMPERA</h1>
        <p>powered by <strong>eco green developers</strong></p>
      </div>
      <p class="scene-tagline">KEEP YOUR VENTURE <em>ORGANISED</em></p>
      <p class="scene-subtitle">One intelligent home for your whole business.</p>

      <div class="department-diorama">
        <article class="island island-sales">
          <h2 class="island-label">SALES</h2>
          <div class="island-surface">
            <div class="sales-screen"><span>Pipeline</span><div class="screen-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div><small>$128,400</small></div>
            <div class="sales-desk"></div><div class="mini-person person-blue"><i></i></div>
            <div class="island-plant"><i></i><i></i><b></b></div>
          </div>
        </article>
        <article class="island island-hiring">
          <h2 class="island-label">HIRING</h2>
          <div class="island-surface">
            <div class="hiring-board"><span>MEET YOUR NEXT TEAMMATE</span><div class="candidate-card"><i class="candidate-photo"></i><b>Riley Brooks</b><small>Product designer</small></div><div class="candidate-card"><i class="candidate-photo candidate-two"></i><b>Taylor Nguyen</b><small>Growth lead</small></div></div>
            <div class="hiring-table"></div><div class="mini-person person-coral"><i></i></div><div class="mini-person person-gold"><i></i></div>
          </div>
        </article>
        <article class="island island-projects">
          <h2 class="island-label">PROJECT MANAGEMENT</h2>
          <div class="island-surface">
            <div class="project-board"><span>Q4 LAUNCH</span><div class="project-columns"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
            <div class="project-desk"></div><div class="mini-person person-violet"><i></i></div><div class="mini-person person-gold project-helper"><i></i></div>
          </div>
        </article>
        <article class="island island-attendance">
          <h2 class="island-label">PEOPLE &amp; ATTENDANCE</h2>
          <div class="island-surface">
            <div class="attendance-screen"><span>TEAM CHECK-IN</span><strong>09:02</strong><small>Good morning, Sam</small><div class="attendance-dots"><i></i><i></i><i></i><i></i></div></div>
            <div class="clock-face">9:02</div><div class="mini-person person-green"><i></i></div>
          </div>
        </article>
        <article class="island island-accounts">
          <h2 class="island-label">ACCOUNTS</h2>
          <div class="island-surface">
            <div class="accounts-screen"><span>MONTHLY OVERVIEW</span><strong>$42,680</strong><div class="account-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
            <div class="accounts-desk"></div><div class="mini-person person-teal"><i></i></div><div class="coin-stack"><i></i><i></i><i></i></div>
            <div class="island-plant"><i></i><i></i><b></b></div>
          </div>
        </article>
      </div>
      <a class="scene-waitlist" href="#early-access"><span aria-hidden="true">♟</span> Join Waitlist <b aria-hidden="true">↗</b></a>
    </section>

    <section class="what-is-section" id="about" aria-labelledby="what-is-title">
      <div class="network-illustration" role="img" aria-label="Impera connects sales, hiring, human resources, accounting, and projects in one platform">
        <div class="network-wires" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <article class="network-node node-sales"><span class="node-icon sales-node-icon">▥</span><b>Sales</b><div class="node-chart"><i></i><i></i><i></i><i></i></div><small>Pipeline</small></article>
        <article class="network-node node-hiring"><span class="node-icon hiring-node-icon">◉</span><b>Hiring</b><div class="node-candidates"><i></i><i></i><i></i></div><small>Talent</small></article>
        <article class="network-node node-hr"><span class="node-icon hr-node-icon">♧</span><b>HR</b><div class="node-people"><i></i><i></i><i></i><i></i></div><small>People</small></article>
        <article class="network-node node-accounts"><span class="node-icon accounts-node-icon">▤</span><b>Accounts</b><div class="node-donut"><i></i></div><small>Finance</small></article>
        <article class="network-node node-projects"><span class="node-icon projects-node-icon">▦</span><b>Projects</b><div class="node-tasks"><i></i><i></i><i></i></div><small>Workflow</small></article>
        <div class="network-core"><span class="core-mark"><i></i><b></b></span><strong>IMPERA</strong></div>
        <span class="network-spark spark-one" aria-hidden="true">✦</span><span class="network-spark spark-two" aria-hidden="true">✧</span>
      </div>
      <div class="what-is-copy">
        <h2 id="what-is-title">What is <span>Impera</span>?</h2>
        <p>Impera is an AI-powered business operating system designed for startups and growing businesses. Instead of managing different software for hiring, HR, sales, accounting, and project management, Impera connects every department into one intelligent platform.</p>
        <p class="connected-line">Everything stays connected.</p>
        <div class="what-is-actions">
          <a class="blue-action contact-action" href="#early-access"><span aria-hidden="true">☎</span> Contact Us</a>
          <a class="blue-action waitlist-action" href="#early-access"><span class="group-icon" aria-hidden="true"><i></i><i></i><i></i></span> Join Waitlist</a>
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
      <a class="features-waitlist blue-action" href="#early-access"><span class="group-icon" aria-hidden="true"><i></i><i></i><i></i></span> Join Waitlist</a>
    </section>

    <section class="whatsapp-section" aria-labelledby="whatsapp-title">
      <div class="whatsapp-scene" role="img" aria-label="A business owner asks Impera for updates through WhatsApp, with information connected across the team">
        <div class="wa-cables" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="wa-island wa-team"><div class="team-booth"><i></i><b></b></div><div class="team-person person-meeting-one"><i></i></div><div class="team-person person-meeting-two"><i></i></div></div>
        <div class="wa-island wa-laptop"><div class="laptop-table"></div><div class="laptop-device"><i></i></div><div class="team-person person-laptop"><i></i></div></div>
        <div class="wa-island wa-whiteboard"><div class="whiteboard"><span>THIS WEEK</span><i></i><i></i><i></i></div><div class="whiteboard-stand"></div><div class="team-person person-presenter"><i></i></div></div>
        <div class="wa-island wa-owner"><div class="sofa"><i></i><b></b></div><div class="owner-person"><i></i><b></b></div><div class="owner-phone">▰</div></div>
        <div class="whatsapp-badge" aria-hidden="true"><span>☎</span></div>
        <span class="wa-spark wa-spark-one" aria-hidden="true">✦</span><span class="wa-spark wa-spark-two" aria-hidden="true">✧</span>
      </div>
      <div class="whatsapp-copy">
        <h2 id="whatsapp-title">Manage Everything<br>From <span>WhatsApp</span></h2>
        <p>Ask Impera anything about your business in a single message. Attendance, deals, invoices, and project updates: Impera reads across every module and replies right inside the app you already use. No extra logins, no dashboards, no waiting for someone to send a report.</p>
        <p class="whatsapp-tagline">Your entire company, one message away.</p>
      </div>
      <a class="blue-action whatsapp-waitlist" href="#early-access"><span class="group-icon" aria-hidden="true"><i></i><i></i><i></i></span> Join Waitlist</a>
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
        <div class="automation-content">
          <h2 id="automation-title">AI-Powered Business<br><span>Automation</span></h2>
          <h3>AI Capabilities</h3>
          <ul class="automation-list">
            <li><span aria-hidden="true">▣</span><p>Write professional job descriptions in seconds.</p></li>
            <li><span aria-hidden="true">▥</span><p>Rank and score every candidate, with the reasoning shown.</p></li>
            <li><span aria-hidden="true">▤</span><p>Turn resumes into structured profiles, with no manual entry.</p></li>
            <li><span aria-hidden="true">▥</span><p>Score leads and predict which deals are most likely to close.</p></li>
            <li><span aria-hidden="true">✎</span><p>Draft sales emails, follow-ups, and proposals instantly.</p></li>
            <li><span aria-hidden="true">$</span><p>Scan receipts and invoices straight into your books.</p></li>
            <li><span aria-hidden="true">⚑</span><p>Flag cash-flow risk and surface runway concerns early.</p></li>
            <li><span aria-hidden="true">!</span><p>Catch project delays and scope creep before deadlines slip.</p></li>
            <li><span aria-hidden="true">−</span><p>Spot absenteeism, late arrivals, and overtime patterns early.</p></li>
            <li><span aria-hidden="true">▧</span><p>Flag duplicate invoices and mismatched entries automatically.</p></li>
          </ul>
          <a class="blue-action automation-waitlist" href="#early-access"><span class="group-icon" aria-hidden="true"><i></i><i></i><i></i></span> Join Waitlist</a>
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
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85" alt="Illustrative portrait placeholder for the Impera team" loading="lazy" decoding="async">
          <figcaption><strong>Impera</strong><span>Leadership</span></figcaption>
        </figure>
        <figure class="team-portrait">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85" alt="Illustrative portrait placeholder for Eco Green Developers" loading="lazy" decoding="async">
          <figcaption><strong>Eco Green Developers</strong><span>Development partner</span></figcaption>
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
