import { Link } from 'react-router-dom';

export default function Fws() {
  

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="text-green-400 hover:text-green-300 font-mono">
          ← Back
        </Link>
        
        <h1 className="text-4xl font-bold text-green-400 mb-10 text-center font-mono">
The SG's System        </h1>

        <div className="mt-8 bg-gray-800 rounded-xl p-8 shadow-2xl border-l-4 border-green-500">
          <h1 className="text-4xl font-bold text-green-400 mb-6 font-mono">
The SG          </h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl text-green-300 mt-6 mb-4">Parts of the SG</h2>
            <p className="text-green-200 text-lg leading-relaxed">
              The SG Leader is called the <span className="text-green-400">Dirigeant</span>.<br />
              The group of people in charge of electing the Leader is called the <span className="text-green-400">Dirigeant's Table</span>.<br />
            </p>

            <h3 className="text-xl text-green-300 mt-6 mb-3">Levels</h3>
            <ul className="text-green-200 text-lg list-disc pl-6 space-y-2">
            <li><span className="text-green-400">06</span> - Group Primary Leader</li>
            <li><span className="text-green-400">05</span> - Group Secondary Leader</li>
            <li><span className="text-green-400">04</span> - Group Level 3</li>
            <li><span className="text-green-400">03</span> - Group Level 2</li>
            <li><span className="text-green-400">02</span> - Group Level 1</li>
            <li><span className="text-green-400">01</span> - Verified</li>
            <li><span className="text-green-400">00</span> - Unverified</li>
             
            </ul>

            <h2 className="text-2xl text-green-300 mt-8">Key</h2>
            <p className="text-green-200 text-lg leading-relaxed">        
              <br/> Example Key: <span className="text-green-400">DB06S1</span>  
              <ul>
              <li> <span className="text-green-400">DB</span> - Database Group</li>
              <li> <span className="text-green-400">06</span> - Leader of the Group</li>
              <li> <span className="text-green-400">S</span> - Southern Location</li>
              <li> <span className="text-green-400">1</span> - The UID of the person to prevent duplicate Keys</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}