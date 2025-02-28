export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <div className="flex space-x-6">
          <a href="https://linkedin.com/in/vinayprathi" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-10" />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="h-10" />
          </a>
          <a href="mailto:vinaybhaskarprathi@gmail.com">
            <img src="/gmail.svg" alt="Gmail" className="h-10" />
          </a>
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="Instagram" className="h-10" />
          </a>
        </div>
      </div>
    );
  }
  