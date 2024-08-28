import { usePlayerContext } from "../Context/PlayerContext"
import { Header } from "./Header"
import { Player } from "./Player"
import { Sidebar } from "./Sidebar"

export const PageLayout=({children})=>{

  const {audioRef,track} = usePlayerContext()
    return(
        <div id="container" className="h-screen  flex flex-col flex-1">
      
      {/* /row */}
        <div className="h-[90%] flex flex-1 gap-2">


          {/* first child */}
        <Sidebar/>


          {/* second child */}
         <div className=" flex flex-col flex-1 min-w-[75%]  h-[100%] ">
         <Header/> 
         
         <div className="bg-[#1a242f] h-[78%] mt-2 rounded-xl p-3  w-full " >
         {children}
         </div>

         </div>
        
      </div>
      
      <Player/>

      <audio ref={audioRef} src={track.file} preload="auto"></audio>





      </div>
    

)}