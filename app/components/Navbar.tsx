import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <Link href="/">
        <Image src="/your-logo.png" alt="Logo" width={50} height={50} />
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
