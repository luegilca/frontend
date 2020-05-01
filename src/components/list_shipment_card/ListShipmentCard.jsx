import React, {useState} from "react";
import {Button, Container, Row, Col, Form, Image, Card, Spinner, Collapse } from "react-bootstrap";
import {faPlaneDeparture, faTruck, faShip, faComments} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./ListShippmentCard.styles.css"
import GoogleMap from "../map/GoogleMap";


const ListShipmentCard = ({destino,tipo,fecha,isGrey,id,enProgreso}) => {
    const [open, setOpen] = useState(false);
    const id_colapse = `Envio${destino}${tipo}${id}`;
    const progreso = enProgreso ? "En Progreso":"Finalizado"
    const consultar = enProgreso ? "Consultar Estado":"Consultar Historia"
    const color = enProgreso ? "#845ec2":"rgba(214,93,177,0.8)"
    let icon = faPlaneDeparture;
    if(tipo === "MARITIMO"){
        icon = faShip;
    } else if( tipo === "TERRESTRE") {
        icon = faTruck;
    }
    return(
        <Card style={{backgroundColor: isGrey ? "#F8F8F8" : "#FFF"}} >
            <Card.Body>
               <Container fluid>
                <Row>
                    <Col md={8} xs={8} >
                        <h6 style={{fontSize:"14px"}}>{tipo}</h6>
                        <Card.Title style={{marginBottom:0, marginTop:"6px"}}>Envio a {destino}</Card.Title>
                        <h6 style={{color:color}}>{progreso}</h6>
                        <p style={{fontSize:"13px"}}>{fecha}</p>
                    </Col>
                    <Col md={4} xs={4} className="d-flex flex-nowrap align-items-center" >
                        <FontAwesomeIcon icon={icon} className={"icon_shippment"}/>
                    </Col>
                </Row>
               </Container >
                <Button className={"reg mt-2"} variant="none"  onClick={() => setOpen(!open)} aria-controls={id_colapse}
                        aria-expanded={open}>{consultar}</Button>
                <Collapse in={open} className={"mt-2"} >
                    <div id={id_colapse}>
                        <hr/>
                        <GoogleMap
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw"}
                            containerElement={<div style={{height:"400px"}}/>}
                            mapElement={<div style={{height:"100%"}}/>}
                            loadingElement={<p>Cargando</p>}
                        />
                        <div style={{textAlign:"center"}}>
                            <Button className={"btn-atencionCliente mt-2"} variant="none">
                                Contactar Soporte
                                <FontAwesomeIcon icon={faComments} className={"ml-2"}/>
                            </Button>
                        </div>
                    </div>

                </Collapse>
            </Card.Body>
        </Card>
    );
};

export default ListShipmentCard;