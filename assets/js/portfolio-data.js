/**
 * =========================================================================
 * SUSHANT THAKUR — DIGITAL PRODUCT ENGINEER
 * Centralized Portfolio Configuration & Data Source
 * 
 * Edit your details, projects, experience, skills, and links here.
 * Any updates made here will automatically synchronize across the portfolio.
 * =========================================================================
 */

const PORTFOLIO_CONFIG = {
  profile: {
    fullName: "Sushant Thakur",
    shortName: "Sushant",
    monogram: "ST.",
    badgeRole: "DIGITAL PRODUCT ENGINEER",
    headlineRole: "React Native Developer",
    availability: "AVAILABLE FOR PROJECTS",
    experienceYears: "2.6+",
    location: "India",
    summary: "React Native Developer building modern Android and iOS applications with a focus on performance, usability and real-world business solutions.",
    aboutHeadline: "Not Just Code. I Build Products.",
    aboutParagraphs: [
      "I am a passionate Mobile Product Engineer specializing in cross-platform Android and iOS development with React Native and Expo. With over 2.6 years of hands-on software development experience, I bridge the gap between creative visual design and rock-solid native engineering.",
      "My core strength lies in translating complex business workflows into fluid, 60fps mobile interfaces. From high-accuracy GPS tracking and background geolocation algorithms to full-featured booking and travel platforms with digital wallets, I write clean, maintainable, and battle-tested code.",
      "Beyond UI components, I have extensive experience in REST API integrations, Firebase Authentication & Firestore schemas, complex state management, memory profiling, and end-to-end app store deployment via EAS Build and native tooling."
    ],
    stats: [
      { value: "2.6+", label: "Years Experience", description: "Mobile App Development" },
      { value: "04+", label: "Production Apps", description: "Android & iOS Applications" },
      { value: "60", suffix: "fps", label: "Fluid Performance", description: "Native Smoothness & Micro-interactions" },
      { value: "100", suffix: "%", label: "Cross-Platform", description: "Unified Android & iOS Codebases" }
    ]
  },

  contact: {
    email: "sushantthakur.dev@gmail.com", // Editable email address
    linkedIn: "https://www.linkedin.com/in/sushant-thakur-053261259/",
    gitHub: "https://github.com/sushantonit3652",
    repoUrl: "https://github.com/sushantonit3652/sushant-portfolio.git",
    statusText: "Open to High-Impact Mobile Engineering Roles & Select Freelance Contracts"
  },

  skills: {
    mobile: [
      { name: "React Native", level: "Core Expertise", icon: "bi-phone", tag: "Cross-Platform" },
      { name: "React.js", level: "Advanced", icon: "bi-code-slash", tag: "UI Framework" },
      { name: "Expo", level: "Expertise", icon: "bi-box", tag: "CLI & EAS" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "bi-filetype-js", tag: "Core Language" },
      { name: "TypeScript", level: "Production", icon: "bi-filetype-ts", tag: "Type Safety" }
    ],
    backend: [
      { name: "Firebase Auth", level: "Production", icon: "bi-shield-lock", tag: "Authentication" },
      { name: "Cloud Firestore", level: "Production", icon: "bi-database", tag: "NoSQL DB" },
      { name: "REST APIs", level: "Expertise", icon: "bi-arrow-left-right", tag: "Integration" },
      { name: "Cloudinary", level: "Production", icon: "bi-cloud-arrow-up", tag: "Media CDN" },
      { name: "Node.js Fundamentals", level: "Working Knowledge", icon: "bi-hdd-network", tag: "Backend Runtime" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Daily Driver", icon: "bi-git", tag: "Version Control" },
      { name: "VS Code", level: "Primary IDE", icon: "bi-terminal", tag: "IDE" },
      { name: "Android Studio", level: "Native Build & Debug", icon: "bi-android2", tag: "Android Tooling" },
      { name: "Xcode", level: "iOS Build & Debug", icon: "bi-apple", tag: "iOS Tooling" },
      { name: "EAS Build", level: "Cloud Builds & OTA", icon: "bi-cloud-check", tag: "Expo Services" }
    ]
  },

  projects: [
    {
      id: "airopass",
      number: "01",
      name: "Airopass",
      category: "Travel Technology",
      filterCategory: "mobile travel",
      shortDescription: "A comprehensive travel-focused mobile application with digital visa services, travel insurance, customized tour packages, booking engine, in-app wallet, and partner portal.",
      longOverview: "Airopass was engineered to revolutionize the international travel experience. It simplifies complex visa application procedures, aggregates flight and tour packages, and introduces a frictionless multi-currency wallet with dedicated partner mode for travel agents.",
      techStack: ["React Native", "Expo", "REST APIs", "Firebase", "Redux Toolkit", "Native Maps", "Payment Gateway"],
      contributions: [
        "Architected multi-step visa application flows with instant document photo capture, compression, and client-side validation.",
        "Built dynamic in-app wallet module supporting balance ledger, transaction histories, and seamless booking checkouts.",
        "Implemented dedicated 'Partner Mode' toggle with specialized booking workflows for affiliate agents and business partners.",
        "Integrated responsive tour package discovery catalog with real-time currency conversion and filtering."
      ],
      screens: [
        { title: "Digital Visa Desk", subtitle: "Instant document upload and visa tracking status" },
        { title: "Tour & Flight Booking", subtitle: "Live search, itinerary management & booking" },
        { title: "Travel Wallet & Ledger", subtitle: "Multi-currency balance and quick payment checkouts" }
      ],
      caseStudyAvailable: true
    },
    {
      id: "subsource-tracking",
      number: "02",
      name: "SubSourceTracking",
      category: "Workforce & GPS Technology",
      filterCategory: "mobile enterprise",
      shortDescription: "An enterprise-grade workforce management application enabling high-precision employee clock-in/out, geofenced shift management, automated break tracking, and background GPS location auditing.",
      longOverview: "SubSourceTracking delivers real-time visibility into distributed field workforces. The application ensures accountability through geofenced punch-ins, low-power background location telemetry, and tamper-resistant shift time logs.",
      techStack: ["React Native", "Background Geolocation", "Mapbox / Google Maps", "REST APIs", "Secure Storage", "SQLite Sync"],
      contributions: [
        "Engineered battery-optimized background GPS tracking algorithm maintaining continuous auditing without excessive drain.",
        "Developed geofenced clock-in and clock-out triggers verifying employee presence within assigned project perimeters.",
        "Created an intuitive shift timeline displaying break intervals, overtime calculations, and manager approvals.",
        "Implemented offline-first queue mechanism caching location pings and auto-syncing when connectivity is restored."
      ],
      screens: [
        { title: "Live GPS Map Audit", subtitle: "Real-time field worker route and location trace" },
        { title: "Shift Clock-in Desk", subtitle: "One-tap biometric & geofence attendance verification" },
        { title: "Break & Shift Timesheet", subtitle: "Automated work duration tracking & overtime reporting" }
      ],
      caseStudyAvailable: true
    },
    {
      id: "instaclone",
      number: "03",
      name: "InstaClone",
      category: "Social Media Platform",
      filterCategory: "mobile social",
      shortDescription: "A full-featured social media mobile application with instant user authentication, real-time media feeds, image optimization and upload pipelines, and dynamic follow/unfollow interactions.",
      longOverview: "InstaClone demonstrates high-throughput mobile media delivery and real-time social networking. Built from the ground up to test limits of FlatList virtualization, optimistic UI updates, and real-time Firestore listeners.",
      techStack: ["React Native", "Firebase Auth", "Cloud Firestore", "Cloudinary SDK", "React Navigation", "Animated API"],
      contributions: [
        "Constructed high-speed media upload pipeline using Cloudinary for client-side compression and adaptive streaming.",
        "Built real-time interactive feed leveraging Firestore snapshot listeners with optimistic like and bookmark updates.",
        "Implemented secure biometric & email authentication flows with session state preservation.",
        "Architected smooth gesture-driven image carousels and profile grids matching native 60fps standards."
      ],
      screens: [
        { title: "Photo & Story Stream", subtitle: "Virtualised feed with instant optimistic interactions" },
        { title: "Media Studio", subtitle: "Integrated image filters, crop and Cloudinary upload" },
        { title: "Profile & Follow Graph", subtitle: "Social connections, follower counts and media portfolio" }
      ],
      caseStudyAvailable: true
    },
    {
      id: "enticr",
      number: "04",
      name: "Enticr",
      category: "Mobile Application",
      filterCategory: "mobile",
      shortDescription: "A modern, modular mobile experience focused on dynamic user engagement, personalized content discovery, and clean mobile UI architecture.",
      longOverview: "Enticr was crafted with modularity and extensibility at its center. It showcases scalable React Native design systems, reusable atomic components, and resilient REST API consumption patterns.",
      techStack: ["React Native", "TypeScript", "RESTful Architecture", "Context API", "Custom Reanimated", "Lottie"],
      contributions: [
        "Created fully responsive component design library with strict TypeScript types and standardized tokens.",
        "Engineered smooth micro-interactions and transitions with React Native Reanimated.",
        "Built resilient error-handling boundaries and graceful network degradation handlers.",
        "Optimized app bundle size and cold-start launch times."
      ],
      screens: [
        { title: "Discovery Feed", subtitle: "Personalized curated cards with micro-animations" },
        { title: "Interactive Canvas", subtitle: "Gesture-driven user interactions and engagement widgets" }
      ],
      caseStudyAvailable: true
    }
  ],

  services: [
    {
      num: "01",
      title: "React Native Application Development",
      description: "End-to-end development of high-performance mobile apps from clean architectural blueprints to native device builds.",
      icon: "bi-phone"
    },
    {
      num: "02",
      title: "Android & iOS Cross-Platform",
      description: "Unified codebases delivering authentic native look and feel on both Apple iOS and Google Android platforms without duplicated overhead.",
      icon: "bi-apple"
    },
    {
      num: "03",
      title: "REST API Integration",
      description: "Robust data communication layers, secure JWT/OAuth session handling, pagination, and real-time WebSocket / REST syncing.",
      icon: "bi-arrow-left-right"
    },
    {
      num: "04",
      title: "Firebase Integration",
      description: "Complete Firebase ecosystems: Authentication, Cloud Firestore, Realtime Database, Cloud Messaging, and Storage.",
      icon: "bi-fire"
    },
    {
      num: "05",
      title: "GPS & Location Tracking",
      description: "Production-grade background geolocation, geofencing triggers, live tracking maps, and battery-efficient motion telemetry.",
      icon: "bi-geo-alt"
    },
    {
      num: "06",
      title: "Mobile App UI Implementation",
      description: "Pixel-perfect conversion of Figma/Adobe XD designs into responsive, accessible, 60fps mobile component hierarchies.",
      icon: "bi-palette"
    },
    {
      num: "07",
      title: "App Maintenance & Bug Fixing",
      description: "Performance bottleneck resolution, memory leak auditing, native dependency upgrades, and crash analytics triage.",
      icon: "bi-tools"
    }
  ],

  process: [
    {
      step: "01",
      title: "Understand",
      subtitle: "Deconstruct Requirements",
      description: "Analyze core product objectives, target user personas, technical constraints, and define concrete milestones before writing code."
    },
    {
      step: "02",
      title: "Design",
      subtitle: "Architecture & Wireflows",
      description: "Plan screen navigation hierarchies, state models, data schemas, and establish design system tokens for consistent aesthetics."
    },
    {
      step: "03",
      title: "Develop",
      subtitle: "Component & API Engineering",
      description: "Build clean, reusable React Native components, integrate secure REST/Firebase backends, and maintain strict TypeScript safety."
    },
    {
      step: "04",
      title: "Test",
      subtitle: "Profiling & Device Validation",
      description: "Audit performance on physical Android and iOS hardware, profile JS/UI threads at 60fps, and test edge-case network conditions."
    },
    {
      step: "05",
      title: "Launch",
      subtitle: "EAS Build & Store Readiness",
      description: "Generate optimized release bundles, configure store assets, certificates, and manage deployment to Google Play and Apple App Store."
    }
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "React Native Developer",
      company: "Mobile Engineering Studio / Client Products",
      badge: "Current Role",
      description: "Leading mobile engineering across multiple real-world React Native products including travel booking systems, workforce geolocation tracking platforms, and consumer social apps. Implementing performant architectures, custom hooks, and EAS release pipelines.",
      technologies: ["React Native", "Expo", "TypeScript", "REST APIs", "Firebase", "Redux", "EAS Build"]
    },
    {
      period: "2022 — 2024",
      role: "Associate Mobile Developer",
      company: "Software Development Services",
      badge: "Core Mobile",
      description: "Developed and shipped cross-platform Android and iOS features. Integrated backend REST APIs, implemented authentication flows, crafted complex navigation stacks, and diagnosed device-specific rendering issues.",
      technologies: ["React Native", "JavaScript (ES6+)", "React.js", "Firebase", "Git", "Android Studio", "Xcode"]
    }
  ]
};

// Make available in window scope
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
