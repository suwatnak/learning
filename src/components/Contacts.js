import React from 'react'

const ContactComponent = ({ contacts }) => (
  <ul>
    {
      contacts.map(
        (contact, index) =>
          <li key={index}>{contact.name} - {contact.address}</li>
      )
    }
  </ul>
)

export default ContactComponent