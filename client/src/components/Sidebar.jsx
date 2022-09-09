import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'

import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'

const CONVERSATIONS = 'conversations'
const CONTACTS = 'contacts'

export default function Sidebar({ id }) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div style={{ width: '250px' }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS}> Conversations </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS}> Contacts </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-end 1px overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATIONS}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className='p-2 border-top border-end small'>
                    Your ID: <span className='text-muted'> {id} </span>
                </div>
                <Button className='rounded-0' onClick={() => setModalOpen(true)}>
                    New {conversationsOpen ? 'Conversation' : 'Contact'}
                </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                { conversationsOpen ? 
                <NewConversationModal closeModal={closeModal}/> :
                <NewContactModal closeModal={closeModal}/>
                }
            </Modal>
        </div>
    )
}
