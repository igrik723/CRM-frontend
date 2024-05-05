import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { createProduct } from "../../../http/shopApi";

const CreateProduct = ({ show, onHide }) => {
    const[title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    
    const addProduct = () => {
        createProduct({title, amount})
        setTitle('')
        setAmount('')
        onHide()
    }
    return ( 
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар в магазин
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название товара"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        
                    />
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
                    onClick={() => addProduct()}
                >
                    Добавить
                </Button>
            </ModalFooter>
        </Modal>
     );
}

 
export default CreateProduct;