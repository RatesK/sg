import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NotFound from "./ErrorPage";

export default function PostsID() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.jsonsilo.com/public/acb94b33-a649-4bfa-a219-8e4f93094ca5'
        );
        if (!response.ok) throw new Error('Failed to fetch data');
        const jsonData = await response.json();
        const foundPost = jsonData.find(p => p.id === Number(id));
        if (!foundPost) {
          setError('Post not found');
          return;
        }
        setPost(foundPost);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error === 'Post not found') {
    return <NotFound />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-red-400">
        Error: {error}
        <Link to="/posts" className="mt-4 text-green-400 hover:text-green-300 block">
          ← Back to posts
        </Link>
      </div>
    );
  }

  const date = new Date(post.date);
  const dateString = date.toLocaleString('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/posts" className="text-green-400 hover:text-green-300 font-mono">
          ← Back to all messages
        </Link>
        
        <div className="mt-8 bg-gray-800 rounded-xl p-8 shadow-2xl border-l-4 border-green-500">
          <h1 className="text-4xl font-bold text-green-400 mb-6 font-mono">
            {post.title}
          </h1>
          
          <div className="mb-8">
            <span className="text-green-300 text-lg">
              {dateString}
            </span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-green-200 text-lg leading-relaxed">
              {post.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}