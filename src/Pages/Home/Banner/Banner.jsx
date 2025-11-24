import React from 'react';
import img from '../../../assets/Ibrahim.png'

const Banner = () => {
    return (
        <div className='bg-secondary'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto'>
                <div className='text-primary w-[95%] mx-auto text-center md:text-start lg:text-start mt-8 md:mt-0 lg:mt-0'>
                    <h3 className='text-xl font-semibold'>Hi, I am</h3>
                    <h1 className='text-3xl md:text-5xl font-bold'>Ibrahim Hossain</h1>
                    <p className='md:w-[70%]  mt-3'><span className='font-bold text-primary'>Web Developer</span> - I truly enjoy bringing ideas to life by building things that didn’t exist before.</p>

                    <div className='mt-5'>
                        <button className='btn btn-primary mr-4 border-primary hover:bg-transparent hover:text-primary'>Download Resume</button>
                        <button className='btn btn-secondary border-primary text-primary hover:bg-primary hover:text-white shadow-sm'>Contact me</button>
                    </div>
                </div>
                <div>
                    <img className='md:w-96' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;