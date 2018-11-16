import * as actionTypes from '../actionTypes'
import { IState, IAction, IContact } from '../../types'

const initialState = {
  active: null as any,
  list: [] as IContact[],
  searchQuery: ''
}

const contacts = (state: IState['contacts'] = initialState , action: IAction) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_CONTACT:
      return { ...state, active: action.payload }
    case actionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload }
    case actionTypes.API_RECEIVE_CONTACTS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}
​
export default contacts
