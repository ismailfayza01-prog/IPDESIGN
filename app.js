const siteContent = {
  meta: {
    title: "IPDESIGN | Strategy, Systems, and Software for Businesses in Motion",
    description:
      "IPDESIGN is a digital consulting company and venture technology partner shaping strategy, identity, software, internal tools, and workflow systems.",
  },
  brand: "IPDESIGN",
  navigation: {
    services: "Services",
    why: "Why IPDESIGN",
    portal: "Portal Preview",
    ventures: "Ventures",
    cta: "Start a Conversation",
  },
  hero: {
    eyebrow: "Digital consulting company + internal venture technology partner",
    titleLines: ["Strategy, systems,", "and software", "for businesses", "in motion."],
    lead:
      "IPDESIGN works across internal ventures and external clients to tighten brand, product, workflow, and operating logic so digital work moves with precision instead of noise.",
    primaryCta: "Start a Build",
    secondaryCta: "Book a Consultation",
    signals: [
      "Built for founders, operators, and leadership teams that need digital structure",
      "Designed to move from framing to shipping without losing momentum",
      "Less presentation theatre, more working systems",
    ],
    panel: {
      eyebrow: "Operating view",
      title: "IPDESIGN Delivery Layer",
      status: "Active Projects",
      primaryTitle: "Venture requests",
      primaryMeta: "04 open",
      primaryText:
        "Requests move through audit, structure, design, and delivery with one operating language across strategy, product, and build.",
      secondaryTitle: "Current stack",
      secondaryMeta: "Mapped",
      tags: ["Identity", "Website", "MVP", "Automation"],
      tertiaryLabel: "This quarter",
      tertiaryTitle: "Launch systems and internal tooling",
    },
  },
  trustBand: {
    text: "Built for ventures, operators, and teams that need digital work to feel structured, sharp, and commercially useful.",
    items: ["Strategy", "Identity", "Product", "Operations"],
  },
  showcase: {
    eyebrow: "Selected venture environments",
    items: [
      "Northline Logistics",
      "Atlas Retail",
      "Clinik Flow",
      "Estate Signal",
      "Fuel Studio",
      "Aster Health",
      "Service Grid",
      "Kindred Loop",
    ],
  },
  manifesto: {
    eyebrow: "What IPDESIGN is built for",
    title: "Less agency theatre. More digital systems that make the business move.",
    text:
      "IPDESIGN combines strategic thinking, identity systems, websites, SaaS MVPs, dashboards, and workflow design into one delivery function. The result is faster decision-making, sharper execution, and digital work that survives real operating conditions.",
    link: "View the working model",
  },
  sections: {
    services: {
      eyebrow: "Core capability set",
      title: "What IPDESIGN actually does.",
      text:
        "The work spans strategic framing, identity, digital surfaces, software, internal operations, and workflow design. Everything is built to connect instead of fragment.",
    },
    why: {
      eyebrow: "Why IPDESIGN",
      title: "Built like an internal team. Delivered with outside perspective.",
      text:
        "IPDESIGN already operates as the technology and digital delivery partner for ventures inside a wider business group. That internal standard carries into external work: sharper structure, cleaner ownership, and systems designed to last beyond launch.",
      panels: [
        {
          eyebrow: "Internal pressure test",
          title: "Designed for operating reality",
          text:
            "The work is shaped around constraints, handoffs, accountability, and commercial pressure, not just presentation polish.",
        },
        {
          eyebrow: "Integrated delivery",
          title: "Strategy that keeps its edge in execution",
          text:
            "Positioning, design, systems, and software are kept in one loop so the original thinking survives the build.",
        },
        {
          eyebrow: "Long-view partner",
          title: "Not built for one-off output",
          text:
            "IPDESIGN is structured to support ventures through launch, internal scaling, redesign, and the next system decision after that.",
        },
      ],
    },
    industries: {
      eyebrow: "Industries supported",
      title: "Cross-functional support across operating environments.",
    },
    process: {
      eyebrow: "Process",
      title: "A simple operating model, applied with discipline.",
    },
    portal: {
      eyebrow: "MVP portal preview",
      title: "A project intake interface that feels like an actual operating surface.",
      text:
        "This preview shows how requests, priorities, ownership, and working notes can live in one shared layer instead of bouncing across disconnected threads and spreadsheets.",
      panelEyebrow: "Internal portal",
      panelTitle: "Project Intake Board",
      filters: ["All Requests", "Critical", "Automation"],
      headers: {
        request: "Request",
        status: "Status",
        priority: "Priority",
      },
    },
    ventures: {
      eyebrow: "Selected venture formats",
      title: "Projects framed as systems, not portfolio decoration.",
      text:
        "Each project card is presented with enough structure to feel operational, credible, and close to the way the work is actually delivered.",
    },
    cta: {
      eyebrow: "Next move",
      title: "If the business is changing, the system should change with it.",
      text:
        "IPDESIGN supports launches, redesigns, internal tooling, dashboards, and workflow systems for teams that need both strategic clarity and execution depth.",
      primary: "Start a Project",
      secondary: "WhatsApp Placeholder",
      contact: "hello@ipdesign.example",
    },
  },
  footer: {
    summary: "Digital consulting company and technology provider for ventures and external client teams.",
    linksTitle: "Links",
    contactTitle: "Contact",
    links: {
      services: "Services",
      portal: "Portal Preview",
      ventures: "Ventures",
    },
    email: "hello@ipdesign.example",
    whatsapp: "WhatsApp Placeholder",
    location: "Casablanca / Remote / Group Ventures",
  },
};

const services = [
  {
    index: "01",
    title: "Digital Strategy",
    description:
      "Offer structure, market framing, decision support, and digital roadmapping for ventures that need sharper direction before they build.",
    signal: "Positioning + structure",
  },
  {
    index: "02",
    title: "Brand Identity",
    description:
      "Identity systems designed to feel clear, executive, and usable across launch assets, campaigns, internal decks, and digital surfaces.",
    signal: "Identity systems",
  },
  {
    index: "03",
    title: "Websites & Landing Pages",
    description:
      "High-conviction websites and landing pages built to sharpen the message and move people toward action without falling into agency cliches.",
    signal: "Narrative surfaces",
  },
  {
    index: "04",
    title: "SaaS & MVP Development",
    description:
      "Lean products, internal tools, and software MVPs built to validate direction, improve operations, and create usable systems quickly.",
    signal: "Software + MVPs",
  },
  {
    index: "05",
    title: "Internal Dashboards",
    description:
      "Operator-facing dashboards for intake, tracking, reporting, and visibility across teams that need one cleaner place to work.",
    signal: "Internal visibility",
  },
  {
    index: "06",
    title: "Automation & Workflow Design",
    description:
      "Workflow design and automation systems that reduce manual drag, standardize recurring work, and keep information moving cleanly.",
    signal: "Operational leverage",
  },
];

const industries = [
  "Logistics",
  "Retail",
  "Food",
  "Fitness",
  "Real Estate",
  "Healthcare",
  "Professional Services",
];

const processSteps = [
  {
    title: "Audit & Discovery",
    description: "Map the problem, current workflows, constraints, and business leverage before design or build starts.",
  },
  {
    title: "Strategy & Structure",
    description: "Define the architecture, narrative, scope, and system logic so delivery has a clear decision framework.",
  },
  {
    title: "Design & Build",
    description: "Create premium digital experiences, product interfaces, and operating tools with rapid feedback loops.",
  },
  {
    title: "Launch & Scale",
    description: "Stabilize the release, structure ownership, and prepare the system for long-term use across teams.",
  },
];

const ventures = [
  {
    name: "Northline Ops",
    stage: "Logistics system",
    description: "A dispatch and request surface connecting operational intake, status visibility, and rollout workflows.",
    labels: ["Dashboard", "Automation", "Website"],
    impact: "Built for internal coordination and client visibility",
  },
  {
    name: "Kindred Retail Loop",
    stage: "Retail venture",
    description: "Brand system and landing experience for a retail concept that needed sharper positioning and cleaner rollout assets.",
    labels: ["Brand System", "Landing Page"],
    impact: "Structured for launch velocity and consistent presentation",
  },
  {
    name: "Clinik Flow",
    stage: "Healthcare operations",
    description: "A compact intake and workflow MVP for service requests, approvals, and operational follow-through.",
    labels: ["MVP", "Workflow", "Portal"],
    impact: "Reduced ambiguity in multi-step internal processes",
  },
  {
    name: "Estate Signal",
    stage: "Real estate platform",
    description: "A polished digital experience combining property presentation, lead capture, and internal reporting layers.",
    labels: ["Website", "Dashboard"],
    impact: "Aligned public-facing polish with internal visibility",
  },
  {
    name: "Fuel Studio",
    stage: "Fitness growth stack",
    description: "Conversion pages and automation flows designed to support campaigns, onboarding, and operator follow-up.",
    labels: ["Landing Page", "Automation"],
    impact: "Created continuity between acquisition and operations",
  },
  {
    name: "Service Grid",
    stage: "Professional services hub",
    description: "An executive-facing service platform concept pairing premium brand expression with structured intake workflows.",
    labels: ["Brand System", "MVP"],
    impact: "Made the business feel more scalable and credible",
  },
];

const intakeRequests = [
  {
    name: "Launch logistics landing stack",
    status: "In Review",
    priority: "Critical",
    category: "Websites & Landing Pages",
    owner: "Nadia Benali",
    notes:
      "Needs conversion-focused narrative, service segmentation, and a founder-ready consultation flow before the upcoming outreach cycle.",
    attachments: ["brief.pdf", "message-map.fig", "offer-notes.docx"],
  },
  {
    name: "Internal reporting dashboard refresh",
    status: "Scoping",
    priority: "High",
    category: "Internal Dashboards",
    owner: "Omar Idrissi",
    notes:
      "Replace fragmented status tracking with a single dashboard surface for pipeline, revenue status, and delivery risk indicators.",
    attachments: ["dashboard-audit.csv", "ops-rules.md"],
  },
  {
    name: "Venture intake automation design",
    status: "Queued",
    priority: "Medium",
    category: "Automation & Workflow Design",
    owner: "Salma Rafiq",
    notes:
      "Design intake logic, routing rules, and owner notifications for new venture requests entering the group delivery pipeline.",
    attachments: ["zap-map.png", "intake-fields.json", "service-owners.xlsx"],
  },
  {
    name: "Brand system for food concept",
    status: "Active",
    priority: "High",
    category: "Brand Identity",
    owner: "Youssef Amrani",
    notes:
      "Identity should feel premium and operationally usable across packaging, landing pages, menus, and staff-facing materials.",
    attachments: ["moodboard.pdf", "brand-pillars.txt"],
  },
];

const servicesGrid = document.querySelector("#services-grid");
const industriesCloud = document.querySelector("#industries-cloud");
const processList = document.querySelector("#process-list");
const venturesGrid = document.querySelector("#ventures-grid");
const portalList = document.querySelector("#portal-list");
const portalDetail = document.querySelector("#portal-detail");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
}

function renderInlineItems(selector, items, className = "") {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  element.innerHTML = items
    .map((item) => `<span${className ? ` class="${className}"` : ""}>${item}</span>`)
    .join("");
}

function renderListItems(selector, items) {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderLineTitle(selector, lines) {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  element.innerHTML = lines.map((line) => `<span class="hero-title__line">${line}</span>`).join("");
}

function renderStaticContent() {
  document.title = siteContent.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", siteContent.meta.description);

  setText("#brand-text", siteContent.brand);
  setText("#footer-brand-text", siteContent.brand);

  setText("#nav-services", siteContent.navigation.services);
  setText("#nav-why", siteContent.navigation.why);
  setText("#nav-portal", siteContent.navigation.portal);
  setText("#nav-ventures", siteContent.navigation.ventures);
  setText("#header-cta", siteContent.navigation.cta);

  setText("#hero-eyebrow", siteContent.hero.eyebrow);
  renderLineTitle("#hero-title", siteContent.hero.titleLines);
  setText("#hero-lead", siteContent.hero.lead);
  setText("#hero-primary-cta", siteContent.hero.primaryCta);
  setText("#hero-secondary-cta", siteContent.hero.secondaryCta);
  renderListItems("#hero-signals", siteContent.hero.signals);

  setText("#hero-panel-eyebrow", siteContent.hero.panel.eyebrow);
  setText("#hero-panel-title", siteContent.hero.panel.title);
  setText("#hero-panel-status", siteContent.hero.panel.status);
  setText("#hero-card-primary-title", siteContent.hero.panel.primaryTitle);
  setText("#hero-card-primary-meta", siteContent.hero.panel.primaryMeta);
  setText("#hero-card-primary-text", siteContent.hero.panel.primaryText);
  setText("#hero-card-secondary-title", siteContent.hero.panel.secondaryTitle);
  setText("#hero-card-secondary-meta", siteContent.hero.panel.secondaryMeta);
  renderInlineItems("#hero-card-tags", siteContent.hero.panel.tags);
  setText("#hero-card-tertiary-label", siteContent.hero.panel.tertiaryLabel);
  setText("#hero-card-tertiary-title", siteContent.hero.panel.tertiaryTitle);

  setText("#trust-band-text", siteContent.trustBand.text);
  renderInlineItems("#trust-band-items", siteContent.trustBand.items);

  setText("#showcase-eyebrow", siteContent.showcase.eyebrow);
  const showcaseMarquee = document.querySelector("#showcase-marquee");
  if (showcaseMarquee) {
    showcaseMarquee.innerHTML = [...siteContent.showcase.items, ...siteContent.showcase.items]
      .map((item) => `<span>${item}</span>`)
      .join("");
  }

  setText("#manifesto-eyebrow", siteContent.manifesto.eyebrow);
  setText("#manifesto-title", siteContent.manifesto.title);
  setText("#manifesto-text", siteContent.manifesto.text);
  setText("#manifesto-link", siteContent.manifesto.link);

  setText("#services-eyebrow", siteContent.sections.services.eyebrow);
  setText("#services-title", siteContent.sections.services.title);
  setText("#services-text", siteContent.sections.services.text);

  setText("#why-eyebrow", siteContent.sections.why.eyebrow);
  setText("#why-title", siteContent.sections.why.title);
  setText("#why-text", siteContent.sections.why.text);

  const whyPanels = document.querySelector("#why-panels");
  if (whyPanels) {
    whyPanels.innerHTML = siteContent.sections.why.panels
      .map(
        (panel) => `
          <article class="panel interactive-card">
            <p class="panel__eyebrow">${panel.eyebrow}</p>
            <h3>${panel.title}</h3>
            <p>${panel.text}</p>
          </article>
        `,
      )
      .join("");
  }

  setText("#industries-eyebrow", siteContent.sections.industries.eyebrow);
  setText("#industries-title", siteContent.sections.industries.title);
  setText("#process-eyebrow", siteContent.sections.process.eyebrow);
  setText("#process-title", siteContent.sections.process.title);

  setText("#portal-eyebrow", siteContent.sections.portal.eyebrow);
  setText("#portal-title", siteContent.sections.portal.title);
  setText("#portal-text", siteContent.sections.portal.text);
  setText("#portal-panel-eyebrow", siteContent.sections.portal.panelEyebrow);
  setText("#portal-panel-title", siteContent.sections.portal.panelTitle);
  renderInlineItems("#portal-filters", siteContent.sections.portal.filters);
  setText("#portal-header-request", siteContent.sections.portal.headers.request);
  setText("#portal-header-status", siteContent.sections.portal.headers.status);
  setText("#portal-header-priority", siteContent.sections.portal.headers.priority);

  setText("#ventures-eyebrow", siteContent.sections.ventures.eyebrow);
  setText("#ventures-title", siteContent.sections.ventures.title);
  setText("#ventures-text", siteContent.sections.ventures.text);

  setText("#cta-eyebrow", siteContent.sections.cta.eyebrow);
  setText("#cta-title", siteContent.sections.cta.title);
  setText("#cta-text", siteContent.sections.cta.text);
  setText("#cta-primary", siteContent.sections.cta.primary);
  setText("#cta-secondary", siteContent.sections.cta.secondary);
  setText("#cta-contact-link", siteContent.sections.cta.contact);

  setText("#footer-summary", siteContent.footer.summary);
  setText("#footer-links-title", siteContent.footer.linksTitle);
  setText("#footer-contact-title", siteContent.footer.contactTitle);
  setText("#footer-link-services", siteContent.footer.links.services);
  setText("#footer-link-portal", siteContent.footer.links.portal);
  setText("#footer-link-ventures", siteContent.footer.links.ventures);
  setText("#footer-email", siteContent.footer.email);
  setText("#footer-whatsapp", siteContent.footer.whatsapp);
  setText("#footer-location", siteContent.footer.location);
}

function renderServices() {
  servicesGrid.innerHTML = services
    .map(
      ({ index, title, description, signal }, itemIndex) => `
        <article class="service-card interactive-card" data-reveal data-delay="${itemIndex * 60}">
          <div class="service-card__meta">
            <span>${index}</span>
            <span>${signal}</span>
          </div>
          <div class="service-card__body">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
          <span class="service-card__signal">Explore capability</span>
        </article>
      `,
    )
    .join("");
}

function renderIndustries() {
  industriesCloud.innerHTML = industries.map((industry) => `<span class="industry-pill">${industry}</span>`).join("");
}

function renderProcess() {
  processList.innerHTML = processSteps
    .map(
      ({ title, description }, index) => `
        <article class="process-item interactive-card" data-reveal>
          <span class="process-item__index">0${index + 1}</span>
          <div>
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderVentures() {
  venturesGrid.innerHTML = ventures
    .map(
      ({ name, stage, description, labels, impact }) => `
        <article class="panel venture-card interactive-card" data-reveal>
          <div class="venture-card__beam" aria-hidden="true"></div>
          <div>
            <div class="venture-card__top">
              <div>
                <p class="panel__eyebrow">Case format</p>
                <h3>${name}</h3>
              </div>
              <span class="venture-card__stage">${stage}</span>
            </div>
            <p>${description}</p>
            <div class="venture-card__labels">
              ${labels.map((label) => `<span>${label}</span>`).join("")}
            </div>
          </div>
          <div class="venture-card__footer">
            <span>${impact}</span>
            <span>Hover state active</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderPortalRows() {
  portalList.innerHTML = intakeRequests
    .map(
      (request, index) => `
        <button class="portal-row ${index === 0 ? "is-active" : ""}" type="button" data-request="${index}">
          <span class="portal-row__title">
            <strong>${request.name}</strong>
            <span>${request.category}</span>
          </span>
          <span class="status-dot">${request.status}</span>
          <span class="priority-pill" data-priority="${request.priority}">${request.priority}</span>
        </button>
      `,
    )
    .join("");
}

function renderPortalDetail(index) {
  const request = intakeRequests[index];

  portalDetail.innerHTML = `
    <div class="portal-detail__header">
      <div>
        <p class="panel__eyebrow">Selected request</p>
        <h3>${request.name}</h3>
      </div>
      <div class="portal-detail__meta">
        <span class="status-dot">${request.status}</span>
        <span class="priority-pill" data-priority="${request.priority}">${request.priority}</span>
      </div>
    </div>
    <div class="portal-detail__grid">
      <div class="portal-detail__item">
        <strong>Assigned owner</strong>
        <span>${request.owner}</span>
      </div>
      <div class="portal-detail__item">
        <strong>Service category</strong>
        <span>${request.category}</span>
      </div>
      <div class="portal-detail__item">
        <strong>Notes</strong>
        <span>${request.notes}</span>
      </div>
      <div class="portal-detail__attachments">
        <strong>Attachments</strong>
        <ul>
          ${request.attachments.map((attachment) => `<li>${attachment}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function bindPortalRows() {
  portalList.addEventListener("click", (event) => {
    const row = event.target.closest(".portal-row");

    if (!row) {
      return;
    }

    portalList.querySelectorAll(".portal-row").forEach((element) => element.classList.remove("is-active"));
    row.classList.add("is-active");
    renderPortalDetail(Number(row.dataset.request));
  });
}

function setupReveals() {
  const revealTargets = Array.from(document.querySelectorAll("[data-reveal]"));

  revealTargets.forEach((element) => {
    element.style.setProperty("--delay", `${element.dataset.delay || 0}ms`);
  });

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  revealTargets.forEach((element) => observer.observe(element));
}

function setupInteractiveCards() {
  if (reduceMotion.matches || !canHover.matches) {
    return;
  }

  document.querySelectorAll(".interactive-card").forEach((card) => {
    if (card.classList.contains("service-card") || card.classList.contains("process-item")) {
      return;
    }

    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const rotateY = ((x / bounds.width) - 0.5) * 6;
      const rotateX = ((y / bounds.height) - 0.5) * -6;

      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function initializePage() {
  renderStaticContent();
  renderServices();
  renderIndustries();
  renderProcess();
  renderVentures();
  renderPortalRows();
  renderPortalDetail(0);
  bindPortalRows();

  requestAnimationFrame(() => {
    setupReveals();
    setupInteractiveCards();
  });
}

initializePage();
