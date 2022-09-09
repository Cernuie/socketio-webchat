import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'

import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS = 'conversations'
const CONTACTS = 'contacts'

export default function Sidebar({ id }) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS)

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
            </Tab.Container>
        </div>
    )
}
