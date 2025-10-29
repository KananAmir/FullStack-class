import BlogItem from "./BlogItem"

const Blogs = ({ blogs }) => {
    
  return (
    <div>
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* {blogs.map((blog)=> ( 
              <BlogItem key={blog.id} blog={blog} />
            ))} */}

            {blogs.map((blog)=> ( 
              <BlogItem key={blog.id}>
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-500">By {blog.author} on {blog.date}</p>
                <p className="mt-2">{blog.excerpt}</p>
              </BlogItem>
            ))}
        </div>
    </div>
  )
}

export default Blogs 