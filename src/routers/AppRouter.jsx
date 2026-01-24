import { Routes, Route } from "react-router-dom"
import Dashboard from "../Navigator/Dashboard"
import MmaF from "../pages/Malumotnoma/MmaF"
import MmaP from "../pages/Malumotnoma/MmaP"
import { MmaDProvider } from "../pages/Malumotnoma/MmaD"

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/mmaf" element={<MmaDProvider><MmaF/></MmaDProvider>}/>
            <Route path="/mmap" element={<MmaDProvider><MmaP/></MmaDProvider>}/>
        </Routes>      
    </div>
  )
}

export default AppRouter
