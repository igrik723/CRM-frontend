import React, { useState } from "react";
import { Col,Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deleteProduct } from "../../../http/shopApi";
import AmountShopModal from "../../modals/AmountShopModal.js/AmountShopModal";

const ProductItem = ({ product }) => {
    const userRole = useSelector(state => state.user.role)
    const[amountVisible, setAmountVisible] = useState(false)
    const checkAmount = () => {
        if (userRole === 'salesman') {
            setAmountVisible(true)
        } else {
            deleteProduct(product.id)
        }
        
    }

    return ( 
        <Col md={3}>
            <Card
                className="mt-2"
                style={{width: 200, height: 150}} border={'dark'}
            >
                <div
                    className="d-flex align-items-center justify-center flex-column"
                >
                    <div
                        style={{fontSize: 30}}
                        className="m-2"
                    >
                        Название
                    </div>
                    <div
                        style={{fontSize: 20}}
                    >
                        {product.title}
                    </div>
                    <div
                        
                        className="m-2"
                    >
                        Кол-во: {product.amount}
                    </div>
                </div>
            </Card>
            <Button
                className="mt-2"
                style={{width: 200}}
                variant="dark"
                onClick={() => checkAmount()}
                
            >
                {userRole === 'admin' ?
                    'Удалить'
                    :
                    'Отпустить покупателю'
                }
            </Button>
            <AmountShopModal show={amountVisible} onHide={() => setAmountVisible(false)} product={product} />
        </Col>
     );
}
 
export default ProductItem;