
// const BlogItem = ({ blog }) => {
//     return (
//         <div className="border p-4 rounded">
//             <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
//             <h3 className="text-xl font-semibold">{blog.title}</h3>
//             <p className="text-sm text-gray-500">By {blog.author} on {blog.date}</p>
//             <p className="mt-2">{blog.excerpt}</p>
//         </div>
//     )
// }

// export default BlogItem

const BlogItem = ({children}) => { 
    return (
        <div className="border p-4 rounded">
            {children}
        </div>
    )
}

export default BlogItem