import React from "react";
import ProductList from "../../components/UI/ProductList/ProductList";
import { Container, Row, Col } from "react-bootstrap";

const ShopPage = () => {
    return ( 
        <Container>
            <Row>
                <Col md={2}>

                </Col>
                <Col md={9}>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default ShopPage;