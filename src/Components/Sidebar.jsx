import homeIcon from '../assets/homeIcon.svg'
import searchIcon from '../assets/searchIcon.svg'
import bookmarkIcon from '../assets/collectionsBookmarkIcon.svg'
import forwardIcon from '../assets/arrowForwardIcon.svg'
import addIcon from '../assets/addIcon.svg'
import { Player } from './Player'
export const Sidebar=()=>{
    return(
        // hidden lg:flex text-white
        <div className="w-[25%] h-full flex-col max-md:hidden ">

                {/* first main div having box home & search icon */}
            <div className="h-[15%] rounded-xl flex flex-col justify-around bg-[#1a242f] mt-2 ">

                {/* home icon */}
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={homeIcon} alt="" className="" />
                    <p className="font-bold">Home</p>
                </div>

                <div className='flex items-center gap-3 pl-8 cursor-pointer '>
                    <img src={searchIcon} alt="" className="" />
                    <p className='font-bold'>Search</p>

                </div>

            </div>

                {/* second main div */}
            <div className="mt-2 bg-[#1a242f] flex flex-col h-[82%] rounded-xl gap-3  ">

               
                {/* first subdiv */}
                <div className='p-3 flex  items-center justify-between gap-3 '>
                  
                    <div className='flex flex-1 items-center gap-2 '>
                        <img src={bookmarkIcon} alt="" />
                        <p className='font-semibold'>Your Library</p>
                    </div>

                    {/* right arrow & plus icon */}
                    <div className='flex  items-center justify-end gap-1 '>
                        <img src={forwardIcon} alt="" />
                        <img src={addIcon} alt="" />
                    </div>
                </div>



                    {/* second sub div */}
                <div className='flex flex-col gap-2 p-3 bg-neutral-800 mx-2 rounded-xl'>
                    <p className="font-semibold">Create your first Playlist</p>
                    <p className='text-slate-gray' >it's easy we'll help you</p>
                    <button className='font-semibold max-w-max rounded-full  px-2 py-1 bg-white text-black'>Create Playlist</button>
                    

                </div>

                
                
                {/* third subdiv */}
                <div className='flex flex-col gap-2 p-3 bg-neutral-800 mx-2 rounded-xl'>
                    <p className="font-semibold">Let's find some podcasts to follow</p>
                    <p className='text-slate-gray' >We'll keep you updated on new episodes</p>
                    <button className='font-semibold max-w-max rounded-full  px-2 py-1
                     bg-white text-black'>Browse podcasts</button>
                    

                </div>



            
        </div>


        

            </div>
    )
}