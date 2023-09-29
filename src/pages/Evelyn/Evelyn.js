import { Outlet } from "react-router-dom"
import Header from "../../components/header/header"
import Footer from '../../components/footer/footer'
import MenuCell from "../../components/menu-cell/MenuCell"
import { ContextMenu } from "../../context/menu"


function Evelyn(){
    return(
      <>
      <ContextMenu>
        <MenuCell />
        <Header /> 
      </ContextMenu>
        <Outlet />
        <Footer />
        
      </>
    )
}

export default Evelyn