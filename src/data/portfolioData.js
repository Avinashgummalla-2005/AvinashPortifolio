export const portfolioData = {
  personal: {
    name: "Avinash Gummalla",
    greeting: "Hi, I am Avinash Gummalla",
    role: "AI & ML Undergraduate | Full-Stack Developer",
    status: "SOFTWARE DEVELOPER",
    tagline: "</CODE FUTURE>",
    availability: "Available for Internships & Full-Time Roles",
    shortBio: "B.Tech student specializing in Artificial Intelligence & Machine Learning at Swarnandhra College of Engineering and Technology. Building intelligent applications and modern full-stack web platforms.",
    fullBio: "Passionate and motivated Artificial Intelligence and Machine Learning student with a strong background in Python, Machine Learning, Web Development, and problem-solving. Eager to build practical solutions, integrate robust AI models, and contribute effectively to real-world software applications.",
    email: "avinashgummalla2005@gmail.com",
    phone: "9949926223",
    githubUser: "Avinashgummalla-2005",
    githubUrl: "https://github.com/Avinashgummalla-2005",
    linkedinUrl: "https://www.linkedin.com/in/avinash-gummalla-612219299",
    heroImage: "/assets/hero-avinash.jpg",
    resumePdf: "/AvinashGummalla_Resume.pdf",
    location: "Palakollu, West Godavari, Andhra Pradesh, India",
    college: "Swarnandhra College of Engineering and Technology",
    graduationYear: "2027",
    degree: "B.Tech in Artificial Intelligence & Machine Learning (8.95 CGPA)"
  },
  
  stats: [
    { label: "Expected Graduation", value: "2027", suffix: "" },
    { label: "B.Tech CGPA", value: "8.95", suffix: "" },
    { label: "Core Specialization", value: "AI + ML", suffix: "" },
    { label: "Primary Stack", value: "MERN + Django", suffix: "" }
  ],

  experience: [
    {
      role: "MERN Stack Developer Intern",
      company: "SmartBridge",
      location: "Remote – West Godavari, AP, India",
      period: "Apr 2024 – Present",
      bullets: [
        "Developed responsive web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Built reusable frontend components and integrated APIs to create functional full-stack applications."
      ]
    },
    {
      role: "Django Developer Intern",
      company: "APSSDC",
      location: "Remote – West Godavari, AP, India",
      period: "Aug 2023 – Nov 2023",
      bullets: [
        "Developed web applications using Python and Django, following the MVC/MVT architecture.",
        "Worked with databases, templates, forms, and backend logic to build and manage web application features."
      ]
    },
    {
      role: "Cybersecurity Intern",
      company: "Indian Servers",
      location: "Remote",
      period: "Jan 2024 – Aug 2024",
      bullets: [
        "Gained practical knowledge of cybersecurity concepts, web security, and common vulnerabilities.",
        "Worked on security practices and basic vulnerability identification to understand methods for improving security."
      ]
    }
  ],

  education: [
    {
      institution: "Swarnandhra College Of Engineering and Technology",
      degree: "Bachelor of Technology (B.Tech) - Artificial Intelligence & Machine Learning",
      cgpa: "8.95 CGPA",
      location: "Seetharampuram, Andhra Pradesh",
      period: "Sep 2023 – Aug 2027",
      details: "Comprehensive coursework covering Neural Networks, Machine Learning Algorithms, Data Structures, Relational Databases, and Modern Web Application Development."
    },
    {
      institution: "Sri Chaitanya Jr. College",
      degree: "MPC (Mathematics, Physics, Chemistry)",
      cgpa: "81%",
      location: "Palakollu, Andhra Pradesh",
      period: "Aug 2021 – Apr 2023",
      details: "Higher secondary education focusing on advanced mathematics, physics, and chemistry concepts."
    },
    {
      institution: "M.S.K.E.A School",
      degree: "Secondary School Certificate (SSC)",
      cgpa: "9.8 CGPA",
      location: "Kavitam, Andhra Pradesh",
      period: "Oct 2020 – July 2021",
      details: "Secondary education with top academic performance."
    }
  ],

  skills: [
    { name: "Python", category: "Languages", icon: "Code2", description: "Primary language for AI/ML modeling, automation, and backend logic." },
    { name: "Java", category: "Languages", icon: "Coffee", description: "Object-oriented programming and core data structures." },
    { name: "Django", category: "Frameworks", icon: "Server", description: "Python backend architecture, ORM, REST APIs, and authentication engines." },
    { name: "React.js", category: "Frameworks", icon: "Atom", description: "Modern component-driven user interface development." },
    { name: "Express.js & Node.js", category: "Frameworks", icon: "Layers", description: "Backend REST API servers and asynchronous web services." },
    { name: "Machine Learning", category: "AI & Data Science", icon: "Brain", description: "Supervised & unsupervised model building and feature engineering." },
    { name: "MongoDB & PostgreSQL", category: "Databases", icon: "Database", description: "NoSQL document storage and relational database schemas." },
    { name: "Git & GitHub", category: "Tools & DevOps", icon: "GitBranch", description: "Source version control, repository management, and collaboration." }
  ],

  techStack: [
    {
      id: "python",
      name: "Python",
      icon: "Code2",
      category: "Language",
      description: "Data modeling, Django backends, AI scripts",
      associatedProjects: ["hirehub"]
    },
    {
      id: "django",
      name: "Django",
      icon: "Server",
      category: "Backend Framework",
      description: "Batteries-included web framework for rapid development",
      associatedProjects: ["hirehub"]
    },
    {
      id: "react",
      name: "React.js",
      icon: "Atom",
      category: "Frontend Library",
      description: "Declarative, component-based user interface framework",
      associatedProjects: ["docspot"]
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: "Database",
      category: "NoSQL Database",
      description: "Document store for flexible schema objects and healthcare records",
      associatedProjects: ["docspot"]
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      icon: "Database",
      category: "Relational Database",
      description: "Enterprise-grade SQL database for complex relational data",
      associatedProjects: ["hirehub"]
    },
    {
      id: "ml-ai",
      name: "Machine Learning",
      icon: "Brain",
      category: "Core AI",
      description: "Data preprocessing, feature engineering, and predictive algorithms",
      associatedProjects: []
    }
  ],

  projects: [
    {
      id: "hirehub",
      title: "HireHub",
      subtitle: "Job Recruitment Portal",
      shortDesc: "Full-stack Django recruitment platform featuring role-based authentication, job posting workflows, search, application tracking, and PostgreSQL database.",
      fullDesc: "HireHub is a modern recruitment and job discovery platform designed to connect job seekers with recruiters seamlessly. It features robust user authentication, job post creation, applicant tracking, and an optimized PostgreSQL database structure.",
      category: "Full Stack",
      tags: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"],
      techStack: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/karthikkuchimanchi10/Hirehub",
      hasRepo: true,
      image: "/assets/projects/hirehub.jpg",
      architecture: "Django MVT Architecture → PostgreSQL Database → Role-Based Auth Engine",
      features: [
        "Role-based authentication for job seekers and recruiters",
        "Job posting, filterable search, and application workflows",
        "Optimized relational PostgreSQL database design",
        "Clean, intuitive recruitment UI dashboard"
      ]
    },
    {
      id: "docspot",
      title: "DocSpot",
      subtitle: "Doctor Appointment Booking System",
      shortDesc: "Healthcare appointment platform connecting patients with verified doctors, built using MERN (MongoDB, Express, React, Node.js).",
      fullDesc: "DocSpot streamlines healthcare access by allowing patients to search for verified doctors, view specialty services, check schedules, and book appointments online. Built with a React frontend, Node/Express APIs, and MongoDB document store.",
      category: "Web",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Avinashgummalla-2005/DOC_SPOT",
      hasRepo: true,
      image: "/assets/projects/docspot.jpg",
      architecture: "React SPA Frontend → Express/Node REST API → MongoDB Document Persistence",
      features: [
        "Interactive React frontend interface for booking appointments",
        "Doctor availability calendar & schedule management",
        "User and provider authentication endpoints",
        "Full-stack MERN (MongoDB, Express, React, Node.js) implementation"
      ]
    }
  ],

  hackathons: [
    {
      id: "quantum-valley",
      title: "Quantum Valley Hackathon",
      date: "2024",
      category: "AI & Quantum Computing",
      badge: "Innovative Solution",
      description: "Participated in the Quantum Valley Hackathon, collaborating with team members to design and prototype intelligent algorithmic solutions under strict time constraints.",
      highlights: [
        "Collaborated in a fast-paced hackathon sprint",
        "Engineered algorithmic workflow prototypes",
        "Presented solution architecture to mentor panel"
      ],
      techUsed: ["Python", "Machine Learning", "Algorithmic Logic"],
      folder: "quantum-valley",
      images: [
        { url: "/assets/hackathons/quantum-valley/image-1.svg", caption: "Team Prototype & Collaboration" },
        { url: "/assets/hackathons/quantum-valley/image-2.svg", caption: "Live Code Demo & Architecture" },
        { url: "/assets/hackathons/quantum-valley/image-3.svg", caption: "Final Showcase & Review" }
      ]
    },
    {
      id: "asme",
      title: "ASME Hackathon",
      date: "2024",
      category: "Engineering & IoT Integration",
      badge: "24-Hour National Hackathon",
      description: "Competed in the ASME National Engineering Hackathon (Design to Build Challenge), focusing on hardware/software prototyping and technical execution.",
      highlights: [
        "Design to Build Challenge - 24 Hour National Level Hackathon",
        "Integrated sensor data flows with software logic",
        "Demonstrated technical execution during final evaluation"
      ],
      techUsed: ["Python", "C", "Data Processing", "System Design"],
      folder: "asme",
      images: [
        { url: "/assets/hackathons/asme/image-1.jpg", caption: "Design To Build Challenge - ASME Team Showcase" },
        { url: "/assets/hackathons/asme/image-2.jpg", caption: "Design To Build Challenge - SCET 24-Hour Hackathon" },
        { url: "/assets/hackathons/asme/image-3.jpg", caption: "Design To Build Challenge - National Level Hackathon" }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-aws",
      title: "AWS Certified Solutions Architect - Associate",
      provider: "Amazon Web Services",
      badge: "Cloud Architecture",
      date: "2024",
      description: "Certified proficiency in designing cloud architecture, resilient AWS microservices, security protocols, and cost-optimized cloud solutions.",
      skillCategory: "Cloud Computing",
      image: "/assets/projects/hirehub.jpg"
    },
    {
      id: "cert-django",
      title: "Web Development Using Django",
      provider: "APSSDC (Govt of Andhra Pradesh)",
      badge: "Govt Certified Internship",
      certNo: "APSSDC/25/INT/WDD-0715",
      date: "12-05-2025 to 12-07-2025",
      description: "Official Certificate of Completion awarded by Andhra Pradesh State Skill Development Corporation (APSSDC) for successfully completing the Web Development Using Django Summer Online Internship Program 2025 (Cert No: APSSDC/25/INT/WDD-0715).",
      skillCategory: "Web Development",
      image: "/assets/certifications/django.jpg"
    },
    {
      id: "cert-cisco",
      title: "Ethical Hacker",
      provider: "Cisco Networking Academy",
      badge: "Cybersecurity Credentials",
      certNo: "cc06c143-b067-4c5a-a02f-7d02353de027",
      date: "24 May 2026",
      description: "Official Certificate awarded by Cisco Networking Academy for successfully completing the Ethical Hacker program, covering network security practices, vulnerability assessments, and ethical hacking methodology.",
      skillCategory: "Cybersecurity",
      image: "/assets/certifications/cisco.png"
    }
  ],

  currentlyExploring: [
    {
      title: "Artificial Intelligence & Large Language Models",
      icon: "Brain",
      color: "from-purple-500 to-indigo-500",
      description: "Exploring transformer architectures, prompt engineering, RAG (Retrieval-Augmented Generation), and building autonomous AI agent workflows."
    },
    {
      title: "Advanced Machine Learning & Deep Neural Nets",
      icon: "Cpu",
      color: "from-cyan-500 to-blue-500",
      description: "Deepening knowledge of PyTorch, computer vision models, feature engineering pipelines, and hyperparameter tuning for real-world datasets."
    },
    {
      title: "Scalable Cloud Architecture & Full-Stack Systems",
      icon: "Server",
      color: "from-emerald-500 to-teal-500",
      description: "Mastering modern React/Next.js client rendering, containerized deployment, microservice API design, and cloud database optimization."
    }
  ]
};
