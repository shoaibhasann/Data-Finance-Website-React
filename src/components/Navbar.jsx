import React from "react";
import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <ul className=" hidden md:flex items-center cursor-pointer">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
                <li className="w-28 h-9 flex items-center justify-center rounded bg-white text-black hover:bg-black hover:text-white hover:border hover:border-white font-medium">Sign In</li>
            </ul>
            <div className="cursor-pointer block md:hidden" onClick={handleNav}>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-800' : 'hidden'} >
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
            <ul className="p-4 uppercase font-semibold cursor-pointer">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
            </ul>
            </div> 
        </div>

    )
}

export default Navbar