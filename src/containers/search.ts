import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setSearchQuery } from '../store/actions'
import { Search } from '../components'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setQuery: (query: string) => dispatch(setSearchQuery(query))
})

export default connect(
  null,
  mapDispatchToProps
)(Search)
