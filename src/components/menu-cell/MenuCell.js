import { X } from 'lucide-react'
import './MenuCell.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MenuAtivo } from '../../context/menu'


function MenuCell(){
    
    let {menu, setMenu} = useContext(MenuAtivo)
    console.log(menu)   
    const navigate = useNavigate
    
    return(
            <div className={menu? "center" : "centerInativo" }>
                <button className='btexit' onClick={() => setMenu(!menu)}><X /></button>
                <div className='lista'>               
                    <span className='itens' onClick={() => navigate('/')}>HOME</span>
                    <span className='itens' onClick={() => navigate('/Videos')}>VIDEOS</span>
                    <span className='itens' onClick={() => navigate('/Agendas')} >AGENDAS</span>
                </div>
            </div>
    )
        
}
export default MenuCell