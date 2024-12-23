import React, { useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim() && form.content.trim()) {
      setBlogs([...blogs, { ...form, id: Date.now() }]);
      setForm({ title: "", content: "" });
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Space Blogs</h1>
      <div style={styles.blogSection}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.subHeader}>Write a New Blog</h2>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={form.title}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          <textarea
            name="content"
            placeholder="Write your blog here..."
            value={form.content}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            Publish Blog
          </button>
        </form>
        <div style={styles.blogList}>
          <h2 style={styles.subHeader}>Published Blogs</h2>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} style={styles.blogCard}>
                <h3 style={styles.blogTitle}>{blog.title}</h3>
                <p style={styles.blogContent}>{blog.content}</p>
              </div>
            ))
          ) : (
            <p style={styles.noBlogs}>No blogs published yet. Start writing!</p>
          )}
        </div>
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
  blogSection: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  form: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#1a1a1a",
    border: "2px solid #00ff00",
    borderRadius: "10px",
    boxShadow: "0 0 20px #00ff00",
  },
  subHeader: {
    fontSize: "24px",
    marginBottom: "10px",
    textShadow: "0 0 10px #00ff00",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#000",
    color: "#00ff00",
    border: "1px solid #00ff00",
    borderRadius: "5px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "10px",
    backgroundColor: "#000",
    color: "#00ff00",
    border: "1px solid #00ff00",
    borderRadius: "5px",
    fontSize: "16px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#00ff00",
    color: "#0d0d0d",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  blogList: {
    flex: 2,
    padding: "20px",
    backgroundColor: "#1a1a1a",
    border: "2px solid #00ff00",
    borderRadius: "10px",
    boxShadow: "0 0 20px #00ff00",
  },
  blogCard: {
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#000",
    border: "1px solid #00ff00",
    borderRadius: "5px",
  },
  blogTitle: {
    fontSize: "18px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  blogContent: {
    fontSize: "16px",
  },
  noBlogs: {
    textAlign: "center",
    color: "#666",
  },
};

export default BlogPage;
