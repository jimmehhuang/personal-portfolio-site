import React from 'react';
import ExperienceCard from './ExperienceCard'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {

    return (
        <div className="w-full min-h-screen m-auto text-center flex flex-col section">  
            <TypeAnimation sequence={[
                ' Welcome!', 2000, " Hi!", 2000, " Hello!", 2000, " Hey!", 2000
            ]} speed={30} omitDeletionAnimation={true} cursor={false} repeat={Infinity} className='font-bold text-4xl md:text-7xl'/>          
            <h2 className="font-bold text-2xl md:text-4xl p-2">
                My name is <span className="font-bold text-2xl md:text-4xl text-[#2BC6AA]">Jimmy.</span>
            </h2>
            <h2 className="text-xl p-2 mt-10">I'm a full-stack web developer.</h2>
            <ExperienceCard/>
        </div>
    );
}

export default Home;