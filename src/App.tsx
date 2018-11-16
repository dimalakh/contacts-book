import * as React from 'react'
import {
  Search,
  ContactsList,
  ContactDetailed
} from './containers'

const App: React.StatelessComponent = () => (
  <div className='container'>
    <aside>
      <Search />
      <ContactsList />
    </aside>
    <ContactDetailed />
  </div>
)

export default App
