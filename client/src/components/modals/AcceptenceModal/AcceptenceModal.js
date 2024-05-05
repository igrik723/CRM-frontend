import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { addAcceptAction } from "../../../store/action-creators/action-creators";
import { fetchAccepts } from "../../../http/acceptApi";
import { deleteAccept } from "../../../http/acceptApi";
import { createProduct } from "../../../http/shopApi";

const AcceptenceModal = ({ show, onHide }) => {
    const accepts = useSelector(state => state.accept.accepts)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const acceptData = await fetchAccepts()
                dispatch(addAcceptAction(acceptData))
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])

    const removeAccept = (id, title, amount) => {
        deleteAccept(id)
        createProduct({title, amount})
    }

    return ( 
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Товары, которые доставили со склада
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <div>
                    {accepts.map(accept => 
                        <Card
                            className="m-2"
                        >
                            <div
                                className="p-2"
                            >
                                Название: {accept.title}
                                <br/>
                                Кол-во: {accept.amount}
                            </div>
                            <Button
                                variant="dark"
                                onClick={() => removeAccept(accept.id, accept.title, accept.amount)}
                            >
                                Принять товар
                            </Button>
                        </Card>    
                    )}
                </div>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-secondary" onClick={() => { onHide()}}>Закрыть</Button>
            </ModalFooter>
        </Modal>
     );
}

 
export default AcceptenceModal;