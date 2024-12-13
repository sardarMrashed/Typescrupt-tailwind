// import { UseBlogs } from "./shared/BlockContext";
// import { useState, useEffect } from "react";
// import { Blog } from "../types";

// interface BlogFormProps {
//   existingBlog?: Blog | null;
//   onClose: () => void;
// }

// const BlogForm: React.FC<BlogFormProps> = ({ existingBlog,  onClose }) => {
//   const { addBlog, updateBlog } = UseBlogs();
//   const [title, setTitle] = useState(existingBlog?.title || "");
//   const [description, setDescription] = useState(
//     existingBlog?.description || ""
//   );
//   const [image, setImage] = useState(existingBlog?.image || "");
//   const [time, setTime] = useState(existingBlog?.time || "");

//   useEffect(() => {
//     if (existingBlog) {
//       setTitle(existingBlog.title);
//       setDescription(existingBlog.description);
//       setImage(existingBlog.image);
//       setTime(existingBlog.time);
//     }
//   }, [existingBlog]);

//   const handleSubmit = () => {
//     const blog: Blog = {
//       id: existingBlog?.id || Date.now(),
//       title,
//       description,
//       image,
//       time,
//     };
//     if (existingBlog) {
//       updateBlog(blog);
//     } else {
//       addBlog(blog);
//     }
//     onClose();

//   };

//   return (
//     <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
//       <h3 className="font-semibold text-xl mb-2 text-gray-800">
//         {existingBlog ? "Edit Blog" : "Add Blog"}
//       </h3>
//       <div className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus-outline-none focus:ring-black"
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus-outline-none focus:ring-black"
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//           className="black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus-outline-none focus:ring-black"
//         />
//       </div>
//       <section className="flex justify-items-end mt-6 space-x-4">
//         <button
//           onChange={handleSubmit}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-bl"
//         >
//           {existingBlog ? "update" : "Add"}
//         </button>

//         <button
//           onChange={ onClose}
//           className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-bl"
//         >
//           Cancel
//         </button>
//       </section>
//     </div>
//   );
// };

// export default BlogForm;
import { UseBlogs } from "./shared/BlockContext";
import { useState, useEffect } from "react";
import { Blog } from "../types";

interface BlogFormProps {
  existingBlog?: Blog | null;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = UseBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(
    existingBlog?.description || ""
  );
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: existingBlog?.id || Date.now(),
      title,
      description,
      image,
      time,
    };
    if (existingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-800">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black"
        />
      </div>
      <section className="flex justify-items-end mt-6 space-x-4">
        <button
          onClick={handleSubmit} 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-bl"
        >
          {existingBlog ? "Update" : "Add"}
        </button>

        <button
          onClick={onClose}  
          className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-bl"
        >
          Cancel
        </button>
      </section>
    </div>
  );
};

export default BlogForm;
