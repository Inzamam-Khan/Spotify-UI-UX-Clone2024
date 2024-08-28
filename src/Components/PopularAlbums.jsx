import { albumsData } from "../assets/albumCovers/assets"

import { AlbumCard } from "./AlbumCard"
export const PopularAlbums = () => {
    return (
        <div id="container" className="flex flex-col items-start w-[100%]  ">
            <h4 className="text-3xl font-smeibold ">Popular Albums</h4>

 
            <div className="overflow-x-auto overflow-y-hidden flex mt-2 w-full ">
                {albumsData.map((item,index)=>(
                    <AlbumCard key={index} {...item}/>
                ))}

            </div> 















        </div>



    )
}