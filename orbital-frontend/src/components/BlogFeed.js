import React, { useState } from "react";

const BlogFeed = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Exploring the Cosmos",
      content: "The universe is vast and full of mysteries. Let's dive into its wonders.",
      author: "Neil A.",
      date: "2024-12-23",
    },
    {
      id: 2,
      title: "Life on Mars: Reality or Dream?",
      content: "Analyzing the potential for human colonization on the Red Planet.",
      author: "Eliza S.",
      date: "2024-12-22",
    },
    {
      id: 3,
      title: "Black Holes and Beyond",
      content: "A journey into the physics and enigma of black holes.",
      author: "Dr. Stephen",
      date: "2024-12-21",
    },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Cosmic Blog Feed</h1>
      <div style={styles.feed}>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} style={styles.blogCard}>
              <h2 style={styles.blogTitle}>{blog.title}</h2>
              <p style={styles.blogContent}>{blog.content}</p>
              <div style={styles.blogMeta}>
                <span style={styles.author}>By {blog.author}</span>
                <span style={styles.date}>{blog.date}</span>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noBlogs}>No blogs available. Stay tuned for cosmic updates!</p>
        )}
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: "Courier New, monospace",
    color: "#00ff00",
    backgroundColor: "#0d0d0d",
    padding: "20px",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    fontSize: "36px",
    textShadow: "0 0 20px #00ff00",
    marginBottom: "20px",
  },
  feed: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  blogCard: {
    backgroundColor: "#1a1a1a",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #00ff00",
    boxShadow: "0 0 15px #00ff00",
  },
  blogTitle: {
    fontSize: "24px",
    marginBottom: "10px",
    textShadow: "0 0 10px #00ff00",
  },
  blogContent: {
    fontSize: "16px",
    marginBottom: "15px",
    color: "#e6e6e6",
  },
  blogMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#808080",
  },
  author: {
    fontStyle: "italic",
  },
  date: {
    fontStyle: "italic",
  },
  noBlogs: {
    textAlign: "center",
    color: "#666",
  },
};

export default BlogFeed;
