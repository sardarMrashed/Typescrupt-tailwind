import Navigation from "./Component/Navigation";
import PeopleToFollow from "./Component/PeopleToFollow";
import TrendsList from "./Component/TrendsList";
import Topics from "./Component/Topics";
import { BlogProvider } from "./Component/shared/BlockContext";
import { IoMdAddCircle } from "react-icons/io";
import { Blog } from "./types";
import { useState } from "react";

import Modal from "./Component/Modal";
import BlogForm from "./Component/BlogForm";
import ArticleList from "./Component/ArticleList"; // Corrected import

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  // Dummy data for blogs
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Blog 1",
      description: "Description for Blog 1",
      image: "image_url_1",
      time: "2024-12-13",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Description for Blog 2",
      image: "image_url_2",
      time: "2024-12-14",
    },
  ];

  // Function to open modal for creating a new blog
  const openModalForNewBlog = () => {
    setModalOpen(true);
    setEditingBlog(null); // Set to null for new blog
  };

  // Function to open modal for editing an existing blog
  const openModalForEditBlog = (blog: Blog) => {
    setModalOpen(true);
    setEditingBlog(blog); // Set the blog to be edited
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog
                <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              {/* Pass the openModalForEditBlog function to ArticleList */}
              <ArticleList blogs={blogs} onEdit={openModalForEditBlog} />

              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </section>
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <Topics />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
