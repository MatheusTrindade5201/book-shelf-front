import {Link} from "react-scroll";
import React, { useState } from "react";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";

const Nav =() => {
    const [click, setClick] = useState(false);
    const handleClick =() =>{
        setClick(!click);
    }
    const navLinks = [
        {path: "Home", title:"Home"},
        {path: "About", title:"About"},
        {path: "Login", title:"Login"},
    ]

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 bg-stone-800">
                <div className=" flex items-center flex-1">
                    <span className="text-3xl font-bold">Book Shelf</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text[18px]">
                            {React.Children.toArray(
                                   navLinks.map((link) => 
                                    (
                                        <Link spy={true} smooth={true} to={link.path}>
                                            <li className="hover:text-amber-100 transition birder-b-2 border-slate-600  hover:border-amber-100 cursor-pointer">{link.title}</li>
                                        </Link>
                                    ))
                                )
                            }
                        </ul>
                    </div>
                </div>
                    <div>
                        {click && <ul className="flex gap-8 mr-16 text[18px]">
                            {React.Children.toArray(
                                   navLinks.map((link) => 
                                    (
                                        <Link spy={true} smooth={true} to={link.path}>
                                            <li className="hover:text-amber-100 transition birder-b-2 border-slate-600  hover:border-amber-100 cursor-pointer">{link.title}</li>
                                        </Link>
                                    ))
                                )
                            }
                        </ul>}
                    </div>

                    <button className="block sm:hidden transition" onClick={handleClick}>
                        {click ?<FaTimes/> : <CiMenuFries/>}
                    </button>
            </div>
        </nav>
    )
}

export default Nav;