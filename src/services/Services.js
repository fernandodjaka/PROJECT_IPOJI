import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import "./services.css";

import servicesData from '../assets/data/serviceData';

const Services = () => {
    return(
     <section className="services">
        <Container>
            <Row>

                {
                    servicesData.map((item,index)=>( 
                        <Col lg='3' md='4' key={index}>
                            <div className="service__item">
                                <span>
                                <i class={item.icon}></i>
                                </span>
                            <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                            </div>
                            </div>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    </section>
    )
}

export default Services;