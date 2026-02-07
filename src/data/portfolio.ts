export const personalInfo = {
  name: "Alejandro Vaquero Toba",
  title: "Software Engineer",
  email: "vaquero.alejandro19@gmail.com",
  phone: "+34 607 882 218",
  location: "Madrid, Spain",
  birthDate: "19/04/1999",
  github: "https://github.com/AlexVaquero19",
  linkedin: "https://www.linkedin.com/in/alexvaquero19/",
  portfolio: "https://alexvaquero19.github.io/portfolio/",
};

export const about = {
  tagline: "Crafting Robust with .NET",
  description: "I'm a Software Engineer with 4+ years of experience building mission-critical applications for aerospace and logistics industries. I transform complex requirements into scalable, high-performance solutions.",
  story: [
    "I fell in love with programming during my vocational training, where I discovered that <strong class='text-slate-900 dark:text-white'>solving complex problems with elegant code</strong>.",
    "What drives me? The challenge of taking messy, real-world requirements and transforming them into <strong class='text-slate-900 dark:text-white'>clean, scalable, and maintainable solutions</strong>. I've built emergency management systems for maritime rescue, desktop applications for Airbus aerospace systems, and logistics platforms handling thousands of daily transactions.",
    "I specialize in the <strong class='text-brand-500'>.NET ecosystem</strong> because it offers the perfect balance of power, flexibility, and enterprise reliability. From Blazor web apps to WPF desktop solutions, I leverage modern frameworks to build software that <strong class='text-slate-900 dark:text-white'>actually works under pressure</strong>.",
    "Beyond code, I'm passionate about <strong class='text-slate-900 dark:text-white'>continuous learning</strong>. Technology evolves rapidly, and I make it a priority to stay current with industry trends, best practices, and emerging tools."
  ],
  expertise: [
    {
      icon: "fas fa-rocket",
      title: "Full-Stack .NET Development",
      description: "Building robust web applications with Blazor, ASP.NET, and modern frontend frameworks. From database design to UI/UX.",
      color: "from-brand-500/10 to-cyan-500/10",
      borderColor: "border-brand-500/20",
      bgColor: "bg-brand-500"
    },
    {
      icon: "fas fa-cogs",
      title: "API & Microservices",
      description: "Designing RESTful APIs and SOAP services that power enterprise systems. Clean architecture, optimal performance.",
      color: "from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/20",
      bgColor: "bg-blue-500"
    },
    {
      icon: "fas fa-database",
      title: "Database Architecture",
      description: "SQL Server optimization, complex queries, and data modeling for high-performance applications.",
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      bgColor: "bg-purple-500"
    },
    {
      icon: "fas fa-code-branch",
      title: "Agile & DevOps",
      description: "Working in agile teams with Git workflows, CI/CD pipelines, and modern development practices.",
      color: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      bgColor: "bg-orange-500"
    }
  ]
};

export const stats = [
  { value: "4+", label: "Years Experience" }
];

export const experience = [
  {
    position: "C# .NET Programmer",
    company: "Airbus Crisa",
    period: "January 2025 - Present",
    location: "Madrid",
    current: true,
    achievements: [
      "Building <strong class='text-slate-900 dark:text-white'>modern web applications with Blazor and .NET 8</strong> for internal aerospace systems",
      "Implementing <strong class='text-slate-900 dark:text-white'>MudBlazor and Radzen component libraries</strong> for enhanced UX",
      "Managing and optimizing <strong class='text-slate-900 dark:text-white'>SQL Server databases</strong> for mission-critical applications"
    ],
    technologies: ["Blazor", ".NET 8", "SQL Server", "MudBlazor"],
    icon: "fa-solid fa-satellite",
    iconColor: "text-brand-500"
  },
  {
    position: "C# .NET Programmer",
    company: "FM Logistic",
    period: "July 2023 - December 2024",
    location: "Toledo",
    current: false,
    achievements: [
      "Maintained internal ASP.NET Framework application <strong class='text-slate-900 dark:text-white'>serving 500+ daily users</strong>",
      "Developed and maintained <strong class='text-slate-900 dark:text-white'>RESTful web services in .NET 6</strong> and .NET Framework",
      "Created custom features for new clients, <strong class='text-slate-900 dark:text-white'>improving operational efficiency by 30%</strong>"
    ],
    technologies: ["ASP.NET", ".NET 6", "Web Services"],
    icon: "fa-solid fa-truck",
    iconColor: "text-amber-500"
  },
  {
    position: "C# .NET Programmer",
    company: "Orbital Critical Systems (Airbus)",
    period: "March 2022 - July 2023",
    location: "Madrid",
    current: false,
    achievements: [
      "Developed <strong class='text-slate-900 dark:text-white'>WPF desktop applications with .NET 6</strong> for aerospace critical systems",
      "Worked in <strong class='text-slate-900 dark:text-white'>Agile methodology</strong> with sprint planning and daily standups",
      "Implemented <strong class='text-slate-900 dark:text-white'>MVVM pattern with Material Design</strong> for intuitive interfaces"
    ],
    technologies: ["WPF", ".NET 5", "MVVM", "Agile"],
    icon: "fas fa-rocket",
    iconColor: "text-purple-500"
  },
  {
    position: "C# .NET Programmer",
    company: "GMV",
    period: "September 2021 - March 2022",
    location: "Madrid",
    current: false,
    achievements: [
      "Built <strong class='text-slate-900 dark:text-white'>emergency management system for Spanish maritime rescue</strong> with C# .NET and SQL Server",
      "Created <strong class='text-slate-900 dark:text-white'>Python web scraping scripts</strong> to collect vessel data and images",
      "Developed <strong class='text-slate-900 dark:text-white'>public-facing web portal</strong> with SOAP API for emergency data access"
    ],
    technologies: ["C# .NET", "Python", "SQL Server", "SOAP"],
    icon: "fas fa-anchor",
    iconColor: "text-blue-500"
  }
];

export const education = [
  {
    degree: "Web Application Development",
    institution: "IES Domenico Scarlatti",
    type: "Higher Vocational Training (CFGS)",
    year: "2021",
    icon: "fas fa-graduation-cap",
    color: "bg-brand-500"
  },
  {
    degree: "English B2-C1 Certificate",
    institution: "Language Official School",
    type: "Professional Working Proficiency",
    year: "2021",
    icon: "fas fa-language",
    color: "bg-blue-500"
  },
  {
    degree: "Network & Microcomputer Systems",
    institution: "Centro Hease Villaverde",
    type: "Medium Vocational Training (CFGM)",
    year: "2018",
    icon: "fas fa-network-wired",
    color: "bg-purple-500"
  }
];

export const courses = [
  {
    name: "SQL From Zero",
    platform: "OpenWebinars",
    icon: "fas fa-database"
  },
  {
    name: "HTML5, CSS3 & JavaScript",
    platform: "Udemy",
    icon: "fas fa-code"
  }
];

export const skills = {
  backend: [
    { name: "C# .NET", level: "EXPERT", icon: "fas fa-circle", color: "text-brand-500 dark:text-brand-800" },
    { name: "Blazor", level: "EXPERT", icon: "fas fa-circle", color: "text-brand-500 dark:text-brand-800" },
    { name: "ASP.NET", level: "EXPERT", icon: "fas fa-circle", color: "text-brand-500 dark:text-brand-800" },
    { name: "Python", level: "ADVANCED", icon: "fas fa-circle", color: "text-cyan-700" },
    { name: "Astro", level: "INTERMEDIATE", icon: "fas fa-circle", color: "text-slate-600" },
    { name: "PHP & Symfony", level: "INTERMEDIATE", icon: "fas fa-circle", color: "text-slate-600" }
  ],
  frontend: [
    { name: "HTML5", level: "EXPERT", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3 & SASS", level: "EXPERT", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", level: "ADVANCED", icon: "fab fa-js", color: "text-yellow-500" },
    { name: "Bootstrap / Tailwind", level: "ADVANCED", icon: "fab fa-bootstrap", color: "text-purple-500" },
    { name: "jQuery", level: "ADVANCED", icon: "fas fa-code", color: "text-cyan-700" },
    { name: "MudBlazor / Radzen", level: "ADVANCED", icon: "fas fa-layer-group", color: "text-brand-500 dark:text-brand-800" }
  ],
  database: [
    { name: "SQL Server", level: "EXPERT", icon: "fas fa-database", color: "text-red-500" },
    { name: "Git", level: "EXPERT", icon: "fab fa-git-alt", color: "text-orange-500" },
    { name: "GitHub", level: "EXPERT", icon: "fab fa-github", color: "text-slate-900 dark:text-white" },
    { name: "REST APIs", level: "EXPERT", icon: "fas fa-network-wired", color: "text-green-500" },
    { name: "MySQL", level: "ADVANCED", icon: "fas fa-database", color: "text-blue-500" },
    { name: "SOAP", level: "ADVANCED", icon: "fas fa-code", color: "text-purple-500" }
  ]
};

export const tools = [
  { name: "Visual Studio", icon: "fas fa-code", color: "text-purple-500" },
  { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
  { name: "DBeaver", icon: "fas fa-database", color: "text-orange-500" },
  { name: "Postman", icon: "fas fa-paper-plane", color: "text-amber-500" }
];

export const interests = [
  { name: "Video Games", icon: "fas fa-gamepad" },
  { name: "Basketball", icon: "fas fa-basketball-ball" },
  { name: "Photography", icon: "fas fa-camera" },
  { name: "Always Learning", icon: "fa-solid fa-book", italic: true }
];

export const projects = [
  {
    title: "Maritime Emergency Data Catalog",
    company: "Spanish Maritime Rescue Services",
    description: "Public data portal providing access to 6+ years of maritime emergency and rescue operations across Spain. Built for Spanish Maritime Rescue Services.",
    featured: true,
    status: "Production",
    link: "https://datos.salvamentomaritimo.es/Emergencias",
    linkType: "external",
    achievements: [
      "Developed complete SOAP API for emergency data distribution",
      "Created public web interface with multiple export formats (CSV, JSON, XML)",
      "Implemented Python web scraping for automated vessel data collection"
    ],
    technologies: ["ASP.NET", "SOAP API", "SQL Server", "Python", "Selenium"],
    mainTech: "ASP.NET"
  },
  {
    title: "Wallpaper Automation",
    description: "Advanced Python tool using Selenium for automated high-resolution wallpaper discovery and synchronization across devices.",
    featured: false,
    status: "Open Source",
    link: "https://github.com/AlexVaquero19/ScrapingWallpapers",
    linkType: "github",
    achievements: [
      "Automated scraping with retry logic",
      "Image quality filtering & sorting"
    ],
    technologies: ["Python", "Selenium"]
  },
  {
    title: "Python Full-Stack Course",
    description: "Comprehensive Python application development course covering backend, frontend, databases, and containerization. Includes Jupyter notebooks and practical examples.",
    featured: false,
    status: "Education",
    link: "https://github.com/AlexVaquero19/Python_Course",
    linkType: "github",
    achievements: [
      "Backend development with Python",
      "Frontend with HTML/CSS/JS",
      "Database integration",
      "Docker containerization"
    ],
    technologies: ["Python", "JavaScript", "HTML/CSS", "Docker", "Jupyter"]
  }
];
