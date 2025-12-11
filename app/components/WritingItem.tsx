import Link from 'next/link';
import { WritingPost } from '../types';

interface WritingItemProps {
  post: WritingPost;
}

export function WritingItem({ post }: WritingItemProps) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group flex items-start gap-3 px-3 py-2 rounded-md hover:bg-bg-secondary transition-colors"
    >
      <time className="text-xs text-text-tertiary mt-0.5 shrink-0 w-16">
        {new Date(post.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        })}
      </time>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm text-text-primary group-hover:text-text-secondary transition-colors">
          {post.title}
        </h3>
      </div>
      <span className="text-xs text-text-tertiary shrink-0">
        {post.category}
      </span>
    </Link>
  );
}
