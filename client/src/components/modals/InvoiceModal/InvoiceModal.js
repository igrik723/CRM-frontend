import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { deleteNeed, fetchNeeds } from "../../../http/invoiceApi";
import { addNeedAction } from "../../../store/action-creators/action-creators";

const InvoiceModal = ({ show, onHide }) => {
    const invoice = useSelector(state => state.invoice)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const needsData = await fetchNeeds()
                dispatch(addNeedAction(needsData))
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])

    const removeNeed = (id) => {
        deleteNeed(id)
    }

    return ( 
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Товары, которые требуется отправить в магазин
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <div>
                    {invoice.needs.map(need => 
                        <Card
                            className="m-2"
                        >
                            <div
                                className="p-2"
                            >
                                Название: {need.title}
                                <br/>
                                Кол-во: {need.amount}
                            </div>
                            <Button
                                variant="dark"
                                onClick={() => removeNeed(need.id)}
                            >
                                Отправленно
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

 
export default InvoiceModal;