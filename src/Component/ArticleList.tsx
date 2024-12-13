import { UseBlogs } from "./shared/BlockContext";
import ArticleCard from "./ArticleCard";
import { Blog } from "../types";

interface ArticleListProps {
  onEdit: (blogs: Blog) => void;
  blogs: Blog[];
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } =UseBlogs();

  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
