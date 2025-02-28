import Navbar from './components/Navbar';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="text-center p-4 bg-gray-100 mt-10">
        <p className="text-gray-600">&copy; 2025 Vinay Prathi. All rights reserved.</p>
      </footer>
    </div>
  );
}
