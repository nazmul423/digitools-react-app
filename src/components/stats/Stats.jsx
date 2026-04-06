import React from 'react';

const Stats = () => {
    return (
        <section className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className="w-[80%] mx-auto py-16 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h2 className="text-6xl font-bold text-[#FFFFFF]">50K+</h2>
                        <p className="text-2xl text-[#FFFFFF] text-center mt-3">Active Users</p>
                    </div>
                    <div>
                        <h2 className="text-6xl font-bold text-[#FFFFFF]">500+</h2>
                        <p className="text-2xl text-[#FFFFFF] text-center mt-3">AI Tools</p>
                    </div>
                    <div>
                        <h2 className="text-6xl font-bold text-[#FFFFFF]">1M+</h2>
                        <p className="text-2xl text-[#FFFFFF] text-center mt-3">Design Assets</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;