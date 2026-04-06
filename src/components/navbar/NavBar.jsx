import React from 'react';
import logoimg from '../../assets/cart.png';

const NavBar = () => {
    return (

        <div className="navbar w-[80%] mx-auto py-4 flex">
            <div className="navbar-start">
                <h3 className='text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h3>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg ">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Services</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4 items-center">
                <img src={logoimg} alt="Logo" />
                <button className="btn btn-primary">Login</button>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};



export default NavBar;