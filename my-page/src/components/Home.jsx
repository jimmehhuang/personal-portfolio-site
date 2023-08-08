import React from 'react';
import NavBar from './NavBar';
import {TypeAnimation} from 'react-type-animation'

const Home = () => {

    return (
        <div className="top-0 static w-full min-h-screen m-auto flex flex-col section">
            <NavBar/>
            <div className="m-auto my-48 flex flex-col items-center justify-items-center">
                <TypeAnimation 
                    sequence={[
                        ' Welcome!', 2000, 
                        " Hi!", 2000, 
                        " Hello!", 2000, 
                        " Hey!", 2000
                    ]} 
                    speed={30} 
                    omitDeletionAnimation={true} 
                    cursor={false} 
                    repeat={Infinity}
                    className='font-bold text-4xl md:text-7xl'
                />
                <h2 className="font-bold text-2xl md:text-4xl p-2">
                    My name is <span className="font-bold text-3xl md:text-4xl text-[#2BC6AA]">Jimmy.</span>
                </h2>
                <h2 className="text-xl p-2 mt-10">I'm a full-stack web developer.</h2>
                <a href="#About" className='my-2 h-8 w-36 border-2 rounded-md border-white text-semibold hover:bg-white hover:text-[#2BC6AA]'>
                    Come on in!
                </a>
            </div>
            
        </div>
    );
}

export default Home;