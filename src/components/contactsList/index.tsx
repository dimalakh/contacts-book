import './styles.sass'

import * as React from 'react'

import ContactListItem from './item'
import { IContact } from '../../types'

interface IProps {
  activeId: number,
  contacts: IContact[],
  setActive(id: number): void,
  fetchContacts(): void
}

class ContactList extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchContacts()
  }

  public render() {
    const { activeId, contacts, setActive } = this.props

    if (!contacts.length) {
      return (
        <span className='contact-list-placeholder'>
          There are no contacts<br/> by this query...
        </span>
      )
    }

    return (
      <ul className='contact-list'>
        {contacts.map((contact: IContact) =>
          <ContactListItem
            key={contact.id}
            contact={contact}
            setActive={setActive}
            isActive={activeId === contact.id}
          />
        )}
      </ul>
    )
  }
}

export default ContactList
