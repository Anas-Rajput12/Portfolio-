import { User, Project, Experience, Skill, Achievement, Education, BlogPost, Testimonial, Message, Profile } from '@prisma/client';

export type { User, Project, Experience, Skill, Achievement, Education, BlogPost, Testimonial, Message, Profile };

export interface ProjectWithDetails extends Project {
  _count?: {
    views: number;
    likes: number;
  };
}

export interface ExperienceWithCompany extends Experience {
  companyLogo?: string;
}

export interface BlogPostWithAuthor extends BlogPost {
  author: {
    name: string | null;
    email: string;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  sources?: string[];
  conversationId?: string;
}

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UploadResponse {
  url: string;
  filename: string;
  size: number;
}

export interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  topProjects: Array<{
    title: string;
    views: number;
  }>;
  recentActivity: Array<{
    path: string;
    views: number;
    date: Date;
  }>;
}

export interface KnowledgeContext {
  content: string;
  source: string;
  sourceId?: string;
  relevanceScore?: number;
}

export interface RAGResponse {
  answer: string;
  contexts: KnowledgeContext[];
  conversationId: string;
}

export type SkillCategoryType = 'FRONTEND' | 'BACKEND' | 'AI' | 'TOOLS' | 'DATABASE' | 'OTHER';
export type SkillLevelType = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
export type MessageStatusType = 'UNREAD' | 'READ' | 'REPLIED';
