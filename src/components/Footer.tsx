import Link from 'next/link';

const ExternalLink = ({ href, children }: {href: string, children: string}) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/newsletter"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Newsletter
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/joeharwood96">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/josephharwood-3/">LinkedIn</ExternalLink>
          <ExternalLink href="https://www.instagram.com/_joe.harwood">
            Instagram
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/uses"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Uses
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Guestbook
          </Link>
          <Link
            href="/tweets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Posts
          </Link>
        </div>
      </div>
    </footer>
  );
}