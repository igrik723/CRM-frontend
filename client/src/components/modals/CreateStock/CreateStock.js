import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { createStock } from "../../../http/stockApi";

const CreateStock = ({ show, onHide }) => {
    const[title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    
    const addStock = () => {
        createStock({title, amount})
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
                    Прием товара
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название принятого товара"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите кол-во принятого товара"
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-secondary" onClick={() => { onHide()}}>Закрыть</Button>
                <Button variant="outline-secondary"
                    onClick={() => addStock()}
                >
                    Добавить
                </Button>
            </ModalFooter>
        </Modal>
     );
}

 
export default CreateStock;