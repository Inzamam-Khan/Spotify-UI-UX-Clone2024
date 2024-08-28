import { albumsData } from "../assets/albumCovers/assets"

import { AlbumCard } from "./AlbumCard"
export const Featured = () => {
    return (
        <div id="container" className="flex flex-col items-start w-[100%]  ">
            <h4 className="text-3xl font-smeibold ">Featured Charts</h4>

 
            <div className=" overflow-x-auto overflow-y-hidden mt-2  flex w-full ">
                {albumsData.map((item,index)=>(
                    <AlbumCard key={index} {...item}/>
                ))}

            </div> 















        </div>



    )
}