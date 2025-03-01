import Navbar from "./components/Navbar";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Vinay Prathi - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="text-center p-4 bg-gray-100 mt-10">
          <p className="text-gray-600">&copy; 2025 Vinay Prathi. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}


