export const personalInfo = {
  name: "Athar Shafi",
  title: "Software Developer",
  tagline: "Building production-grade mobile & web platforms",
  email: "atharshafi24@gmail.com",
  phone: "+971 501736176",
  location: "Discovery Gardens, Dubai, UAE",
  linkedin: "https://www.linkedin.com/in/athar-shafi-3873a61a6/",
  github: "https://github.com/atharshafi",
  portfolio: "https://atharshafi.github.io/Portfolio/",
  dob: "08/04/2001",
  nationality: "Indian",
  visa: "UAE Employment Visa (Company Sponsored)",
  languages: ["English", "Hindi", "Urdu"],
  bio: "Software Developer with experience in enhancing and maintaining production-grade mobile and web platforms using React Native, Angular, ASP.NET, and modern backend technologies. Responsible for upgrading core mobile applications and implementing secure verification, real-time location services, background processing, and API-driven workflows across Android and iOS. Strong in debugging complex system-level issues, performance optimization, and platform stability, with a solid foundation in AI/ML and data-driven system design.",
};

export const skills = {
  "Mobile Development": {
    color: "#00d4ff",
    icon: "📱",
    items: ["React Native", "Android (Java/Kotlin)", "iOS (Swift)", "Native Modules", "Background Services", "App Lifecycle"],
  },
  "Frontend": {
    color: "#7c3aed",
    icon: "🎨",
    items: ["React.js", "Angular", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Redux Toolkit"],
  },
  "Backend": {
    color: "#10b981",
    icon: "⚙️",
    items: ["ASP.NET Core", "Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth"],
  },
  "Databases": {
    color: "#f59e0b",
    icon: "🗄️",
    items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Query Optimization"],
  },
  "AI / ML": {
    color: "#ec4899",
    icon: "🤖",
    items: ["TensorFlow", "Keras", "Scikit-learn", "Time Series", "Feature Engineering", "Model Evaluation"],
  },
  "Cloud & DevOps": {
    color: "#06b6d4",
    icon: "☁️",
    items: ["AWS Rekognition", "Azure", "Docker", "Kubernetes", "CI/CD", "Git/GitHub"],
  },
};

export const experience = [
  {
    id: 1,
    role: "Software Developer",
    type: "Full Time",
    company: "Bin Salem Design",
    location: "Dubai, UAE",
    period: "May 2025 – Present",
    current: true,
    description: "Developing and maintaining a cross-platform employee attendance and live tracking mobile application using React Native with face-recognition–based check-in/check-out integrated with AWS Rekognition and real-time GPS tracking.",
    bullets: [
      "Built face-recognition check-in/check-out using AWS Rekognition integrated with React Native",
      "Implemented real-time GPS tracking with foreground and background services on Android & iOS",
      "Resolved complex issues related to app lifecycle events, location permissions, and battery optimization",
      "Maintained internal employee & project management systems using Angular, ASP.NET, and MS SQL Server",
    ],
    tech: ["React Native", "JavaScript", "AWS Rekognition", "GPS Services", "Angular", "ASP.NET Core", "MS SQL Server", "iOS/Android"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    type: "Intern",
    company: "Acmegrade",
    location: "Noida, India",
    period: "March 2023 – June 2023",
    current: false,
    description: "Contributed to full-stack development of a Resource Management Web Application by building RESTful APIs, managing MySQL database operations, and developing responsive React.js UI components.",
    bullets: [
      "Built and tested RESTful APIs for a resource management platform",
      "Developed responsive React.js UI components with API integration",
      "Managed MySQL database operations and server-side programming",
    ],
    tech: ["JavaScript", "React", "Node.js", "Express.js", "MySQL", "Postman"],
  },
  {
    id: 3,
    role: "Mobile App Developer",
    type: "Intern",
    company: "TCS iON",
    location: "New Delhi, India",
    period: "June 2021 – September 2021",
    current: false,
    description: "Contributed to development of a self-check-in mobile application for hotel customers, gaining hands-on experience in Android development and mobile-to-backend integration.",
    bullets: [
      "Developed a self-check-in app for hotel customers using Android (Java)",
      "Integrated PHP backend with PostgreSQL database",
      "Gained hands-on experience in mobile-to-backend API integration",
    ],
    tech: ["Android Studio", "Java", "PHP", "PostgreSQL", "Postman"],
  },
];

export const education = [
  {
    degree: "Master's in Computer Application",
    school: "Amity University",
    location: "Noida, India",
    period: "2022 – 2024",
    cgpa: "7.50",
    icon: "🎓",
  },
  {
    degree: "Bachelor's in Information Technology",
    school: "Amity University",
    location: "Noida, India",
    period: "2019 – 2022",
    cgpa: "7.31",
    icon: "🏫",
  },
];

export const projects = [
  {
    id: 1,
    title: "Employee Attendance & Live Tracking App",
    category: "Mobile",
    description: "Cross-platform attendance system with face-recognition check-in/check-out via AWS Rekognition and real-time GPS tracking with foreground/background services.",
    tech: ["React Native", "AWS Rekognition", "GPS", "Android", "iOS", "REST APIs"],
    color: "#00d4ff",
    icon: "📍",
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Full-Stack Blog Platform",
    category: "Web",
    description: "Blog application with user authentication and full CRUD functionality, featuring modern UI and secure API architecture.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    color: "#7c3aed",
    icon: "✍️",
    featured: true,
    github: "https://github.com/atharshafi",
    demo: "#",
  },
  {
    id: 3,
    title: "E-Commerce Web Application",
    category: "Web",
    description: "Full-stack e-commerce platform with JWT authentication, product catalog, cart management, order tracking and order history.",
    tech: ["React", "FastAPI", "PostgreSQL", "Python", "Tailwind CSS"],
    color: "#10b981",
    icon: "🛒",
    featured: true,
    github: "https://github.com/atharshafi",
    demo: "#",
  },
  {
    id: 4,
    title: "AI News Scraper Application",
    category: "AI/Web",
    description: "Full-stack application that scrapes AI-related articles from multiple sources with search functionality and intelligent categorization.",
    tech: ["React", "FastAPI", "SQLite", "Python", "Tailwind CSS"],
    color: "#f59e0b",
    icon: "🤖",
    featured: false,
    github: "https://github.com/atharshafi",
    demo: "#",
  },
  {
    id: 5,
    title: "Plant Disease Prediction App",
    category: "AI/Mobile",
    description: "Plant disease prediction using deep learning (Keras/TensorFlow) deployed as a real-time Android application with Java.",
    tech: ["Python", "TensorFlow", "Keras", "Java", "Android Studio"],
    color: "#ec4899",
    icon: "🌿",
    featured: false,
    github: "https://github.com/atharshafi",
    demo: "#",
  },
  {
    id: 6,
    title: "Hotel Booking Cancellation Prediction",
    category: "ML",
    description: "Capstone ML project to predict hotel booking cancellations and identify key influencing factors for policy optimization.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    color: "#06b6d4",
    icon: "🏨",
    featured: false,
    github: "https://github.com/atharshafi",
    demo: "#",
  },
];

export const certifications = [
  {
    title: "Training in Artificial Intelligence and Machine Learning",
    issuer: "Learners Point Academy, Dubai",
    note: "KHDA-Attested",
    period: "Mar 2025 – Jun 2025",
    hours: "65 hours hands-on training",
    icon: "🧠",
  },
  {
    title: "Introduction to Industry 4.0 and Industrial IoT",
    issuer: "NPTEL – IIT Kharagpur",
    period: "2023",
    icon: "⚙️",
  },
  {
    title: "Introduction to Professional Scientific Communication",
    issuer: "NPTEL – IIT Kharagpur",
    period: "2024",
    icon: "📝",
  },
];

export const publications = [
  {
    title: "Plant Health Monitoring System using Machine Learning",
    icon: "🌱",
  },
  {
    title: "Passwordless Login Authentication using Elliptic Curve Cryptographic Techniques (Blockchain)",
    icon: "🔐",
  },
];
