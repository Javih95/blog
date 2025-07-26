import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { PostType } from '../types/Post';
import '../components/css/post.css';
const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <p>Cargando post...</p>;

  return (
    <article className='post'>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.coverImage && (<img src={post.coverImage} alt={post.title} className="post-cover" />)}
      <small>Autor: {post.author}</small>
      <p>{post.createdAt.toString()}</p>
    </article>
  );
};

export default Post;
