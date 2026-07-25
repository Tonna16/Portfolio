export type Project = {
  name: string
  role: string
  description: string
  stats: string
  technologies: string[]
  githubUrl?: string
  liveDemoUrl?: string
  preview: {
    label: string
    features: string[]
  }
}

export type ExperienceEntry = {
  title: string
  role: string
  details: string[]
}

export type ServiceEntry = {
  title: string
  detail: string
}

export const profile = {
  name: 'Tonna Agburu',
  title: 'Aspiring Computer Engineer',
  description:
    'Building accessible software and exploring the intersection of hardware, software, and technology.',
  email: 'ttonnaagburu@gmail.com',
  github: 'https://github.com/Tonna16',
  linkedin: 'https://www.linkedin.com/in/tonna-agburu-903944410/',
} as const

export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
] as const

export const homeStats = [
  { value: '2+', label: 'Software Projects' },
  { value: '16', label: 'Active Users' },
  { value: '125+', label: 'Community Service Hours' },
  { value: 'FRC', label: 'Robotics Experience' },
] as const

export const projects: Project[] = [
  {
    name: 'ClarityRead',
    role: 'Lead Developer',
    description:
      'A privacy-first Chrome extension designed to improve web accessibility through features like dyslexia-friendly fonts, reading mode, text-to-speech, high-contrast themes, and local summarization.',
    stats: '16 active users',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Chrome Extensions Manifest V3',
    ],
    preview: {
      label: 'Accessibility extension preview',
      features: ['Reading mode', 'Text-to-speech', 'High contrast'],
    },
  },
  {
    name: 'SkimRoute',
    role: 'Lead Developer',
    description:
      'A Chrome extension designed to improve navigation through lengthy webpages and AI conversations using page mapping and keyboard shortcuts.',
    stats: '3 active users',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Chrome Extensions Manifest V3',
    ],
    preview: {
      label: 'Navigation extension preview',
      features: ['Page mapping', 'Keyboard shortcuts', 'Long page navigation'],
    },
  },
]

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'FIRST Robotics Competition (FRC Team 180)',
    role: 'Java Programmer',
    details: [
      'Developed Java subsystem code for the competition robot.',
      'Contributed utility functions for swerve modules and drivetrain systems.',
      'Designed and programmed autonomous paths.',
      'Worked on testing, debugging, and improving robot performance.',
    ],
  },
]

export const serviceEntries: ServiceEntry[] = [
  {
    title: 'LAHIA Volunteer',
    detail:
      'Completed 125+ hours preparing and serving meals for individuals experiencing homelessness.',
  },
  {
    title: 'Volunteer Tutor',
    detail:
      'Tutor an eighth-grade student in Algebra 1 and English Language Arts.',
  },
]

export const resume = {
  path: '/resume.pdf',
  fileName: 'resume.pdf',
} as const
