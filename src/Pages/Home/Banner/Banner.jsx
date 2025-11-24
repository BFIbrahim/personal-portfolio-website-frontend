
import React from 'react';
import img from '../../../assets/Ibrahi2.png'

const Banner = () => {
    return (
        <section className={`py-12 md:py-20 bg-secondary`}>
            <div className="container mx-auto md:px-24">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    
                    <div className="w-full  text-center md:text-left">
                        <p className="text-xl mb-2 text-primary">Hi, I am</p>
                        
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                            Ibrahim Hossain
                        </h1>
                        
                        <p className="text-primary text-lg mb-8 max-w-lg md:max-w-none mx-auto md:mx-0">
                            <span className='font-bold'>Web Developer</span> - I truly enjoy bringing ideas to life by building things that didn't exist before.
                        </p>
                        
                        <div>
                            <button className='btn btn-primary text-white border-primary hover:bg-transparent hover:text-primary mr-4'>Download Resume</button>
                            <button className='btn btn-secondary text-primary border-primary hover:bg-primary hover:text-white'>Contact me</button>
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="relative w-96 h-auto">
                            <img 
                                src={img} 
                                alt="Ibrahim Hossain - Frontend Web Engineer" 
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Banner;