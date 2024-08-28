import { Featured } from "./Featured"
import { PopularAlbums } from "./PopularAlbums"

export const Home=()=>{
    return(<div className=" flex flex-1 flex-col overflow-auto h-[100%]">
        <Featured/>

        <PopularAlbums />

    </div>)
}