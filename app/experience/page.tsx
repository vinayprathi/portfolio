export default function Experience() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-6">Experience</h1>
        <div className="w-1/2 border-l-4 border-gray-800 pl-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">2023 - Present</h2>
            <p className="text-lg">Research Assistant, UTARI</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">2022 - 2023</h2>
            <p className="text-lg">ML Engineer, TCS</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">2020 - 2022</h2>
            <p className="text-lg">Data Analyst, Raghuram Hume Pipes Pvt Ltd</p>
          </div>
        </div>
        <a href="/resume.pdf" download className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Download Resume
        </a>
      </div>
    );
  }
  