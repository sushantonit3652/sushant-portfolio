/**
 * =========================================================================
 * SUSHANT THAKUR — DIGITAL PRODUCT ENGINEER
 * Centralized Portfolio Configuration & Real-World Data Source
 * =========================================================================
 */

const PORTFOLIO_CONFIG = {
  profile: {
    fullName: "Sushant Thakur",
    shortName: "Sushant",
    monogram: "ST.",
    badgeRole: "DIGITAL PRODUCT ENGINEER",
    headlineRole: "React Native & Full-Stack Web Developer",
    availability: "AVAILABLE FOR PROJECTS",
    experienceYears: "2.6+",
    location: "Himachal Pradesh, Chamba, Dalhousie, India",
    phone: "+91 7807268475",
    summary: "React Native & Full-Stack Web Developer with 2+ years of experience engineering mobile apps and web platforms with React.js, Node.js backend, and REST APIs. Production apps deployed to Apple App Store, Google Play, and high-traffic live web domains.",
    aboutHeadline: "Not Just Code. I Build Products.",
    aboutParagraphs: [
      "I am a Mobile & Full-Stack Product Engineer specializing in cross-platform Android and iOS development with React Native, alongside web application engineering with React.js and Node.js backends. With over 2+ years of verified software development experience, I bridge creative UI/UX with scalable server and cloud architecture.",
      "My production work includes SubSource (Virtual Manager) on the Apple App Store, Securely Sync on the Apple App Store, Biorich International on Google Play, the Cinema+ movie ticketing full-stack platform, and Janta Diagnostic Centre (live web portal with Vercel serverless backend).",
      "I hold a Bachelor of Science (Non-Medical) from DAV College Dharamshala, and have a proven record of optimizing React Native modules, engineering robust Node.js REST APIs, and delivering reliable 60fps mobile user experiences."
    ],
    stats: [
      { value: "2+", label: "Years Experience", description: "Mobile & Full-Stack Dev" },
      { value: "06+", label: "Production Projects", description: "App Store, Play Store & Live Web" },
      { value: "60", suffix: "fps", label: "Fluid Performance", description: "Native Smoothness & Micro-interactions" },
      { value: "100", suffix: "%", label: "Cross-Platform", description: "Mobile (iOS/Android) & Web" }
    ]
  },

  contact: {
    email: "sushantthakur.profile@gmail.com",
    phone: "+91 7807268475",
    location: "Dalhousie, Chamba, Himachal Pradesh, India",
    linkedIn: "https://www.linkedin.com/in/sushant-thakur-053261259/",
    gitHub: "https://github.com/sushantonit3652",
    repoUrl: "https://github.com/sushantonit3652/sushant-portfolio.git",
    resumePdf: "assets/docs/Sushant_Thakur_Resume.pdf",
    statusText: "Open to High-Impact Mobile & Full-Stack Engineering Roles"
  },

  skills: {
    mobile: [
      { name: "React Native", level: "Core Expertise", icon: "bi-phone", tag: "Cross-Platform" },
      { name: "React.js", level: "Production", icon: "bi-code-slash", tag: "Web Applications" },
      { name: "Expo & EAS", level: "Production", icon: "bi-box", tag: "CLI & Cloud Build" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "bi-filetype-js", tag: "Core Language" },
      { name: "TypeScript", level: "Production", icon: "bi-filetype-ts", tag: "Type Safety" }
    ],
    backend: [
      { name: "Node.js & Express", level: "Production", icon: "bi-hdd-network", tag: "Backend Server" },
      { name: "Firebase & Firestore", level: "Production", icon: "bi-fire", tag: "Realtime NoSQL & Auth" },
      { name: "Background Geolocation", level: "Expertise", icon: "bi-geo-alt", tag: "GPS & Telemetry" },
      { name: "RESTful APIs", level: "Daily", icon: "bi-arrow-left-right", tag: "API Integration" },
      { name: "Push Notifications", level: "Production", icon: "bi-bell", tag: "FCM & APNs" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Daily Driver", icon: "bi-git", tag: "Version Control" },
      { name: "Android Studio & Xcode", level: "Native Build & Debug", icon: "bi-terminal", tag: "Mobile Tooling" },
      { name: "Postman & VS Code", level: "Primary Tools", icon: "bi-braces", tag: "Development" },
      { name: "Vercel & EAS Cloud", level: "Deployment", icon: "bi-cloud-upload", tag: "CI/CD & Hosting" },
      { name: "Figma UI/UX", level: "Working", icon: "bi-palette", tag: "Interface Design" }
    ]
  },

  projects: [
    {
      id: "subsource",
      number: "01",
      name: "Subsource — Virtual Manager",
      category: "Enterprise Workforce & GPS Telemetry",
      filterCategory: "mobile enterprise",
      liveUrl: "https://apps.apple.com/us/app/subsource-virtual-manager/id6499141041",
      storeLabel: "Apple App Store",
      image: "assets/img/projects/subsource-startshift.png",
      secondaryImages: [
        "assets/img/projects/subsource-stopshift.png",
        "assets/img/projects/subsource-expense.png"
      ],
      icon: "assets/img/projects/subsource-icon.png",
      shortDescription: "An enterprise workforce management application on the Apple App Store featuring GPS tracking, attendance management, shift scheduling, store visit management, offline sync, and live location tracking.",
      longOverview: "Subsource Virtual Manager is an enterprise-grade mobile solution currently live on the Apple App Store. It empowers distributed field teams and managers with one-tap shift clock-ins, battery-efficient background geolocation auditing, satellite tracking, geofenced store visits, and automated timesheet sync.",
      techStack: ["React Native", "Redux Toolkit", "Firestore", "REST APIs", "Background Geolocation", "Google Maps", "Push Notifications", "AsyncStorage"],
      contributions: [
        "Engineered the Start Shift / Clock-in architecture with instant biometric confirmation and satellite telemetry verification.",
        "Implemented high-accuracy background geolocation with battery-saving algorithms for continuous route auditing.",
        "Built store visit in/out logging with precise geofencing perimeters and tamper-resistant offline sync.",
        "Developed comprehensive expense history tracking with interactive calendar and status workflows."
      ],
      caseStudyAvailable: true
    },
    {
      id: "janta-diagnostic",
      number: "02",
      name: "Janta Diagnostic Centre & Blood Bank",
      category: "Healthcare Web Portal & Serverless API",
      filterCategory: "web",
      liveUrl: "https://www.jantadiagnosticscentre.in/",
      githubUrl: "https://github.com/sushantonit3652/janta-diagnostic",
      storeLabel: "Live Website",
      image: "assets/img/projects/janta-live-screen.png",
      logo: "assets/img/projects/janta-logo.png",
      shortDescription: "A full-scale live production healthcare web portal featuring automated diagnostic pathology catalogs, digital X-Ray services, 24x7 blood bank directory, online appointment booking, and Vercel serverless API backend.",
      longOverview: "Janta Diagnostic Centre is a live production healthcare portal serving Noorpur, Bijnor (UP). It provides real-time test catalogs, digital appointment booking with FormSubmit/Vercel serverless function integrations, digital reports access, and 24x7 emergency blood bank contact directories.",
      techStack: ["React / HTML5", "JavaScript", "Bootstrap 5", "Vercel Serverless API", "CSS3", "JSON API"],
      contributions: [
        "Architected full-responsive healthcare web portal with automated pathology test offerings and dynamic search.",
        "Engineered serverless backend API on Vercel handling appointment requests, CORS, and email notification forwarding.",
        "Optimized Lighthouse scores, structured Schema.org MedicalBusiness data, and implemented instant mobile navigation.",
        "Deployed to custom production domain with SSL and continuous deployment."
      ],
      caseStudyAvailable: true
    },
    {
      id: "cinema-plus",
      number: "03",
      name: "Cinema+ — Movie Booking & Discovery Platform",
      category: "Full-Stack Web & Mobile &middot; React + Node.js Backend",
      filterCategory: "web mobile",
      liveUrl: "https://github.com/sushantonit3652/cinema",
      githubUrl: "https://github.com/sushantonit3652/cinema",
      backendGithubUrl: "https://github.com/sushantonit3652/server-cinema",
      storeLabel: "GitHub Repository",
      image: "assets/img/projects/cinema-plus.png",
      secondaryImages: ["assets/img/projects/cinema-blackadam.png"],
      shortDescription: "A full-stack movie discovery and cinema ticketing platform built with React / React Native and a dedicated Node.js + Express backend server.",
      longOverview: "Cinema+ is a complete full-stack movie booking ecosystem featuring movie catalog exploration, detail screens, location-based theater selection, digital mobile ticket generation with QR, user profile management, and a dedicated Node.js/Express REST API server.",
      techStack: ["React.js", "React Native", "Node.js", "Express.js", "REST APIs", "CORS", "Expo"],
      contributions: [
        "Built responsive mobile and web user interface with movie discovery grids, trailers, and showtime schedules.",
        "Engineered the dedicated Node.js + Express backend server (server-cinema) serving movie APIs and booking states.",
        "Implemented digital mobile ticket generation screen with dynamic QR code pass and theater info.",
        "Designed clean REST endpoints handling CORS, showtime data, and user ticket reservations."
      ],
      caseStudyAvailable: true
    },
    {
      id: "airopass",
      number: "04",
      name: "Airopass — Travel, Visa & Flights",
      category: "Travel Technology & Tour Packages",
      filterCategory: "mobile travel",
      liveUrl: "",
      storeLabel: "Mobile Application",
      image: "assets/img/projects/airopass-visa.jpeg",
      secondaryImages: [
        "assets/img/projects/airopass-flight.jpeg",
        "assets/img/projects/airopass-hotel.jpeg",
        "assets/img/projects/airopass-app.jpeg"
      ],
      shortDescription: "A comprehensive travel application featuring digital visa consulting, worldwide hotel and flight bookings, tour packages, multi-currency wallet, and partner mode.",
      longOverview: "Airopass is a multi-vertical travel ecosystem engineered with React Native. It combines tourist visa application processing, live flight searches from DEL/BOM, verified hotel stays in popular destinations like Shimla, tour packages, and partner affiliation desks into a unified mobile interface.",
      techStack: ["React Native", "Expo", "REST APIs", "Firebase", "Redux Toolkit", "Native Maps", "Payment Gateway"],
      contributions: [
        "Architected multi-step visa application desk with document photo capture, compression, and real-time status tracking.",
        "Built responsive flight booking module supporting One Way, Round Trip, and Multi-City cabin selections.",
        "Implemented verified hotel discovery engine with real-time room availability, date pickers, and destination lookups.",
        "Engineered the Partner Mode and dynamic in-app wallet allowing travel agents to process direct bookings."
      ],
      caseStudyAvailable: true
    },
    {
      id: "securely-sync",
      number: "05",
      name: "Securely Sync",
      category: "AI-Driven Workforce Management",
      filterCategory: "mobile enterprise",
      liveUrl: "https://apps.apple.com/in/app/securely-sync/id6745403009",
      storeLabel: "Apple App Store",
      image: "assets/img/projects/securely-sync-screen.png",
      icon: "assets/img/projects/securely-sync-icon.png",
      shortDescription: "An AI-driven workforce management app on the Apple App Store featuring real-time employee management, task management, cloud synchronization, QR code scanning, and push notifications.",
      longOverview: "Securely Sync is a modern workforce management app live on the Apple App Store. It incorporates QR code scanning for fast asset and employee check-ins, real-time task dispatching, and bidirectional cloud-based synchronization.",
      techStack: ["React Native", "QR Code Scanner", "REST APIs", "Push Notifications", "Cloud Sync", "Optimized Modules"],
      contributions: [
        "Built real-time task management workflows and dynamic employee dispatching interfaces.",
        "Integrated high-speed QR code camera scanner for instantaneous worker and checkpoint check-ins.",
        "Boosted overall app performance and frame rates by optimizing React Native native bridge modules and REST caching.",
        "Integrated multi-channel push notifications alerting field staff to priority task assignments."
      ],
      caseStudyAvailable: true
    },
    {
      id: "biorich",
      number: "06",
      name: "Biorich International",
      category: "Business Management & Sales",
      filterCategory: "mobile enterprise",
      liveUrl: "https://play.google.com/store/apps/details?id=com.bio.rich&pcampaignid=web_share",
      storeLabel: "Google Play Store",
      image: "assets/img/projects/biorich-screen.png",
      icon: "assets/img/projects/biorich-icon.png",
      shortDescription: "A business application management tool on Google Play designed to simplify customer management, sales, order processing, and business operations via a mobile app.",
      longOverview: "Biorich International is a production Android application available on Google Play. It streamlines B2B and retail sales operations, order placements, product catalogs, and field customer relationship tracking.",
      techStack: ["React Native", "Android", "REST APIs", "Secure Storage", "State Management"],
      contributions: [
        "Developed customer management and sales tracking modules tailored for field sales reps.",
        "Built smooth product catalog browsing and order placement workflows.",
        "Integrated REST APIs for inventory availability and customer ledger sync."
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
      title: "React.js Web & Full-Stack Development",
      description: "Responsive web applications built with modern React.js, component design systems, and robust Node.js backend integration.",
      icon: "bi-code-slash"
    },
    {
      num: "03",
      title: "REST API & Backend Engineering",
      description: "Robust Node.js and Express backend services, tokenized authentication, secure session handling, and real-time syncing.",
      icon: "bi-arrow-left-right"
    },
    {
      num: "04",
      title: "Firebase & Push Notifications",
      description: "Complete Firebase ecosystems: Authentication, Cloud Firestore, Realtime Database, FCM Push Notifications, and Storage.",
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
      title: "App Maintenance & Optimization",
      description: "Performance bottleneck resolution, memory leak auditing, native dependency upgrades, and crash analytics triage.",
      icon: "bi-tools"
    }
  ],

  experience: [
    {
      period: "Nov 2025 — Apr 2026",
      role: "React Native Developer",
      company: "Business WebSoft Private Limited",
      badge: "Enterprise Mobile",
      description: "Developed SubSource — an enterprise app on the Apple App Store featuring GPS tracking, attendance management, shift scheduling, store visit management, offline sync, and live location tracking. Utilized Redux Toolkit, Firestore, REST APIs, background geolocation, Google Maps, push notifications, and AsyncStorage.",
      technologies: ["React Native", "Redux Toolkit", "Firestore", "Background Geolocation", "Google Maps", "AsyncStorage", "App Store"]
    },
    {
      period: "Sep 2023 — Apr 2025",
      role: "React Native Developer",
      company: "Pixel Bharat LLP",
      badge: "Production Apps",
      description: "Built Securely Sync App on the Apple App Store (AI-driven workforce management with real-time tasks, cloud sync, and QR scanning). Boosted performance by optimizing React Native modules and APIs. Developed Biorich International on Google Play Store, Kutton (restaurant table booking app), and Superwin (skills-based mobile gaming app with wallet and payments).",
      technologies: ["React Native", "REST APIs", "QR Scanner", "Cloud Sync", "Google Play Store", "App Store", "Payment Gateways"]
    },
    {
      period: "May 2023 — Sep 2023",
      role: "React Native Developer Intern (Training)",
      company: "Nama Infotech",
      badge: "Internship",
      description: "Developed reusable UI components using React Native. Worked with REST APIs and JSON data. Mastered React Hooks, navigation, state management, and mobile application architecture.",
      technologies: ["React Native", "JavaScript", "REST APIs", "JSON", "React Navigation"]
    },
    {
      period: "Oct 2022 — Mar 2023",
      role: "Front-End Development Trainee",
      company: "Growing Seed Technologies",
      badge: "Web Training",
      description: "Completed professional training in HTML5, CSS3, JavaScript, and Responsive Web Design. Strengthened problem-solving and front-end development fundamentals.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science: Non Medical",
      institution: "DAV College, Dharamshala, HP",
      period: "Graduated Jun 2022"
    },
    {
      degree: "12th Standard: Non Medical",
      institution: "H.P Board Dharamshala",
      period: "Completed Mar 2019"
    }
  ]
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
