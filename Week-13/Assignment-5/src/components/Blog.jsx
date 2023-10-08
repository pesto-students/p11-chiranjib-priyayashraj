import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Data from '../blogData.json';

function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
   setBlogData(Data)
  }, []);

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {blogData.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.slug}`}>
              <h2>{blog.title}</h2>
              <p>{blog.preview}</p>
              <p>{blog.date}</p>
              {/* Display image here */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
