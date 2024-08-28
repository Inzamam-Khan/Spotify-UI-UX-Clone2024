import { useParams } from "react-router-dom"
import { AlbumDataHeader } from "./AlbumDataHeader"
import { albumsData, songsData } from "../assets/albumCovers/assets"
import { useEffect, useRef } from "react"
import { usePlayerContext } from "../Context/PlayerContext"

export const AlbumData=()=>{
    const {id} = useParams()
    const album =albumsData[id]
    const albumBgRef=useRef()
    const albumBgColor=album.bgColor.toString()

    const {playWithId}=usePlayerContext()

    


    useEffect(()=>{
        
                if(album)       {

                
            albumBgRef.current.style.background=`linear-gradient(${albumBgColor},#121212)`
                }
            
        

    },[album])


    
    return(
        <div ref={albumBgRef} className="flex flex-col gap-1 h-full p-1 rounded ">
       
        <AlbumDataHeader {...album}/>
      
      
        <div className=" grid grid-cols-3 sm:grid-cols-4  pl-2 text-[#a7a7a7]">
            <p>
                <span>#</span>
                Title
            </p>
            <p>Album</p>
            <p className="hidden sm:block">Date Added</p>

            {/* <img src={} alt="" className="" /> */}
            <p>Duration</p>
            </div>


            <div className="flex  flex-1  flex-col max-h-full overflow-y-auto">
            {songsData.map((item,index)=>(    
            <div onClick={()=>playWithId(item.id)} key={index} className="hover:bg-neutral-500 items-center cursor-pointer rounded-md  overflow-y-hidden mb-1 text-blue-300 grid grid-cols-3 sm:grid-cols-4 pl-2  overflow-auto max-sm:min-h-[3rem] min-h-[3rem]  ">
                    <p className=" ">{item.id +1} 
                    <img src={item.image} alt=""  className="inline w-[3rem] h-full max-sm:h-[2rem] max-sm:w-[2rem] mx-2 "/>
                    {item.name}
                        </p>
                        

                        
                    <p className=" ">{album.name}</p>
                    <p className="hidden sm:block">{"5d Ago"}</p>
                    <p className="">{item.duration}</p>
                    </div>

                    ))
                }
                </div>
                </div>
            
        
    )
}