import { createContext, useState, useContext } from "react";
import { Blog } from "../../types";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
  
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (newBlog: Blog) => {
    setBlogs([...blogs, newBlog]);
  };

  const updateBlog = (updatedBlog: Blog) => {
    setBlogs(blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b)));
  };

  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const UseBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};
