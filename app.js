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
    problem: {
      eyebrow: "The real cost of doing nothing",
      title: "While you wait, your competitors are winning your clients",
      cards: [
        { title: "Lost enquiries", text: "Prospects Google you, see an outdated site, and call someone else. Every week." },
        { title: "Wasted ad spend", text: "Driving paid traffic to a poor site is burning money. Your ads deserve a site that converts." },
        { title: "Eroded trust", text: "Clients judge your service quality by your website. A dated site says dated service." },
      ],
    },
    differentiation: {
      eyebrow: "Why IPDESIGN",
      title: "London-quality design. Smart, transparent pricing.",
      pillars: [
        { metric: "\u00a31,500", contrast: "Not \u00a310,000+", text: "Premium agency output without the premium agency invoice. Our Tangier studio cuts overhead, not quality." },
        { metric: "2\u20136 weeks", contrast: "Not 3\u20134 months", text: "From brief to launch, fast. Direct communication, streamlined process, no bloated timelines." },
        { metric: "Your code", contrast: "No lock-in", text: "Full code ownership, no hidden fees. Modern stack (Next.js, React, Vercel, Supabase) \u2014 future-proof." },
      ],
    },
    proof: {
      eyebrow: "Trusted across sectors",
      stats: [
        { value: "14+", label: "projects delivered" },
        { value: "8", label: "sectors served" },
        { value: "2\u20136 wk", label: "average delivery" },
      ],
      categories: [
        { name: "Professional Services & Healthcare", angle: "Credibility & acquisition" },
        { name: "Transport & Logistics", angle: "Visibility & management" },
        { name: "Property & Lettings", angle: "Showcase & qualification" },
        { name: "Agencies & Services", angle: "Positioning & quotes" },
        { name: "Hospitality, Retail & Lifestyle", angle: "Brand & launch" },
        { name: "AI & Business Solutions", angle: "Automation & support" },
      ],
    },
    objections: {
      eyebrow: "Common questions",
      title: "We get it. You\u2019ve been burned before.",
      items: [
        { q: "How can you be this cheap and still be good?", a: "Our Tangier studio has lower overhead than London agencies, but the same design standards. You\u2019re paying for quality, not a postcode." },
        { q: "I\u2019ve been burned by agencies before", a: "Full code ownership, transparent pricing, no lock-in. You see everything we build and own it all. Start with a free audit \u2014 zero risk." },
        { q: "We don\u2019t have time for a long project", a: "2\u20136 weeks from brief to launch. Our streamlined process means fast decisions and no bloated timelines." },
      ],
      comparison: {
        headers: ["", "London Agency", "DIY / Templates", "IPDESIGN"],
        rows: [
          ["Cost", "\u00a310,000+", "\u00a30\u2013500", "From \u00a31,500"],
          ["Timeline", "3\u20134 months", "Weeks (you do it)", "2\u20136 weeks"],
          ["Quality", "High", "Generic", "Premium"],
          ["Ownership", "Often locked in", "You own it", "Full ownership"],
          ["Strategy", "Sometimes", "None", "Always included"],
        ],
      },
    },
    ctaSection: {
      eyebrow: "Ready to stop losing clients?",
      title: "Get your free site audit",
      sub: "Send us your site. We\u2019ll send you a personalized video audit with 3 specific recommendations \u2014 completely free, no strings attached.",
      scarcity: "Only 2 project slots left this month",
      submit: "Get my free audit",
      trust: "48-hour response \u00b7 No obligation \u00b7 Your code, always",
      labels: { name: "Name", email: "Email", url: "Website URL", message: "Message (optional)" },
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
    problem: {
      eyebrow: "Le vrai co\u00fbt de l\u2019inaction",
      title: "Pendant que vous attendez, vos concurrents gagnent vos clients",
      cards: [
        { title: "Demandes perdues", text: "Les prospects vous cherchent sur Google, voient un site d\u00e9pass\u00e9, et appellent un concurrent. Chaque semaine." },
        { title: "Budget pub gaspill\u00e9", text: "Envoyer du trafic payant vers un mauvais site, c\u2019est br\u00fbler de l\u2019argent. Vos pubs m\u00e9ritent un site qui convertit." },
        { title: "Confiance \u00e9rod\u00e9e", text: "Les clients jugent la qualit\u00e9 de vos services par votre site. Un site dat\u00e9 dit un service dat\u00e9." },
      ],
    },
    differentiation: {
      eyebrow: "Pourquoi IPDESIGN",
      title: "Design premium. Tarifs transparents.",
      pillars: [
        { metric: "15 000 MAD", contrast: "Pas 100 000+", text: "Un r\u00e9sultat d\u2019agence premium sans la facture premium. Notre studio tang\u00e9rois r\u00e9duit les co\u00fbts, pas la qualit\u00e9." },
        { metric: "2\u20136 sem.", contrast: "Pas 3\u20134 mois", text: "Du brief au lancement, rapidement. Communication directe, processus efficace, pas de d\u00e9lais gonfl\u00e9s." },
        { metric: "Votre code", contrast: "Sans engagement", text: "Propri\u00e9t\u00e9 compl\u00e8te du code, sans frais cach\u00e9s. Stack moderne (Next.js, React, Vercel, Supabase)." },
      ],
    },
    proof: {
      eyebrow: "La confiance de multiples secteurs",
      stats: [
        { value: "14+", label: "projets livr\u00e9s" },
        { value: "8", label: "secteurs servis" },
        { value: "2\u20136 sem.", label: "d\u00e9lai moyen" },
      ],
      categories: [
        { name: "Services professionnels & Sant\u00e9", angle: "Cr\u00e9dibilit\u00e9 & acquisition" },
        { name: "Transport & Logistique", angle: "Visibilit\u00e9 & gestion" },
        { name: "Immobilier", angle: "Vitrine & qualification" },
        { name: "Agences & Services", angle: "Positionnement & devis" },
        { name: "H\u00f4tellerie, Commerce & Lifestyle", angle: "Marque & lancement" },
        { name: "IA & Solutions m\u00e9tier", angle: "Automatisation & support" },
      ],
    },
    objections: {
      eyebrow: "Questions fr\u00e9quentes",
      title: "On comprend. Vous avez d\u00e9j\u00e0 \u00e9t\u00e9 d\u00e9\u00e7u.",
      items: [
        { q: "Comment pouvez-vous \u00eatre si abordables et rester bons ?", a: "Notre studio \u00e0 Tanger a des co\u00fbts inf\u00e9rieurs aux agences europ\u00e9ennes, mais les m\u00eames standards de design. Vous payez la qualit\u00e9, pas le code postal." },
        { q: "J\u2019ai d\u00e9j\u00e0 \u00e9t\u00e9 d\u00e9\u00e7u par des agences", a: "Propri\u00e9t\u00e9 compl\u00e8te du code, tarifs transparents, sans engagement. Commencez par un audit gratuit \u2014 z\u00e9ro risque." },
        { q: "On n\u2019a pas le temps pour un long projet", a: "2 \u00e0 6 semaines du brief au lancement. Notre processus efficace \u00e9limine les d\u00e9lais inutiles." },
      ],
      comparison: {
        headers: ["", "Agence traditionnelle", "DIY / Templates", "IPDESIGN"],
        rows: [
          ["Co\u00fbt", "100 000+ MAD", "0\u20135 000 MAD", "D\u00e8s 15 000 MAD"],
          ["D\u00e9lai", "3\u20134 mois", "Semaines (vous-m\u00eame)", "2\u20136 semaines"],
          ["Qualit\u00e9", "\u00c9lev\u00e9e", "G\u00e9n\u00e9rique", "Premium"],
          ["Propri\u00e9t\u00e9", "Souvent verrouill\u00e9", "Vous le poss\u00e9dez", "Propri\u00e9t\u00e9 totale"],
          ["Strat\u00e9gie", "Parfois", "Aucune", "Toujours incluse"],
        ],
      },
    },
    ctaSection: {
      eyebrow: "Pr\u00eat \u00e0 arr\u00eater de perdre des clients ?",
      title: "Obtenez votre audit gratuit",
      sub: "Envoyez-nous votre site. Nous vous enverrons un audit vid\u00e9o personnalis\u00e9 avec 3 recommandations sp\u00e9cifiques \u2014 enti\u00e8rement gratuit, sans engagement.",
      scarcity: "Plus que 2 places ce mois-ci",
      submit: "Obtenir mon audit gratuit",
      trust: "R\u00e9ponse sous 48h \u00b7 Sans obligation \u00b7 Votre code, toujours",
      labels: { name: "Nom", email: "Email", url: "URL du site", message: "Message (optionnel)" },
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
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const isMobile = window.matchMedia("(max-width: 1024px)");

// ── Helpers ─────────────────────────────────────────────────────────
function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function renderLineTitle(selector, lines) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = lines.map(line => `<span class="hero-title__line">${line}</span>`).join("");
}

// ── Render static content ───────────────────────────────────────────
function renderStaticContent() {
  document.title = siteContent.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", siteContent.meta.description);

  // Navigation
  setText("#nav-services", siteContent.navigation.services);
  setText("#nav-why", siteContent.navigation.why);
  setText("#nav-proof", siteContent.navigation.ventures || "Portfolio");
  setText("#nav-process", siteContent.sections.process.eyebrow);
  setText("#header-cta", siteContent.navigation.cta);

  // Header phone
  const headerPhone = document.querySelector("#header-phone");
  if (headerPhone) {
    headerPhone.textContent = contactInfo[currentLang].phone;
    headerPhone.href = contactInfo[currentLang].phoneHref;
  }

  // Hero
  setText("#hero-eyebrow", siteContent.hero.eyebrow);
  renderLineTitle("#hero-title", siteContent.hero.titleLines);
  setText("#hero-lead", siteContent.hero.lead);
  setText("#hero-primary-cta", siteContent.hero.primaryCta);
  setText("#hero-ghost-cta", siteContent.hero.tertiaryCta || siteContent.hero.secondaryCta);

  // Trust bar (render as signal list)
  const trustBar = document.querySelector("#trust-bar");
  if (trustBar) {
    trustBar.innerHTML = siteContent.hero.signals
      .map(s => `<span class="trust-signal">${s}</span>`)
      .join("");
  }

  // About section — use manifesto content
  setText("#about-title", siteContent.manifesto.title);
  setText("#about-text-1", siteContent.manifesto.text);
  setText("#about-text-2", siteContent.sections.why.text);

  // Kinetic intro
  setText("#kinetic-intro", currentLang === "en"
    ? "Delivering results across multiple industries, and we're just getting started."
    : "Des résultats dans plusieurs secteurs, et ce n'est que le début.");

  // Stats label
  setText("#stats-label", currentLang === "en"
    ? "PROJECTS DELIVERED ACROSS INDUSTRIES WITH MEASURABLE RESULTS"
    : "PROJETS LIVRÉS DANS PLUSIEURS SECTEURS AVEC DES RÉSULTATS MESURABLES");

  // Why / Differentiation
  setText("#why-eyebrow", siteContent.sections.differentiation.eyebrow);
  setText("#why-title", siteContent.sections.differentiation.title);

  // Services
  setText("#services-eyebrow", siteContent.sections.services.eyebrow);
  setText("#services-title", siteContent.sections.services.title);

  // FAQ
  setText("#faq-eyebrow", siteContent.sections.objections.eyebrow);
  setText("#faq-title", siteContent.sections.objections.title);

  // Process
  setText("#process-eyebrow", siteContent.sections.process.eyebrow);
  setText("#process-title", siteContent.sections.process.title);

  // CTA
  const ctaData = siteContent.ctaSection || siteContent.sections.cta;
  setText("#cta-eyebrow", ctaData.eyebrow);
  setText("#cta-title", ctaData.title);
  setText("#cta-text", ctaData.sub || ctaData.text);
  setText("#cta-scarcity", ctaData.scarcity || "");
  setText("#audit-submit", ctaData.submit || "");
  setText("#audit-trust", ctaData.trust || "");

  // Form labels
  const labels = siteContent.ctaSection?.labels || {};
  setText("#form-label-name", labels.name || "Name");
  setText("#form-label-email", labels.email || "Email");
  setText("#form-label-url", labels.url || "Website URL");
  setText("#form-label-message", labels.message || "Message");

  // Footer
  setText("#footer-summary", siteContent.footer.summary);
  setText("#footer-links-title", siteContent.footer.linksTitle);
  setText("#footer-contact-title", siteContent.footer.contactTitle);
  setText("#footer-link-services", siteContent.footer.links.services);
  setText("#footer-link-why", siteContent.footer.links.portal || "Solutions");
  setText("#footer-link-proof", siteContent.footer.links.ventures || "Portfolio");
  setText("#footer-contact-primary", siteContent.footer.contactPrimary);
  setText("#footer-contact-secondary", siteContent.footer.contactSecondary);
  setText("#footer-location", siteContent.footer.location);

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

  // Language toggle
  setText("#lang-toggle", siteContent.ui.langToggleLabel);
}

// ── Render pillars (differentiation cards) ──────────────────────────
function renderPillars() {
  const grid = document.querySelector("#pillars-grid");
  if (!grid) return;
  const pillars = siteContent.sections.differentiation.pillars;
  grid.innerHTML = pillars.map(p => `
    <article class="pillar-card" data-reveal>
      <div class="pillar-card__metric">${p.metric}</div>
      <div class="pillar-card__contrast">${p.contrast}</div>
      <p>${p.text}</p>
    </article>
  `).join("");
}

// ── Render services (horizontal scroll panels) ─────────────────────
const serviceBgImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=40",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=40",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=40",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=40",
];

function renderServices() {
  const track = document.querySelector("#services-track");
  if (!track) return;
  const svcs = servicesData[currentLang];

  track.innerHTML = svcs.slice(0, 4).map((s, i) => `
    <div class="services-morph__panel" style="--panel-bg:url('${serviceBgImages[i]}')">
      <div class="services-morph__panel-number">NO.${String(i + 1).padStart(2, "0")}</div>
      <h2 class="services-morph__panel-title">${s.title}</h2>
      <p class="services-morph__panel-desc">${s.description}</p>
      <a class="services-morph__panel-cta" href="#contact">${siteContent.ui.serviceViewCta || "See More"}</a>
    </div>
  `).join("") + `
    <div class="services-morph__panel services-morph__panel--last">
      <div class="services-morph__panel-number">NO.05</div>
      <h2 class="services-morph__panel-title">${currentLang === "en" ? "View All Services" : "Voir tous les services"}</h2>
      <a class="button button--primary" href="#contact">${siteContent.navigation.cta}</a>
    </div>
  `;
}

// ── Portfolio project data ──────────────────────────────────────────
const portfolioData = {
  en: [
    { brand: "Faga", sector: "Sports & Fitness", desc: "Digital presence for sports operators and coaching brands", image: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80", demo: "demos/sport.html" },
    { brand: "Drive Beyond", sector: "Premium Car Rental", desc: "Premium fleet showcase with booking intent capture", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", demo: "demos/car-rental.html" },
    { brand: "Bouknou", sector: "Law Firm", desc: "Authority and credibility for legal consultancy", image: "https://images.unsplash.com/photo-1555371363-72f1af3b1bc3?auto=format&fit=crop&w=800&q=80", demo: "demos/law-firm.html" },
    { brand: "Dr Dardar", sector: "Dental Clinic", desc: "Trust-first design for patient acquisition", image: "https://images.unsplash.com/photo-1580281657521-5e5a31c5da2b?auto=format&fit=crop&w=800&q=80", demo: "demos/dental.html" },
    { brand: "The1000 Courier", sector: "B2B Delivery", desc: "Operational credibility for B2B courier services", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80", demo: "demos/b2b-courier.html" },
    { brand: "ShipTrack", sector: "Logistics & Transport", desc: "Structure and visibility for transport operators", image: "https://images.unsplash.com/photo-1456030948022-9d8a3a5dfa44?auto=format&fit=crop&w=800&q=80", demo: "demos/logistics.html" },
    { brand: "MyResiDex", sector: "Real Estate", desc: "Premium property showcase with lead qualification", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", demo: "demos/real-estate.html" },
  ],
  fr: [
    { brand: "Faga", sector: "Sport & Fitness", desc: "Présence digitale pour opérateurs sportifs et marques de coaching", image: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80", demo: "demos/sport.html" },
    { brand: "Drive Beyond", sector: "Location Premium", desc: "Vitrine flotte premium avec capture d'intention de réservation", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", demo: "demos/car-rental.html" },
    { brand: "Bouknou", sector: "Cabinet Juridique", desc: "Autorité et crédibilité pour conseil juridique", image: "https://images.unsplash.com/photo-1555371363-72f1af3b1bc3?auto=format&fit=crop&w=800&q=80", demo: "demos/law-firm.html" },
    { brand: "Dr Dardar", sector: "Clinique Dentaire", desc: "Design orienté confiance pour acquisition de patients", image: "https://images.unsplash.com/photo-1580281657521-5e5a31c5da2b?auto=format&fit=crop&w=800&q=80", demo: "demos/dental.html" },
    { brand: "The1000 Courier", sector: "Livraison B2B", desc: "Crédibilité opérationnelle pour services de coursier B2B", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80", demo: "demos/b2b-courier.html" },
    { brand: "ShipTrack", sector: "Logistique & Transport", desc: "Structure et visibilité pour opérateurs transport", image: "https://images.unsplash.com/photo-1456030948022-9d8a3a5dfa44?auto=format&fit=crop&w=800&q=80", demo: "demos/logistics.html" },
    { brand: "MyResiDex", sector: "Immobilier", desc: "Vitrine immobilière premium avec qualification de leads", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", demo: "demos/real-estate.html" },
  ],
};

// ── Render portfolio (bento grid) ──────────────────────────────────
function renderPortfolio() {
  const grid = document.querySelector("#portfolio-grid");
  if (!grid) return;

  const items = portfolioData[currentLang];
  grid.innerHTML = items.map(p => `
    <a class="card" href="${p.demo}" target="_blank" rel="noopener">
      <div class="card__image">
        <img src="${p.image}" alt="${p.brand} — ${p.sector}" loading="lazy" />
      </div>
      <div class="card__content">
        <h3 class="card__brand">${p.brand}</h3>
        <div class="card__meta"><span class="sector-pill">${p.sector}</span></div>
        <p class="card__desc">${p.desc}</p>
      </div>
    </a>
  `).join("");

  // Portfolio heading text
  setText("#portfolio-eyebrow", currentLang === "en" ? "Portfolio" : "Portfolio");
  setText("#portfolio-title", currentLang === "en" ? "Projects that prove the point." : "Des projets qui parlent d'eux-mêmes.");
}

// ── Render FAQ (accordion) ──────────────────────────────────────────
function renderFAQ() {
  const faqAccordion = document.querySelector("#faq-accordion");
  if (!faqAccordion || !siteContent.sections.objections.items) return;

  faqAccordion.innerHTML = siteContent.sections.objections.items.map(({ q, a }, i) => `
    <div class="accordion__item${i === 0 ? " is-open" : ""}">
      <button class="accordion__trigger" type="button" aria-expanded="${i === 0}">${q}<span class="accordion__icon">+</span></button>
      <div class="accordion__body"><div class="accordion__body-inner">${a}</div></div>
    </div>
  `).join("");

  faqAccordion.querySelectorAll(".accordion__trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.parentElement;
      const wasOpen = item.classList.contains("is-open");
      faqAccordion.querySelectorAll(".accordion__item").forEach(el => el.classList.remove("is-open"));
      if (!wasOpen) item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", !wasOpen);
    });
  });
}

// ── Render comparison table ─────────────────────────────────────────
function renderComparison() {
  const compTable = document.querySelector("#comparison-table");
  if (!compTable || !siteContent.sections.objections.comparison) return;
  const { headers, rows } = siteContent.sections.objections.comparison;
  compTable.innerHTML = `
    <table>
      <thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(row => `<tr>${row.map((cell, i) => `<td${i === row.length - 1 ? ' class="highlight"' : ""}>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

// ── Render process (timeline) ───────────────────────────────────────
function renderProcess() {
  const timeline = document.querySelector("#timeline");
  if (!timeline) return;
  const steps = processData[currentLang];
  timeline.innerHTML = steps.map(({ title, description }, i) => `
    <article class="process-item" data-reveal>
      <span class="process-item__index">0${i + 1}</span>
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </article>
  `).join("");
}

// ── GSAP: Hero Animations ───────────────────────────────────────────
function setupHeroAnimation() {
  const hero = document.querySelector(".hero");
  if (!hero || reduceMotion.matches) return;

  // Clip-path scroll contraction
  gsap.to(hero, {
    clipPath: "inset(8% round 24px)",
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  // SplitText on hero title
  const title = document.querySelector(".hero-title");
  if (title && typeof SplitText !== "undefined") {
    const split = new SplitText(title, { type: "chars, lines", linesClass: "hero-title__line" });
    gsap.from(split.chars, {
      y: 80,
      opacity: 0,
      rotationX: -30,
      stagger: 0.025,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.4,
    });
  }

  // Hero lead and CTAs fade in
  gsap.from(".hero__lead", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.9 });
  gsap.from(".hero-ctas", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 1.1 });
  gsap.from(".trust-bar", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 1.3 });
  gsap.from(".hero__sub", { opacity: 0, duration: 1, ease: "power2.out", delay: 1.5 });

  // Tagline horizontal scroll parallax
  const tagline = document.querySelector(".hero__tagline-text");
  if (tagline) {
    gsap.to(tagline, {
      xPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
}

// ── GSAP: Pinned Gallery ────────────────────────────────────────────
// ── GSAP: Services Horizontal Scroll ────────────────────────────────
function setupServicesMorph() {
  const section = document.querySelector(".services-morph");
  const track = document.querySelector("#services-track");
  if (!section || !track || isMobile.matches) return;

  const totalWidth = track.scrollWidth;

  gsap.to(track, {
    x: () => -(totalWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => "+=" + totalWidth,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  // Show/hide the SVG shape during scroll
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom bottom",
    onEnter: () => section.classList.add("is-active"),
    onLeave: () => section.classList.remove("is-active"),
    onEnterBack: () => section.classList.add("is-active"),
    onLeaveBack: () => section.classList.remove("is-active"),
  });
}

// ── GSAP: Kinetic Typography ────────────────────────────────────────
function setupKineticType() {
  const lines = document.querySelectorAll(".kinetic-line");
  if (!lines.length || reduceMotion.matches) return;

  lines.forEach(line => {
    const speed = parseFloat(line.dataset.speed) || 1;
    gsap.fromTo(line, {
      y: 150,
      rotateX: -30,
      scale: 0.85,
      opacity: 0,
    }, {
      y: 0,
      rotateX: 0,
      scale: 1,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: line.closest("section"),
        start: "top 70%",
        end: "center center",
        scrub: speed,
      },
    });
  });

  // Intro text
  const intro = document.querySelector(".kinetic-type__intro");
  if (intro) {
    gsap.from(intro, {
      y: 40, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: intro, start: "top 85%" },
    });
  }
}

// ── GSAP: Stats Counter ─────────────────────────────────────────────
function setupStatsCounter() {
  const counters = document.querySelectorAll("[data-count-to]");
  counters.forEach(el => {
    const target = parseInt(el.dataset.countTo, 10);
    const suffix = el.dataset.countSuffix || "";

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val) + suffix;
          },
        });
      },
    });
  });

  // Stats words parallax
  document.querySelectorAll(".stats__word").forEach(word => {
    const speed = parseFloat(word.dataset.speed) || 1;
    gsap.fromTo(word, { x: -50 }, {
      x: 50,
      ease: "none",
      scrollTrigger: {
        trigger: word.closest("section"),
        start: "top bottom",
        end: "bottom top",
        scrub: speed,
      },
    });
  });
}

// ── GSAP: Marquee ───────────────────────────────────────────────────
function setupMarquee() {
  const track = document.querySelector("#marquee-track");
  if (!track) return;

  const text = currentLang === "en" ? "GET IN TOUCH" : "CONTACTEZ-NOUS";
  const sep = " \u2022 ";
  track.innerHTML = Array(16).fill(`<span>${text}</span><span class="marquee-dot">${sep}</span>`).join("");

  // Simple CSS-based marquee as GSAP fallback for the infinite loop
  const totalWidth = track.scrollWidth / 2;

  gsap.to(track, {
    x: -totalWidth,
    duration: 25,
    ease: "none",
    repeat: -1,
  });
}

// ── GSAP: Global Scroll Reveals ─────────────────────────────────────
function setupScrollReveals() {
  if (reduceMotion.matches) {
    document.querySelectorAll(".anim-reveal, .anim-fade, [data-reveal], [data-reveal-stagger] > *")
      .forEach(el => { el.style.opacity = 1; el.style.transform = "none"; });
    return;
  }

  gsap.utils.toArray(".anim-reveal").forEach(el => {
    gsap.to(el, {
      y: 0, opacity: 1, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });

  gsap.utils.toArray(".anim-fade").forEach(el => {
    gsap.to(el, {
      y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  gsap.utils.toArray("[data-reveal]").forEach(el => {
    gsap.to(el, {
      y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });

  gsap.utils.toArray("[data-reveal-stagger]").forEach(container => {
    gsap.to(container.children, {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: container, start: "top 82%" },
    });
  });
}

// ── Header Scroll ───────────────────────────────────────────────────
function setupHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  ScrollTrigger.create({
    start: 40,
    onUpdate: (self) => {
      header.classList.toggle("is-scrolled", self.scroll() > 40);
    },
  });
}

// ── Scroll Progress Bar ─────────────────────────────────────────────
function setupScrollProgress() {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.prepend(bar);

  ScrollTrigger.create({
    onUpdate: (self) => {
      bar.style.transform = `scaleX(${self.progress.toFixed(4)})`;
    },
  });
}

// ── Audit Form ──────────────────────────────────────────────────────
function bindAuditForm() {
  const form = document.querySelector("#audit-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const vals = Object.fromEntries(fd.entries());
    const ctaData = siteContent.ctaSection || siteContent.sections.cta;
    const dest = ctaData.destinationEmail;

    if (!dest || dest.endsWith(".example")) {
      alert(siteContent.ui.formStatusReady);
      return;
    }

    const subject = encodeURIComponent(`${ctaData.mailSubjectPrefix || "IPDESIGN Enquiry"} - ${vals.name}`);
    const body = encodeURIComponent(
      `Name: ${vals.name}\nEmail: ${vals.email}\nWebsite: ${vals.url || "Not provided"}\n\nMessage:\n${vals.message}`
    );

    window.location.href = `mailto:${dest}?subject=${subject}&body=${body}`;
  });
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

  // Kill all ScrollTriggers before re-rendering
  ScrollTrigger.getAll().forEach(st => st.kill());

  renderStaticContent();
  renderPillars();
  renderServices();
  renderPortfolio();
  renderFAQ();
  renderComparison();
  renderProcess();

  requestAnimationFrame(() => {
    initGSAP();
    window.scrollTo(0, 0);
  });
}

function bindLanguageToggle() {
  const toggle = document.querySelector("#lang-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "fr" : "en");
  });
}

// ── GSAP Initialization ─────────────────────────────────────────────
function initGSAP() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);
  if (typeof SplitText !== "undefined") gsap.registerPlugin(SplitText);
  if (typeof Observer !== "undefined") gsap.registerPlugin(Observer);
  setupHeroAnimation();
  setupServicesMorph();
  setupKineticType();
  setupStatsCounter();
  setupMarquee();
  setupScrollReveals();
  setupHeaderScroll();
  setupScrollProgress();
}

// ── Initialise ──────────────────────────────────────────────────────
function initializePage() {
  document.documentElement.lang = currentLang === "en" ? "en-GB" : "fr";

  renderStaticContent();
  renderPillars();
  renderServices();
  renderPortfolio();
  renderFAQ();
  renderComparison();
  renderProcess();
  bindAuditForm();
  bindLanguageToggle();

  // Wait for GSAP to be available, then initialize
  requestAnimationFrame(() => {
    initGSAP();
  });
}

initializePage();
