import React, { useRef } from 'react'
import { Modal, ModalBody, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function NewConversationModal({ closeModal }) {
    const idRef = useRef()
    const nameRef = useRef()
    const { createContacts } = useContacts()
    
    function handleSubmit(e) {
        e.preventDefault();

        //createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton> Create Contact </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}> </Form>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} required />
                </Form.Group>
                <Button type="submit">Create</Button>
            </Modal.Body>
        </>
    )
}
