import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import PropTypes from 'prop-types'

export default function Login({ onIdSubmit }) {
    const idRef = useRef()
    
    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4());
    }

    return (
        <Container className='align-items-center d-flex' style={{height: '100vh', backgroundColor: '#282c34', color: 'white'}}>
            <Form className='w-100' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your Login</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2"> Login </Button>
                <Button onClick={createNewId} variant="secondary"> Create a New Account </Button>
            </Form>
        </Container>
    )
}

Login.propTypes = {
    onIdSubmit: PropTypes.func
}