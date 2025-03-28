import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-8">
      <div className="text-center mb-2">
        <h1 className="text-5xl font-bold text-green-400 mb-4 font-mono">The SG</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
        <Link
          to="/posts"
          className="bg-gray-800 hover:bg-gray-700 text-green-400 hover:text-green-300 px-8 py-4 rounded-lg border border-green-500 hover:border-green-400 transition-all duration-200 flex-1 min-w-[200px] text-center"
        >
          <h2 className="text-xl font-semibold mb-1">Posts</h2>
        </Link>

        <Link
          to="/system"
          className="bg-gray-800 hover:bg-gray-700 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-lg border border-blue-500 hover:border-blue-400 transition-all duration-200 flex-1 min-w-[200px] text-center"
        >
          <h2 className="text-xl font-semibold mb-1">System</h2>
        </Link>
        
      </div>

    </div>
  );
}