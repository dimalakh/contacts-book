import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setActiveContact, requestContacts } from '../store/actions'
import { getContactsList } from '../store/selectors'
import { ContactsList } from '../components'
import { IState } from '../types'

const mapStateToProps = (state: IState) => ({
  activeId: state.contacts.active,
  contacts: getContactsList(state)
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchContacts: () => dispatch(requestContacts()),
  setActive: (id: number) => dispatch(setActiveContact(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsList)
