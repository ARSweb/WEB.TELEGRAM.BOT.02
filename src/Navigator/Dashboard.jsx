import { Link } from "react-router-dom"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="DFB">
        <div className="MainLogo"></div>
      <nav className="DMN">
        <Link to="/mmaf" className="DNI" >Malumotnoma yaratish</Link>
        <Link to="/azaf" className="DNI" >Ariza yaratish</Link>
      </nav>
    </div>
  )
}

export default Dashboard
