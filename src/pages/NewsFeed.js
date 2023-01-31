/*export default function NewsFeed() {
    return <h1>news</h1>
}*/



import React, { useState, useEffect } from 'react';
import { getHeadline } from './api';

function NewsFeed() {
  const [headline, setHeadline] = useState('');

  useEffect(() => {
    const fetchHeadline = async () => {
      const fetchedHeadline = await getHeadline();
      setHeadline(fetchedHeadline);
    };
    fetchHeadline();
  }, []);

  return (
    <div className="card" style={{ width: "50%", margin: "10px auto 0 auto" }}>
      <h3>{headline}</h3>
      <form>
        <input type="text" placeholder="Name" />
        <textarea placeholder="Add your comment"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewsFeed;






