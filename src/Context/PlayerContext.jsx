import { useEffect, useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {songsData} from '../assets/albumCovers/assets'

// step one
const playerContext=createContext();

// step two
export const usePlayerContext=()=>{

    return useContext(playerContext)
}


// step three
export const PlayerContextProvider=({children})=>{

      

        const audioRef=useRef()
        const seekBg=useRef();
        const seekBar=useRef()

        const [track,setTrack]=useState(songsData[0])

        const [playStatus,setPlayStatus]=useState(false)
        const [time,setTime]=useState({
            currentTime:{
                second:0,
                minute:0
            },
            totalTime:{
                second:track.duration.split(":")[1],
                minute:track.duration.split(":")[0]
            }
        })

        useEffect(()=>{
            setTimeout(()=>{
                audioRef.current.ontimeupdate=()=>{

                    seekBar.current.style.width=(Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%"


                    setTime({...time,
                        currentTime:{
                        second:Math.floor(audioRef.current.currentTime % 60),
                        minute:Math.floor(audioRef.current.currentTime / 60)
                    }})
                }
            })

        },[audioRef])


        const play=()=>{
            audioRef.current.play();
            setPlayStatus(true)
        }

        const pause=()=>{
            audioRef.current.pause();
            setPlayStatus(false)

        }

        const playWithId=async(id)=>{
            await setTrack(songsData[id])
            await audioRef.current.play()
            setPlayStatus(true)
        }

        const previous=async()=>{
            if(track.id >0){
                await setTrack(songsData[track.id -1])
                await audioRef.current.play()
                setPlayStatus(true)

            }
        }

        const next=async()=>{
            if(track.id <songsData.length -1){
                await  setTrack(songsData[track.id +1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        }


        const seekSong=async(e)=>{
            audioRef.current.currentTime=(e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration

        }

    return(
        <playerContext.Provider value={{seekSong,audioRef,seekBar,seekBg,track,setTrack,playStatus,setPlayStatus,time,setTime,play,pause,time
            ,playWithId,next,previous
        }}>
            {children}
        </playerContext.Provider>
    )
}