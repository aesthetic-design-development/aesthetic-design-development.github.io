
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  details: string[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
