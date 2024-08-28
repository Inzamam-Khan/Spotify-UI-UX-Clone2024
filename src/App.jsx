import { Route, Routes } from "react-router-dom"

import { PageNotFound } from "./Components/PageNotFound"
import { Home } from "./Components/Home"

import { AlbumData } from "./Components/AlbumData"




function App() {

  
  



  return (
   <>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/album/:id" element={<AlbumData/>}/>
        <Route path="/" element={<PageNotFound/>}/>
      </Routes>
    

      
    </>
  )
}

export default App
