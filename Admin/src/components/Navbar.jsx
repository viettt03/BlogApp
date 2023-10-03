import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineFileAdd, AiOutlineHome } from 'react-icons/ai'

const NavItem = ({ to, value, Icon, closed }) => {
    const commomClasses = "flex items-center space-x-2 w-full p-2 block whitespace-nowrap";
    const activeClass = commomClasses + " bg-blue-400 text-white";
    const inActiveClass = commomClasses + " text-gray-500";

    return (
        <NavLink
            className={({ isActive }) => isActive ? activeClass : inActiveClass}
            to={to}>
            {Icon}
            <span
                className={closed ? "w-0 transition-width overflow-hidden" : "w-full transition-width overflow-hidden"}>
                {value}
            </span>
        </NavLink>
    );
}
export default function Navbar({ closed }) {
    return (
        <nav className=''>
            <div className='flex justify-center p-3'>
                <img className='w-14' src='./logo.png' alt='' />
            </div>
            <ul>
                <li>
                    <NavItem
                        closed={closed}
                        to='/'
                        value="Home"
                        Icon={<AiOutlineHome size={25} />}
                    ></NavItem>
                </li>
                <li>
                    <NavItem
                        closed={closed}
                        to='/create-post'
                        value="Create home"
                        Icon={<AiOutlineFileAdd size={25} />}></NavItem>

                </li>
            </ul>
        </nav>
    )
}
