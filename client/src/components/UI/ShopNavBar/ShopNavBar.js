import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { exitAction } from "../../../store/action-creators/action-creators";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CreateProduct from "../../modals/CreateProduct/CreateProduct";
import CreateInvoice from "../../modals/CreateInvoice/CreateInvoice";
import AcceptenceModal from "../../modals/AcceptenceModal/AcceptenceModal";

const ShopNavBar = () => {
    const [productVisible, setProductVisible] = useState(false)
    const [invoiceVisible, setInvoiceVisible] = useState(false)
    const [acceptVisible, setAcceptVisible] = useState(false)

    const userRole = useSelector(state => state.user.role)
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
                Магазин
            </Navbar.Brand>
            <Container
                className="d-flex"
            >
                {userRole === 'admin' ?
                    <Button
                        variant="outline-light"
                        onClick={() => setProductVisible(true)}
                    >
                        Добавить товар
                    </Button>
                    :
                    <Container
                        className="d-flex"
                    >
                        <Button
                            variant="outline-light"
                            style={{ marginRight: '10px' }}
                            onClick={() => setInvoiceVisible(true)}
                        >
                            Составить накладную
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={() => setAcceptVisible(true)} 
                        >
                            Прием товаров со склада
                        </Button>
                    </Container>
                    
                }
                <Button
                    variant="outline-light"
                    onClick={() => exit()}
                >
                    Выйти
                </Button>
            </Container>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateInvoice show={invoiceVisible} onHide={() => setInvoiceVisible(false)}/>
            <AcceptenceModal show={acceptVisible} onHide={() => setAcceptVisible(false)}/>
        </Navbar>
     );
}
 
export default ShopNavBar;