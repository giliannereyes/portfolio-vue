export const portfolio = {
  meta: {
    name: 'Gilianne Reyes',
    label: 'Computer Science Student',
    tagline: 'Aspiring software developer who loves building for the web, exploring game development, and experimenting with AI.',
    about: [
    'I’m a computer science student focused on building solid fundamentals while working on practical projects. Most of my work revolves around web development, where I enjoy turning ideas into clean, functional applications.',
    'Outside the web, I explore game development and experiment with machine learning to better understand how interactive systems and intelligent models are built.'
]   ,
  },
  links: {
    email: 'mailto:giliannekatereyes@yahoo.com',
    github: 'https://github.com/giliannereyes',
    linkedin: 'https://www.linkedin.com/in/giliannereyes/',
    cv: '/resume_eng.pdf',
    source: 'https://github.com/giliannereyes/portfolio-vue',
  },
  navLinks: [
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Experience', url: '#experience' },
    { name: 'Tech Stack', url: '#skills' },
    { name: 'GitHub', url: '#github-stats' },
    { name: 'Contact', url: '#contact' },
  ],
  experiences: [
    {
      period: '2024 - 2027',
      role: 'BSc in Computer Science',
      company: 'NTNU',
      summary:
        'Pursuing a Bachelor’s degree with focus on algorithms, data structures, software engineering, mathematics, and systems development. Building strong foundations in both theoretical concepts and practical programming.',
    },
    {
      period: '2025 - Present',
      role: 'Teaching Assistant',
      company: 'NTNU',
      summary:
        'Supporting programming and mathematics courses through student guidance, problem-solving, and assignment feedback.',
    },
  ],
  skills: [
    'Java',
    'Python',
    'TypeScript',
    'JavaScript',
    'C',
    'C++',
    'React',
    'Vue',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Spring Boot',
    'REST APIs',
    'Supabase',
    'PostgreSQL',
    'MySQL',
    'Docker',
    'Linux',
    'Git',
    'GitHub',
    'GitHub Actions',
    'Vercel',
    'Wireshark',
  ],
  // Project descriptions: max 200 characters to keep card heights consistent.
  projects: [
    {
      title: 'Internal Control System',
      description:
        'A full-stack system for managing internal controls, organizational processes, and compliance-related work, designed to support clear oversight, consistent workflows, and accountability.',
      tech: ['Vue', 'Spring Boot', 'H2'],
      github: 'https://github.com/giliannereyes/idatt2105-internal-control-system',
      featured: true,
      order: -1,
    },
    {
      title: 'CRDT',
      description:
        'A Python CRDT library with a peer-to-peer WebSockets demo that shows conflict-free state replication, eventual consistency, and convergence across independently connected distributed replicas.',
      tech: ['Python', 'WebSockets', 'Hypothesis'],
      github: 'https://github.com/giliannereyes/crdt',
      featured: false,
      order: 1,
    },
    {
      title: 'Markdown Editor',
      description:
        'A browser-based Markdown editor with live preview, focused editing tools, and an intuitive workspace for drafting, formatting, and reviewing Markdown content in real time.',
      tech: ['vue', 'supabase', 'Markdown'],
      github: 'https://github.com/giliannereyes/markdown-editor',
      featured: false,
      order: 2,
    },
    {
      title: 'Personal Portfolio',
      description:
        'A responsive personal portfolio built with Vue, presenting selected projects, technical skills, experience, and contact links in a polished, accessible single-page experience.',
      tech: ['Vue'],
      github: 'https://github.com/giliannereyes/portfolio-vue',
      live: 'giliannereyes.com',
      featured: false,
      order: 3,
    },
    {
      title: 'Pomodoro Timer',
      description:
        'A Vue-based Pomodoro timer that lets users configure work and break durations, move through focus cycles, and use a simple interface to build consistent study habits.',
      tech: ['Vue'],
      github: 'https://github.com/giliannereyes/pomodoro-vue',
      live: 'https://giliannereyes.github.io/pomodoro-vue/',
      featured: false,
      order: 4,
    },
    {
      title: 'Image to Puzzle',
      description:
        'A Vue-based web app that transforms uploaded images into a puzzle. Users can customize difficulty, rearrange tiles with drag-and-drop, and solve dynamically generated puzzles directly in the browser.',
      tech: ['Vue'],
      github: 'https://github.com/giliannereyes/image-to-puzzle',
      live: 'https://giliannereyes.github.io/image-to-puzzle/',
      stars: 477,
      featured: false,
      order: 5,
    },
    {
      title: 'Ladders Game & Monopoly',
      description:
        'A JavaFX board-game application featuring Snakes and Ladders and Monopoly-inspired gameplay, with customizable rules, turn-based interaction, and file-based persistence.',
      tech: ['Java'],
      github: 'https://github.com/giliannereyes/idatt2003-portfolio-2025-group11',
      featured: false,
      order: 6,
    },
    {
      title: 'Calculator',
      description:
        'A web-based calculator application built with Vue 3 and TypeScript, featuring user authentication and calculation history persistence. The frontend connects to a Spring Boot REST API backend.',
      tech: ['Vue', 'Spring Boot'],
      github: 'https://github.com/giliannereyes/calculator-vue-frontend',
      featured: false,
      order: 7,
    },
    {
      title: 'CineMap',
      description:
        'A Vue and TypeScript movie-tracking app backed by Supabase, with analytics dashboards and an interactive map for exploring and revisiting viewing history.',
      tech: ['Vue', 'TypeScript', 'Supabase'],
      github: 'https://github.com/giliannereyes/cinemap',
      live: 'https://cinemap-two.vercel.app/',
      featured: false,
      order: 8,
    },
    {
      title: 'ResumeAI',
      description:
        'An AI-powered resume-analysis tool with ATS scoring, a Vue frontend, a FastAPI backend, and Ollama-based local AI processing for private, practical feedback.',
      tech: ['Vue', 'FastAPI', 'Ollama'],
      github: 'https://github.com/giliannereyes/resume-ai',
      featured: false,
      order: 9,
    }
  ],
}
