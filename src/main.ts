export const siteMarkup = `
  <header class="site-header">
    <a class="mobile-developer-brand" href="#top" aria-label="Eco Green Developers home">
      <span>eco green</span> developers
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <a href="#top">Home</a>
      <a href="#about">About Impera</a>
      <a href="#platform">Platform</a>
      <a href="#whatsapp">WhatsApp</a>
      <a href="#impera-ai">Impera AI</a>
      <a href="#automation">AI Automation</a>
      <a href="#comparison">Before &amp; After</a>
      <a href="#organization-chat">Organization Chat</a>
      <a href="#team">Our Team</a>
      <a href="#story">About Us</a>
      <a href="#plans">Plans</a>
      <a href="#faq">FAQ</a>
      <a href="#early-access">Contact</a>
    </nav>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="main-nav">
      <span></span><span></span>
    </button>
  </header>
  <a class="floating-waitlist" href="#early-access" draggable="false">
    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6"/></svg>
    <span>Join Waitlist</span>
  </a>

  <div class="waitlist-modal" id="waitlist-modal" aria-hidden="true">
    <div class="waitlist-modal-backdrop" data-waitlist-close>
      <section class="waitlist-dialog" role="dialog" aria-modal="true" aria-labelledby="waitlist-modal-title" tabindex="-1">
        <button class="waitlist-modal-close" type="button" aria-label="Close waitlist form" data-waitlist-close>&times;</button>
        <h2 id="waitlist-modal-title">Join Waitlist</h2>
        <div class="waitlist-modal-content">
          <div class="waitlist-modal-art" aria-hidden="true">
            <svg viewBox="0 0 520 430" role="presentation">
              <defs>
                <linearGradient id="waitlistEnvelope" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7454f6"/><stop offset="1" stop-color="#3e24bd"/></linearGradient>
                <linearGradient id="waitlistPaper" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#e8e9ff"/></linearGradient>
                <linearGradient id="waitlistBell" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffd82f"/><stop offset="1" stop-color="#ff9b0a"/></linearGradient>
                <filter id="waitlistShadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="14" stdDeviation="13" flood-color="#29118b" flood-opacity=".22"/></filter>
              </defs>
              <g filter="url(#waitlistShadow)">
                <path d="M114 231 249 126l139 105v132H114Z" fill="url(#waitlistEnvelope)"/>
                <path d="m114 231 137 104 137-104v132H114Z" fill="#5b38db"/>
                <path d="m114 363 109-96 28 21 28-21 109 96Z" fill="#6947eb"/>
                <g transform="rotate(8 259 193)">
                  <rect x="181" y="77" width="167" height="183" rx="18" fill="url(#waitlistPaper)"/>
                  <text x="205" y="124" fill="#172657" font-size="22" font-weight="800" font-family="Arial, sans-serif">Join Waitlist</text>
                  <rect x="205" y="146" width="90" height="9" rx="5" fill="#b9b9df"/>
                  <rect x="205" y="165" width="112" height="9" rx="5" fill="#cac9e9"/>
                  <rect x="205" y="184" width="73" height="9" rx="5" fill="#cac9e9"/>
                </g>
                <g transform="translate(66 284)">
                  <rect width="111" height="101" rx="17" fill="#f3f2ff"/>
                  <rect width="111" height="25" rx="17" fill="#ffb119"/>
                  <g fill="#c7c4ed"><rect x="15" y="38" width="18" height="16" rx="4"/><rect x="42" y="38" width="18" height="16" rx="4"/><rect x="69" y="38" width="18" height="16" rx="4"/><rect x="15" y="63" width="18" height="16" rx="4"/><rect x="42" y="63" width="18" height="16" rx="4"/><rect x="69" y="63" width="18" height="16" rx="4"/></g>
                  <rect x="42" y="63" width="18" height="16" rx="4" fill="#6041e6"/>
                  <path d="m47 71 4 4 7-9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <g transform="translate(349 130)">
                  <path d="M22 81h91c-13-11-17-26-17-43C96 17 81 0 61 0S26 17 26 38c0 17-4 32-17 43Z" fill="url(#waitlistBell)"/>
                  <circle cx="61" cy="91" r="13" fill="#e98108"/>
                  <circle cx="101" cy="14" r="24" fill="#f04076"/>
                  <text x="101" y="22" text-anchor="middle" fill="#fff" font-size="24" font-weight="800" font-family="Arial, sans-serif">1</text>
                </g>
                <g transform="translate(326 290)">
                  <path d="M8 0h91M8 112h91" stroke="#6844e6" stroke-width="13" stroke-linecap="round"/>
                  <path d="M21 10c0 31 11 38 33 47-22 9-33 17-33 45h65c0-28-11-36-33-45 22-9 33-16 33-47Z" fill="#e9e8ff" stroke="#7859ee" stroke-width="7"/>
                  <path d="M34 19h39c-3 19-10 24-20 30-10-6-17-11-19-30Zm2 73c4-16 10-21 17-27 8 6 14 11 18 27Z" fill="#ffc126"/>
                </g>
                <circle cx="292" cy="256" r="38" fill="#6543e6"/>
                <path d="m274 256 12 12 23-27" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <g fill="#7252f2"><circle cx="91" cy="160" r="8"/><circle cx="423" cy="264" r="9"/><circle cx="308" cy="55" r="7"/></g>
              <g stroke="#7e55f4" stroke-width="8" stroke-linecap="round"><path d="m372 71 17 17m0-17-17 17"/></g>
            </svg>
          </div>
          <form class="waitlist-modal-form" id="modal-waitlist-form">
            <div class="waitlist-modal-field field-wide"><label for="modal-waitlist-name">Name</label><input id="modal-waitlist-name" name="name" type="text" placeholder="Enter your name" required autocomplete="name"></div>
            <div class="waitlist-modal-field field-wide"><label for="modal-waitlist-email">Email</label><input id="modal-waitlist-email" name="email" type="email" placeholder="Enter your email" required autocomplete="email"></div>
            <div class="waitlist-modal-field"><label for="modal-waitlist-company">Company</label><input id="modal-waitlist-company" name="company" type="text" placeholder="Enter your company" autocomplete="organization"></div>
            <div class="waitlist-modal-field"><label for="modal-waitlist-mobile">Mobile <span>(Optional)</span></label><input id="modal-waitlist-mobile" name="mobile" type="tel" placeholder="Enter your number" autocomplete="tel"></div>
            <div class="waitlist-slide" role="slider" tabindex="0" aria-label="Slide right to join the waitlist" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
              <span class="waitlist-slide-knob" aria-hidden="true">&rarr;</span>
              <strong>Slide to Join</strong>
            </div>
            <p class="waitlist-modal-note" id="waitlist-modal-note" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </div>
  </div>

  <main id="top">
    <section class="diorama-hero" aria-label="Impera business overview">
      <div class="department-diorama department-hero-media">
        <img class="department-hero-image" src="/impera-wide-hero.png" alt="Impera office showing Sales, Hiring, Project Management, Attendance, and Accounts in one connected workspace" width="1920" height="1080" fetchpriority="high" decoding="async">
      </div>
      <div class="mobile-hero-copy">
        <p>One connected workspace</p>
        <h1>Keep your venture <span>organised.</span></h1>
        <a href="#early-access">Join the waitlist <b aria-hidden="true">&rarr;</b></a>
      </div>
      <nav class="hero-side-nav" aria-label="Page shortcuts">
        <a class="is-active" href="#top" aria-label="Home" aria-current="location"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg></a>
        <a href="#about" aria-label="About Impera"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg></a>
        <a href="#platform" aria-label="Platform"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg></a>
        <a href="#whatsapp" aria-label="WhatsApp"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.5 2.8 2.1 4.5 5 5.2l1-1.1 2 .9c-.4 1.5-1.5 2.3-3.1 2.1-4.5-.7-7-3.4-7.4-7.2-.1-1.2.6-2.1 1.9-2.5Z"/></svg></a>
        <a href="#impera-ai" aria-label="Impera AI"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5Z"/><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8Z"/></svg></a>
        <a href="#automation" aria-label="AI Automation"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></svg></a>
        <a href="#comparison" aria-label="Before and After"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7h14M15 4l3 3-3 3M20 17H6M9 14l-3 3 3 3"/></svg></a>
        <a href="#organization-chat" aria-label="Organization Chat"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5h12v9H9l-4 3v-3H4Z"/><path d="M10 14v4h5l4 3v-3h1V9h-4"/></svg></a>
        <a href="#team" aria-label="Our Team"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20M15 5.5a3 3 0 0 1 0 5.8M17 13.4a4.8 4.8 0 0 1 3.5 4.6v2"/></svg></a>
        <a href="#story" aria-label="About Us"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4.5c3-1 5.7-.4 8 1.5v14c-2.3-1.9-5-2.5-8-1.5ZM20 4.5c-3-1-5.7-.4-8 1.5v14c2.3-1.9 5-2.5 8-1.5Z"/></svg></a>
        <a href="#plans" aria-label="Plans"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2v20M17 6.5C17 4.6 15.2 3 12 3S7 4.6 7 6.5 8.8 10 12 10s5 1.6 5 3.5S15.2 17 12 17s-5-1.6-5-3.5"/></svg></a>
        <a href="#faq" aria-label="Frequently Asked Questions"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1.2.9-1.2 1.7v.4M12 17h.01"/></svg></a>
        <a href="#early-access" aria-label="Contact"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h16v16H4zM4 7l8 6 8-6"/></svg></a>
      </nav>
    </section>

    <section class="what-is-section" id="about" aria-labelledby="what-is-title">
      <div class="network-video-stage" role="img" aria-label="Animated diagram showing Impera connected to sales, hiring, human resources, accounting, and projects">
        <video class="network-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="/what-is-impera.mp4" type="video/mp4">
        </video>
      </div>
      <div class="what-is-copy">
        <h2 id="what-is-title">What is <span>Impera</span>?</h2>
        <p>IMPERA is an AI-powered business automation and management platform developed by Eco Green Developers.</p>
        <p>Its purpose is to help businesses automate repetitive tasks, manage operations, communicate with customers, and make smarter decisions—all through one connected ecosystem.</p>
        <p>IMPERA is designed for businesses across multiple industries, including healthcare, real estate, restaurants, logistics, immigration consultancies, legal services, and professional service companies.</p>
        <p>Instead of businesses purchasing separate software for CRM, appointments, communication, workflows, and reporting, IMPERA aims to bring these capabilities together in one integrated ecosystem.</p>
        <p><strong>Example:</strong> A medical clinic could use IMPERA to automatically answer WhatsApp inquiries, book appointments, send reminders, update patient-related workflows, and track business performance while allowing staff to take over conversations when needed.</p>
        <h3 class="what-is-vision-title">IMPERA's Vision</h3>
        <blockquote class="connected-line">“Build Smarter. Operate Better.”</blockquote>
      </div>
    </section>

    <section class="platform-features" id="platform" data-theme="impera-slot" aria-labelledby="features-title">
      <div class="features-heading">
        <h2 id="features-title">Everything Your<br>Business Needs. Built<br>Into One Platform.</h2>
        <div class="feature-tabs" role="tablist" aria-label="Choose an Impera product">
          <button class="feature-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="feature-workflow" data-department="Impera Slot">Impera Slot</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Build">Impera Build</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Core">Impera Core</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Launch">Impera Launch</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Pay">Impera Pay</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Reach">Impera Reach</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Sight">Impera Sight</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Talk">Impera Talk</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Connect">Impera Connect</button>
          <button class="feature-tab" type="button" role="tab" aria-selected="false" aria-controls="feature-workflow" data-department="Impera Flow">Impera Flow</button>
        </div>
      </div>
      <div class="workflow-panel" id="feature-workflow" role="tabpanel" aria-labelledby="tab-impera-slot">
        <h3 class="workflow-title">Impera Slot workflow</h3>
        <div class="workflow-showcase has-mockup">
          <ol class="workflow-list" aria-live="polite">
            <li class="workflow-step"><span class="flow-icon" aria-hidden="true">◷</span><span class="flow-name">24/7 Availability</span><span class="flow-route" aria-hidden="true"></span></li>
            <li class="workflow-step"><span class="flow-icon" aria-hidden="true">✦</span><span class="flow-name">Smart Slot Scheduling</span><span class="flow-route" aria-hidden="true"></span></li>
            <li class="workflow-step"><span class="flow-icon" aria-hidden="true">＋</span><span class="flow-name">New Booking</span><span class="flow-route" aria-hidden="true"></span></li>
            <li class="workflow-step"><span class="flow-icon" aria-hidden="true">▣</span><span class="flow-name">Appointment Management</span><span class="flow-route" aria-hidden="true"></span></li>
            <li class="workflow-step"><span class="flow-icon" aria-hidden="true">✓</span><span class="flow-name">Instant Confirmations</span><span class="flow-route" aria-hidden="true"></span></li>
            <li class="workflow-step"><span class="flow-icon" aria-hidden="true">◎</span><span class="flow-name">Automated Reminders</span><span class="flow-route" aria-hidden="true"></span></li>
            <li class="workflow-step"><span class="flow-icon" aria-hidden="true">▤</span><span class="flow-name">Calendar &amp; Bookings</span><span class="flow-route" aria-hidden="true"></span></li>
            <li class="workflow-step"><span class="flow-icon" aria-hidden="true">◌</span><span class="flow-name">Booking Analytics</span><span class="flow-route" aria-hidden="true"></span></li>
          </ol>
          <figure class="workflow-mockup is-switching">
            <div class="workflow-mockup-window">
              <img src="/impera-slot-mockup.png" alt="Impera Slot mobile app showing smart appointment scheduling and booking management" width="4096" height="4096" loading="lazy" decoding="async">
            </div>
          </figure>
        </div>
      </div>
    </section>

    <section class="whatsapp-section" id="whatsapp" aria-labelledby="whatsapp-title">
      <div class="whatsapp-scene" role="img" aria-label="A business owner asks Impera for updates through WhatsApp, with information connected across the team">
        <img class="whatsapp-scene-image" src="/whatsapp-connected-team.png" alt="A business owner uses WhatsApp to stay connected with teams working across the business" width="1528" height="1029" loading="lazy" decoding="async">
      </div>
      <div class="whatsapp-copy">
        <h2 id="whatsapp-title">Manage Everything<br>From <span>WhatsApp</span></h2>
        <p>Ask Impera anything about your business in a single message. Attendance, deals, invoices, and project updates: Impera reads across every module and replies right inside the app you already use. No extra logins, no dashboards, no waiting for someone to send a report.</p>
        <p class="whatsapp-tagline">Your entire company, one message away.</p>
      </div>
    </section>

    <section class="assistant-demo-section" id="impera-ai" aria-label="Impera AI assistant connected to every department">
      <div class="assistant-demo">
        <div class="assistant-cables" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
        <article class="module-card module-sales"><span class="module-symbol sales-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7M3 20h18"/></svg></span><strong>Sales</strong><b>128</b><small>New leads</small></article>
        <article class="module-card module-hiring"><span class="module-symbol hiring-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20M15 5.5a3 3 0 0 1 0 5.8M17 13.4a4.8 4.8 0 0 1 3.5 4.6v2"/></svg></span><strong>Hiring</strong><b>24</b><small>Candidates in process</small></article>
        <article class="module-card module-finance"><span class="module-symbol finance-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2v20M17 6.5C17 4.6 15.2 3 12 3S7 4.6 7 6.5 8.8 10 12 10s5 1.6 5 3.5S15.2 17 12 17s-5-1.6-5-3.5"/></svg></span><strong>Finance</strong><b>$96,400</b><small>Revenue this month</small></article>
        <article class="module-card module-projects"><span class="module-symbol projects-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6.5h6l2 2h8v11H4z"/><path d="m9 14 2 2 4-4"/></svg></span><strong>Projects</strong><b>18</b><small>Active projects</small></article>
        <div class="assistant-chat" role="img" aria-label="Illustrative Impera AI chat: summary of sales, ranked candidates, and processed invoices">
          <div class="chat-header"><span class="chat-brand-mark" aria-hidden="true"><svg class="chat-logo-mark" viewBox="0 0 108 82"><defs><linearGradient id="imperaLogoLeft" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1689f0"/><stop offset="1" stop-color="#0061c7"/></linearGradient><linearGradient id="imperaLogoTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#56b6f4"/><stop offset="1" stop-color="#1684e8"/></linearGradient><linearGradient id="imperaLogoRight" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1388eb"/><stop offset="1" stop-color="#0470d4"/></linearGradient><filter id="imperaLogoShadow" x="-20%" y="-20%" width="150%" height="160%"><feDropShadow dx="2" dy="3" stdDeviation="2.4" flood-color="#0a3d72" flood-opacity=".3"/></filter></defs><g filter="url(#imperaLogoShadow)"><path d="M3 72 31 31l27 41Z" fill="url(#imperaLogoLeft)"/><path d="M31 31 53 3l26 38-21 31Z" fill="url(#imperaLogoTop)"/><path d="m79 41 26 31H58Z" fill="url(#imperaLogoRight)"/></g><path d="m31 31 27 41" fill="none" stroke="#004fae" stroke-width="2.2"/><path d="m79 41-21 31" fill="none" stroke="#0a64bf" stroke-width="2"/></svg></span><span class="chat-brand"><strong>IMPERA AI</strong><small><i aria-hidden="true"></i> Connected to every module</small></span><span class="chat-ai-badge" aria-hidden="true">AI</span></div>
          <div class="chat-body">
            <div class="chat-message sent">Summarize today’s sales <small>10:30 AM&nbsp; ✓✓</small></div>
            <div class="chat-message received"><span class="chat-answer-icon sales-answer" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7M3 20h18"/></svg></span><span><strong>Sales Report</strong><small>Total Sales: $128,450<br>+18% vs yesterday</small></span><time>10:30 AM</time></div>
            <div class="chat-message sent">Rank candidates <small>10:31 AM&nbsp; ✓✓</small></div>
            <div class="chat-message received"><span class="chat-answer-icon people-answer" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20M15 5.5a3 3 0 0 1 0 5.8M17 13.4a4.8 4.8 0 0 1 3.5 4.6v2"/></svg></span><span><strong>Top Candidates</strong><small>5 candidates ranked<br>View full list</small></span><time>10:31 AM</time></div>
            <div class="chat-message sent">Process invoices <small>10:32 AM&nbsp; ✓✓</small></div>
            <div class="chat-message received"><span class="chat-answer-icon finance-answer" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v18M16.5 7c0-1.7-1.6-3-4.5-3S7.5 5.3 7.5 7 9.1 10 12 10s4.5 1.3 4.5 3-1.6 3-4.5 3-4.5-1.3-4.5-3"/></svg></span><span><strong>Invoices Processed</strong><small>12 invoices processed<br>Total: $45,230</small></span><time>10:32 AM</time></div>
          </div>
          <div class="chat-input"><span class="chat-plus" aria-hidden="true">+</span><span>Ask Impera anything…</span><span class="chat-attach" aria-hidden="true">⌁</span><i aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 12 14-7-4 14-3-5z"/></svg></i></div>
        </div>
        <span class="demo-node node-left-top" aria-hidden="true"></span><span class="demo-node node-right-top" aria-hidden="true"></span><span class="demo-node node-left-bottom" aria-hidden="true"></span><span class="demo-node node-right-bottom" aria-hidden="true"></span>
      </div>
    </section>

      <section class="automation-section" id="automation" aria-labelledby="automation-title">
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
            <img src="/automation-poster-green.png" alt="What Impera can automate, from manual work to automated business processes" width="1120" height="1408" loading="lazy" decoding="async">
          </figure>
        </div>
      </section>

    <section class="comparison-section" id="comparison" aria-labelledby="comparison-title">
      <div class="comparison-intro">
        <h2 id="comparison-title">Before <span>VS</span> After</h2>
        <p>With Impera, move from juggling apps and chasing updates to managing your entire business through one intelligent system.</p>
      </div>
      <div class="comparison-stage comparison-photo">
        <img src="/impera-before-after-healthcare.jpeg" alt="Healthcare professional before Impera with missed calls and manual bookings, and after Impera with instant replies, smart booking, and connected operations" width="1600" height="900" loading="lazy" decoding="async">
      </div>
    </section>

    <section class="org-chat-section" id="organization-chat" aria-labelledby="org-chat-title">
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

    <section class="team-section" id="team" aria-labelledby="team-title">
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
      <div class="about-story-layout">
        <div class="about-story-content">
          <h2 id="about-story-title"><span>About</span> Us</h2>
          <p>We built Impera because we lived the problem. Instead of juggling separate apps for hiring, attendance, and invoices, Impera brings your business workflows together. Candidates can become employees and deals can flow into invoicing in one connected platform, giving teams more time to focus on growing their business.</p>
          <p>We are building Impera as a single, intuitive ecosystem from day one. Our goal is to reduce the friction between teams and give growing businesses a clearer view of the work that matters.</p>
          <div class="about-contact-actions">
            <button class="blue-action about-contact" type="button" aria-expanded="false" aria-controls="about-contact-number"><span class="about-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5h16v12H8l-4 3z"/><path d="m7 9 5 3 5-3"/></svg></span><span class="about-contact-label">Contact Us</span><svg class="about-contact-arrow" aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg></button>
            <div class="about-contact-number" id="about-contact-number" hidden>
              <span>Call us</span>
              <a href="tel:+923221185677" aria-label="Call Impera at 0322 1185677"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.2 3.5 10 7.8 8.2 10a14 14 0 0 0 5.8 5.8l2.2-1.8 4.3 2.8-.9 3.1c-.3 1-1.3 1.7-2.4 1.6A16.4 16.4 0 0 1 2.5 6.8c-.1-1.1.6-2.1 1.6-2.4z"/></svg><span>0322 1185677</span></a>
            </div>
          </div>
        </div>
        <figure class="about-story-media">
          <img src="/about-eco-green-robot.jpeg" alt="Eco Green Developers robot entering the office" width="1288" height="1600" loading="lazy" decoding="async">
        </figure>
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
        <div class="form-field">
          <label for="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" placeholder="Enter your name" autocomplete="name" required>
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" autocomplete="email" required>
        </div>
        <div class="form-field">
          <label for="contact-phone">Contact Number</label>
          <input id="contact-phone" name="phone" type="tel" placeholder="Enter your contact number" autocomplete="tel">
        </div>
        <div class="form-field">
          <label for="contact-service">Impera Service</label>
          <select id="contact-service" name="service">
            <option value="" selected disabled>Select a service</option>
            <option value="Impera Slot">Impera Slot</option>
            <option value="Impera Build">Impera Build</option>
            <option value="Impera Core">Impera Core</option>
            <option value="Impera Launch">Impera Launch</option>
            <option value="Impera Pay">Impera Pay</option>
            <option value="Impera Reach">Impera Reach</option>
            <option value="Impera Sight">Impera Sight</option>
            <option value="Impera Talk">Impera Talk</option>
            <option value="Impera Connect">Impera Connect</option>
            <option value="Impera Flow">Impera Flow</option>
          </select>
        </div>
        <div class="form-field form-field-message">
          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" placeholder="Enter your message" rows="4" required></textarea>
        </div>
        <div class="form-actions">
          <button class="button button-blue" type="submit">Send Message <span aria-hidden="true">↗</span></button>
          <p class="form-note" id="form-note" aria-live="polite"></p>
        </div>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand-group">
        <a class="footer-impera-brand" href="#top" aria-label="Impera home"><svg aria-hidden="true" viewBox="0 0 108 82"><defs><linearGradient id="footerLogoLeft" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1689f0"/><stop offset="1" stop-color="#0058ba"/></linearGradient><linearGradient id="footerLogoTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#65c0f6"/><stop offset="1" stop-color="#1c83dd"/></linearGradient><linearGradient id="footerLogoRight" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a8cea"/><stop offset="1" stop-color="#0664c3"/></linearGradient></defs><path d="M3 72 31 31l27 41Z" fill="url(#footerLogoLeft)"/><path d="M31 31 53 3l26 38-21 31Z" fill="url(#footerLogoTop)"/><path d="m79 41 26 31H58Z" fill="url(#footerLogoRight)"/><path d="m31 31 27 41M79 41 58 72" fill="none" stroke="#064eaa" stroke-width="2.2"/></svg><span>IMPERA</span></a>
        <p>Built to keep your venture organised.</p>
        <span class="footer-credit">Powered by <b>Eco Green Developers</b></span>
      </div>
      <nav class="footer-links" aria-label="Footer navigation">
        <div><h2>Company</h2><a href="#top">Home</a><a href="#platform">Features</a><a href="#plans">Plans</a></div>
        <div><h2>Support</h2><a href="#about">About Us</a><a href="#faq">FAQ</a><a href="#early-access">Contact Us</a></div>
      </nav>
    </div>
    <div class="footer-bottom"><span>© 2026 Impera</span><a href="#top">Back to top ↑</a></div>
  </footer>
`

export const initializeSite = () => {
const appRoot = document.querySelector<HTMLElement>('#app')
if (!appRoot || appRoot.dataset.initialized === 'true') return
appRoot.dataset.initialized = 'true'

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

const aboutContactButton = document.querySelector<HTMLButtonElement>('.about-contact')
const aboutContactNumber = document.querySelector<HTMLElement>('#about-contact-number')
const aboutContactCallLink = aboutContactNumber?.querySelector<HTMLAnchorElement>('a')

aboutContactButton?.addEventListener('click', () => {
  if (!aboutContactNumber) return
  const shouldShow = aboutContactNumber.hidden
  aboutContactNumber.hidden = !shouldShow
  aboutContactButton.setAttribute('aria-expanded', String(shouldShow))
  if (shouldShow) aboutContactCallLink?.focus({ preventScroll: true })
})

type ApiResult = { message?: string; error?: string; alreadyJoined?: boolean }

const postJson = async (url: string, payload: Record<string, FormDataEntryValue>) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const result = await response.json().catch(() => ({})) as ApiResult
  if (!response.ok) throw new Error(result.error || 'Something went wrong. Please try again.')
  return result
}

const waitlistModal = document.querySelector<HTMLElement>('#waitlist-modal')!
const waitlistDialog = document.querySelector<HTMLElement>('.waitlist-dialog')!
const modalWaitlistForm = document.querySelector<HTMLFormElement>('#modal-waitlist-form')!
const modalWaitlistNote = document.querySelector<HTMLParagraphElement>('#waitlist-modal-note')!
const waitlistSlider = document.querySelector<HTMLElement>('.waitlist-slide')!
const waitlistSliderLabel = document.querySelector<HTMLElement>('.waitlist-slide strong')!
const waitlistSliderKnob = document.querySelector<HTMLElement>('.waitlist-slide-knob')!
let waitlistSliderDragging = false
let waitlistSliderPointerId: number | null = null
let waitlistSliderStartX = 0
let waitlistSliderStartPosition = 0
let waitlistSliderPosition = 0

const waitlistSliderLimit = () => Math.max(0, waitlistSlider.clientWidth - waitlistSliderKnob.offsetWidth - 12)

const setWaitlistSliderPosition = (position: number) => {
  const limit = waitlistSliderLimit()
  waitlistSliderPosition = Math.max(0, Math.min(limit, position))
  const progress = limit ? Math.round((waitlistSliderPosition / limit) * 100) : 0
  waitlistSlider.style.setProperty('--waitlist-slide-x', `${waitlistSliderPosition}px`)
  waitlistSlider.style.setProperty('--waitlist-slide-progress', `${progress}%`)
  waitlistSlider.setAttribute('aria-valuenow', String(progress))
}

const resetWaitlistSlider = () => {
  waitlistSlider.classList.remove('is-complete', 'is-dragging')
  waitlistSliderLabel.textContent = 'Slide to Join'
  setWaitlistSliderPosition(0)
}

const completeWaitlistSlider = () => {
  if (waitlistSlider.getAttribute('aria-disabled') === 'true') return
  if (!modalWaitlistForm.reportValidity()) {
    resetWaitlistSlider()
    return
  }
  setWaitlistSliderPosition(waitlistSliderLimit())
  waitlistSlider.classList.add('is-complete')
  waitlistSliderLabel.textContent = 'Joining…'
  window.setTimeout(() => modalWaitlistForm.requestSubmit(), 180)
}

const openWaitlistModal = () => {
  waitlistModal.setAttribute('aria-hidden', 'false')
  waitlistModal.classList.add('is-open')
  document.body.classList.add('waitlist-modal-open')
  window.setTimeout(() => waitlistDialog.focus({ preventScroll: true }), 80)
}

const closeWaitlistModal = () => {
  waitlistModal.setAttribute('aria-hidden', 'true')
  waitlistModal.classList.remove('is-open')
  document.body.classList.remove('waitlist-modal-open')
}

document.querySelectorAll<HTMLElement>('[data-waitlist-close]').forEach((control) => {
  control.addEventListener('click', (event) => {
    if (event.target === control) closeWaitlistModal()
  })
})

document.querySelector<HTMLAnchorElement>('.mobile-hero-copy > a')!.addEventListener('click', (event) => {
  event.preventDefault()
  openWaitlistModal()
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && waitlistModal.classList.contains('is-open')) closeWaitlistModal()
})

modalWaitlistForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const formData = new FormData(modalWaitlistForm)
  const name = String(formData.get('name') || '').trim()
  let submissionCompleted = false
  modalWaitlistNote.classList.remove('is-success', 'is-error')
  modalWaitlistNote.textContent = 'Saving your details…'
  waitlistSlider.setAttribute('aria-disabled', 'true')

  try {
    const result = await postJson('/api/waitlist', Object.fromEntries(formData.entries()))
    modalWaitlistNote.textContent = result.alreadyJoined
      ? `${name || 'You'} are already on the waitlist.`
      : (name ? `Thanks, ${name}. You are on the waitlist.` : 'Thanks. You are on the waitlist.')
    modalWaitlistNote.classList.add('is-success')
    waitlistSliderLabel.textContent = result.alreadyJoined ? 'Already Joined' : 'Joined!'
    modalWaitlistForm.reset()
    submissionCompleted = true
    window.setTimeout(() => {
      closeWaitlistModal()
      resetWaitlistSlider()
      waitlistSlider.removeAttribute('aria-disabled')
      modalWaitlistNote.textContent = ''
      modalWaitlistNote.classList.remove('is-success', 'is-error')
      window.history.replaceState(null, '', '#top')
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      })
    }, 900)
  } catch (error) {
    modalWaitlistNote.textContent = error instanceof Error ? error.message : 'Unable to join right now. Please try again.'
    modalWaitlistNote.classList.add('is-error')
    resetWaitlistSlider()
  } finally {
    if (!submissionCompleted) waitlistSlider.removeAttribute('aria-disabled')
  }
})

waitlistSlider.addEventListener('pointerdown', (event) => {
  if (!event.isPrimary || event.button !== 0 || waitlistSlider.classList.contains('is-complete') || waitlistSlider.getAttribute('aria-disabled') === 'true') return
  event.preventDefault()
  waitlistSliderDragging = true
  waitlistSliderPointerId = event.pointerId
  waitlistSliderStartX = event.clientX
  waitlistSliderStartPosition = waitlistSliderPosition
  waitlistSlider.classList.add('is-dragging')
  try { waitlistSlider.setPointerCapture(event.pointerId) } catch { /* Window events continue the drag. */ }
})

window.addEventListener('pointermove', (event) => {
  if (!waitlistSliderDragging || event.pointerId !== waitlistSliderPointerId) return
  event.preventDefault()
  setWaitlistSliderPosition(waitlistSliderStartPosition + event.clientX - waitlistSliderStartX)
}, { passive: false })

const finishWaitlistSlider = (event: PointerEvent, cancelled = false) => {
  if (!waitlistSliderDragging || event.pointerId !== waitlistSliderPointerId) return
  event.preventDefault()
  waitlistSliderDragging = false
  waitlistSliderPointerId = null
  waitlistSlider.classList.remove('is-dragging')
  if (waitlistSlider.hasPointerCapture(event.pointerId)) {
    try { waitlistSlider.releasePointerCapture(event.pointerId) } catch { /* Capture may already be released. */ }
  }
  if (!cancelled && waitlistSliderPosition >= waitlistSliderLimit() * .78) completeWaitlistSlider()
  else resetWaitlistSlider()
}

window.addEventListener('pointerup', (event) => finishWaitlistSlider(event))
window.addEventListener('pointercancel', (event) => finishWaitlistSlider(event, true))

waitlistSlider.addEventListener('keydown', (event) => {
  if (waitlistSlider.getAttribute('aria-disabled') === 'true') return
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    setWaitlistSliderPosition(waitlistSliderPosition + waitlistSliderLimit() * .1 * direction)
  }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    completeWaitlistSlider()
  }
})

window.addEventListener('resize', resetWaitlistSlider)

window.setTimeout(openWaitlistModal, 180)

const heroSection = document.querySelector<HTMLElement>('.diorama-hero')!
const heroSideNav = document.querySelector<HTMLElement>('.hero-side-nav')!
const heroSideNavLinks = [...heroSideNav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
let sideNavFrame = 0

const updateActiveSideNavLink = () => {
  const readingLine = window.scrollY + Math.min(160, window.innerHeight * .24)
  let activeLink = heroSideNavLinks[0]
  heroSideNavLinks.forEach((link) => {
    const target = document.querySelector<HTMLElement>(link.hash)
    if (target && target.offsetTop <= readingLine) activeLink = link
  })
  heroSideNavLinks.forEach((link) => {
    const isActive = link === activeLink
    link.classList.toggle('is-active', isActive)
    if (isActive) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  })
}

const updateSideNavLayout = () => {
  const heroEnd = heroSection.offsetTop + heroSection.offsetHeight - 90
  heroSideNav.classList.toggle('is-wide', window.innerWidth > 960 && window.scrollY >= heroEnd)
  updateActiveSideNavLink()
}

heroSideNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    heroSideNavLinks.forEach((item) => {
      item.classList.toggle('is-active', item === link)
      if (item === link) item.setAttribute('aria-current', 'location')
      else item.removeAttribute('aria-current')
    })
  })
})

const scheduleSideNavLayout = () => {
  if (sideNavFrame) return
  sideNavFrame = window.requestAnimationFrame(() => {
    updateSideNavLayout()
    sideNavFrame = 0
  })
}

window.addEventListener('scroll', scheduleSideNavLayout, { passive: true })
window.addEventListener('resize', scheduleSideNavLayout)
window.addEventListener('load', updateSideNavLayout)
updateSideNavLayout()

const workflowFeatures: Record<string, { icon: string; label: string }[]> = {
  'Impera Slot': [
    { icon: '◷', label: '24/7 Availability' },
    { icon: '✦', label: 'Smart Slot Scheduling' },
    { icon: '＋', label: 'New Booking' },
    { icon: '▣', label: 'Appointment Management' },
    { icon: '✓', label: 'Instant Confirmations' },
    { icon: '◎', label: 'Automated Reminders' },
    { icon: '▤', label: 'Calendar & Bookings' },
    { icon: '◌', label: 'Booking Analytics' },
  ],
  'Impera Build': [
    { icon: '▤', label: 'Project Requirements' },
    { icon: '◇', label: 'Solution Architecture' },
    { icon: '▦', label: 'Module Configuration' },
    { icon: '▣', label: 'Secure Authentication' },
    { icon: '$', label: 'Payment Integration' },
    { icon: '◎', label: 'Testing & QA' },
    { icon: '✓', label: 'Launch Readiness' },
    { icon: '◌', label: 'Build Analytics' },
  ],
  'Impera Core': [
    { icon: '⌂', label: 'Business Overview' },
    { icon: '↗', label: 'Revenue Tracking' },
    { icon: '▤', label: 'Order Management' },
    { icon: '♙', label: 'Customer Profiles' },
    { icon: '◎', label: 'Lead Monitoring' },
    { icon: '⚙', label: 'Operations Control' },
    { icon: '$', label: 'Payment Status' },
    { icon: '✦', label: 'AI Business Insights' },
  ],
  'Impera Launch': [
    { icon: '⌁', label: 'Domain Connection' },
    { icon: '▱', label: 'Database Readiness' },
    { icon: '✓', label: 'Security Checks' },
    { icon: '$', label: 'Payment Gateway' },
    { icon: '◎', label: 'Final Testing' },
    { icon: '↗', label: 'Production Deployment' },
    { icon: '◷', label: 'Performance Monitoring' },
    { icon: '◌', label: 'Launch Analytics' },
  ],
  'Impera Pay': [
    { icon: '↗', label: 'Sales Overview' },
    { icon: '▤', label: 'Transaction Management' },
    { icon: '▣', label: 'Order Tracking' },
    { icon: '$', label: 'Payment Collection' },
    { icon: '◉', label: 'Payment Methods' },
    { icon: '↶', label: 'Refund Management' },
    { icon: '▱', label: 'Revenue Reporting' },
    { icon: '◌', label: 'Payment Analytics' },
  ],
  'Impera Reach': [
    { icon: '＋', label: 'Campaign Creation' },
    { icon: '◎', label: 'Audience Targeting' },
    { icon: '⌁', label: 'Multi-channel Reach' },
    { icon: '↗', label: 'Engagement Tracking' },
    { icon: '◉', label: 'Conversion Tracking' },
    { icon: '✦', label: 'AI Recommendations' },
    { icon: '⚙', label: 'Campaign Automation' },
    { icon: '◌', label: 'Marketing Analytics' },
  ],
  'Impera Sight': [
    { icon: '◉', label: 'Live Business Data' },
    { icon: '↗', label: 'Revenue Intelligence' },
    { icon: '▱', label: 'Growth Tracking' },
    { icon: '♙', label: 'Customer Insights' },
    { icon: '!', label: 'Risk Detection' },
    { icon: '✦', label: 'AI Recommendations' },
    { icon: '▤', label: 'Custom Reports' },
    { icon: '◌', label: 'Predictive Analytics' },
  ],
  'Impera Talk': [
    { icon: '◷', label: '24/7 AI Assistance' },
    { icon: '◌', label: 'Customer Conversations' },
    { icon: '✦', label: 'Instant AI Responses' },
    { icon: '↗', label: 'Human Handoff' },
    { icon: '♙', label: 'Contact Management' },
    { icon: '!', label: 'Escalation Handling' },
    { icon: '▱', label: 'Response Analytics' },
    { icon: '◎', label: 'Conversation Insights' },
  ],
  'Impera Connect': [
    { icon: '◌', label: 'WhatsApp Integration' },
    { icon: '◎', label: 'Instagram Integration' },
    { icon: '⌁', label: 'Website Chat' },
    { icon: '◉', label: 'Messenger Integration' },
    { icon: '▤', label: 'Email Integration' },
    { icon: '♙', label: 'Unified Customer Profile' },
    { icon: '↗', label: 'Journey Tracking' },
    { icon: '✦', label: 'Channel Analytics' },
  ],
  'Impera Flow': [
    { icon: '▦', label: 'Workflow Builder' },
    { icon: '▶', label: 'Trigger Automation' },
    { icon: '✦', label: 'AI Lead Qualification' },
    { icon: '↗', label: 'Smart Lead Scoring' },
    { icon: '♙', label: 'Team Notifications' },
    { icon: '◉', label: 'Real-time Monitoring' },
    { icon: '▤', label: 'Workflow Activity' },
    { icon: '◌', label: 'Automation Insights' },
  ],
}

const workflowMockups: Record<string, { src: string; alt: string }> = {
  'Impera Slot': { src: '/impera-slot-mockup.png', alt: 'Impera Slot mobile app showing smart appointment scheduling and booking management' },
  'Impera Build': { src: '/impera-build-mockup.png', alt: 'Impera Build mobile app showing solution development progress and modules' },
  'Impera Core': { src: '/impera-core-mockup.png', alt: 'Impera Core mobile app showing a connected business overview' },
  'Impera Launch': { src: '/impera-launch-mockup.png', alt: 'Impera Launch mobile app showing deployment readiness and performance checks' },
  'Impera Pay': { src: '/impera-pay-mockup.png', alt: 'Impera Pay mobile app showing sales, transactions, and payment analytics' },
  'Impera Reach': { src: '/impera-reach-mockup.png', alt: 'Impera Reach mobile app showing campaigns, engagement, and conversions' },
  'Impera Sight': { src: '/impera-sight-mockup.png', alt: 'Impera Sight mobile app showing business intelligence and AI insights' },
  'Impera Talk': { src: '/impera-talk-mockup.png', alt: 'Impera Talk mobile app showing AI-powered customer conversations' },
  'Impera Connect': { src: '/impera-connect-mockup.png', alt: 'Impera Connect mobile app showing unified customer conversations across channels' },
  'Impera Flow': { src: '/impera-flow-mockup.png', alt: 'Impera Flow mobile app showing automated workflows and lead qualification' },
}

const featureTabs = document.querySelectorAll<HTMLButtonElement>('.feature-tab')
const featureTabList = document.querySelector<HTMLElement>('.feature-tabs')!
const platformFeatures = document.querySelector<HTMLElement>('.platform-features')!
const workflowTitle = document.querySelector<HTMLElement>('.workflow-title')!
const workflowList = document.querySelector<HTMLOListElement>('.workflow-list')!
const workflowShowcase = document.querySelector<HTMLElement>('.workflow-showcase')!
const workflowMockup = document.querySelector<HTMLElement>('.workflow-mockup')!
const workflowMockupImage = document.querySelector<HTMLImageElement>('.workflow-mockup img')!

featureTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const department = tab.dataset.department!
    featureTabs.forEach((otherTab) => {
      const isActive = otherTab === tab
      otherTab.classList.toggle('is-active', isActive)
      otherTab.setAttribute('aria-selected', String(isActive))
      otherTab.tabIndex = isActive ? 0 : -1
    })
    const departmentId = department.toLowerCase().replace(/\s+/g, '-')
    platformFeatures.dataset.theme = departmentId
    document.querySelector('.workflow-panel')?.setAttribute('aria-labelledby', `tab-${departmentId}`)
    workflowTitle.textContent = `${department} workflow`
    const mockup = workflowMockups[department]
    workflowShowcase.classList.add('has-mockup')
    workflowMockup.hidden = false
    workflowMockupImage.src = mockup.src
    workflowMockupImage.alt = mockup.alt
    workflowMockup.classList.remove('is-switching')
    void workflowMockup.offsetWidth
    workflowMockup.classList.add('is-switching')
    workflowList.innerHTML = workflowFeatures[department].map(({ icon, label }) => `
      <li class="workflow-step"><span class="flow-icon" aria-hidden="true">${icon}</span><span class="flow-name">${label}</span><span class="flow-route" aria-hidden="true"></span></li>
    `).join('')
    const centeredTabPosition = tab.offsetLeft - (featureTabList.clientWidth - tab.offsetWidth) / 2
    featureTabList.scrollTo({ left: Math.max(0, centeredTabPosition), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
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
  tab.id = `tab-${tab.dataset.department!.toLowerCase().replace(/\s+/g, '-')}`
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
let activeWaitlistPointerId: number | null = null
let waitlistOffsetX = 0
let waitlistOffsetY = 0
let waitlistStartX = 0
let waitlistStartY = 0

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

const keepWaitlistInViewport = () => {
  if (!floatingWaitlist.style.left || !floatingWaitlist.style.top) return
  const bounds = floatingWaitlist.getBoundingClientRect()
  const edgeGap = 10
  const maxLeft = Math.max(edgeGap, window.innerWidth - bounds.width - edgeGap)
  const maxTop = Math.max(edgeGap, window.innerHeight - bounds.height - edgeGap)
  floatingWaitlist.style.left = `${Math.max(edgeGap, Math.min(maxLeft, bounds.left))}px`
  floatingWaitlist.style.top = `${Math.max(edgeGap, Math.min(maxTop, bounds.top))}px`
}

window.addEventListener('resize', keepWaitlistInViewport)

floatingWaitlist.addEventListener('pointerdown', (event) => {
  if (!event.isPrimary || event.button !== 0) return
  event.preventDefault()
  const bounds = floatingWaitlist.getBoundingClientRect()
  draggingWaitlist = true
  movedWaitlist = false
  activeWaitlistPointerId = event.pointerId
  waitlistStartX = event.clientX
  waitlistStartY = event.clientY
  waitlistOffsetX = event.clientX - bounds.left
  waitlistOffsetY = event.clientY - bounds.top
  floatingWaitlist.style.left = `${bounds.left}px`
  floatingWaitlist.style.top = `${bounds.top}px`
  floatingWaitlist.style.right = 'auto'
  floatingWaitlist.style.bottom = 'auto'
  floatingWaitlist.classList.add('is-dragging')
  try { floatingWaitlist.setPointerCapture(event.pointerId) } catch { /* Window listeners still track the drag. */ }
})

window.addEventListener('pointermove', (event) => {
  if (!draggingWaitlist || event.pointerId !== activeWaitlistPointerId) return
  const travelled = Math.hypot(event.clientX - waitlistStartX, event.clientY - waitlistStartY)
  if (!movedWaitlist && travelled < 4) return
  movedWaitlist = true
  event.preventDefault()
  moveWaitlist(event.clientX, event.clientY)
}, { passive: false })

const stopWaitlistDrag = (event: PointerEvent, activateOnTap: boolean) => {
  if (!draggingWaitlist || event.pointerId !== activeWaitlistPointerId) return
  event.preventDefault()
  draggingWaitlist = false
  suppressWaitlistClick = true
  activeWaitlistPointerId = null
  floatingWaitlist.classList.remove('is-dragging')
  if (floatingWaitlist.hasPointerCapture(event.pointerId)) {
    try { floatingWaitlist.releasePointerCapture(event.pointerId) } catch { /* Capture may already be released. */ }
  }
  if (activateOnTap && !movedWaitlist) {
    openWaitlistModal()
  }
  window.setTimeout(() => { suppressWaitlistClick = false }, 350)
}

window.addEventListener('pointerup', (event) => stopWaitlistDrag(event, true))
window.addEventListener('pointercancel', (event) => stopWaitlistDrag(event, false))
floatingWaitlist.addEventListener('click', (event) => {
  event.preventDefault()
  if (!suppressWaitlistClick) openWaitlistModal()
})

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

document.querySelector<HTMLFormElement>('#waitlist-form')!.addEventListener('submit', async (event) => {
  event.preventDefault()
  const form = event.currentTarget as HTMLFormElement
  const formData = new FormData(form)
  const name = String(formData.get('name') || '').trim()
  const formNote = document.querySelector<HTMLParagraphElement>('#form-note')!
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]')!
  const originalButtonContent = submitButton.innerHTML
  formNote.classList.remove('form-success', 'form-error')
  formNote.textContent = 'Sending your message…'
  submitButton.disabled = true
  submitButton.textContent = 'Sending…'

  try {
    await postJson('/api/contact', Object.fromEntries(formData.entries()))
    formNote.textContent = name
      ? `Thanks, ${name}. Your message has been received.`
      : 'Thanks. Your message has been received.'
    formNote.classList.add('form-success')
    form.reset()
  } catch (error) {
    formNote.textContent = error instanceof Error ? error.message : 'Unable to send your message. Please try again.'
    formNote.classList.add('form-error')
  } finally {
    submitButton.disabled = false
    submitButton.innerHTML = originalButtonContent
  }
})
}
