import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { exitAction } from "../../../store/action-creators/action-creators";
import { useState } from "react";
import CreateStock from "../../modals/CreateStock/CreateStock";
import InvoiceModal from "../../modals/InvoiceModal/InvoiceModal";f

const StockNavBar = () => {
    const[stockVisible, setStockVisible] = useState(false)
    const[invoiceVisible, setInvoiceVisible] = useState(false)
    const dispatch = useDispatch()
    const exit = () => {
        localStorage.setItem("user", JSON.stringify({ role: "", auth: false }))
        dispatch(exitAction())
    }
    return ( 
        <Navbar
            className='p-2'
            bg="dark"
            data-bs-theme="dark"
        >
            <Navbar.Brand>
                Склад
            </Navbar.Brand>
            <Container
                className="d-flex"
            >
                <Container
                    className="d-flex"
                >
                    <Button
                        style={{marginRight:'10px'}}
                        variant="outline-light"
                        onClick={() => setStockVisible(true)}
                    >
                        Прием товара
                    </Button>
                    <Button
                        variant="outline-light"
                        onClick={() => setInvoiceVisible(true)}
                    >
                        Накладные
                    </Button>
                </Container>
                <Button
                    variant="outline-light"
                    onClick={() => exit()}
                >
                    Выйти
                </Button>
            </Container>
            <CreateStock show={stockVisible} onHide={() => setStockVisible(false)}/>
            <InvoiceModal show={invoiceVisible} onHide={() => setInvoiceVisible(false)}/>
        </Navbar>
     );
}
 
export default StockNavBar;

