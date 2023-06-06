import React from "react";

const Contact = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold p-5">Contact</h1>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-s mb-2" for="grid-name">Name</label>
                        <input className="appearance-none block-w-full bg-gray-100 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="John"/>
                    </div>                    
                </div>
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-s mb-2" for="grid-email">Email</label>
                        <input className="appearance-none block w-full bg-gray-100 text-black rounded py-3 px-4 mb-3 leading-tight border border-gray-200 focus:outline-none focus:bg-white" id="email" type="email" placeholder="johnsmith@email.com"/>
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-s mb-2" for="grid-message">Message</label>
                        <textarea className="no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"/>
                    </div>
                </div>
                <div className="">
                    <button className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded" type="button">Send</button>  
                </div>                
            </form>
        </div>
    )
}

export default Contact