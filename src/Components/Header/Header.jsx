import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    function NavBar() {
        return (
            <div 
            className="flex md:w-full basis-1/2
            gap-10 justify-end items-center">
                <NavLink
                    className="text-lg text-black  hover:text-red-500"
                    to="/EcommerceOnePageWebsite/">
                    Home
                </NavLink>
                <NavLink
                    className="text-lg text-black  hover:text-red-500"
                    to="/EcommerceOnePageWebsite/appInfo">
                    Info.
                </NavLink>
                <button
                className="text-lg text-black  
                hover:text-red-500 cursor-pointer"
                onClick={()=>CartHide()}>
                    <FaCartArrowDown/>
                </button>
            </div>
        )
    }
    function CartHide(){
        setShowCart(!showCart)
    }
    return (
        <div
        className="h-fit py-5 w-full sticky top-0 right-0">
            <div
            className="h-fit w-[90vw] mx-auto gap-4 flex flex-wrap justify-between items-center">
                <div
                className="basis-1/6 font-extrabold text-xl md:text-3xl text-red-700 flex items-center justify-start">
                    Eccom.
                </div>
                <NavBar />
                {
                    showCart
                }
            </div>
        </div>
    );
}

export default Header
