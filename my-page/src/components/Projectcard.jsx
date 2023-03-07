import React, {useState} from 'react'

const Projectcard = ({src, app, repo, title, description}) => {
  
    const [open, setOpen] = useState(false);

    return (
    <div>
        <div class="p-10">
        <div class='shadow-md shadow-black rounded-lg hover:scale-105'>
            <img onClick={() => setOpen(!open)} src={src} alt={src} class='h-32 w-32 rounded-md'/>
            {open && (
                <div class='flex items-center justify-center'>
                    <p>{title}</p>
                    <p>{description}</p>
                    <button class='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        <a href={repo}>Repo</a>
                    </button>
                    <button class='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        <a href={app}>App</a>
                    </button>
                </div>
            )}
        </div>
    </div>
</div>
  )
}

export default Projectcard