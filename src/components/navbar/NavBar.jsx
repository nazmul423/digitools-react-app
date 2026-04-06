import React from 'react';
import logoimg from '../../assets/cart.png';

const NavBar = () => {
    return (

        <div className="navbar w-[80%] mx-auto py-4 flex border-b border-gray-200">
            <div className="navbar-start">
                <h3 className='text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h3>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg font-medium font-[#101727]">
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Testimonials</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex gap-6 items-center">
                <img src={logoimg} alt="Logo" />
                <button className="btn">Login</button>
                <button className="btn btn-primary rounded-4xl">Get Started</button>
            </div>
        </div>
    
        
    );
};



export default NavBar;