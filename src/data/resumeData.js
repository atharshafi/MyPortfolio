export const personalInfo = {
  name: "Athar Shafi",
  title: "Software Developer",
  roles: [
    "Mobile App Developer",
    "Full-Stack Engineer",
    "React Native Specialist",
    "AI/ML Enthusiast",
    "Backend Architect",
  ],
  summary:
    "Software Developer with experience in enhancing and maintaining production-grade mobile and web platforms using React Native, Angular, ASP.NET, and modern backend technologies. Responsible for upgrading core mobile applications and implementing secure verification, real-time location services, background processing, and API-driven workflows across Android and iOS. Strong in debugging complex system-level issues, performance optimization, and platform stability, with a solid foundation in AI/ML and data-driven system design.",
  dob: "08/04/2001",
  email: "atharshafi24@gmail.com",
  phone: "+971 501736176",
  location: "Discovery Gardens, Dubai, UAE",
  nationality: "Indian",
  visa: "UAE Employment Visa (Company Sponsored)",
  languages: ["English", "Hindi", "Urdu"],
  portfolio: "https://atharshafi.github.io/Portfolio/",
  linkedin: "https://www.linkedin.com/in/athar-shafi-3873a61a6/",
  github: "https://github.com/atharshafi",
};

export const skills = {
  mobile: [
    { name: "React Native", level: 92 },
    { name: "Android (Java/Kotlin)", level: 80 },
    { name: "iOS Integration", level: 65 },
    { name: "Native Module Integration", level: 78 },
    { name: "App Lifecycle Handling", level: 85 },
  ],
  frontend: [
    { name: "React.js", level: 88 },
    { name: "Angular", level: 78 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Redux Toolkit", level: 75 },
  ],
  backend: [
    { name: "ASP.NET Core (C#)", level: 82 },
    { name: "Node.js / Express.js", level: 78 },
    { name: "FastAPI (Python)", level: 75 },
    { name: "JWT Authentication", level: 85 },
    { name: "RESTful APIs", level: 90 },
  ],
  database: [
    { name: "SQL Server / PostgreSQL", level: 82 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 72 },
    { name: "SQLite", level: 75 },
    { name: "Query Optimization", level: 70 },
  ],
  aiml: [
    { name: "Scikit-learn", level: 75 },
    { name: "TensorFlow / Keras", level: 72 },
    { name: "Feature Engineering", level: 70 },
    { name: "Time Series Analysis", level: 68 },
    { name: "Pandas / NumPy", level: 78 },
  ],
  cloud: [
    { name: "AWS (Rekognition)", level: 65 },
    { name: "Azure", level: 55 },
    { name: "Docker", level: 60 },
    { name: "Git / GitHub", level: 88 },
    { name: "CI/CD Pipelines", level: 58 },
  ],
};

export const experience = [
  {
    id: 1,
    title: "Software Developer — Full Time",
    company: "Bin Salem Design",
    location: "Dubai, UAE",
    period: "May 2025 — Present",
    current: true,
    color: "#00e5ff",
    highlights: [
      "Developing and maintaining a cross-platform employee attendance and live tracking mobile application using React Native with face-recognition–based check-in/check-out integrated with AWS Rekognition.",
      "Implementing real-time GPS tracking with foreground and background services for Android and iOS.",
      "Performing testing, debugging, and production releases while resolving app lifecycle events, location permissions, battery optimization, and UI state synchronization.",
      "Enhancing and maintaining internal employee and project management systems using Angular, ASP.NET, and MS SQL Server.",
    ],
    tech: ["React Native", "AWS Rekognition", "GPS Services", "Angular", "ASP.NET Core", "MS SQL Server", "Git"],
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern",
    company: "Acmegrade",
    location: "Noida, India",
    period: "March 2023 — June 2023",
    current: false,
    color: "#a78bfa",
    project: "Resource Management Web Application",
    highlights: [
      "Contributed to full-stack development by building and testing RESTful APIs.",
      "Managed MySQL database operations and developed responsive React.js UI components.",
      "Gained hands-on experience in API integration and server-side programming.",
    ],
    tech: ["JavaScript", "React.js", "Node.js", "Express.js", "MySQL", "Postman"],
  },
  {
    id: 3,
    title: "Mobile Application Developer Intern",
    company: "TCS iON",
    location: "New Delhi, India",
    period: "June 2021 — September 2021",
    current: false,
    color: "#10b981",
    project: "Self Check-in App for Hotel Customers",
    highlights: [
      "Contributed to development of a self-check-in mobile application for hotel customers.",
      "Gained hands-on experience in Android development and mobile-to-backend integration.",
    ],
    tech: ["Android Studio", "Java", "PHP", "PostgreSQL", "Postman"],
  },
];

export const education = [
  {
    degree: "Master's in Computer Application",
    institution: "Amity University",
    location: "Noida, India",
    period: "2022 — 2024",
    color: "#00e5ff",
  },
  {
    degree: "Bachelor's in Information Technology",
    institution: "Amity University",
    location: "Noida, India",
    period: "2019 — 2022",
    color: "#a78bfa",
  },
];

export const projects = [
  {
    id: 1,
    title: "Employee Attendance & Live Tracking App",
    description:
      "Cross-platform mobile app with face-recognition check-in/check-out using AWS Rekognition and real-time GPS tracking with foreground/background services.",
    longDescription:
      "A production-grade React Native mobile application for employee attendance management featuring AWS Rekognition-powered face recognition for secure check-in/check-out, live GPS tracking that continues in background mode, and battery-optimized location services for both Android and iOS platforms.",
    tech: ["React Native", "AWS Rekognition", "GPS", "Android", "iOS", "REST API"],
    color: "#00e5ff",
    category: "Mobile",
    featured: true,
    github: "https://github.com/atharshafi",
    icon: "📍",
  },
  {
    id: 2,
    title: "Full-Stack Blog Platform",
    description:
      "Blog application with user authentication, full CRUD functionality, and clean modern UI.",
    longDescription:
      "A complete blog platform featuring secure user authentication, full CRUD operations for posts, comment system, and a responsive modern interface built from scratch.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    color: "#a78bfa",
    category: "Full-Stack",
    featured: true,
    github: "https://github.com/atharshafi",
    icon: "✍️",
  },
  {
    id: 3,
    title: "E-Commerce Web Application",
    description:
      "Full-stack e-commerce platform with JWT authentication, product catalog, cart, orders, and order history.",
    longDescription:
      "A comprehensive e-commerce solution built with React frontend and FastAPI backend, featuring JWT-based authentication, product catalog management, shopping cart, order processing, and complete order history tracking with PostgreSQL database.",
    tech: ["React.js", "FastAPI", "PostgreSQL", "Python", "Tailwind CSS", "JWT"],
    color: "#10b981",
    category: "Full-Stack",
    featured: true,
    github: "https://github.com/atharshafi",
    icon: "🛒",
  },
  {
    id: 4,
    title: "AI News Scraper Application",
    description:
      "Full-stack app that scrapes AI-related articles from multiple sources with search functionality.",
    longDescription:
      "An intelligent news aggregation platform that scrapes AI-related articles from multiple web sources, stores them in SQLite, and provides a React-powered search interface with FastAPI backend.",
    tech: ["React.js", "FastAPI", "SQLite", "Python", "Tailwind CSS", "Web Scraping"],
    color: "#f59e0b",
    category: "AI / Full-Stack",
    featured: false,
    github: "https://github.com/atharshafi",
    icon: "🤖",
  },
  {
    id: 5,
    title: "Plant Disease Prediction App",
    description:
      "Plant disease prediction using Keras/TensorFlow deployed as a real-time Android app.",
    longDescription:
      "An AI-powered plant disease detection system that uses a Keras/TensorFlow deep learning model trained on plant images, deployed as a real-time Android application built in Java with live camera integration.",
    tech: ["Python", "TensorFlow", "Keras", "Android", "Java", "CNN"],
    color: "#84cc16",
    category: "AI / Mobile",
    featured: false,
    github: "https://github.com/atharshafi",
    icon: "🌿",
  },
  {
    id: 6,
    title: "Hotel Booking Cancellation Predictor",
    description:
      "ML models to predict booking cancellations and identify key influencing factors for policy optimization.",
    longDescription:
      "Capstone project building and evaluating multiple ML models (Random Forest, XGBoost, Logistic Regression) to predict hotel booking cancellations, with feature importance analysis to guide hotel policy optimization strategies.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "XGBoost", "Feature Engineering"],
    color: "#f43f5e",
    category: "Machine Learning",
    featured: false,
    github: "https://github.com/atharshafi",
    icon: "📊",
  },
];

export const certifications = [
  {
    title: "Training in AI & Machine Learning",
    issuer: "Learners Point Academy, Dubai",
    date: "Mar 2025 — Jun 2025",
    detail: "KHDA-Attested • 65 hours hands-on training",
    color: "#00e5ff",
  },
  {
    title: "Introduction to Industry 4.0 & IIoT",
    issuer: "NPTEL — IIT Kharagpur",
    date: "2023",
    detail: "National Programme on Technology Enhanced Learning",
    color: "#a78bfa",
  },
  {
    title: "Introduction to Professional Scientific Communication",
    issuer: "NPTEL — IIT Kharagpur",
    date: "2024",
    detail: "National Programme on Technology Enhanced Learning",
    color: "#10b981",
  },
];

export const publications = [
  {
    title: "Plant Health Monitoring System using Machine Learning",
    type: "Research Paper",
    color: "#10b981",
  },
  {
    title: "Passwordless Login Authentication using Elliptic Curve Cryptographic Techniques (Blockchain)",
    type: "Research Paper",
    color: "#a78bfa",
  },
];
