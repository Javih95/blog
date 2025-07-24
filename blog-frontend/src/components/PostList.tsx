import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/postList.css';
import type { PostType } from '../types/Post';


const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then((data: PostType[]) => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="post-list">
      <h2>Entradas Recientes</h2>
      {posts.length === 0 ? (
        <p>No hay posts aún.</p>
      ) : (
        <div className="post-grid">
          {posts.map(post => (
            <Link to={`/post/${post._id}`} key={post._id} className="post-card">
              {post.coverImage && (
                <img src={post.coverImage} alt={post.title} className="post-cover" />
              )}
              <h3>{post.title}</h3>
              <p>{post.createdAt.toString()}</p>
              <small>Autor: {post.author}</small>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
