import { Post } from '../../models/post.model';

export interface PostState {
  items: Post[];
  currentItem: Post | null;
  status: 'idle' | 'loading' | 'error';
  error?: string;
  sort: 'asc' | 'desc' | null;
}
