import { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-col gap-2 px-3">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          <span className="w-16">{link.name}</span>
          {link.handle && (
            <>
              <span className="text-border">→</span>
              <span className="text-text-secondary">
                {link.handle}
              </span>
            </>
          )}
        </a>
      ))}
    </div>
  );
}
