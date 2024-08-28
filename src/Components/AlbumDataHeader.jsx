

export const AlbumDataHeader=({name,image,desc})=>{
    
    return(
        <>

                {/* first div */}
            <div className="flex max-sm:flex-col  items-center justify-start gap-2 sm:gap-8   px-3 mb-3">
                
                
                <img src={image} alt=""  className=" w-[5rem] sm:w-[8rem]  object-contain rounded-xl"/>

                        {/* second subdiv title& desc */}
                <div className="flex flex-col items-start max-sm:items-center gap-1 ">
                    <p className="font-semibold ">Playlist</p>
                    <h4 className=" text-4xl font-bold">{name}</h4>
                    <p>{desc}</p>




                    <div className="flex flex-1 gap-1 items-center text-xs mt-1">
                        <p className="text-sm mr-2">Spotify</p>
                    <div className="bg-neutral-500 w-2 h-2 rounded-full "></div>
                    <span className="inline-block">2,323 Likes </span>

                    
                    <div className="bg-neutral-500 w-2 h-2 rounded-full ml-2 "></div>
                    <p className="font-semibold text-sm">50 songs</p>
                    <span className="inline-block">about 2h 30mins </span>
                    </div>
                  

                </div>
    
        </div>

        </>
    )
}
