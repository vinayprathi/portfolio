import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <Link href="/">
        <img src="/your-logo.png" alt="Logo" className="h-10" />
      </Link>
      <div className="space-x-6">
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
