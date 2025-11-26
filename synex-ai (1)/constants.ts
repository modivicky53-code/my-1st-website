import { Prompt, PromptCategory, PromptPack, UserProfile, Notification, Workflow, MarketItem, VaultDocument } from './types';

export const MOCK_USER: UserProfile = {
  id: 'u1',
  name: 'Alex Rivera',
  handle: '@arivera',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  bio: 'Senior Prompt Engineer. Obsessed with LLM architecture and React.',
  stats: {
    totalPrompts: 42,
    savedPrompts: 156,
    totalLikes: 3420,
    reputationScore: 9850,
    streakDays: 12,
    lastLoginDate: new Date().toISOString(),
  },
  badges: ['Early Adopter', 'Top Rated', 'Streak Master'],
  followers: 892,
  following: 45,
};

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: '1', type: 'like', message: 'Sarah J. liked your "React Persona" prompt', time: '2m ago', read: false },
  { id: '2', type: 'trending', message: 'Your prompt is trending in Coding!', time: '1h ago', read: false },
  { id: '3', type: 'system', message: 'Welcome to Synex AI 2.0', time: '1d ago', read: true },
];

export const MOCK_PACKS: PromptPack[] = [
  {
    id: 'p1',
    title: 'SaaS Founder Starter Kit',
    description: 'The essential collection for launching your startup. Includes pitch decks, cold emails, and product specs.',
    coverGradient: 'from-blue-600 to-indigo-600',
    promptCount: 25,
    category: PromptCategory.BUSINESS,
    author: 'Synex Official',
    downloads: 1205,
  },
  {
    id: 'p2',
    title: 'Midjourney v6 Realism',
    description: 'Achieve photorealistic results with these parameter-tuned prompts for v6.',
    coverGradient: 'from-purple-600 to-pink-600',
    promptCount: 50,
    category: PromptCategory.IMAGE_GEN,
    author: 'Davide Russo',
    downloads: 8500,
  },
];

export const MOCK_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'Senior React Engineer Persona',
    description: 'A robust persona prompt for generating high-quality React code.',
    content: 'Act as a Senior React Engineer with 10 years of experience. Focus on performance, accessibility, and clean code patterns. Use TypeScript...',
    tags: ['React', 'Coding', 'Web Dev'],
    category: PromptCategory.CODING,
    model: 'GPT-4',
    author: 'Alex Chen',
    likes: 342,
    views: 1205,
    saves: 156,
    createdAt: '2023-10-25',
    isPremium: true,
    dnaPattern: 'indigo',
    reputationImpact: 15,
  },
  {
    id: '2',
    title: 'Viral Marketing Hook Generator',
    description: 'Create engaging hooks for Twitter/X threads.',
    content: 'Analyze the following topic and generate 5 viral hooks using the AIDA framework. Ensure the tone is provocative yet professional...',
    tags: ['Marketing', 'Social Media', 'Copywriting'],
    category: PromptCategory.MARKETING,
    model: 'Claude',
    author: 'Sarah Jenkins',
    likes: 89,
    views: 450,
    saves: 42,
    createdAt: '2023-10-26',
    dnaPattern: 'purple',
    reputationImpact: 8,
  },
  {
    id: '3',
    title: 'Midjourney Photorealism Master',
    description: 'Parameters for achieving hyper-realistic results in v6.',
    content: '/imagine prompt: a cinematic shot of a cyberpunk city street, raining, neon lights reflecting on wet pavement, shot on 35mm lens, f/1.8...',
    tags: ['Midjourney', 'Art', 'Photography'],
    category: PromptCategory.IMAGE_GEN,
    model: 'Midjourney',
    author: 'Davide Russo',
    likes: 1205,
    views: 5600,
    saves: 890,
    createdAt: '2023-10-27',
    isPremium: true,
    dnaPattern: 'cyan',
    reputationImpact: 25,
  },
];

export const MOCK_WORKFLOWS: Workflow[] = [
  {
    id: 'w1',
    title: 'Content Repurposing Engine',
    steps: ['Upload PDF', 'Gemini Summary', 'GPT-4 Thread', 'Tweet'],
    author: 'MarketingPro',
    price: 19,
    runs: 450,
    rating: 4.8,
    icon: 'RefreshCw',
  },
  {
    id: 'w2',
    title: 'Code Review Automator',
    steps: ['Git Diff', 'Claude Analysis', 'Security Check', 'Comment'],
    author: 'DevOpsBot',
    price: 0,
    runs: 1200,
    rating: 4.9,
    icon: 'Shield',
  },
];

export const MOCK_VAULT_DOCS: VaultDocument[] = [
  { id: 'v1', name: 'Q3_Financial_Report.pdf', type: 'pdf', size: '4.2 MB', uploadDate: '2 hours ago', aiSummary: 'Revenue up 15%, Opex stable.' },
  { id: 'v2', name: 'Product_Roadmap_2025.docx', type: 'docx', size: '1.1 MB', uploadDate: '1 day ago', aiSummary: 'Focus on mobile and AI features.' },
  { id: 'v3', name: 'Customer_Feedback.csv', type: 'csv', size: '800 KB', uploadDate: '3 days ago' },
];

export const MOCK_MARKET_ITEMS: MarketItem[] = [
  { id: 'm1', title: 'Ultimate Copywriting OS', type: 'workflow', price: 49, author: 'CopyGod', rating: 4.9, sales: 1200, image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=200' },
  { id: 'm2', title: 'Cyberpunk Cityscapes', type: 'pack', price: 15, author: 'NeonDreamer', rating: 4.7, sales: 850, image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=200' },
  { id: 'm3', title: '1:1 Prompt Coaching', type: 'service', price: 150, author: 'Alex Rivera', rating: 5.0, sales: 15, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=200' },
];
