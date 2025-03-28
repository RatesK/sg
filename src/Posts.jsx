import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.jsonsilo.com/public/acb94b33-a649-4bfa-a219-8e4f93094ca5'
        );
        if (!response.ok) throw new Error('Failed to fetch data');
        const jsonData = await response.json();
        setData(jsonData.sort((a, b) => b.id - a.id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-bounce text-green-400 text-4xl">⬇</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-red-400">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4">
      <Link to="/" className="text-green-400 hover:text-green-300 font-mono">
          ← Back to the Home Page
        </Link>
        <h1 className="text-4xl font-bold text-green-400 mb-10 text-center font-mono">
The SG's Posts        </h1>

        <div className="grid grid-cols-1 gap-6">
          {currentItems.map((item, index) => {
            const date = new Date(item.date);
            const dateString = date.toLocaleString('en-US', {
              dateStyle: 'short',
              timeStyle: 'short',
            });
            const [formattedDate, formattedTime] = dateString.split(', ');

            return (
              <div
                key={item.id}
                className="relative bg-gray-800 rounded-xl p-6 shadow-2xl transition-all duration-300 hover:shadow-green-500/20 hover:-translate-y-1 border-l-4 border-green-500 group transform-gpu opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                 
                    <h2 className="text-2xl font-semibold text-green-300 font-mono transition-colors">
                     {item.title}
                    </h2>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-green-200">{formattedDate}</span>
                    <span className="text-xs text-green-400/80">{formattedTime}</span>
                  </div>
                </div>
                <p className="text-green-100 leading-relaxed text-opacity-90 line-clamp-2 mb-3">
                  {item.message}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/30 to-transparent transition-opacity duration-300 group-hover:opacity-0 "></div>
                <Link 
                    to={`/posts/${item.id}`} 
                    className="bg-green-400 text-black p-2 rounded-lg"
                  >To Post's Page</Link>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-green-600/30 text-green-300 hover:bg-green-600/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-mono hover:scale-105 transform-gpu"
          >
            ◄ Previous
          </button>
          <span className="px-4 py-2 text-green-300 font-mono">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-green-600/30 text-green-300 hover:bg-green-600/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-mono hover:scale-105 transform-gpu"
          >
            Next ►
          </button>
        </div>
      </div>
    </div>
  );
}