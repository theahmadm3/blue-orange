import { Link } from "react-router-dom"

function Error404() {
    return (
        <div className="bg-dark-blue white vh-100 sticky error w-100 flex items-center justify-center">
            <div className="w-40-l w-60-m w-100 center tc">
                <h1>Error 404</h1>
                <h2 className="f3">Page Not Found</h2>
                <Link to='/' className="link white underline dim">
                    <h4>Go back to Homepage</h4>
                </Link>
            </div>
        </div>
    )
}

export default Error404
