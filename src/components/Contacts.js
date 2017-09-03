import React from 'react'

const Contacts = ({ contacts }) => (
  <ul>
    {
      contacts.map(
        (contact, index) =>
          <li key={index}>{contact.name} - {contact.address}</li>
      )
    }
  </ul>
)

Contacts.defaultProps = {
  contacts: []
}

export default Contacts