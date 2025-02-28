import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      {/* Left Side - Data Scientist */}
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-100 text-black p-10 transition duration-500 hover:w-2/3">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Data Scientist</h1>
          <p className="mt-4 text-sm text-gray-600">Expertise in Python, SQL, and Visualization</p>
        </div>
      </div>

      {/* Center Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/your-image.jpg" alt="Your Image" width={250} height={250} className="rounded-full shadow-lg" />
      </div>

      {/* Right Side - ML Engineer */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white text-black p-10 transition duration-500 hover:w-2/3">
        <div className="text-center">
          <h1 className="text-4xl font-bold">ML Engineer</h1>
          <p className="mt-4 text-sm text-gray-600">Expertise in building and deploying Complex ML models</p>
        </div>
      </div>
    </div>
  );
}
