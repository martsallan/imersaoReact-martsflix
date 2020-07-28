import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from "../Button/index";

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</Button>
        </nav>
    )
}

export default Menu;