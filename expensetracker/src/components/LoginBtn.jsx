import { Link } from "react-router-dom"
export const LoginBtn = () => {
    return (
        <div className="flex gap-5 items-center text-xl font-semibold">
            <Link to="/" className="text-[#a6acb6]">Log In</Link>
            <Link to="/signup" className="text-white bg-violet-500 shadow-2xl rounded-2xl px-8 py-2">Sign Up</Link>
        </div>
    )
}