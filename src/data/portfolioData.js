export const portfolioData = {
  personal: {
    name: "Avinash Gummalla",
    greeting: "Hi, I am Avinash Gummalla",
    role: "AI & ML Undergraduate | Full-Stack Developer",
    status: "AI & ML DEVELOPER",
    tagline: "</CODE FUTURE>",
    availability: "Available for Internships & Full-Time Roles",
    shortBio: "B.Tech student specializing in Artificial Intelligence & Machine Learning at Swarnandhra College of Engineering and Technology. Building intelligent applications and modern full-stack web platforms.",
    fullBio: "Third-year Artificial Intelligence & Machine Learning undergraduate with hands-on experience in full-stack web development (Django, React, PostgreSQL) and practical AI integration. Passionate about designing clean software architectures and deploying intelligent solutions.",
    email: "avinashgummalla2005@gmail.com",
    githubUser: "Avinashgummalla-2005",
    githubUrl: "https://github.com/Avinashgummalla-2005",
    linkedinUrl: "https://www.linkedin.com/in/avinash-gummalla-612219299",
    heroImage: "/assets/hero-avinash.jpg",
    resumePdf: "/AvinashGummalla_Resume.pdf",
    location: "Narsapur, Andhra Pradesh, India",
    college: "Swarnandhra College of Engineering and Technology",
    graduationYear: "2027",
    degree: "B.Tech in Artificial Intelligence & Machine Learning"
  },
  
  stats: [
    { label: "Expected Graduation", value: "2027", suffix: "" },
    { label: "Core Specialization", value: "AI + ML", suffix: "" },
    { label: "Primary Stack", value: "Django + React", suffix: "" },
    { label: "Hackathons", value: "2", suffix: "+" }
  ],

  education: [
    {
      institution: "Swarnandhra College of Engineering and Technology",
      degree: "Bachelor of Technology (B.Tech) - Artificial Intelligence & Machine Learning",
      location: "Narsapur, Andhra Pradesh",
      period: "Aug 2023 – Aug 2027",
      details: "Comprehensive coursework covering Neural Networks, Machine Learning Algorithms, Data Structures, Relational Databases, and Modern Web Application Development."
    }
  ],

  skills: [
    { name: "Python", category: "Core Languages", icon: "Code2", description: "Primary language for AI/ML modeling, automation, and backend development." },
    { name: "Java", category: "Core Languages", icon: "Coffee", description: "Object-oriented programming and data structure implementation." },
    { name: "C", category: "Core Languages", icon: "Cpu", description: "System programming fundamentals, low-level logic, and memory management." },
    { name: "Machine Learning", category: "AI & Data Science", icon: "Brain", description: "Supervised & unsupervised model building, evaluation, and data prep." },
    { name: "Artificial Intelligence", category: "AI & Data Science", icon: "Sparkles", description: "Search algorithms, intelligent agents, and neural network foundations." },
    { name: "React", category: "Frontend Frameworks", icon: "Atom", description: "Modern component-driven UI development with hooks and dynamic state." },
    { name: "Django", category: "Backend Frameworks", icon: "Server", description: "Python backend architecture, ORM, REST APIs, and authentication engines." },
    { name: "MERN Stack", category: "Full Stack", icon: "Layers", description: "MongoDB, Express, React, and Node.js application stack." },
    { name: "Git", category: "Tools & DevOps", icon: "GitBranch", description: "Version control, branching strategies, and codebase maintenance." },
    { name: "GitHub", category: "Tools & DevOps", icon: "Github", description: "Open source collaboration, repository management, and deployment workflows." },
    { name: "SQL", category: "Databases", icon: "Database", description: "Relational database queries, PostgreSQL schemas, and database normalization." },
    { name: "Web Development", category: "Full Stack", icon: "Globe", description: "Responsive layouts, RESTful APIs, CSS styling, and client-server integration." }
  ],

  techStack: [
    {
      id: "python",
      name: "Python",
      icon: "Code2",
      category: "Language",
      description: "Data modeling, Django backends, AI scripts",
      associatedProjects: ["hirehub", "docspot"]
    },
    {
      id: "django",
      name: "Django",
      icon: "Server",
      category: "Backend Framework",
      description: "Batteries-included web framework for rapid development",
      associatedProjects: ["hirehub", "docspot"]
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
      id: "postgresql",
      name: "PostgreSQL",
      icon: "Database",
      category: "Relational Database",
      description: "Enterprise-grade SQL database for complex relational data",
      associatedProjects: ["hirehub", "docspot"]
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: "Database",
      category: "NoSQL Database",
      description: "Document store for flexible schema objects and logs",
      associatedProjects: ["docspot"]
    },
    {
      id: "ml-ai",
      name: "Machine Learning",
      icon: "Brain",
      category: "Core AI",
      description: "Data preprocessing, feature engineering, and model evaluation",
      associatedProjects: []
    },
    {
      id: "git-github",
      name: "Git & GitHub",
      icon: "GitBranch",
      category: "Developer Tools",
      description: "Source code version control and collaborative pipelines",
      associatedProjects: ["hirehub", "docspot"]
    }
  ],

  projects: [
    {
      id: "hirehub",
      title: "HireHub",
      subtitle: "Job Recruitment Portal",
      shortDesc: "Full-stack Django recruitment platform featuring role-based authentication, job posting workflows, and an optimized PostgreSQL database structure.",
      fullDesc: "HireHub is a modern recruitment and job discovery platform designed to connect job seekers with recruiters seamlessly. It features robust user authentication, job posting creation, application tracking, and an optimized PostgreSQL database structure.",
      category: "Full Stack",
      tags: ["Django", "PostgreSQL", "Python", "Auth Engine"],
      techStack: ["Django", "PostgreSQL", "Python", "HTML/CSS"],
      githubUrl: "https://github.com/karthikkuchimanchi10/Hirehub",
      hasRepo: true,
      image: "/assets/hackathons/quantum-valley/image-2.svg",
      architecture: "Django MVT Architecture → PostgreSQL Database → Role-Based Auth Engine",
      features: [
        "Role-based authentication & recruiter/applicant dashboards",
        "Job post creation, filterable listings, and application tracking",
        "Optimized relational PostgreSQL database design",
        "Clean, intuitive web user interface"
      ]
    },
    {
      id: "docspot",
      title: "DocSpot",
      subtitle: "Doctor Appointment Booking System",
      shortDesc: "Healthcare appointment platform connecting patients with doctors, built with a React frontend, Django REST backend, and dual database setup.",
      fullDesc: "DocSpot streamlines healthcare access by allowing patients to search for doctors, view schedules, and book appointments. Built with an interactive React frontend, Django REST APIs, and a dual database architecture leveraging PostgreSQL and MongoDB.",
      category: "Web",
      tags: ["React", "Django", "PostgreSQL", "MongoDB"],
      techStack: ["React", "Django", "PostgreSQL", "MongoDB", "REST API"],
      githubUrl: "https://github.com/Avinashgummalla-2005/DOC_SPOT",
      hasRepo: true,
      image: "/assets/hackathons/asme/image-1.svg",
      architecture: "React SPA Frontend → Django REST API → Dual Persistence (PostgreSQL + MongoDB)",
      features: [
        "Interactive React user interface for booking appointments",
        "Doctor availability calendar & schedule management",
        "User and provider authentication endpoints",
        "Dual persistence layer combining relational PostgreSQL and document MongoDB"
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
      badge: "Hardware-Software Sprint",
      description: "Competed in the ASME Engineering Hackathon, focusing on integrating software intelligence with hardware/sensor data pipelines for real-world application challenges.",
      highlights: [
        "Integrated sensor data flows with software logic",
        "Built rapid software prototypes for engineering problems",
        "Demonstrated technical execution during final evaluation"
      ],
      techUsed: ["Python", "C", "Data Processing", "System Design"],
      folder: "asme",
      images: [
        { url: "/assets/hackathons/asme/image-1.svg", caption: "Hardware & Software Setup" },
        { url: "/assets/hackathons/asme/image-2.svg", caption: "Prototype Testing Sprint" },
        { url: "/assets/hackathons/asme/image-3.svg", caption: "Exhibition & Award Ceremony" }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-django",
      title: "Web Development Using Django",
      provider: "APSCHE",
      badge: "Full-Stack Web",
      date: "2024",
      description: "Certified training covering Django MVT architecture, ORM database querying, authentication views, and web application deployment.",
      skillCategory: "Web Development",
      image: "/assets/hackathons/quantum-valley/image-1.svg"
    },
    {
      id: "cert-cisco",
      title: "Cyber Security",
      provider: "Cisco Academy",
      badge: "Security Fundamentals",
      date: "2024",
      description: "Comprehensive instruction in network security principles, threat mitigation, encryption standards, and application security protocols.",
      skillCategory: "Security",
      image: "/assets/hackathons/asme/image-2.svg"
    },
    {
      id: "cert-ml",
      title: "Machine Learning",
      provider: "Udemy",
      badge: "Artificial Intelligence",
      date: "2024",
      description: "In-depth course covering supervised learning algorithms, regression, classification, model evaluation techniques, and Python ML toolkits.",
      skillCategory: "AI / ML",
      image: "/assets/hackathons/quantum-valley/image-3.svg"
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
