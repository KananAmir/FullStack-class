import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleAddBlog = (e) => {
        e.preventDefault();

        if (title.trim() === "" || content.trim() === "" || author.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        const newBlog = {
            id: Date.now(),
            title,
            content,
            author
        }
        console.log(newBlog);

        setBlogs([...blogs, newBlog]);

        // Clear the form fields after submission
        setTitle("");
        setContent("");
        setAuthor("");

    }

    const handleDelete = (id) => {
        const updatedBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(updatedBlogs);
    }
    return (
        <div className="min-h-screen mb-4 bg-gray-50 p-6">
            <form className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-gray-100  mx-auto" onSubmit={handleAddBlog}>
                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Add New Blog
                </h2>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Blog Title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        onChange={(e) => { setTitle(e.target.value) }}
                        value={title}
                    />

                    <textarea
                        name="content"
                        id="content"
                        placeholder="Write your blog content..."
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
                        onChange={(e) => { setContent(e.target.value) }}
                        value={content}
                    ></textarea>

                    <input
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Author Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        onChange={(e) => { setAuthor(e.target.value) }}
                        value={author}
                    />

                    <button
                        type="submit"
                        className="mt-2 bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Add Blog
                    </button>
                </div>
            </form>

            <div className="mt-8 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Blogs</h2>
                {blogs.length === 0 ? (
                    <p className="text-gray-600 text-center">No blogs available. Please add some blogs.</p>
                ) : (
                    <table className="min-w-full border border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                    Content
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                    Author
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {blogs.map((blog) => (
                                <tr
                                    key={blog.id}
                                    className="hover:bg-indigo-50 transition-colors duration-200"
                                >
                                    <td className="px-6 py-3 text-gray-800 font-medium">{blog.title}</td>
                                    <td className="px-6 py-3 text-gray-600">{blog.content}</td>
                                    <td className="px-6 py-3 text-gray-700">{blog.author}</td>
                                    <td className="px-6 py-3">
                                        <button className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
                                        onClick={()=>{ handleDelete(blog.id)}}
                                        > 
                                            <FaRegTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                )}
            </div>
        </div >
    )
}

export default Blogs