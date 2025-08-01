import type { PostType } from "../types/Post";
import "./css/SideBar.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const FeaturedPostsBar = () => {
   const [posts, setPosts] = useState<PostType[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/posts/destacados')
        .then(res => res.json())
        .then((data: PostType[]) => setPosts(data))
        .catch(err => console.error(err));
    }, []);
  return (
    <aside className="sidebar">
      <h3>Destacados</h3>
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="sidebar-post">
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FeaturedPostsBar;
