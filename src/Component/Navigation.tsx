import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navigation = () => {
  return (
    <nav className="border-2 text-black border-gray-200  p-4 flex justify-between items-center">
      <div className="flex items-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem]">
        <FaSearch />
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search"
        />
      </div>
      <section className="flex items-center mr-[5rem]">
        {/* <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
          Sign Up
        </button> */}
        <FaUserCircle className="text-3xl mr-2" />
      </section>
    </nav>
  );
};

export default Navigation;
