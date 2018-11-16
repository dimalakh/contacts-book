import * as React from 'react'
import { ContactsList, Search } from './components'

const ContactsListProps = {
  activeId: 1,
  contacts: [
    {
      address: '',
      avatarUrl: './some.jpg',
      fullName: 'Peter Joshua',
      id: 1,
      phoneNumber: '12131231',
      position: 'Driver'
    }
  ],
  fetchContacts: () => { return },
  setActive: () => { return }
}
const SearchProps = {
  setQuery: () => { return }
}
const App: React.StatelessComponent = () => (
  <div className='container'>
    <aside>
      <Search {...SearchProps} />
      <ContactsList {...ContactsListProps} />
    </aside>
  </div>
)

export default App
