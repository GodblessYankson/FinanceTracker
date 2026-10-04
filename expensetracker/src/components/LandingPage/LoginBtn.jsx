import { Link } from "react-router-dom"
export const LoginBtn = () => {
    return (
        <div>
            <div className="hidden md:flex  gap-5 items-center text-md font-semibold">
            <Link to="/login" className="text-[#a6acb6]">Log In</Link>
            <Link to="/signup" className="text-white bg-violet-500 shadow-2xl rounded-2xl px-8 py-2">Sign Up</Link>
        </div>
        <div className="block md:hidden space-y-3 ">
            <Link className="block bg-[#f1f5f9] py-2 text-center w-full rounded-xl">Log In</Link>
            <Link className="block bg-violet-500 py-2 text-center w-full text-[#f2f9f7] rounded-xl">Sign Up</Link>
        </div>
        </div>
    )
}