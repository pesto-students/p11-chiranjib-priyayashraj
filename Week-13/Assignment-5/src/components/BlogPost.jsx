import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../blogData.json";

function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (Data) {
      const foundBlog = Data.find((post) => post.slug === slug);
      setBlog(foundBlog);
    }
  }, [slug]);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      {/* Display image here */}
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPost;
