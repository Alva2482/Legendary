import React from "react"
import { Container, Row, Col,Card } from 'react-bootstrap';
import cursos from "../assets/datos/cursos.json"
import TargetasFamilias from "../componentes/TargetasFamilias";

const Home = () => {
   /* const ActividadesAgropecuarias=[]
    cursos.map((data,i)=>{
        if(data["Familia Profesional"]==="Industrias Culturales y Creativas"){
             ActividadesAgropecuarias[i]={
                
                CUE: data.CUE,
                Región: data.Región,
                Centro: data.Centro,
                Distrito: data.Distrito,
                EntidadConveniante: data["Entidad Conveniante"],
                HorasTotalesAsignadas: data["Horas Totales Asignadas"],
                Bloque: data.Bloque,
                HorasSemanales: data["Horas Semanales"],
                FamiliaProfesional:data["Familia Profesional"],
                Código:data.Código,
                Curso: data.Curso,
                Inicio: data.Inicio,
                Final: data.Final,
                Publicar: data.Publicar,
                Módulo: data.Módulo
             }   
        }
        return(
            console.log(ActividadesAgropecuarias)
        )
    })
    */

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