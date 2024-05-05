import React from "react";
import StockList from "../../components/UI/StockList/StockList";
import { Container, Row, Col } from "react-bootstrap";

const StockPage = () => {
    return ( 
        <Container>
            <Row>
                <Col md={2}>

                </Col>
                <Col md={9}>
                    <StockList/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default StockPage;