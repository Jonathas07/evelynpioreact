import './style-header.css'
import { useNavigate } from "react-router-dom"
import logo from '../../assets/COLOR_ICON_EP_branco.png'
import { Menu } from "lucide-react"
import { useContext } from 'react'
import { MenuAtivo } from '../../context/menu'

function Header(){

    const navigate = useNavigate()
    let {menu, setMenu} = useContext(MenuAtivo)

    return(
        <>
            <header>
                <img alt='logo' src={logo} className="logo"  onClick={() => navigate('/')}/> 
                <nav id="nav-top">    
                    <ul>               
                        <li onClick={() => navigate('/')}>HOME</li>
                        <li onClick={() => navigate('/Videos')}>VIDEOS</li>
                        <li onClick={() => navigate('/Agendas')} >AGENDAS</li>
                    </ul>
                </nav>
                <button className="btmenu" onClick={()=> setMenu(!menu)}> <Menu />  </button>
            </header>
        </>
    )
}

export default Header   