import React from 'react';
import icono from '../images/moneda.png'
import './styles/Header.css'

class Header extends React.Component {
    render(){
        return (
            <div>
                <div className="backgroundColor">
                    <div className="containerIcono">
                        <img className="icono" src={icono}/>
                    </div>
                    <div className="containerText">
                        <h1>Queres viajar a Bs. AS.</h1>
                        <p>Informate con que moneda viajar para que te convenga más!</p>
                    </div>
                </div>
                <div className="separador"></div>
            </div>
        )
    }
};

export default Header;