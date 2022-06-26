import React from "react"
import { Container, Row, Col,Card } from 'react-bootstrap';

import TargetasFamilias from "../componentes/TargetasFamilias";

const Home = () => {
   

    return (
        <Container>
            <div className="texto-portada-vision">
                <h2 className="Titulo">TODOS LOS VEHÍCULOS</h2>
                
            </div>

            
            <TargetasFamilias/>

        </Container>
    )
}
export default Home 