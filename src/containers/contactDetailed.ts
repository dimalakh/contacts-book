import { connect } from 'react-redux'

import { ContactDetailed } from '../components'
import { getActiveContact } from '../store/selectors'
import { IState } from '../types'

const mapStateToProps = (state: IState) => ({
  activeContact: getActiveContact(state)
})

export default connect(
  mapStateToProps
)(ContactDetailed)
