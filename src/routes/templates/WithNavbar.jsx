import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const WithNavbar = () => {
  return (
    <>
        <Navbar/>
        <Outlet/> 
        {/* Outlet = children pero para las rutas ! */}
    </>
  )
}

export default WithNavbar