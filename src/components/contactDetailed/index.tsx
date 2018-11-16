import './styles.sass'

import * as React from 'react'

import { IContact } from '../../types'
import ContactField from './field'

interface IProps {
  activeContact: IContact
}

const ContactDetailed = ({ activeContact }: IProps) => {
  if (!activeContact) {
    return (
      <div className='contact-detailed'>
        <span className='detailed-placeholder'>Select some contact in sidebar menu...</span>
      </div>
    )
  }

  return (
    <div className='contact-detailed'>
      <img className='detailed-avatar' src={activeContact.avatarUrl} />
      <span className='detailed-title'>{activeContact.fullName}</span>
      <ContactField title='Phone number' value={activeContact.phoneNumber} />
      <ContactField title='Position' value={activeContact.position} />
      <ContactField title='Address' value={activeContact.address} />
    </div>
  )
}

export default ContactDetailed
