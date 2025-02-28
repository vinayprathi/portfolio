import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <div className="flex space-x-6">
        <a href="https://linkedin.com/in/vinayprathi" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
        </a>
        <a href="https://github.com/vinayprathi" target="_blank" rel="noopener noreferrer">
          <Image src="/github.svg" alt="GitHub" width={40} height={40} />
        </a>
        <a href="mailto:vinaybhaskarprathi@gmail.com">
          <Image src="/gmail.svg" alt="Gmail" width={40} height={40} />
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
        </a>
      </div>
    </div>
  );
}
