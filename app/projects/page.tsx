export default function Projects() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NYC Taxi Prediction */}
          <div className="border p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">NYC Taxi Demand Prediction</h2>
            <p className="text-gray-700">Developed a Neural Network model to optimize demand prediction.</p>
          </div>
          {/* Sentiment Analysis */}
          <div className="border p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Sentiment Analysis</h2>
            <p className="text-gray-700">Implemented NLP models for customer reviews classification.</p>
          </div>
          {/* Autonomous Robot */}
          <div className="border p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Autonomous Navigation Robot</h2>
            <p className="text-gray-700">Built an Arduino robot with ML-based navigation.</p>
          </div>
        </div>
      </div>
    );
  }
  