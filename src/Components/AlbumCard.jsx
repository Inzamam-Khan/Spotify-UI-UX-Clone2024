import { Link, useNavigate } from "react-router-dom"

export const AlbumCard=({image,name,desc,id})=>{
    const navigate=useNavigate()
    return(
        
        <div className="hover:bg-neutral-600 min-w-[180px]  min-h-[20rem]
        cursor-pointer rounded " id='container' onClick={()=>navigate(`/album/${id}`)}>

            <div className="flex flex-col p-3 gap-3 items-center ">
            
                <img src={image} alt="" className="w-[10rem] h-[10rem] rounded-xl object-contan" />
                <h4 className="text-2xl leading-none text-center">{name}</h4>
                <p className=" ">{desc}</p>
            </div>

        </div>
        
    )
}