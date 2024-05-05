import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { createAccept } from "../../../http/acceptApi";
import { deleteStock } from "../../../http/stockApi";
import { createStock } from "../../../http/stockApi";

const AmountStockModal = ({ show, onHide, stock }) => {
    const [amount, setAmount] = useState('')
    

    const check = () => {
        if (stock.amount > amount) {
            createStock({ title: stock.title, amount: stock.amount - amount })
            createAccept({title: stock.title, amount: amount})
            deleteStock(stock.id)
            setAmount('')
            onHide()
        } else if (stock.amount == amount) {
            deleteStock(stock.id)
            createAccept({title: stock.title, amount: amount})
            setAmount('')
            onHide()
        } else {
            alert('Такого кол-ва товара на складе нет')
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
                   Отправить товар в магазин
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
                    Отправить
                </Button>
            </ModalFooter>
        </Modal>
     );
}

 
export default AmountStockModal;