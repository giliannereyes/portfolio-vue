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
  projects: [
    {
      title: 'ResumeAI',
      description:
        'An AI wrapper configured for resume analysis and ATS scoring, built with Vue frontend, Python (FastAPI) backend, and Ollama for local AI processing.',
      tech: ['Vue', 'Python', 'FastAPI', 'Ollama'],
      github: 'https://github.com/giliannereyes/resume-ai',
      featured: true,
      order: 0,
    },
    {
      title: 'Image to Puzzle',
      description:
        'A Vue-based web app that transforms uploaded images into a puzzle. Users can customize difficulty, rearrange tiles with drag-and-drop, and solve dynamically generated puzzles directly in the browser.',
      tech: ['Vue', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/giliannereyes/image-to-puzzle',
      live: 'https://giliannereyes.github.io/image-to-puzzle/',
      stars: 477,
      featured: false,
      order: 1,
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio created with Vue.',
      tech: ['Vue'],
      github: 'https://github.com/giliannereyes/portfolio-vue',
      live: 'giliannereyes.com',
      featured: false,
      order: 2,
    },
    {
      title: 'Pomodoro Timer',
      description:
        'A Vue-based Pomodoro timer with customizable work and break sessions.',
      tech: ['Vue'],
      github: 'https://github.com/giliannereyes/pomodoro-vue',
      live: 'https://giliannereyes.github.io/pomodoro-vue/',
      featured: false,
      order: 3,
    },
    {
      title: 'Ladders Game & Monopoly',
      description:
        'A board game application built with JavaFX, supporting customizable gameplay and file-based persistence',
      tech: ['Java'],
      github: 'https://github.com/giliannereyes/idatt2003-portfolio-2025-group11',
      featured: false,
      order: 4,
    }
  ],
}
