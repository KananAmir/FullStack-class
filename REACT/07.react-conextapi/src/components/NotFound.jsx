import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const nav = useNavigate()
    return (
        <div className="text-center mt-10">
            <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
            <p className="mt-4">The page you are looking for does not exist.</p>
            <button className="mt-4 px-4 py-2 !bg-blue-500 text-white rounded"
                onClick={() => nav('/')}
            >Go Home</button>
        </div>
    )
}

export default NotFound