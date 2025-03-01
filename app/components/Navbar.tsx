"use client"; // Required for interactive components in App Router

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-5 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" passHref>
        <Image src="/your-logo.png" alt="Logo" width={50} height={50} priority />
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link href="/about" className="hover:text-blue-500 transition">About</Link>
        <Link href="/experience" className="hover:text-blue-500 transition">Experience</Link>
        <Link href="/projects" className="hover:text-blue-500 transition">Projects</Link>
        <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
      </div>
    </nav>
  );
}
