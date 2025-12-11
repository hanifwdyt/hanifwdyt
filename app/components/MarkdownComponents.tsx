import Image from 'next/image';
import type { Components } from 'react-markdown';

export const markdownComponents: Components = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-base font-medium text-text-primary mt-8 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-sm font-medium text-text-primary mt-8 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xs font-medium text-text-primary mt-6 mb-2">
      {children}
    </h3>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="text-xs text-text-secondary mb-5" style={{ lineHeight: '1.7' }}>
      {children}
    </p>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-xs text-text-secondary mb-5 space-y-1.5" style={{ lineHeight: '1.7' }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-xs text-text-secondary mb-5 space-y-1.5" style={{ lineHeight: '1.7' }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-xs text-text-secondary">
      {children}
    </li>
  ),

  // Links
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-text-primary underline decoration-border hover:decoration-text-tertiary underline-offset-2"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),

  // Images - Next.js optimized
  img: ({ src, alt }) => {
    if (!src || typeof src !== 'string') return null;

    return (
      <span className="block my-8">
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={600}
          className="rounded-lg w-full h-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        {alt && (
          <span className="block text-xs text-text-secondary text-center mt-2">
            {alt}
          </span>
        )}
      </span>
    );
  },

  // Code blocks
  code: ({ className, children }) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code className="text-xs bg-bg-secondary text-text-primary px-1 py-0.5 rounded">
          {children}
        </code>
      );
    }

    return (
      <code className="block text-xs bg-bg-secondary text-text-primary p-4 rounded-lg mb-5 overflow-x-auto">
        {children}
      </code>
    );
  },

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-border pl-4 my-5 text-xs text-text-secondary italic">
      {children}
    </blockquote>
  ),

  // Horizontal rule
  hr: () => (
    <hr className="border-border my-8" />
  ),

  // Strong/Bold
  strong: ({ children }) => (
    <strong className="font-medium text-text-primary">
      {children}
    </strong>
  ),

  // Emphasis/Italic
  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),
};
