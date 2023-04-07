import React, {useState} from 'react'


const Projectcard = ({src, app, repo, title, description}) => {
  
    const [open, setOpen] = useState(false);

    return (
    // <div class="p-24">
    //     <div class='shadow-md shadow-black rounded-lg hover:scale-105 flex flex-row'>
    //         <img onClick={() => setOpen(!open)} src={src} alt={src} class='h-60 w-72 rounded-md'/>
    //         {open && (
    //             <div class='w-3/4'>
    //                 <h2 class="text-2xl">{title}</h2>
    //                 <p class="py-5 px-24 text-xl text-center">{description}</p>
    //                 <div class="flex flex-row">
    //                     <button class='border-2 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
    //                         <a href={repo}>Repo</a></button>
    //                     <button class='border-2 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
    //                         <a href={app}>App</a></button>
    //                 </div>
    //             </div>
    //         )}
    //     </div>        
    // </div>
    <div class="relative">
        <p>{title}</p>
        <img src={src} alt={src} className='h-60 w-72 rounded-md hover:bg-black'></img>
        <p className='absolute left-1/2 bottom-3/4'>{description}</p>
    </div>
  )
}

export default Projectcard