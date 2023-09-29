import React from "react"
import './style-agendas.css'
import fotoE from '../../assets/camará_shopping1_corte.png'
import fotoD from '../../assets/camará shopping2 cortado.png'

function Agendas(){
    return(
        <div className="main-agenda">
            <img src={fotoE} className="fotoE"/>
            <div id="agendamento">
                <p className="txtagenda">Nome:</p> <input type="text" name="nome" id="nome" placeholder="Digite seu nome e sobre nome" />
                <p className="txtagenda">Telefone:</p> <input type="tel" name="fone" id="fone" placeholder="(00) 9 0000-0000 WhatsApp" />
                <p className="txtagenda">Data do evento:</p> <input type="date" name="data" id="data" />
                <p className="txtagenda">Quantos dias pretende reservar:</p>
                    <input type="radio" name="raddias" id="um" checked />
                    <label for="um" className="txtagenda">1 dia ou</label>
                    <input type="radio" name="raddias" id="mais" />
                    <label for="mais" className="txtagenda">2 ou mais</label>
                <p className="txtagenda">Horas de início:</p> <input type="time" name="horainicio" id="horainicio" />
                <p className="txtagenda">Horas de término:</p> <input type="time" name="horafinal" id="horafinal" />
                <p className="txtagenda">Carater do Evento:</p> <input type="text" name="evento" id="evento" placeholder="congresso/ceia/casamento..." />
                <p className="txtagenda">Local:</p> <input type="text" name="local" id="local" placeholder="IEADPE local/nome do espaço" />
                <p className="txtagenda">Endereço:</p> <input type="text" name="endereco" id="endereco" placeholder="rua,n - bairro/cidade/estado" />
                <p className="txtagenda">Observações:</p> <textarea name="obs" id="obs" placeholder="Digite qualquer coisa que precisa ser informado e não foi solicitado no formulário..." />
                <input type="submit" className="btenviar" value="Enviar" onClick={() => alert('estar em processo! só  uma parte do Front-End implementado por enquanto!')} />
            </div>
            <img src={fotoD} className="fotoD" />
        </div>
    )
}

export default Agendas