import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import NotFound from "./ErrorPage";
import Index from "./Index";
import PostsID from "./PostsID";
import Fws from "./Fws";
import './style.css';
export default function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/posts/:id" element={<PostsID />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/system" element={<Fws />} />
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);