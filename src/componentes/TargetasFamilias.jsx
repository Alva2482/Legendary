import React from "react";
import familias from "../assets/datos/familias.json";

import { Row, Col, Card, Button } from "react-bootstrap";

const TargetasFamilias = () => {


    return (
        <Row>
            {familias.map((data, i) => {
              
                return (
                    <Col lg={4} xl={4} sm={12} key={i} className="mt-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Parte de {data.dlc}</Card.Title>
                                <Card.Img variant="top" src={data.foto} />
                                <Card.Text>
                                <h4>{data.modelo}</h4>
                                <h4 >{data.pasajeros}</h4>
                                </Card.Text>
                                <div className="d-grid gap-2 mt-5">
                                <Button variant="outline-success" >{data.precio}</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default TargetasFamilias