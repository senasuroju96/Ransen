// Mock data for RANSEN Digital Marketing Agency

export const services = [
  {
    id: 1,
    slug: "paid-media-advertising",
    title: "Paid Media Advertising",
    description: "Strategic, performance-driven advertising across Google, Meta, and other major platforms, designed to convert high-intent audiences into leads and sales while maximizing return on ad spend.",
    icon: "Target",
    detailedDescription: "Drive immediate results with data-backed paid advertising campaigns across all major platforms. Our performance marketing experts optimize every dollar spent to deliver measurable ROI.",
    benefit1: "Advanced audience targeting and segmentation",
    benefit2: "A/B testing and creative optimization",
    benefit3: "Real-time performance monitoring and adjustment",
    benefit4: "Multi-platform campaign management",
    benefit5: "Conversion tracking and attribution modeling",
    platform1: "Google Ads",
    platform2: "Meta Ads",
    platform3: "LinkedIn Ads",
    platform4: "TikTok Ads",
    platform5: "YouTube Ads",
    avgROI: "320%",
    avgCPA: "-45%",
    conversionIncrease: "180%"
  },
  {
    id: 2,
    slug: "social-media-management",
    title: "Social Media Management",
    description: "End-to-end social media strategy, content creation, and community management focused on building brand presence, engagement, and long-term audience growth.",
    icon: "Share2",
    detailedDescription: "Build a powerful social media presence that drives engagement and converts followers into customers. Our team handles everything from strategy to daily community management.",
    benefit1: "Custom content calendars and strategy",
    benefit2: "Professional graphic design and video production",
    benefit3: "Daily posting and community engagement",
    benefit4: "Influencer partnerships and collaborations",
    benefit5: "Analytics and performance reporting",
    platform1: "Instagram",
    platform2: "Facebook",
    platform3: "LinkedIn",
    platform4: "Twitter/X",
    platform5: "TikTok",
    platform6: "YouTube",
    avgEngagement: "+250%",
    followerGrowth: "+180%",
    contentReach: "500K+"
  },
  {
    id: 3,
    slug: "website-design-development",
    title: "Website Design & Development",
    description: "Custom-designed, conversion-focused websites built for performance, scalability, and user experience — optimized to support marketing, lead generation, and business growth.",
    icon: "Monitor",
    detailedDescription: "Create stunning, high-converting websites that serve as your digital foundation. We build scalable, SEO-optimized sites that drive results and grow with your business.",
    benefit1: "Custom responsive design for all devices",
    benefit2: "Conversion-focused user experience",
    benefit3: "SEO-optimized architecture and code",
    benefit4: "Fast loading speeds and performance",
    benefit5: "CMS integration and easy content management",
    platform1: "React",
    platform2: "Next.js",
    platform3: "WordPress",
    platform4: "Webflow",
    platform5: "Shopify",
    avgLoadTime: "1.2s",
    conversionRate: "+160%",
    mobileScore: "98/100"
  },
  {
    id: 4,
    slug: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    description: "Comprehensive SEO strategies covering technical optimization, content, keywords, and authority building to improve organic visibility, rankings, and qualified traffic.",
    icon: "Search",
    detailedDescription: "Dominate search results with comprehensive SEO strategies that drive sustainable organic growth. We optimize every aspect of your online presence for maximum visibility.",
    benefit1: "Technical SEO audits and optimization",
    benefit2: "Keyword research and content strategy",
    benefit3: "On-page and off-page optimization",
    benefit4: "Link building and authority development",
    benefit5: "Local SEO and Google Business Profile optimization",
    platform1: "Google Search",
    platform2: "Bing",
    platform3: "Google Business",
    platform4: "Local Directories",
    avgRankingIncrease: "+35 positions",
    organicTraffic: "+250%",
    domainAuthority: "+45 points"
  },
  {
    id: 5,
    slug: "video-production",
    title: "Video Production",
    description: "High-quality video and visual content that tells your brand story, showcases products or services, and drives engagement across digital platforms.",
    icon: "Video",
    detailedDescription: "Create compelling video content that captivates audiences and drives action. From concept to final edit, we produce professional videos that elevate your brand.",
    benefit1: "Professional scriptwriting and storyboarding",
    benefit2: "High-quality filming and production",
    benefit3: "Motion graphics and animation",
    benefit4: "Video editing and post-production",
    benefit5: "Multi-platform optimization and distribution",
    platform1: "YouTube",
    platform2: "Instagram Reels",
    platform3: "TikTok",
    platform4: "LinkedIn Video",
    platform5: "Website",
    avgEngagement: "+340%",
    watchTime: "75%",
    conversionLift: "+190%",
    subServices: [
      {
        id: 1,
        name: "Real Estate Video Production",
        description: "Cinematic property tours, aerial footage, and neighborhood showcases that help properties sell faster and for higher prices.",
        features: ["4K Drone Footage", "Virtual Tours", "Property Walkthroughs", "Agent Branding Videos", "Testimonial Videos"],
        icon: "Home"
      },
      {
        id: 2,
        name: "Wedding Videography Services",
        description: "Capture your special day with stunning cinematic wedding films, same-day edits, and highlight reels that you'll treasure forever.",
        features: ["Full Ceremony Coverage", "Cinematic Highlights", "Drone Aerial Shots", "Same-Day Edits", "4K Ultra HD"],
        icon: "Heart"
      },
      {
        id: 3,
        name: "Commercial Drone Services",
        description: "Professional aerial cinematography for real estate, construction, events, and marketing campaigns.",
        features: ["Licensed FAA Pilots", "4K/8K Aerial Footage", "Construction Progress Documentation", "Event Coverage", "Inspection Services"],
        icon: "Plane"
      },
      {
        id: 4,
        name: "Corporate Video Production",
        description: "Professional corporate videos including company profiles, training videos, internal communications, and brand documentaries.",
        features: ["Company Culture Videos", "Training & Onboarding", "Executive Interviews", "Product Demos", "Annual Reports"],
        icon: "Briefcase"
      },
      {
        id: 5,
        name: "Social Media Video Content",
        description: "Engaging short-form video content optimized for Instagram Reels, TikTok, YouTube Shorts, and Facebook.",
        features: ["15-60 Second Clips", "Vertical Format Optimization", "Trending Sound Integration", "Caption & Graphics", "Multi-Platform Distribution"],
        icon: "Share2"
      },
      {
        id: 6,
        name: "Product Video & E-Commerce",
        description: "High-converting product videos, unboxing experiences, and 360° showcases that drive online sales.",
        features: ["Product Demonstrations", "360° Views", "Lifestyle Shots", "Amazon A+ Content", "Shoppable Videos"],
        icon: "ShoppingBag"
      },
      {
        id: 7,
        name: "Event Coverage & Live Streaming",
        description: "Multi-camera event coverage, live streaming services, and same-day highlight reels for conferences, concerts, and corporate events.",
        features: ["Multi-Camera Setup", "Live Streaming", "Same-Day Highlights", "Conference Coverage", "Concert Recording"],
        icon: "Video"
      },
      {
        id: 8,
        name: "Animation & Motion Graphics",
        description: "2D/3D animation, explainer videos, and motion graphics that simplify complex concepts and engage viewers.",
        features: ["2D/3D Animation", "Explainer Videos", "Logo Animation", "Infographic Videos", "Character Animation"],
        icon: "Sparkles"
      }
    ]
  },
  {
    id: 6,
    slug: "ai-automation",
    title: "AI Automation",
    description: "Custom AI-powered automations for marketing, operations, customer engagement, and analytics — helping businesses save time, reduce costs, and scale efficiently.",
    icon: "Bot",
    detailedDescription: "Leverage cutting-edge AI technology to automate repetitive tasks, enhance customer experiences, and unlock new growth opportunities. Our custom AI solutions transform how you work.",
    benefit1: "AI chatbots and virtual assistants",
    benefit2: "Marketing automation and personalization",
    benefit3: "Predictive analytics and insights",
    benefit4: "Content generation and optimization",
    benefit5: "Process automation and workflow optimization",
    platform1: "OpenAI",
    platform2: "Claude",
    platform3: "Custom AI Models",
    platform4: "Zapier",
    platform5: "Make.com",
    timeSaved: "40 hrs/week",
    costReduction: "-60%",
    responseTime: "Instant"
  },
  {
    id: 7,
    slug: "business-operations-support",
    title: "Business Operations Support",
    description: "Dedicated support for inbound inquiries, lead follow-up, appointment booking, and customer care, ensuring fast response times and a seamless customer experience.",
    icon: "Headphones",
    detailedDescription: "Never miss an opportunity with professional business operations support. Our team handles customer interactions, lead management, and operational tasks so you can focus on growth.",
    benefit1: "24/7 customer support and live chat",
    benefit2: "Lead qualification and follow-up",
    benefit3: "Appointment scheduling and calendar management",
    benefit4: "CRM management and data entry",
    benefit5: "Email and phone support services",
    platform1: "Zendesk",
    platform2: "Intercom",
    platform3: "HubSpot",
    platform4: "Salesforce",
    platform5: "Custom CRM",
    responseTimeValue: "<5 min",
    customerSatisfaction: "96%",
    leadConversion: "+85%"
  },
  {
    id: 8,
    slug: "llmo-optimization",
    title: "LLMO (Large Language Model Optimization)",
    description: "Optimize your content and digital presence for AI-powered search engines and language models like ChatGPT, Claude, and Gemini to increase brand visibility in AI-generated responses.",
    icon: "Sparkles",
    detailedDescription: "Stay ahead of the curve with LLMO strategies that ensure your brand appears in AI-generated answers. As more users rely on AI assistants, being discoverable in LLM responses is critical for modern marketing.",
    benefit1: "Content optimization for AI model training data",
    benefit2: "Brand mention tracking in AI responses",
    benefit3: "Structured data and schema markup for AI",
    benefit4: "Authority building for AI source selection",
    benefit5: "Prompt engineering and AI visibility strategies",
    platform1: "ChatGPT",
    platform2: "Claude",
    platform3: "Gemini",
    platform4: "Perplexity",
    platform5: "Copilot",
    aiMentions: "+280%",
    brandVisibility: "+320%",
    aiTrafficGrowth: "+150%"
  },
  {
    id: 9,
    slug: "aeo-optimization",
    title: "AEO (Answer Engine Optimization)",
    description: "Optimize for answer engines and featured snippets to capture position zero in search results, voice search queries, and AI-powered answer platforms for maximum visibility.",
    icon: "MessageSquare",
    detailedDescription: "Dominate answer engines and capture featured snippets with specialized AEO strategies. As search evolves beyond links to direct answers, AEO ensures your content becomes the authoritative source.",
    benefit1: "Featured snippet optimization",
    benefit2: "Voice search and conversational query optimization",
    benefit3: "FAQ schema and structured content",
    benefit4: "Answer-focused content strategy",
    benefit5: "Knowledge graph optimization",
    platform1: "Google Featured Snippets",
    platform2: "Alexa",
    platform3: "Siri",
    platform4: "Google Assistant",
    platform5: "Perplexity AI",
    featuredSnippets: "+200%",
    voiceSearchShare: "45%",
    zeroClickVisibility: "+175%"
  }
];

export const portfolioItems = [
  {
    id: 1,
    client: "TechStart Inc.",
    project: "Complete Digital Transformation",
    results: "250% increase in organic traffic",
    category: "SEO & Content",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 2,
    client: "EcoLife Brand",
    project: "Social Media Campaign",
    results: "500K+ engagement in 3 months",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
  },
  {
    id: 3,
    client: "FinanceHub",
    project: "Brand Repositioning",
    results: "40% growth in market share",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 4,
    client: "FitnessPro",
    project: "PPC Campaign Optimization",
    results: "320% ROI improvement",
    category: "PPC",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content: "RANSEN transformed our digital presence completely. Their strategic approach and attention to detail resulted in unprecedented growth for our business.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, EcoLife",
    content: "Working with RANSEN has been a game-changer. Their creative campaigns and data-driven insights helped us achieve our ambitious growth targets.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, FitnessPro",
    content: "The team at RANSEN is exceptional. They understood our vision and delivered results beyond our expectations. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
  }
];

export const stats = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Projects Delivered"
  },
  {
    id: 2,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction"
  },
  {
    id: 3,
    value: 150,
    suffix: "+",
    label: "Happy Clients"
  },
  {
    id: 4,
    value: 50,
    suffix: "+",
    label: "Industry Awards"
  }
];

export const industries = [
  {
    id: 1,
    name: "E-Commerce & Retail",
    slug: "ecommerce-retail-marketing",
    description: "Driving online sales and customer acquisition",
    icon: "ShoppingBag",
    seoTitle: "E-Commerce & Retail Digital Marketing Services | RANSEN",
    seoDescription: "Boost your online store sales with data-driven e-commerce marketing strategies. From SEO to paid ads, we drive traffic and conversions for retail businesses.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    detailedDescription: "Transform your online retail business with comprehensive digital marketing strategies designed specifically for e-commerce. We specialize in driving qualified traffic, increasing conversion rates, and maximizing customer lifetime value.",
    challenges: [
      "High cart abandonment rates",
      "Increasing customer acquisition costs",
      "Fierce competition in online marketplaces",
      "Building brand loyalty in a crowded market"
    ],
    solutions: [
      "Conversion rate optimization (CRO) to reduce cart abandonment",
      "Strategic paid advertising across Google Shopping, Meta, and TikTok",
      "Email marketing automation for abandoned carts and retention",
      "SEO optimization for product pages and category ranking",
      "Influencer marketing and social commerce strategies"
    ],
    results: {
      stat1: "Average 145% increase in online sales",
      stat2: "32% reduction in CAC",
      stat3: "2.8x ROI on ad spend"
    }
  },
  {
    id: 2,
    name: "SaaS & Technology",
    slug: "saas-technology-marketing",
    description: "Scaling growth with strategic campaigns",
    icon: "Laptop",
    seoTitle: "SaaS & Technology Marketing Agency | B2B Growth Strategies",
    seoDescription: "Accelerate your SaaS growth with proven B2B marketing strategies. Generate qualified leads, reduce churn, and scale predictably.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    detailedDescription: "Drive predictable, scalable growth for your SaaS or technology company. Our data-driven approach focuses on generating high-quality leads, optimizing your funnel, and reducing customer acquisition costs.",
    challenges: [
      "Long sales cycles and complex buyer journeys",
      "High customer acquisition costs",
      "Difficulty demonstrating ROI to stakeholders",
      "Standing out in saturated markets"
    ],
    solutions: [
      "Full-funnel marketing strategies from awareness to conversion",
      "Content marketing and thought leadership positioning",
      "LinkedIn and B2B-focused paid advertising",
      "Marketing automation and lead nurturing sequences",
      "Product-led growth and freemium optimization"
    ],
    results: {
      stat1: "Average 230% increase in MQLs",
      stat2: "54% shorter sales cycles",
      stat3: "3.5x pipeline growth"
    }
  },
  {
    id: 3,
    name: "Healthcare & Wellness",
    slug: "healthcare-wellness-marketing",
    description: "Building trust and patient engagement",
    icon: "Heart",
    seoTitle: "Healthcare & Wellness Digital Marketing | Patient Acquisition",
    seoDescription: "Grow your healthcare practice with HIPAA-compliant digital marketing. Attract more patients through SEO, reputation management, and targeted advertising.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    detailedDescription: "Build trust and attract more patients with healthcare marketing strategies that prioritize compliance, reputation, and patient experience. HIPAA-compliant campaigns that drive appointments.",
    challenges: [
      "Strict regulatory compliance (HIPAA)",
      "Building trust in a sensitive industry",
      "Managing online reputation and reviews",
      "Patient acquisition in competitive markets"
    ],
    solutions: [
      "HIPAA-compliant marketing automation",
      "Local SEO and Google Business Profile optimization",
      "Reputation management and review generation",
      "Patient education content marketing",
      "Targeted healthcare advertising campaigns"
    ],
    results: {
      stat1: "Average 180% increase in appointments",
      stat2: "4.7★ average review rating",
      stat3: "95% patient retention"
    }
  },
  {
    id: 4,
    name: "Professional Services",
    slug: "professional-services-marketing",
    description: "Establishing authority and generating leads",
    icon: "Briefcase",
    seoTitle: "Professional Services Marketing Agency | B2B Lead Generation",
    seoDescription: "Position your firm as an industry leader. Generate qualified leads for consulting, legal, accounting, and professional service firms.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    detailedDescription: "Establish your firm as an industry authority and attract high-value clients. Our strategies focus on thought leadership, trust-building, and targeted outreach to decision-makers.",
    challenges: [
      "Long sales cycles and relationship-based selling",
      "Difficulty showcasing expertise and results",
      "Generating qualified leads consistently",
      "Differentiating in competitive markets"
    ],
    solutions: [
      "Thought leadership content and whitepapers",
      "LinkedIn marketing and executive positioning",
      "Webinars and virtual events for lead generation",
      "Case study development and PR amplification",
      "Account-based marketing (ABM) strategies"
    ],
    results: {
      stat1: "Average 210% increase in qualified leads",
      stat2: "68% win rate improvement",
      stat3: "2.1x average deal size"
    }
  },
  {
    id: 5,
    name: "Real Estate",
    slug: "real-estate-marketing",
    description: "Converting prospects into property buyers",
    icon: "Home",
    seoTitle: "Real Estate Digital Marketing Services | Property Lead Generation",
    seoDescription: "Sell more properties with targeted real estate marketing. Virtual tours, paid ads, and SEO strategies that attract qualified buyers and sellers.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    detailedDescription: "Dominate your local real estate market with cutting-edge digital marketing strategies. From virtual tours to targeted advertising, we help you close more deals.",
    challenges: [
      "Highly competitive local markets",
      "Generating qualified buyer and seller leads",
      "Showcasing properties effectively online",
      "Building agent brand and credibility"
    ],
    solutions: [
      "Virtual tour production and 3D property showcases",
      "Facebook and Instagram property advertising",
      "Local SEO for geographic dominance",
      "CRM integration and lead nurturing",
      "Drone photography and video production"
    ],
    results: {
      stat1: "Average 165% increase in listing inquiries",
      stat2: "45% faster property sales",
      stat3: "3.2x qualified leads"
    }
  },
  {
    id: 6,
    name: "Finance & Insurance",
    slug: "finance-insurance-marketing",
    description: "Compliance-friendly growth strategies",
    icon: "TrendingUp",
    seoTitle: "Finance & Insurance Marketing Agency | Compliant Lead Generation",
    seoDescription: "Grow your financial services with compliant digital marketing. Generate qualified leads while maintaining regulatory compliance.",
    heroImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
    detailedDescription: "Navigate complex regulations while growing your financial services business. Our compliant marketing strategies build trust and generate high-quality leads.",
    challenges: [
      "Strict regulatory compliance requirements",
      "Building trust in a skeptical market",
      "Educating consumers on complex products",
      "Competing with established institutions"
    ],
    solutions: [
      "Compliance-approved content marketing",
      "Educational webinars and financial literacy content",
      "Targeted digital advertising within regulations",
      "Trust-building through testimonials and case studies",
      "Retargeting and nurture campaigns"
    ],
    results: {
      stat1: "Average 195% increase in qualified applications",
      stat2: "58% conversion rate improvement",
      stat3: "100% regulatory compliance"
    }
  },
  {
    id: 7,
    name: "Education & E-Learning",
    slug: "education-elearning-marketing",
    description: "Increasing enrollment and student engagement",
    icon: "BookOpen",
    seoTitle: "Education & E-Learning Marketing Services | Student Enrollment",
    seoDescription: "Boost student enrollment with targeted education marketing. Drive course sign-ups and build your institution's brand.",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    detailedDescription: "Increase enrollment and student engagement with education-focused digital marketing strategies. From universities to online course creators, we drive qualified student acquisition.",
    challenges: [
      "Decreasing enrollment rates",
      "Competition from online learning platforms",
      "Demonstrating educational ROI to parents/students",
      "Reaching the right demographic"
    ],
    solutions: [
      "Enrollment funnel optimization",
      "Social media campaigns targeting students and parents",
      "Content marketing showcasing student success stories",
      "Video marketing and virtual campus tours",
      "Scholarship and program-specific landing pages"
    ],
    results: {
      stat1: "Average 185% increase in applications",
      stat2: "42% enrollment rate improvement",
      stat3: "3.8x social engagement"
    }
  },
  {
    id: 8,
    name: "Hospitality & Travel",
    slug: "hospitality-travel-marketing",
    description: "Boosting bookings and guest experiences",
    icon: "Plane",
    seoTitle: "Hospitality & Travel Marketing Agency | Booking Optimization",
    seoDescription: "Increase hotel bookings and travel sales with strategic digital marketing. Drive direct bookings and reduce OTA dependency.",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
    detailedDescription: "Drive direct bookings and reduce OTA commissions with comprehensive hospitality marketing strategies. Perfect for hotels, resorts, travel agencies, and tour operators.",
    challenges: [
      "High OTA commission fees",
      "Seasonal booking fluctuations",
      "Managing online reputation across platforms",
      "Standing out in crowded destinations"
    ],
    solutions: [
      "Direct booking optimization and rate parity management",
      "Metasearch advertising (Google Hotel Ads, TripAdvisor)",
      "Instagram and Pinterest visual marketing",
      "Email marketing for past guests and loyalty programs",
      "Reputation management across review platforms"
    ],
    results: {
      stat1: "Average 220% increase in direct bookings",
      stat2: "38% reduction in OTA dependency",
      stat3: "4.6★ review average"
    }
  },
  {
    id: 9,
    name: "Manufacturing & B2B",
    slug: "manufacturing-b2b-marketing",
    description: "Lead generation and partner acquisition",
    icon: "Factory",
    seoTitle: "Manufacturing & B2B Marketing Services | Industrial Lead Gen",
    seoDescription: "Generate qualified B2B leads for manufacturing companies. Strategic marketing for industrial, wholesale, and B2B businesses.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    detailedDescription: "Drive B2B growth for manufacturing and industrial companies. Our strategies focus on reaching decision-makers, showcasing capabilities, and generating qualified RFQs.",
    challenges: [
      "Complex buyer committees and long sales cycles",
      "Communicating technical capabilities effectively",
      "Limited marketing budgets vs. B2C industries",
      "Finding qualified leads in niche industries"
    ],
    solutions: [
      "LinkedIn and B2B-focused advertising",
      "Technical content marketing and case studies",
      "Trade show marketing and follow-up automation",
      "SEO for industrial keywords and RFQ generation",
      "Video showcasing manufacturing capabilities"
    ],
    results: {
      stat1: "Average 175% increase in qualified RFQs",
      stat2: "52% shorter sales cycles",
      stat3: "2.8x pipeline value"
    }
  },
  {
    id: 10,
    name: "Legal Services",
    slug: "legal-services-marketing",
    description: "Client acquisition and reputation management",
    icon: "Scale",
    seoTitle: "Legal Services Marketing Agency | Law Firm Client Acquisition",
    seoDescription: "Attract more clients to your law firm with ethical, results-driven legal marketing. SEO, PPC, and reputation management for attorneys.",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    detailedDescription: "Grow your law practice with ethical, bar-compliant legal marketing strategies. Generate qualified case leads and establish your firm as a trusted authority.",
    challenges: [
      "Strict bar association advertising rules",
      "Highly competitive local markets",
      "Building trust with potential clients",
      "Managing online reputation and reviews"
    ],
    solutions: [
      "Bar-compliant PPC advertising for legal services",
      "Local SEO for practice area + location rankings",
      "Content marketing demonstrating legal expertise",
      "Reputation management and review generation",
      "Retargeting campaigns for case evaluation leads"
    ],
    results: {
      stat1: "Average 240% increase in case consultations",
      stat2: "65% client acquisition cost reduction",
      stat3: "4.8★ average client reviews"
    }
  },
  {
    id: 11,
    name: "Automotive",
    slug: "automotive-marketing",
    description: "Driving showroom traffic and online sales",
    icon: "Car",
    seoTitle: "Automotive Marketing Services | Dealership Lead Generation",
    seoDescription: "Drive more traffic to your dealership with automotive digital marketing. Increase test drives, service appointments, and vehicle sales.",
    heroImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    detailedDescription: "Rev up your dealership's performance with automotive-specific digital marketing strategies. Drive showroom traffic, service appointments, and online vehicle sales.",
    challenges: [
      "Inventory turnover and margin pressure",
      "Competition from online car buying platforms",
      "Generating both sales and service leads",
      "Multi-location attribution and tracking"
    ],
    solutions: [
      "Google Vehicle Ads and Facebook Automotive Inventory Ads",
      "Local SEO for dealership visibility",
      "Service department marketing and retention campaigns",
      "Video marketing showcasing inventory and test drives",
      "CRM integration with DMS for lead tracking"
    ],
    results: {
      stat1: "Average 205% increase in test drive bookings",
      stat2: "48% service appointment growth",
      stat3: "3.4x online lead generation"
    }
  },
  {
    id: 12,
    name: "Food & Beverage",
    slug: "food-beverage-marketing",
    description: "Building brand loyalty and foot traffic",
    icon: "UtensilsCrossed",
    seoTitle: "Food & Beverage Marketing Services | Restaurant Growth",
    seoDescription: "Grow your restaurant or food brand with targeted digital marketing. Drive reservations, online orders, and customer loyalty.",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    detailedDescription: "Increase foot traffic and online orders with mouth-watering food marketing strategies. Perfect for restaurants, food brands, cafes, and catering businesses.",
    challenges: [
      "Thin profit margins and high competition",
      "Managing online reputation and food delivery apps",
      "Driving repeat customers and loyalty",
      "Seasonal fluctuations in demand"
    ],
    solutions: [
      "Instagram and TikTok food content marketing",
      "Google Business Profile optimization for local search",
      "Online ordering system integration and promotion",
      "Email marketing for loyalty and special offers",
      "Influencer partnerships and user-generated content"
    ],
    results: {
      stat1: "Average 190% increase in reservations",
      stat2: "58% online ordering growth",
      stat3: "4.5★ review average"
    }
  }
];

export const process = [
  {
    id: 1,
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and competitive landscape to create a customized digital marketing strategy."
  },
  {
    id: 2,
    step: "02",
    title: "Planning & Design",
    description: "Our team develops detailed campaign plans, creative assets, and technical infrastructure to support your growth objectives."
  },
  {
    id: 3,
    step: "03",
    title: "Launch & Optimize",
    description: "We execute campaigns with precision, continuously monitoring performance and optimizing for maximum ROI."
  },
  {
    id: 4,
    step: "04",
    title: "Scale & Grow",
    description: "As results improve, we scale successful strategies and explore new opportunities to accelerate your business growth."
  }
];