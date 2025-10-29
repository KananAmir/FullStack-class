
const Layout = ({ children }) => {

    return (
        <div>
            <header className="flex justify-between items-center p-4 bg-gray-200">
                <h1>My Website</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>


            <main>
                {children}
            </main>

            <footer className="text-center p-4 bg-gray-200 mt-4">
                <p>© 2024 My Website</p>
            </footer>
        </div>
    )
}

export default Layout