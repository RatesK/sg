import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    // Check if the previous page was the home page
    if (document.referrer && 
        (document.referrer.includes(window.location.origin + '/') || 
         document.referrer === window.location.origin + '/')) {
      setShowBackButton(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-center">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-md mx-auto">
        {/* Animated 404 graphic */}
        <div className="floating mb-8">
          <div className="text-9xl font-bold text-green-400">404</div>
          <div className="text-2xl text-gray-300 mt-2">Page Not Found</div>
        </div>

        <p className="text-gray-400 mb-8 text-lg">
          The page you're looking for doesn't exist.
        </p>

        {/* Navigation options */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Go Home
          </Link>
          
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-lg transition-colors duration-200"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}