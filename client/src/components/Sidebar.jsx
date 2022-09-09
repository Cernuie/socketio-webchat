import React from 'react'
import { Tab, Nav } from 'react-bootstrap'

const CONVERSATIONS = 'conversations'
const CONTACTS = 'contacts'

export default function Sidebar( {id} ) {
  return (
    <div style={{ width: '250px'} } className="d-flex flex-column">
        <Tab.Container>
            <Nav>
                <Nav.Item>
                    <Nav.Link eventKey="conversations"> Conversations </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKeys="contacts"> Contacts </Nav.Link>
                </Nav.Item>
            </Nav>
        </Tab.Container>
    </div>
  )
}
