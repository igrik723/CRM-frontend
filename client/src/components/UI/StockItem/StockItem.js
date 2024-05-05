import React from "react";
import { Col,Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createAccept } from "../../../http/acceptApi";
import { deleteStock } from "../../../http/stockApi";
import AmountStockModal from "../../modals/AmountStockModal/AmountStockModal";
import { useState } from "react";

const StockItem = ({ stock }) => {
    const [amountVisible, setAmountVisible] = useState(false)
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
                        {stock.title}
                    </div>
                    <div
                        
                        className="m-2"
                    >
                        Кол-во: {stock.amount}
                    </div>
                </div>
            </Card>
            <Button
                className="mt-2"
                style={{width: 200}}
                variant="dark"
                onClick={() => setAmountVisible(true)}
            >
                Отправить в магазин
            </Button>
            <AmountStockModal show={amountVisible} onHide={() => setAmountVisible(false)} stock={stock}/>
        </Col>
     );
}
 
export default StockItem;