import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { createProduct, deleteProduct } from "../../../http/shopApi";

const AmountShopModal = ({ show, onHide, product }) => {
    const [amount, setAmount] = useState('')
    

    const check = () => {
        if (product.amount > amount) {
            createProduct({title: product.title, amount: product.amount - amount})
            deleteProduct(product.id)
            setAmount('')
            onHide()
        } else if (product.amount == amount) {
            deleteProduct(product.id)
            setAmount('')
            onHide()
        } else {
            alert('Такого кол-ва товара в магазине нет')
            setAmount('')
            onHide()
        }
    }

    return ( 
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Отпустить товар покупателю
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите кол-во товара"
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-secondary" onClick={() => { onHide()}}>Закрыть</Button>
                <Button variant="outline-secondary"
                    onClick={() => check()}
                >
                    Отпустить
                </Button>
            </ModalFooter>
        </Modal>
     );
}

 
export default AmountShopModal;