import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App: React.FC = () => {
  const [reloadPosts, setReloadPosts] = useState(false);

  const handlePostCreated = () => {
    setReloadPosts(prev => !prev); // fuerza recarga
  };

  return (
    <div>
      <h1>Mi Blog Personal</h1>
      <PostForm onPostCreated={handlePostCreated} />
      <PostList key={reloadPosts ? 'reload' : 'normal'} />
    </div>
  );
};

export default App;
