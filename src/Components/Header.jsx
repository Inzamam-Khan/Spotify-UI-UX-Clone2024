import { useNavigate } from 'react-router-dom';
import leftIcon from '../assets/leftArrowicon.svg';
import rightIcon from '../assets/rightIcon.svg';
import userLogo from '../assets/userLogo.png'
export const Header=()=>{
    const navigate=useNavigate()
    
    return(

            <div className="flex flex-col h-[20%] gap-4 item-start justify-start py-3 px-8   bg-[#1a242f] mt-2 rounded-xl">
    
        <div className=" flex  items-center justify-between   ">

            <div className="flex items-center gap-4 justify-center">
                <img src={leftIcon} alt=""  className=' cursor-pointer rounded-full bg-neutral-800'
                onClick={()=>{
                    if(window.location.pathname !='/') navigate(-1)}}/>
                <img src={rightIcon} alt=""  className='cursor-pointer rounded-full bg-neutral-800' 
                onClick={()=>navigate(+1)}/>
            </div>


            <div className='flex items-center gap-3 '> 
                <button className='max-sm:hidden px-3 py-1 bg-white text-black rounded-full'>Expolore Premium</button>
                <button className='px-3 py-1 bg-neutral-700  rounded-full'>
                Install App
                </button>
                <div>
                    <img src={userLogo} alt="" className='rounded-full w-8 border border-white object-cover cursor-pointer' />
                </div>
            </div>


            
        </div>

        <div className='flex gap-4 items-center justify-start '>
            <button className='bg-white px-4  rounded-full text-black'>All</button>
            <button className='px-4  rounded-full bg-neutral-800'>Music</button>
            <button className='px-4  rounded-full bg-neutral-800'>Podcasts</button>
        </div>
        </div>
    )
}