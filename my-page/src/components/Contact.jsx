import React from "react";

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <form className="flex flex-col gap-6">
                <div className="flex">
                    <label>Name</label>
                    <input className="text-black p-2 outline-none border border-white focus:border-green-400"/>
                </div>
                <div className="flex">
                    <label>Email</label>
                    <input className="text-black p-2 outline-none border border-white focus:border-green-400"/>
                </div>
                <div className="flex">
                    <label>Subject</label>
                    <input className="text-black p-2 outline-none border border-white focus:border-green-400"/>
                </div>
                <div className="flex">
                    <label>Message</label>
                    <input className="text-black p-2 outline-none border border-white focus:border-green-400"/>
                </div>
                <button className="bg-red-900 hover:bg-teal-950 duration-300 rounded-full">Send!</button>
            </form>
        </div>
    )
}

export default Contact