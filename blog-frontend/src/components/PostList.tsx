import React, { useEffect, useState } from 'react';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then((data: Post[]) => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0 && <p>No hay posts aún.</p>}
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Autor: {post.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
