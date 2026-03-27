/* ===================================================================
   IPDESIGN — i18n Content & Application Logic
   Default: English (UK market) | Secondary: French (Morocco market)
   =================================================================== */

// ── Contact info (update these placeholders before going live) ──────
const contactInfo = {
  en: {
    phone: "+44 (0) 20 XXXX XXXX",
    phoneHref: "tel:+4402000000000",
    email: "hello@ipdesign.co.uk",
    emailHref: "mailto:hello@ipdesign.co.uk",
  },
  fr: {
    phone: "+212 XXX XXX XXX",
    phoneHref: "tel:+212000000000",
    email: "hello@ipdesign.example",
    emailHref: "mailto:hello@ipdesign.example",
  },
};

// ── English content ─────────────────────────────────────────────────
const contentEN = {
  meta: {
    title: "IPDESIGN | Affordable Custom Websites for UK Businesses",
    description:
      "Premium websites, landing pages, AI solutions and custom platforms for UK small businesses. Professional quality from \u00a31,500. Get a free quote today.",
  },
  brand: "IPDESIGN",
  navigation: {
    services: "Services",
    why: "Why Us",
    portal: "Solutions",
    ventures: "Portfolio",
    dashboard: "Dashboard Demo",
    cta: "Get a Quote",
  },
  hero: {
    eyebrow: "Your competitors already have a proper website. Do you?",
    titleLines: ["Stop losing clients", "to competitors", "with better", "websites."],
    lead:
      "Every week without a credible site, you\u2019re losing enquiries to competitors who invested in theirs. IPDESIGN builds the premium websites, AI tools and platforms that make UK businesses get chosen \u2014 with London-quality design at a fraction of the cost.",
    primaryCta: "Get your free site audit",
    secondaryCta: "Book a free 15-min call",
    tertiaryCta: "View our services",
    signals: [
      "14+ projects delivered across 8 sectors",
      "2 to 6 weeks from brief to launch",
      "Full code ownership \u2014 no lock-in",
    ],
    panel: {
      eyebrow: "Solution preview",
      title: "B2B delivery architecture",
      status: "UK ready",
      primaryTitle: "Qualification journey",
      primaryMeta: "Site + quote",
      primaryText:
        "A unified platform to present your services, qualify enquiries and accelerate client contact.",
      secondaryTitle: "Active solutions",
      secondaryMeta: "Bespoke",
      tags: ["Premium site", "AI tools", "Dashboard", "Workflow"],
      tertiaryLabel: "Operations base",
      tertiaryTitle: "Tangier Studio \u2192 UK Clients",
    },
  },
  trustBand: {
    text: "Trusted by 14+ businesses across 8 sectors \u2014 one partner for your brand, lead qualification and business tools.",
    items: ["Websites", "Landing Pages", "AI Solutions", "MVPs", "Dashboards", "Workflows"],
  },
  showcase: {
    eyebrow: "Sectors we serve",
    items: [
      "Professional Services",
      "Healthcare",
      "Agencies",
      "Transport",
      "Property",
      "Hospitality",
      "Retail",
      "Sports & Fitness",
    ],
  },
  manifesto: {
    eyebrow: "Our approach",
    title: "We\u2019re not the cheapest option. We\u2019re the one your clients will actually trust.",
    text:
      "IPDESIGN isn\u2019t a budget freelancer or an offshore template factory. We combine high-end design, rapid delivery and intelligent AI \u2014 because the businesses that invest in looking credible are the ones that win.",
    link: "View our services",
  },
  sections: {
    services: {
      eyebrow: "Services",
      title: "Practical services to modernise your brand and operations.",
      text:
        "Business websites, landing pages, custom platforms, AI integration, dashboards and automation. Each service addresses a real need with premium-quality delivery.",
    },
    why: {
      eyebrow: "Why choose us",
      title: "UK-quality design. Smart, transparent pricing.",
      text:
        "IPDESIGN is the partner for UK businesses that want premium digital solutions without the premium London price tag. Direct communication, fast delivery and full ownership of everything we build.",
      panels: [
        {
          eyebrow: "Competitive rates",
          title: "London-quality design \u2014 without the London price tag",
          text:
            "Our Tangier studio delivers the same standard you\u2019d get from a \u00a310,000+ London agency \u2014 at a fraction of the price. 14+ businesses have already made the switch.",
        },
        {
          eyebrow: "Fast turnaround",
          title: "From brief to launch in 2 to 6 weeks",
          text:
            "Direct communication via UK phone number means faster decisions, fewer delays and a streamlined process from start to finish.",
        },
        {
          eyebrow: "Full ownership",
          title: "Your code, your design \u2014 no lock-in, no hidden fees",
          text:
            "You own everything we build. Post-launch support is included, and we use a modern tech stack (Next.js, React, Vercel, Supabase) for future-proof results.",
        },
      ],
    },
    industries: {
      eyebrow: "Who we work with",
      title: "Small businesses, startups, professional services and growing brands across the UK.",
    },
    process: {
      eyebrow: "Our process",
      title: "A straightforward process to scope, build and launch your project.",
    },
    portal: {
      eyebrow: "Bespoke solutions",
      title: "Practical solutions for today\u2019s business needs.",
      text:
        "Premium business website, conversion-focused landing page, AI qualification module, internal dashboard or custom platform \u2014 the format adapts to your actual requirements.",
      panelEyebrow: "Portfolio preview",
      panelTitle: "Solution formats",
      filters: ["Website", "AI", "Platform"],
      headers: {
        request: "Solution",
        status: "Format",
        priority: "Use case",
      },
    },
    ventures: {
      eyebrow: "Portfolio",
      title: "Multi-sector work focused on results and clarity.",
      text:
        "Our portfolio spans multiple sectors and objectives: brand image, client acquisition, lead qualification, business digitisation and operational support.",
    },
    cta: {
      eyebrow: "Free site audit",
      title: "Send us your site. We\u2019ll show you what\u2019s holding it back.",
      text:
        "Share your current website or Instagram link. Within 48 hours, we\u2019ll send you a personalized audit with 3 specific recommendations \u2014 completely free, no strings attached.",
      signals: [
        "Free personalized video audit",
        "Response within 48 hours",
        "Only 2 project slots left this month",
      ],
      note: "Or message us on WhatsApp for an immediate chat.",
      submit: "Get my free audit",
      destinationEmail: "hello@ipdesign.co.uk",
      mailSubjectPrefix: "IPDESIGN Enquiry",
    },
  },
  footer: {
    summary:
      "Premium websites, AI solutions, custom platforms and digital services for UK businesses. Professional quality from our Tangier studio.",
    linksTitle: "Navigation",
    contactTitle: "Quick access",
    links: {
      services: "Services",
      portal: "Solutions",
      ventures: "Portfolio",
    },
    contactPrimary: "Get a quote",
    contactSecondary: "View solutions",
    location: "Serving UK businesses from Tangier",
  },
  form: {
    labels: {
      project: "Project name",
      company: "Company or brand",
      need: "Type of service",
      timeline: "Timeline",
      brief: "Project brief",
    },
    placeholders: {
      project: "e.g. Corporate site for consulting firm",
      company: "Your company or brand name",
      timeline: "e.g. 3 to 4 weeks",
      brief: "Describe your business, your needs and the type of solution you\u2019re looking for.",
      selectDefault: "Select",
    },
    options: [
      "Modern website",
      "Premium landing page",
      "Custom digital solution",
      "MVP / Business platform",
      "AI integration",
      "Dashboard & automation",
    ],
  },
  ui: {
    watermark: "DESIGN",
    serviceViewCta: "View service",
    venturePortfolioLabel: "Multi-sector portfolio",
    ventureFormatLabel: "Solution type",
    portalDetailType: "Solution type",
    portalDetailTeam: "Team",
    portalDetailUsage: "Use case",
    portalDetailFocus: "Focus",
    portalDetailAttachments: "Attachments",
    formStatusReady:
      "The form is ready on the front end. Add a real email address, WhatsApp Business or CRM endpoint to enable sending.",
    formStatusSending: "Opening your email client with your pre-filled enquiry.",
    langToggleLabel: "FR",
  },
  emailBody: {
    project: "Project",
    company: "Company / brand",
    need: "Type of service",
    timeline: "Timeline",
    notSpecified: "Not specified",
    brief: "Brief",
  },
};

// ── French content ──────────────────────────────────────────────────
const contentFR = {
  meta: {
    title: "IPDESIGN | Sites premium, solutions IA et plateformes sur mesure a Tanger",
    description:
      "Entreprise marocaine de nouvelles technologies basee a Tanger. IPDESIGN cree des sites premium, landing pages, solutions IA, MVP, dashboards et outils metier sur mesure pour les professionnels.",
  },
  brand: "IPDESIGN",
  navigation: {
    services: "Services",
    why: "Entreprise",
    portal: "Solutions",
    ventures: "Portfolio",
    dashboard: "Dashboard demo",
    cta: "Demander un devis",
  },
  hero: {
    eyebrow: "Vos concurrents ont d\u00e9j\u00e0 un vrai site. Et vous ?",
    titleLines: ["Arr\u00eatez de perdre", "des clients face", "\u00e0 des concurrents", "mieux \u00e9quip\u00e9s."],
    lead:
      "Chaque semaine sans un site cr\u00e9dible, vous perdez des demandes face \u00e0 ceux qui ont investi dans le leur. IPDESIGN cr\u00e9e les sites premium, outils IA et plateformes qui font la diff\u00e9rence \u2014 depuis Tanger, pour le march\u00e9 marocain.",
    primaryCta: "Audit gratuit de votre site",
    secondaryCta: "Reserver un appel de 15 min",
    tertiaryCta: "Voir les solutions",
    signals: [
      "14+ projets livr\u00e9s dans 8 secteurs",
      "2 \u00e0 6 semaines de d\u00e9lai",
      "Code 100% propri\u00e9taire \u2014 sans engagement",
    ],
    panel: {
      eyebrow: "Apercu solution",
      title: "Architecture de delivery B2B",
      status: "B2B ready",
      primaryTitle: "Parcours de qualification",
      primaryMeta: "Site + devis",
      primaryText:
        "Une meme base pour presenter l'offre, qualifier les demandes et accelerer la prise de contact.",
      secondaryTitle: "Solutions actives",
      secondaryMeta: "Sur mesure",
      tags: ["Site premium", "IA utile", "Dashboard", "Workflow"],
      tertiaryLabel: "Base operationnelle",
      tertiaryTitle: "Tanger, Maroc",
    },
  },
  trustBand: {
    text: "14+ entreprises accompagn\u00e9es dans 8 secteurs \u2014 un seul partenaire pour l\u2019image, la qualification et les outils m\u00e9tier.",
    items: ["Sites web", "Landing pages", "Solutions IA", "MVP", "Dashboards", "Workflows"],
  },
  showcase: {
    eyebrow: "Secteurs couverts",
    items: ["Cabinets", "Cliniques", "Agences", "Transport", "Location", "Restauration", "Immobilier", "Sport"],
  },
  manifesto: {
    eyebrow: "Positionnement",
    title: "On n\u2019est pas l\u2019option la moins ch\u00e8re. On est celle que vos clients prendront au s\u00e9rieux.",
    text:
      "IPDESIGN n\u2019est ni un freelance low-cost ni une usine \u00e0 templates. Design haut de gamme, ex\u00e9cution rapide et IA intelligente \u2014 parce que les entreprises qui investissent dans leur cr\u00e9dibilit\u00e9 sont celles qui gagnent.",
    link: "Voir nos services",
  },
  sections: {
    services: {
      eyebrow: "Services",
      title: "Des services concrets pour moderniser l'image et l'operationnel.",
      text:
        "Sites vitrines, landing pages, plateformes metier, IA, dashboards et automatisation. Chaque intervention sert un besoin reel avec un niveau de finition premium.",
    },
    why: {
      eyebrow: "Entreprise",
      title: "Une entreprise marocaine orientee execution concrete.",
      text:
        "IPDESIGN s'adresse aux professionnels qui veulent un partenaire technologique serieux, local et capable de livrer une presence premium comme un outil metier sur mesure.",
      panels: [
        {
          eyebrow: "Tanger",
          title: "Un acteur local avec une lecture terrain du marche marocain",
          text:
            "La proximite locale facilite les echanges, la comprehension des besoins et la mise en oeuvre de solutions plus adaptees au contexte des entreprises au Maroc.",
        },
        {
          eyebrow: "IA utile",
          title: "L'intelligence artificielle comme levier business, pas comme gadget",
          text:
            "IPDESIGN integre l'IA lorsqu'elle permet de qualifier, automatiser, assister les equipes ou accelerer les parcours metier de facon concrete.",
        },
        {
          eyebrow: "Sur mesure",
          title: "Des solutions adaptees au besoin, pas de templates forces",
          text:
            "Sites corporate, pages de conversion, plateformes metier ou dashboards internes : le perimetre est ajuste selon l'objectif, le budget et le niveau d'ambition.",
        },
      ],
    },
    industries: {
      eyebrow: "Pour qui",
      title: "PME, cabinets, cliniques, agences et entreprises qui veulent passer a un niveau digital plus credible.",
    },
    process: {
      eyebrow: "Methode",
      title: "Un parcours simple pour cadrer, produire et lancer rapidement.",
    },
    portal: {
      eyebrow: "Solutions sur mesure",
      title: "Des solutions concretes pour les besoins B2B d'aujourd'hui.",
      text:
        "Site corporate premium, landing page de conversion, module IA de qualification, dashboard interne ou plateforme metier : le format s'ajuste au vrai besoin.",
      panelEyebrow: "Apercu portefeuille",
      panelTitle: "Formats de solutions",
      filters: ["Site web", "IA", "Plateforme"],
      headers: {
        request: "Solution",
        status: "Format",
        priority: "Usage",
      },
    },
    ventures: {
      eyebrow: "Portfolio",
      title: "Une logique multi-secteurs orientee resultats et lisibilite.",
      text:
        "Le portfolio couvre plusieurs secteurs et plusieurs objectifs : image, acquisition, qualification, digitalisation metier et support operationnel.",
    },
    cta: {
      eyebrow: "Audit gratuit",
      title: "Envoyez-nous votre site. On vous montre ce qui bloque.",
      text:
        "Partagez votre site ou votre lien Instagram. Sous 48h, vous recevrez un audit personnalis\u00e9 avec 3 recommandations concr\u00e8tes \u2014 100% gratuit, sans engagement.",
      signals: [
        "Audit vid\u00e9o personnalis\u00e9 gratuit",
        "R\u00e9ponse sous 48 heures",
        "Plus que 2 cr\u00e9neaux projet ce mois-ci",
      ],
      note: "Ou contactez-nous sur WhatsApp pour un \u00e9change imm\u00e9diat.",
      submit: "Recevoir mon audit gratuit",
      destinationEmail: "hello@ipdesign.example",
      mailSubjectPrefix: "Demande IPDESIGN",
    },
  },
  footer: {
    summary:
      "Entreprise marocaine basee a Tanger. Sites premium, solutions IA, plateformes metier et accompagnement technologique pour les professionnels.",
    linksTitle: "Navigation",
    contactTitle: "Acces rapide",
    links: {
      services: "Services",
      portal: "Solutions",
      ventures: "Portfolio",
    },
    contactPrimary: "Demander un devis",
    contactSecondary: "Voir les solutions",
    location: "Tanger, Maroc",
  },
  form: {
    labels: {
      project: "Nom du projet",
      company: "Societe ou marque",
      need: "Type de besoin",
      timeline: "Delai souhaite",
      brief: "Brief",
    },
    placeholders: {
      project: "Ex. Site corporate pour clinique",
      company: "Nom de la structure",
      timeline: "Ex. 3 a 4 semaines",
      brief: "Decrivez votre activite, votre besoin, l'objectif recherche et le type de solution souhaite.",
      selectDefault: "Selectionner",
    },
    options: [
      "Site web moderne",
      "Landing page premium",
      "Solution digitale sur mesure",
      "MVP / plateforme metier",
      "Integration IA",
      "Dashboard / automatisation",
    ],
  },
  ui: {
    watermark: "TANGER",
    serviceViewCta: "Voir le service",
    venturePortfolioLabel: "Portfolio multi-secteurs",
    ventureFormatLabel: "Format type",
    portalDetailType: "Solution type",
    portalDetailTeam: "Equipe",
    portalDetailUsage: "Usage",
    portalDetailFocus: "Focus",
    portalDetailAttachments: "Elements",
    formStatusReady:
      "Le formulaire est pret cote interface. Ajoutez un email reel, un WhatsApp Business ou un endpoint CRM pour activer l'envoi.",
    formStatusSending: "Ouverture du client email avec votre demande pre-remplie.",
    langToggleLabel: "EN",
  },
  emailBody: {
    project: "Projet",
    company: "Societe / marque",
    need: "Type de besoin",
    timeline: "Delai souhaite",
    notSpecified: "Non precise",
    brief: "Brief",
  },
};

// ── Services data ───────────────────────────────────────────────────
const servicesData = {
  en: [
    {
      index: "01",
      title: "Modern Business Website",
      description:
        "A professional, modern website (5\u201310 pages) that builds trust, presents your services clearly and converts visitors into enquiries.",
      signal: "Strong digital presence",
      price: "From \u00a31,500",
    },
    {
      index: "02",
      title: "Premium Landing Page",
      description:
        "A focused, conversion-optimised page designed to turn traffic into qualified leads and enquiries.",
      signal: "Clear conversion",
      price: "From \u00a3500",
    },
    {
      index: "03",
      title: "Custom Digital Solutions",
      description:
        "Bespoke interfaces and user journeys tailored to your specific needs \u2014 not generic templates that force your business to adapt.",
      signal: "Tailored to you",
      price: "From \u00a33,000",
    },
    {
      index: "04",
      title: "MVP / Business Platform",
      description:
        "A functional platform to digitise your operations, centralise workflows and support business growth from day one.",
      signal: "Tangible results, fast",
      price: "From \u00a34,000",
    },
    {
      index: "05",
      title: "AI Integration",
      description:
        "Practical AI implementations to qualify leads, assist your team, automate processes and streamline operations \u2014 no gimmicks.",
      signal: "Business-focused AI",
      price: "From \u00a32,000",
    },
    {
      index: "06",
      title: "Dashboard & Automation",
      description:
        "Custom dashboards and automated workflows to simplify operations and save time on recurring tasks.",
      signal: "Smoother operations",
      price: "From \u00a32,500",
    },
  ],
  fr: [
    {
      index: "01",
      title: "Sites web modernes",
      description:
        "Des sites vitrines modernes et credibles pour donner a l'entreprise une image plus nette, plus premium et plus rassurante.",
      signal: "Image digitale forte",
      price: "A partir de 15 000 MAD",
    },
    {
      index: "02",
      title: "Landing pages premium",
      description:
        "Des pages pensees pour clarifier l'offre et transformer un trafic B2B en demande de contact ou de devis.",
      signal: "Conversion claire",
      price: "A partir de 5 000 MAD",
    },
    {
      index: "03",
      title: "Solutions digitales sur mesure",
      description:
        "Des interfaces et parcours adaptes au besoin reel plutot que des structures generiques qui forcent l'entreprise a s'adapter.",
      signal: "Sur mesure utile",
      price: "A partir de 30 000 MAD",
    },
    {
      index: "04",
      title: "MVP et plateformes metier",
      description:
        "Des solutions metier pour digitaliser une activite, centraliser des flux et soutenir le developpement du projet.",
      signal: "Du concret rapidement",
      price: "A partir de 40 000 MAD",
    },
    {
      index: "05",
      title: "Integration IA",
      description:
        "Des usages IA concrets pour qualifier, assister, automatiser et fluidifier sans effet gadget.",
      signal: "IA orientee business",
      price: "A partir de 20 000 MAD",
    },
    {
      index: "06",
      title: "Outils internes et workflows",
      description:
        "Des dashboards et automatisations pour simplifier l'operationnel et gagner du temps sur les actions recurrentes.",
      signal: "Operations plus fluides",
      price: "A partir de 25 000 MAD",
    },
  ],
};

// ── Industries data ─────────────────────────────────────────────────
const industriesData = {
  en: [
    "SMEs",
    "Professional Services",
    "Healthcare",
    "Agencies",
    "Transport & Logistics",
    "Property",
    "Hospitality",
    "Retail",
    "Sports & Fitness",
    "Startups",
  ],
  fr: [
    "PME",
    "Cabinets",
    "Cliniques",
    "Agences",
    "Transport & logistique",
    "Location",
    "Restauration",
    "Immobilier",
    "Structures sportives",
    "Marques en lancement",
  ],
};

// ── Process steps ───────────────────────────────────────────────────
const processData = {
  en: [
    {
      title: "Discover",
      description: "We learn about your business, your needs, timeline and the best type of solution to propose.",
    },
    {
      title: "Define",
      description: "We set the scope, visual direction, user journey logic and the core business objective to serve.",
    },
    {
      title: "Build",
      description: "We design and develop a modern, polished solution aligned with your budget and ambitions.",
    },
    {
      title: "Launch",
      description: "We go live, fine-tune critical details and plan next steps based on feedback and real-world usage.",
    },
  ],
  fr: [
    {
      title: "Diagnostiquer",
      description: "Comprendre l'activite, le besoin, le niveau d'urgence et la meilleure forme de solution a proposer.",
    },
    {
      title: "Cadrer",
      description: "Definir le perimetre, la direction visuelle, la logique de parcours et la priorite business a servir.",
    },
    {
      title: "Produire",
      description: "Concevoir et developper une solution moderne, lisible, premium et alignee avec le budget et le niveau d'ambition.",
    },
    {
      title: "Lancer",
      description: "Mettre en ligne, ajuster les details critiques et preparer la suite selon la traction, les retours et les usages.",
    },
  ],
};

// ── Ventures / portfolio data ───────────────────────────────────────
const venturesData = {
  en: [
    {
      name: "Professional Services & Healthcare",
      stage: "Credibility & acquisition",
      description:
        "Premium business websites, clearer contact flows and stronger service presentation for practices that need a more professional digital image.",
      labels: ["Corporate", "Lead gen", "Premium"],
      impact: "To better reassure and convert professional prospects",
    },
    {
      name: "Transport & Logistics",
      stage: "Visibility & management",
      description:
        "Presentation pages, business solutions and tracking tools for industries where operational clarity matters as much as brand image.",
      labels: ["Operations", "Dashboard", "Workflow"],
      impact: "To better structure enquiries and coordination",
    },
    {
      name: "Property & Lettings",
      stage: "Showcase & qualification",
      description:
        "Modern digital experiences to present listings, qualify enquiries and support a more premium brand image.",
      labels: ["Showcase", "Qualification", "UI"],
      impact: "To add more value to the business\u2019s digital presence",
    },
    {
      name: "Agencies & Services",
      stage: "Positioning & quotes",
      description:
        "Premium landing pages, clearer service narratives and qualification forms to better filter and handle opportunities.",
      labels: ["Services", "Narrative", "Contact"],
      impact: "To move from a vague pitch to a sharper proposition",
    },
    {
      name: "Hospitality, Retail & Lifestyle",
      stage: "Brand & launch",
      description:
        "Launch assets and digital experiences that make brands feel contemporary, visible and commercially ready.",
      labels: ["Branding", "Site", "Activation"],
      impact: "To accelerate the launch of a brand or concept",
    },
    {
      name: "AI & Business Solutions",
      stage: "Automation & support",
      description:
        "AI modules, qualification journeys, internal tools and business interfaces to modernise processes and boost efficiency.",
      labels: ["AI", "Business", "Automation"],
      impact: "To digitise a specific need with a practical approach",
    },
  ],
  fr: [
    {
      name: "Cabinets & cliniques",
      stage: "Credibilite & acquisition",
      description:
        "Sites corporate premium, prise de contact plus claire et meilleure presentation de services pour des structures qui ont besoin d'une image plus forte.",
      labels: ["Corporate", "Lead gen", "Premium"],
      impact: "Pour mieux rassurer et convertir des prospects professionnels",
    },
    {
      name: "Transport & logistique",
      stage: "Visibilite & pilotage",
      description:
        "Pages de presentation, solutions metier et outils de suivi pour des activites ou la fluidite et la lisibilite operationnelle comptent autant que l'image.",
      labels: ["Operations", "Dashboard", "Workflow"],
      impact: "Pour mieux structurer les demandes et la coordination",
    },
    {
      name: "Immobilier & location",
      stage: "Presentation & qualification",
      description:
        "Experiences digitales plus modernes pour presenter une offre, qualifier des demandes et soutenir une image plus haut de gamme.",
      labels: ["Showcase", "Qualification", "UI"],
      impact: "Pour donner plus de valeur a la presence digitale de l'activite",
    },
    {
      name: "Agences & services",
      stage: "Positionnement & devis",
      description:
        "Landing pages premium, narration d'offre plus claire et formulaires de qualification pour mieux filtrer et traiter les opportunites.",
      labels: ["Offre", "Narratif", "Contact"],
      impact: "Pour passer d'une presentation floue a une offre plus nette",
    },
    {
      name: "Sport, food & lifestyle",
      stage: "Marque & execution",
      description:
        "Supports de lancement et experiences digitales qui rendent la marque plus contemporaine, plus visible et plus simple a activer commercialement.",
      labels: ["Branding", "Site", "Activation"],
      impact: "Pour accelerer la mise en marche d'une marque ou d'un concept",
    },
    {
      name: "Solutions IA & metier",
      stage: "Automatisation & assistance",
      description:
        "Modules IA, parcours de qualification, outils internes et interfaces metier pour moderniser certains processus et gagner en efficacite.",
      labels: ["IA", "Metier", "Automatisation"],
      impact: "Pour digitaliser un besoin precis avec une logique concrete",
    },
  ],
};

// ── Portal / intake requests ────────────────────────────────────────
const intakeData = {
  en: [
    {
      name: "Premium Business Website",
      status: "Web",
      priority: "Brand",
      category: "Business presentation",
      owner: "IPDESIGN Team",
      notes:
        "A premium showcase to build credibility, clarify services and convert inbound enquiries more effectively.",
      attachments: ["art-direction.pdf", "page-structure.fig", "contact-block.docx"],
    },
    {
      name: "Conversion Landing Page",
      status: "Lead gen",
      priority: "Conversion",
      category: "B2B acquisition",
      owner: "IPDESIGN Team",
      notes:
        "A page focused on quotes and enquiries with clearer messaging, visible CTAs and a streamlined qualification process.",
      attachments: ["offer-brief.pdf", "form-structure.md"],
    },
    {
      name: "AI Pre-qualification Module",
      status: "AI",
      priority: "Automation",
      category: "Qualification & support",
      owner: "IPDESIGN Team",
      notes:
        "An AI layer to assist responses, pre-qualify requirements or streamline the initial steps of the customer journey.",
      attachments: ["use-cases.txt", "business-rules.csv", "flow-diagram.png"],
    },
    {
      name: "Custom Business Dashboard",
      status: "Platform",
      priority: "Operations",
      category: "Internal management",
      owner: "IPDESIGN Team",
      notes:
        "An internal interface to centralise information, track activity and reduce friction from scattered tools.",
      attachments: ["dashboard-brief.pdf", "priorities.xlsx"],
    },
  ],
  fr: [
    {
      name: "Site corporate premium",
      status: "Web",
      priority: "Image",
      category: "Presentation d'entreprise",
      owner: "Equipe IPDESIGN Tanger",
      notes:
        "Une vitrine haut de gamme pour renforcer la credibilite, clarifier les services et mieux convertir les demandes entrantes.",
      attachments: ["direction-artistique.pdf", "structure-page.fig", "bloc-contact.docx"],
    },
    {
      name: "Landing page de qualification",
      status: "Lead gen",
      priority: "Conversion",
      category: "Acquisition B2B",
      owner: "Equipe IPDESIGN Tanger",
      notes:
        "Une page orientee devis et prise de contact avec message plus net, CTA visibles et parcours de qualification plus simple.",
      attachments: ["offre.pdf", "structure-formulaire.md"],
    },
    {
      name: "Module IA de pre-qualification",
      status: "IA",
      priority: "Automation",
      category: "Qualification & support",
      owner: "Equipe IPDESIGN Tanger",
      notes:
        "Une couche IA pour assister certaines reponses, prequalifier les besoins ou fluidifier les premieres etapes du parcours client.",
      attachments: ["cas-usage.txt", "regles-metier.csv", "schema-flux.png"],
    },
    {
      name: "Dashboard metier sur mesure",
      status: "Platform",
      priority: "Operations",
      category: "Pilotage interne",
      owner: "Equipe IPDESIGN Tanger",
      notes:
        "Une interface interne pour centraliser les informations, suivre l'activite et reduire les frictions liees aux outils disperses.",
      attachments: ["brief-dashboard.pdf", "priorites.xlsx"],
    },
  ],
};

// ── Language state ──────────────────────────────────────────────────
let currentLang = localStorage.getItem("ipdesign-lang") || "en";
let siteContent = currentLang === "en" ? contentEN : contentFR;
let services = servicesData[currentLang];
let industries = industriesData[currentLang];
let processSteps = processData[currentLang];
let ventures = venturesData[currentLang];
let intakeRequests = intakeData[currentLang];

// ── DOM references ──────────────────────────────────────────────────
const servicesGrid = document.querySelector("#services-grid");
const industriesCloud = document.querySelector("#industries-cloud");
const processList = document.querySelector("#process-list");
const venturesGrid = document.querySelector("#ventures-grid");
const portalList = document.querySelector("#portal-list");
const portalDetail = document.querySelector("#portal-detail");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

// ── Helpers ─────────────────────────────────────────────────────────
function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
}

function renderInlineItems(selector, items, className) {
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

// ── Render static content ───────────────────────────────────────────
function renderStaticContent() {
  document.title = siteContent.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", siteContent.meta.description);

  setText("#brand-text", siteContent.brand);
  setText("#footer-brand-text", siteContent.brand);

  setText("#nav-services", siteContent.navigation.services);
  setText("#nav-why", siteContent.navigation.why);
  setText("#nav-portal", siteContent.navigation.portal);
  setText("#nav-ventures", siteContent.navigation.ventures);
  setText("#nav-dashboard", siteContent.navigation.dashboard);
  setText("#header-cta", siteContent.navigation.cta);

  // Header phone
  const headerPhone = document.querySelector("#header-phone");
  if (headerPhone) {
    headerPhone.textContent = contactInfo[currentLang].phone;
    headerPhone.href = contactInfo[currentLang].phoneHref;
  }

  setText("#hero-eyebrow", siteContent.hero.eyebrow);
  renderLineTitle("#hero-title", siteContent.hero.titleLines);
  setText("#hero-lead", siteContent.hero.lead);
  setText("#hero-primary-cta", siteContent.hero.primaryCta);

  // "Book a free 15-min call" / phone CTA
  const heroCallCta = document.querySelector("#hero-call-cta");
  if (heroCallCta) {
    heroCallCta.textContent = siteContent.hero.secondaryCta;
    heroCallCta.href = contactInfo[currentLang].phoneHref;
  }

  // Tertiary CTA (View our services)
  const heroTertiaryCta = document.querySelector("#hero-tertiary-cta");
  if (heroTertiaryCta) {
    heroTertiaryCta.textContent = siteContent.hero.tertiaryCta;
  }

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
  renderListItems("#cta-signals", siteContent.sections.cta.signals);
  setText("#cta-note", siteContent.sections.cta.note);
  setText("#brief-submit", siteContent.sections.cta.submit);

  setText("#footer-summary", siteContent.footer.summary);
  setText("#footer-links-title", siteContent.footer.linksTitle);
  setText("#footer-contact-title", siteContent.footer.contactTitle);
  setText("#footer-link-services", siteContent.footer.links.services);
  setText("#footer-link-portal", siteContent.footer.links.portal);
  setText("#footer-link-ventures", siteContent.footer.links.ventures);
  setText("#footer-contact-primary", siteContent.footer.contactPrimary);
  setText("#footer-contact-secondary", siteContent.footer.contactSecondary);
  setText("#footer-location", siteContent.footer.location);

  // Footer phone & email
  const footerPhone = document.querySelector("#footer-phone");
  if (footerPhone) {
    footerPhone.textContent = contactInfo[currentLang].phone;
    footerPhone.href = contactInfo[currentLang].phoneHref;
  }
  const footerEmail = document.querySelector("#footer-email");
  if (footerEmail) {
    footerEmail.textContent = contactInfo[currentLang].email;
    footerEmail.href = contactInfo[currentLang].emailHref;
  }

  // Form labels and placeholders
  renderFormContent();

  // Watermark
  const heroContent = document.querySelector(".hero__content");
  if (heroContent) {
    heroContent.dataset.watermark = siteContent.ui.watermark;
  }

  // Language toggle
  const langToggle = document.querySelector("#lang-toggle");
  if (langToggle) {
    langToggle.textContent = siteContent.ui.langToggleLabel;
  }
}

// ── Form content ────────────────────────────────────────────────────
function renderFormContent() {
  const form = document.querySelector("#brief-form");
  if (!form) return;

  const labels = siteContent.form.labels;
  const placeholders = siteContent.form.placeholders;
  const options = siteContent.form.options;

  setText("#form-label-project", labels.project);
  setText("#form-label-company", labels.company);
  setText("#form-label-need", labels.need);
  setText("#form-label-timeline", labels.timeline);
  setText("#form-label-brief", labels.brief);

  const projectInput = form.querySelector('input[name="project"]');
  if (projectInput) projectInput.placeholder = placeholders.project;

  const companyInput = form.querySelector('input[name="company"]');
  if (companyInput) companyInput.placeholder = placeholders.company;

  const timelineInput = form.querySelector('input[name="timeline"]');
  if (timelineInput) timelineInput.placeholder = placeholders.timeline;

  const briefTextarea = form.querySelector('textarea[name="brief"]');
  if (briefTextarea) briefTextarea.placeholder = placeholders.brief;

  const needSelect = form.querySelector('select[name="need"]');
  if (needSelect) {
    needSelect.innerHTML =
      `<option value="">${placeholders.selectDefault}</option>` +
      options.map((opt) => `<option>${opt}</option>`).join("");
  }
}

// ── Render services ─────────────────────────────────────────────────
function renderServices() {
  servicesGrid.innerHTML = services
    .map(
      ({ index, title, description, signal, price }, itemIndex) => `
        <article class="service-card interactive-card" data-reveal data-delay="${itemIndex * 60}">
          <div class="service-card__meta">
            <span>${index}</span>
            <span>${signal}</span>
          </div>
          <div class="service-card__body">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
          <span class="service-card__signal">${price}</span>
        </article>
      `,
    )
    .join("");
}

// ── Render industries ───────────────────────────────────────────────
function renderIndustries() {
  industriesCloud.innerHTML = industries.map((industry) => `<span class="industry-pill">${industry}</span>`).join("");
}

// ── Render process ──────────────────────────────────────────────────
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

// ── Render ventures ─────────────────────────────────────────────────
function renderVentures() {
  venturesGrid.innerHTML = ventures
    .map(
      ({ name, stage, description, labels, impact }) => `
        <article class="panel venture-card interactive-card" data-reveal>
          <div class="venture-card__beam" aria-hidden="true"></div>
          <div>
            <div class="venture-card__top">
              <div>
                <p class="panel__eyebrow">${siteContent.ui.venturePortfolioLabel}</p>
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
            <span>${siteContent.ui.ventureFormatLabel}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

// ── Render portal rows ──────────────────────────────────────────────
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

// ── Render portal detail ────────────────────────────────────────────
function renderPortalDetail(index) {
  const request = intakeRequests[index];
  const ui = siteContent.ui;

  portalDetail.innerHTML = `
    <div class="portal-detail__header">
      <div>
        <p class="panel__eyebrow">${ui.portalDetailType}</p>
        <h3>${request.name}</h3>
      </div>
      <div class="portal-detail__meta">
        <span class="status-dot">${request.status}</span>
        <span class="priority-pill" data-priority="${request.priority}">${request.priority}</span>
      </div>
    </div>
    <div class="portal-detail__grid">
      <div class="portal-detail__item">
        <strong>${ui.portalDetailTeam}</strong>
        <span>${request.owner}</span>
      </div>
      <div class="portal-detail__item">
        <strong>${ui.portalDetailUsage}</strong>
        <span>${request.category}</span>
      </div>
      <div class="portal-detail__item">
        <strong>${ui.portalDetailFocus}</strong>
        <span>${request.notes}</span>
      </div>
      <div class="portal-detail__attachments">
        <strong>${ui.portalDetailAttachments}</strong>
        <ul>
          ${request.attachments.map((attachment) => `<li>${attachment}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

// ── Portal row interaction ──────────────────────────────────────────
function bindPortalRows() {
  portalList.addEventListener("click", (event) => {
    const row = event.target.closest(".portal-row");

    if (!row) {
      return;
    }

    const activeRow = portalList.querySelector(".portal-row.is-active");

    if (activeRow === row) {
      return;
    }

    portalList.querySelectorAll(".portal-row").forEach((element) => element.classList.remove("is-active"));
    row.classList.add("is-active");

    portalDetail.classList.add("is-switching");

    setTimeout(() => {
      renderPortalDetail(Number(row.dataset.request));
      portalDetail.classList.remove("is-switching");
    }, 180);
  });
}

// ── Brief form ──────────────────────────────────────────────────────
function bindBriefForm() {
  const form = document.querySelector("#brief-form");
  const status = document.querySelector("#brief-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const destination = siteContent.sections.cta.destinationEmail;
    const eb = siteContent.emailBody;

    if (!destination || destination.endsWith(".example")) {
      status.textContent = siteContent.ui.formStatusReady;
      return;
    }

    const subject = encodeURIComponent(`${siteContent.sections.cta.mailSubjectPrefix} - ${values.project}`);
    const body = encodeURIComponent(
      [
        `${eb.project} : ${values.project}`,
        `${eb.company} : ${values.company}`,
        `${eb.need} : ${values.need}`,
        `${eb.timeline} : ${values.timeline || eb.notSpecified}`,
        "",
        `${eb.brief} :`,
        values.brief,
      ].join("\n"),
    );

    status.textContent = siteContent.ui.formStatusSending;
    window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
  });
}

// ── Form progress bar (Goal-Gradient + Zeigarnik Effect) ────
const formProgressBar = document.querySelector("#form-progress-bar");
const formProgressText = document.querySelector("#form-progress-text");
const briefForm = document.querySelector("#brief-form");

if (briefForm && formProgressBar) {
  const formFields = briefForm.querySelectorAll("input, select, textarea");
  const totalFields = formFields.length;

  function updateProgress() {
    let filled = 0;
    formFields.forEach((field) => {
      if (field.tagName === "SELECT") {
        if (field.value && field.selectedIndex > 0) filled++;
      } else if (field.value.trim()) {
        filled++;
      }
    });
    const progress = filled / totalFields;
    formProgressBar.style.setProperty("--progress", progress);
    if (formProgressText) {
      if (filled === 0) formProgressText.textContent = "";
      else if (filled === totalFields) formProgressText.textContent = "Ready!";
      else formProgressText.textContent = `${Math.round(progress * 100)}% done`;
    }
  }

  formFields.forEach((field) => {
    field.addEventListener("input", updateProgress);
    field.addEventListener("change", updateProgress);
  });
}

// ── Header scroll ───────────────────────────────────────────────────
function setupHeaderScroll() {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ── Reveal animations ───────────────────────────────────────────────
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

// ── Interactive cards ───────────────────────────────────────────────
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

// ── Utility functions ───────────────────────────────────────────────
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

// ── Hero sequence animation ─────────────────────────────────────────
function setupHeroSequence() {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".site-header");
  const heroContent = document.querySelector(".hero__content");
  const heroPanel = document.querySelector(".hero__panel");
  const editorial = document.querySelector(".editorial-break");
  const editorialTitle = document.querySelector(".editorial-break__title");
  const editorialSupport = document.querySelector(".editorial-break__support");
  const servicesSection = document.querySelector("#services");
  const servicesHeading = servicesSection ? servicesSection.querySelector(".section-heading") : null;
  const why = document.querySelector("#why");
  const sequence = document.querySelector(".hero__sequence");
  const canvas = sequence?.querySelector(".hero__sequence-canvas");
  const desktopOnly = window.matchMedia("(min-width: 1081px)");
  const frameCount = 112;
  const frameFolder = "/Disintegration_and_reintegration__202603231752_frames";
  const framePrefix = "Disintegration_and_reintegration__202603231752_";
  const images = Array(frameCount).fill(null);
  const loadedFrames = new Set();
  const priorityFrames = [0, 1, 2, 3, 4, 5, 16, 32, 48, 64, 80, 96, 111];

  if (
    !hero ||
    !header ||
    !heroContent ||
    !heroPanel ||
    !editorial ||
    !editorialTitle ||
    !editorialSupport ||
    !servicesSection ||
    !servicesHeading ||
    !why ||
    !sequence ||
    !canvas ||
    !desktopOnly.matches
  ) {
    return;
  }

  const context = canvas.getContext("2d", { alpha: true, desynchronized: true });

  if (!context) {
    return;
  }

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  let activeFrame = 0;
  let renderedFrame = -1;
  let rafId = 0;
  let lastCanvasWidth = 0;
  let lastCanvasHeight = 0;

  const frameUrl = (index) => `${frameFolder}/${framePrefix}${String(index + 1).padStart(3, "0")}.jpg`;

  const syncCanvasSize = () => {
    const bounds = canvas.getBoundingClientRect();

    if (!bounds.width || !bounds.height) {
      return false;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nextWidth = Math.max(1, Math.round(bounds.width * dpr));
    const nextHeight = Math.max(1, Math.round(bounds.height * dpr));

    const resized = canvas.width !== nextWidth || canvas.height !== nextHeight;

    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
    }

    lastCanvasWidth = bounds.width;
    lastCanvasHeight = bounds.height;

    return resized;
  };

  const closestLoadedFrame = (index) => {
    if (loadedFrames.has(index)) {
      return index;
    }

    for (let offset = 1; offset < frameCount; offset += 1) {
      const before = index - offset;
      const after = index + offset;

      if (before >= 0 && loadedFrames.has(before)) {
        return before;
      }

      if (after < frameCount && loadedFrames.has(after)) {
        return after;
      }
    }

    return -1;
  };

  const drawFrame = (index) => {
    const resized = syncCanvasSize();

    if (resized === false) {
      return;
    }

    const frameIndex = closestLoadedFrame(index);

    if (frameIndex === -1) {
      return;
    }

    const image = images[frameIndex];

    if (!image?.complete) {
      return;
    }

    if (frameIndex === renderedFrame && !resized) {
      return;
    }

    const width = canvas.width;
    const height = canvas.height;
    const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const dx = (width - drawWidth) / 2;
    const dy = (height - drawHeight) / 2;

    context.clearRect(0, 0, width, height);
    context.drawImage(image, dx, dy, drawWidth, drawHeight);

    const framePixels = context.getImageData(0, 0, width, height);
    const { data } = framePixels;

    for (let pixel = 0; pixel < data.length; pixel += 4) {
      const r = data[pixel];
      const g = data[pixel + 1];
      const b = data[pixel + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const avg = (r + g + b) / 3;
      const chroma = max - min;

      if (avg > 246 && chroma < 18) {
        data[pixel + 3] = 0;
        continue;
      }

      if (avg > 232 && chroma < 28) {
        const fade = clamp((246 - avg) / 14, 0, 1);
        data[pixel + 3] = Math.round(255 * fade);
      }
    }

    context.putImageData(framePixels, 0, 0);
    renderedFrame = frameIndex;
  };

  const loadFrame = (index) => {
    if (index < 0 || index >= frameCount || images[index]) {
      return;
    }

    const image = new Image();
    image.decoding = "async";
    image.src = frameUrl(index);
    image.onload = () => {
      loadedFrames.add(index);

      if (renderedFrame === -1 || Math.abs(index - activeFrame) <= 1) {
        drawFrame(activeFrame);
      }
    };

    images[index] = image;
  };

  const preloadPriorityFrames = () => {
    priorityFrames.forEach((index) => loadFrame(index));
  };

  const preloadAllFrames = () => {
    const preload = () => {
      for (let index = 0; index < frameCount; index += 1) {
        loadFrame(index);
      }
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload, { timeout: 1200 });
      return;
    }

    window.setTimeout(preload, 120);
  };

  const getHeroAnchor = () => {
    const headerRect = header.getBoundingClientRect();
    const contentRect = heroContent.getBoundingClientRect();
    const panelRect = heroPanel.getBoundingClientRect();
    const sequenceWidth = sequence.offsetWidth || lastCanvasWidth || 0;
    const sequenceHeight = sequence.offsetHeight || lastCanvasHeight || 0;
    const rightLaneLeft = Math.max(contentRect.right + 18, window.innerWidth * 0.54);
    const rightLaneRight = window.innerWidth - 28;
    const topLaneTop = headerRect.bottom + 28;
    const topLaneBottom = Math.max(topLaneTop, panelRect.top - sequenceHeight * 0.58);

    return {
      x: clamp(((rightLaneLeft + rightLaneRight) - sequenceWidth) / 2, 24, window.innerWidth - sequenceWidth - 24),
      y: clamp((topLaneTop + topLaneBottom) / 2 + 24, topLaneTop, window.innerHeight - sequenceHeight - 24),
    };
  };

  const getEditorialAnchor = () => {
    const headerRect = header.getBoundingClientRect();
    const titleRect = editorialTitle.getBoundingClientRect();
    const supportRect = editorialSupport.getBoundingClientRect();
    const sequenceWidth = sequence.offsetWidth || lastCanvasWidth || 0;
    const sequenceHeight = sequence.offsetHeight || lastCanvasHeight || 0;
    const laneLeft = Math.max(32, supportRect.right + 14);
    const laneRight = Math.max(laneLeft, titleRect.left - 24);
    const laneTop = Math.max(headerRect.bottom + 26, supportRect.top - sequenceHeight * 0.15);
    const laneBottom = Math.max(laneTop, supportRect.bottom + 34);

    return {
      x: clamp(((laneLeft + laneRight) - sequenceWidth) / 2, 24, window.innerWidth - sequenceWidth - 24),
      y: clamp((laneTop + laneBottom - sequenceHeight) / 2 + 34, headerRect.bottom + 24, window.innerHeight - sequenceHeight - 24),
    };
  };

  const getGapAnchor = () => {
    const servicesHeadingRect = servicesHeading.getBoundingClientRect();
    const servicesGridRect = servicesGrid?.getBoundingClientRect();
    const whyRect = why.getBoundingClientRect();
    const sequenceWidth = sequence.offsetWidth || lastCanvasWidth || 0;
    const sequenceHeight = sequence.offsetHeight || lastCanvasHeight || 0;
    const laneLeft = Math.max(servicesHeadingRect.right + 26, window.innerWidth * 0.46);
    const laneRight = window.innerWidth - 30;
    const topSource = servicesGridRect ? servicesGridRect.bottom + 14 : whyRect.top - sequenceHeight - 20;
    const bottomSource = whyRect.top - 18;

    return {
      x: clamp(((laneLeft + laneRight) - sequenceWidth) / 2 - 8, 24, window.innerWidth - sequenceWidth - 24),
      y: clamp((topSource + bottomSource - sequenceHeight) / 2, 24, window.innerHeight - sequenceHeight - 24),
    };
  };

  const updateSequence = () => {
    const heroRect = hero.getBoundingClientRect();
    const whyRect = why.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const heroTop = window.scrollY + heroRect.top;
    const editorialTop = window.scrollY + editorial.getBoundingClientRect().top;
    const whyTop = window.scrollY + whyRect.top;
    const start = heroTop;
    const editorialEnd = Math.max(start + 1, editorialTop + viewportHeight * 0.16);
    const whyEnd = Math.max(editorialEnd + 1, whyTop + viewportHeight * 0.08);
    const frameProgress = clamp((window.scrollY - start) / (whyEnd - start), 0, 1);
    const fadeStart = whyTop + viewportHeight * 0.22;
    const fadeEnd = whyTop + viewportHeight * 0.92;
    const fadeProgress = clamp((window.scrollY - fadeStart) / (fadeEnd - fadeStart), 0, 1);
    const heroAnchor = getHeroAnchor();
    const editorialAnchor = getEditorialAnchor();
    const gapAnchor = getGapAnchor();
    const pathSplit = 0.62;
    let sequenceX = heroAnchor.x;
    let sequenceY = heroAnchor.y;
    let sequenceScale = 1.2;

    if (frameProgress <= pathSplit) {
      const segmentProgress = clamp(frameProgress / pathSplit, 0, 1);
      sequenceX = lerp(heroAnchor.x, editorialAnchor.x, segmentProgress);
      sequenceY = lerp(heroAnchor.y, editorialAnchor.y, segmentProgress);
      sequenceScale = lerp(1.2, 1.12, segmentProgress);
    } else {
      const segmentProgress = clamp((frameProgress - pathSplit) / (1 - pathSplit), 0, 1);
      sequenceX = lerp(editorialAnchor.x, gapAnchor.x, segmentProgress);
      sequenceY = lerp(editorialAnchor.y, gapAnchor.y, segmentProgress);
      sequenceScale = lerp(1.12, 1.04, segmentProgress);
    }

    activeFrame = Math.round(frameProgress * (frameCount - 1));
    drawFrame(activeFrame);

    for (let offset = -2; offset <= 2; offset += 1) {
      loadFrame(activeFrame + offset);
    }

    sequence.style.setProperty("--sequence-x", `${sequenceX.toFixed(2)}px`);
    sequence.style.setProperty("--sequence-y", `${sequenceY.toFixed(2)}px`);
    sequence.style.setProperty("--sequence-opacity", `${(1 - fadeProgress).toFixed(3)}`);
    sequence.style.setProperty("--sequence-scale", `${sequenceScale.toFixed(4)}`);
  };

  const queueUpdate = () => {
    if (rafId) {
      return;
    }

    rafId = requestAnimationFrame(() => {
      rafId = 0;
      updateSequence();
    });
  };

  preloadPriorityFrames();
  preloadAllFrames();

  if (reduceMotion.matches) {
    loadFrame(0);
    const heroAnchor = getHeroAnchor();
    sequence.style.setProperty("--sequence-x", `${heroAnchor.x.toFixed(2)}px`);
    sequence.style.setProperty("--sequence-y", `${heroAnchor.y.toFixed(2)}px`);
    sequence.style.setProperty("--sequence-opacity", "0.92");
    drawFrame(0);
    window.addEventListener("resize", () => {
      const nextHeroAnchor = getHeroAnchor();
      sequence.style.setProperty("--sequence-x", `${nextHeroAnchor.x.toFixed(2)}px`);
      sequence.style.setProperty("--sequence-y", `${nextHeroAnchor.y.toFixed(2)}px`);
      drawFrame(0);
    });
    return;
  }

  window.addEventListener("scroll", queueUpdate, { passive: true });
  window.addEventListener("resize", queueUpdate);
  window.addEventListener("load", queueUpdate, { once: true });
  queueUpdate();
}

// ── Language switching ──────────────────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("ipdesign-lang", lang);

  siteContent = lang === "en" ? contentEN : contentFR;
  services = servicesData[lang];
  industries = industriesData[lang];
  processSteps = processData[lang];
  ventures = venturesData[lang];
  intakeRequests = intakeData[lang];

  document.documentElement.lang = lang === "en" ? "en-GB" : "fr";

  renderStaticContent();
  renderServices();
  renderIndustries();
  renderProcess();
  renderVentures();
  renderPortalRows();
  renderPortalDetail(0);

  // Re-observe new dynamic elements for reveal animation
  requestAnimationFrame(() => {
    setupReveals();
    setupInteractiveCards();
  });
}

function bindLanguageToggle() {
  const toggle = document.querySelector("#lang-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "fr" : "en");
  });
}

// ── Initialise ──────────────────────────────────────────────────────
function initializePage() {
  document.documentElement.lang = currentLang === "en" ? "en-GB" : "fr";

  renderStaticContent();
  renderServices();
  renderIndustries();
  renderProcess();
  renderVentures();
  renderPortalRows();
  renderPortalDetail(0);
  bindPortalRows();
  bindBriefForm();
  bindLanguageToggle();

  setupHeaderScroll();

  requestAnimationFrame(() => {
    setupReveals();
    setupInteractiveCards();
    setupHeroSequence();
  });
}

initializePage();
