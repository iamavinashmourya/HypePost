import { Link } from "react-router-dom";
import logo from "../imgs/logo.png"

const BlogEditor = () => {
    return (
        <>
        
        <nav className="navbar">
            <Link to="/" className="flex-none w-10">
                <img src={logo}/>
            </Link>
            <p className="max-md:hidden text-black line-clamp-1 w-full">
                New Blog
            </p>

            <div className="flex gap-4 ml-auto">
                <button className="btn-dark py-2">
                    Publish
                </button>
                <button className="btn-light py-2">
                    Save Draft
                </button>
            </div>
        </nav>

        </>
    )
}

export default BlogEditor;