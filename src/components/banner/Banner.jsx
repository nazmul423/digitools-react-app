import React from 'react';
import BannerImg from '../../assets/Banner.png';
import Icon from '../../assets/Group 5.jpg';
import Play from '../../assets/Play.png';

const Banner = () => {
    return (

        <section className="w-[80%] mx-auto py-16 mb-4 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[4F39F6] border border-red-500/30 bg-gradient-to-r from-[#4F39F6] to-[#4F39F6] bg-clip-text text-transparent text-sm font-medium px-5 py-2 rounded-full">
                        <img src={Icon} alt="Icon" /> New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-7xl font-bold leading-[1.1] text-[#101727]">
                        Supercharge Your<br>
                        </br> Digital Workflow

                    </h1>
                    <br />

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products

                    </p>

                    <div className='flex gap-4'>
                        <button className=" btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
                            Explore Products
                        </button>
                        <button className=" btn border border-purple-600 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#920bf8] bg-clip-text text-transparent">
                            <img src={Play} alt="Play" />  Watch Demo
                        </button>
                    </div>

                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        className="max-h-[520px] w-auto object-contain drop-shadow-2xl rounded-3xl"
                        src={BannerImg}
                        alt="AI Models Banner"
                    />
                </div>

            </div>

        </section>
    );
};

export default Banner;