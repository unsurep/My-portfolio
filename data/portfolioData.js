const portfolioData = {
  header: {
    name: "Louis Umukoro",
    title: "Web Developer",
    tagline: "Crafting intuitive digital experiences with modern web tools.",
    availability: {
      status: "Open to collaborations",
      location: "Rivers State, Nigeria",
      timezone: "WAT",
      note: "Typically replies within 24 hours.",
    },
    primaryCta: {
      label: "View Case Studies",
      href: "#projects",
    },
    secondaryCta: {
      label: "Let’s Collaborate",
      href: "#contact",
    },
    contactLinks: [
      {
        type: "Email",
        label: "wedevilleg@gmail.com",
        href: "mailto:wedevilleg@gmail.com",
      },
      {
        type: "Phone",
        label: "+234 91 466 7394",
        href: "tel:+234914667394",
      },
      {
        type: "Location",
        label: "Rivers State, Nigeria",
        href: "https://maps.app.goo.gl/9tEUVqUmwyLDyc3U6",
      },
    ],
    socialLinks: [
      {
        type: "LinkedIn",
        href: "https://linkedin.com/in/louisvwede",
      },
      {
        type: "GitHub",
        href: "https://github.com/unsurep",
      },
      {
        type: "TikTok",
        href: "https://www.tiktok.com/@onesureplayer?_t=ZM-8tSCSG1nYjG&_r=1",
      },
      {
        type: "Twitter",
        href: "https://x.com/LVwedee",
      },
      {
        type: "WhatsApp",
        href: "https://wa.me/+2348081808904",
      },
    ],
  },
  about: {
    headline: "Here is a little background",
    summary: [
      "I am Louis, a result-driven professional with 10+ years leading teams across administration, client relations, and operations.",
      "Recently, I upskilled in modern web technologies, pairing my operational expertise with frontend engineering to deliver fast, resilient products.",
      "I build responsive interfaces with HTML5, CSS, Tailwind CSS, JavaScript, React, and Next.js, and pair them with pragmatic backend integrations, authentication, and automation.",
    ],
    highlights: [
      {
        label: "Years in Leadership",
        value: "10+",
      },
      {
        label: "Projects Delivered",
        value: "12",
      },
      {
        label: "Stack Focus",
        value: "Next.js • Tailwind • MongoDB",
      },
    ],
    image: {
      src: "/pic.jpg",
      alt: "Louis Umukoro smiling at the camera",
    },
  },
  experience: [
    {
      title: "Front-end Developer",
      company: "HNG Internship",
      location: "Remote",
      startDate: "Jan 2025",
      endDate: "Present",
      summary:
        "Building customer-facing interfaces, implementing authentication, and collaborating with cross-functional teams during the HNG internship.",
      achievements: [
        "Delivered 6 production-ready UI features with responsive layouts.",
        "Implemented secure authentication flows and improved validation UX.",
        "Collaborated with designers and backend engineers to cut delivery time by 30%.",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "TypeScript"],
      logo: "/profile.png",
    },
    {
      title: "Operations & Admin Lead",
      company: "Multiple Organisations",
      location: "Port Harcourt, NG",
      startDate: "2014",
      endDate: "2024",
      summary:
        "Led administration and operations, optimizing systems and guiding teams across education and non-profit projects.",
      achievements: [
        "Managed cross-functional teams of 15+ and streamlined workflows.",
        "Rolled out digital tools that improved reporting turnaround by 40%.",
        "Launched training initiatives that increased stakeholder satisfaction by 25%.",
      ],
      tech: ["Notion", "Google Workspace", "Airtable"],
      logo: "/pic1.jpg",
    },
  ],
  skills: {
    headline: "Hover to view proficiency",
    categories: [
      {
        name: "Frontend",
        skills: [
          { name: "HTML5", proficiency: 95, icon: "/html.svg" },
          { name: "CSS / Tailwind", proficiency: 92, icon: "/tailwind.svg" },
          { name: "JavaScript", proficiency: 88, icon: "/javascript.svg" },
          { name: "React", proficiency: 86, icon: "/react-svg.svg" },
          { name: "Next.js", proficiency: 82, icon: "/next.svg" },
        ],
      },
      {
        name: "Backend & Data",
        skills: [
          { name: "Node.js", proficiency: 70, icon: "/inodejs.png" },
          { name: "MongoDB", proficiency: 68, icon: "/mongo.svg" },
          { name: "REST APIs", proficiency: 75, icon: "/prompt.png" },
        ],
      },
      {
        name: "Tools & Process",
        skills: [
          { name: "Git / GitHub", proficiency: 85, icon: "/git.svg" },
          { name: "Vercel", proficiency: 80, icon: "/vercel.svg" },
          { name: "VS Code", proficiency: 90, icon: "/ivscode.png" },
        ],
      },
    ],
    currentlyLearning: [
      "TypeScript for safer DX",
      "Component-driven design systems",
      "Testing with Playwright",
    ],
  },
  projects: [
    {
      title: "Blog Platform",
      description:
        "A content-driven blog powered by Next.js with dynamic routes, CMS-ready structure, and responsive UI.",
      url: "https://blog-porject.vercel.app/",
      githubUrl: "https://github.com/unsurep/blog-project",
      role: "Lead Frontend Engineer",
      thumbnail: "/blog.png",
      problem:
        "Needed a performant marketing blog with minimal maintenance overhead.",
      solution:
        "Built incremental static regeneration pages and reusable components, reducing content update time.",
      impact: "Improved lighthouse performance scores to 95+ across the board.",
      tech: ["Next.js", "Tailwind CSS", "Markdown"],
    },
    {
      title: "AdminLTE Dashboard Clone",
      description:
        "A polished AdminLTE-inspired dashboard rebuilt in Next.js with modular components and dark mode.",
      url: "https://adminlte-louis.vercel.app/",
      githubUrl: "https://github.com/unsurep/admin-dashboard-clone",
      role: "Frontend Developer",
      thumbnail: "/adminlte.png",
      problem: "Asked to modernize a dated admin theme for internal analytics.",
      solution:
        "Mapped legacy layout to a scalable component architecture with Tailwind UI patterns.",
      impact: "Cut page build time by 50% for future dashboards.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "PH Hash House Harriers",
      description:
        "Community microsite promoting weekly events with dynamic route pages and interactive galleries.",
      url: "https://ph-h3.netlify.app/",
      githubUrl: "https://github.com/unsurep/ph-h3",
      role: "Designer & Frontend Engineer",
      thumbnail: "/phh3.png",
      problem:
        "Group needed an engaging web presence to boost event participation.",
      solution:
        "Implemented engaging hero sections, event highlights, and CTAs to simplify sign-ups.",
      impact: "Increased event sign-ups by ~35% within the first quarter.",
      tech: ["React", "Tailwind CSS", "Netlify"],
    },
    {
      title: "Prompt Cloud",
      description:
        "AI prompt sharing hub with serverless storage and social discovery features.",
      url: "https://promptopia-lemon-zeta.vercel.app/",
      githubUrl: "https://github.com/unsurep/prompt-cloud",
      role: "Fullstack Developer",
      thumbnail: "/prompt.png",
      problem:
        "Writers needed a way to organise and reuse prompts without friction.",
      solution:
        "Built OAuth-powered dashboard, search, and tag-based filtering with serverless functions.",
      impact:
        "Helped early adopters reduce prompt sourcing time from hours to minutes.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Tesla Marketing Clone",
      description:
        "Pixel-perfect Tesla landing page clone with scroll-triggered animations.",
      url: "https://teslaklon.vercel.app/",
      githubUrl: "https://github.com/unsurep/tesla-clone",
      role: "UI Engineer",
      thumbnail: "/TESLA.png",
      problem:
        "Practice exercise to master parallax scroll effects and responsive video backgrounds.",
      solution:
        "Leveraged Next.js optimized media delivery and modular components for maintainability.",
      impact: "Showcases advanced animation proficiency to potential clients.",
      tech: ["Next.js", "Styled Components", "Framer Motion"],
    },
  ],
  testimonials: [
    {
      name: "Chidinma Okoro",
      role: "Program Coordinator, HNG",
      quote:
        "Louis brings structure, empathy, and a builder’s mindset to every sprint. His deliverables are reliable and always polished.",
    },
    {
      name: "Emeka Adeyemi",
      role: "Product Manager",
      quote:
        "He translates ambiguous briefs into shippable interfaces quickly, and keeps stakeholders aligned throughout the process.",
    },
  ],
  callToAction: {
    message: "Let’s build something purposeful together.",
    subtext:
      "Send a message, book a discovery call, or connect on your favourite platform.",
    primary: { label: "Schedule a Call", href: "https://cal.com/" },
    secondary: {
      label: "Request Resume",
      href: "mailto:wedevilleg@gmail.com?subject=Resume%20Request",
    },
  },
};

export default portfolioData;

