export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  category: PromptCategory;
  model: AIModel;
  author: string;
  likes: number;
  views: number;
  saves: number;
  createdAt: string;
  isPremium?: boolean;
  dnaPattern?: string; // Hex code or SVG path data
  reputationImpact?: number;
}

export type AIModel = 'GPT-4' | 'Gemini' | 'Claude' | 'Midjourney' | 'DALL-E' | 'Stable Diffusion' | 'General';

export enum PromptCategory {
  CODING = 'Coding',
  WRITING = 'Creative Writing',
  MARKETING = 'Marketing',
  PRODUCTIVITY = 'Productivity',
  IMAGE_GEN = 'Image Gen',
  DATA = 'Data Analysis',
  BUSINESS = 'Business',
}

export type ViewState = 'landing' | 'dashboard' | 'explore' | 'create' | 'library' | 'studio' | 'packs' | 'battle' | 'profile' | 'social' | 'workflows' | 'vault' | 'market' | 'playground';

export interface UserStats {
  totalPrompts: number;
  savedPrompts: number;
  totalLikes: number;
  reputationScore: number;
  streakDays: number;
  lastLoginDate: string;
}

export interface UserProfile {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  stats: UserStats;
  badges: string[];
  followers: number;
  following: number;
}

export interface PromptPack {
  id: string;
  title: string;
  description: string;
  coverGradient: string;
  promptCount: number;
  category: PromptCategory;
  price?: number; // 0 for free
  author: string;
  downloads: number;
}

export interface Notification {
  id: string;
  type: 'like' | 'follow' | 'system' | 'trending';
  message: string;
  time: string;
  read: boolean;
}

export interface Workflow {
  id: string;
  title: string;
  steps: string[]; // e.g., ["Input", "Gemini Summary", "GPT-4 Polish", "Email"]
  author: string;
  price: number;
  runs: number;
  rating: number;
  icon: string;
}

export interface VaultDocument {
  id: string;
  name: string;
  type: 'pdf' | 'docx' | 'txt' | 'csv';
  size: string;
  uploadDate: string;
  aiSummary?: string;
}

export interface MarketItem {
  id: string;
  title: string;
  type: 'workflow' | 'pack' | 'prompt' | 'service';
  price: number;
  author: string;
  rating: number;
  sales: number;
  image: string;
}