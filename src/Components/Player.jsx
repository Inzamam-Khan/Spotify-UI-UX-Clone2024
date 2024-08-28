import imgCover from '../assets/pexelsImg.jpg'
import shuffleIcon from '../assets/shuffleIcon.svg'
import previousIcon from '../assets/skipPrevious.svg';
import pauseIcon from '../assets/pauseIcon.svg';
import nextIcon from '../assets/skipNext.svg';
import loopIcon from '../assets/repeatIcon.svg';
import playIcon from '../assets/playIcon.svg'
import queueIcon from '../assets/queueMusic.svg'
import micIcon from '../assets/micIcon.svg'
import speakerIcon from '../assets/speakerIcon.svg'
import volumeIcon from '../assets/volumeIcon.svg'
import miniPlayerIcon from '../assets/miniPlayerIcon.svg'
import zoomIcon from '../assets/zoomIcon.svg'
import { usePlayerContext } from '../Context/PlayerContext';

export const Player=()=>{
    const {seekSong,track,seekBar,seekBg,playStatus,play,pause,time,previous,next}=usePlayerContext()
    
    return (
        <div className="h-[10%] relative z-50  flex  justify-between  px-2 bg-[black] ">

                {/* first main div */}
             <div className="flex flex-1 gap-5 items-center max-md:hidden">
                <img src={track.image} alt="" className="object-cover w-12 rounded-xl" />
                    <div>
                    <p>{track.name}</p>
                    <p>{track.desc}</p>
                    </div>
                
            </div>


            {/* second main div */}
            <div className='flex flex-1 flex-col mt-2 items-center  '>

                <div className='flex items-center gap-2  cursor-pointer'>
                    
                    <img src={shuffleIcon} alt=""/>                    
                    <img src={previousIcon} alt=""  onClick={()=>previous()}/>

                        {playStatus? ( <img onClick={()=>pause()} src={pauseIcon} alt="" />):
                        ( <img onClick={()=>play()} src={playIcon} alt="" />)
                       
                   

                        }
                    <img src={nextIcon} alt="" onClick={()=>next()}/>
                    <img src={loopIcon} alt="" />

                </div>


                {/* second subdiv */}
                <div className='flex items-center justify-evenly gap-4 w-full px-4 '>
                    <p className="inline-flex">{time.currentTime.minute}<span>:{time.currentTime.second}
                    </span>

                    </p>

                    <div onClick={seekSong} ref={seekBg} className='h-1.5 w-[100%] bg-slate-gray border rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='bg-green-700 w-0 h-full rounded-full'/>
                    </div>
                    
                    <p className="inline-flex">{time.totalTime.minute}<span className="inline">:{time.totalTime.second}</span></p>
                    


                </div>
            </div>


            {/* third main div */}
            <div className='flex flex-1 gap-1 items-center justify-end max-md:hidden '>
                <img src={queueIcon} alt="" />
                <img src={micIcon} alt="" />
                <img src={speakerIcon} alt="" />
                <img src={volumeIcon} alt="" />
                <div className="w-20 h-1 bg-white rounded full">
                    <hr className='bg-[#1a242f] h-full rounded-full w-[25%]'/>
                </div>
                <img src={miniPlayerIcon} alt="" />
                <img src={zoomIcon} alt="" />
                <img src="" alt="" />

            </div>
            
        </div>
    )
}