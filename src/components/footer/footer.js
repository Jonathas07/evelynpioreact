import React from "react"
import './style-Footer.css'
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className="center-header">
           <p className="direitos">&copy; 2023. Ministério Evelyn Pio. Todos os Direitos Reservados</p>
           <p id="Desenvolvido">Desenvolvido por: <Link className="github" to="https://github.com/Jonathas07" target="_blank">Jonathas Souza</Link></p>
        </div>
    )
}

export default Footer