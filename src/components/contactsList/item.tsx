import * as React from 'react'

import { IContact } from '../../types'

interface IProps {
  contact: IContact,
  isActive: boolean,
  setActive(id: number): void
}

const ContactListItem: React.StatelessComponent<IProps> = ({ contact, isActive, setActive }) => {
  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => setActive(contact.id)

  const renderAvatar = contact.avatarUrl ?
    <img className='list-item-avatar' src={contact.avatarUrl} /> :
    <div  className='list-item-avatar'>{contact.fullName[0]}</div>
  return (
    <li className={`contact-list-item ${isActive ? 'active' : ''}`} key={contact.id} onClick={handleOnClick}>
      {renderAvatar}
      <div className='list-item-content'>
        <span className='list-item-title'>{contact.fullName}</span>
        <span className='list-item-subtitle'>{contact.phoneNumber}</span>
      </div>
    </li>
 )
}

export default ContactListItem
