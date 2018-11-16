import reducer from '../reducers/contacts'
import * as actions from '../actions'
import { generateContactItem } from '../../../jest/helpers'

const mockedState = {
  active: null as any,
  list: [] as any,
  searchQuery: ''
}

describe('Contact reducer', () => {
  it('should return initial state', () => {
    const nextState = reducer(undefined, {} as any)

    expect(nextState).toEqual(mockedState)
  })

  it('should return state with new searchQuery', () => {
    const nextState = reducer(mockedState, actions.setSearchQuery('Peter'))
    const expectedState = {
      ...mockedState,
      searchQuery: 'Peter'
    }

    expect(nextState).toEqual(expectedState)
  })

  it('should return state with new active field', () => {
    const nextState = reducer(mockedState, actions.setActiveContact(10))
    const expectedState = {
      ...mockedState,
      active: 10
    }

    expect(nextState).toEqual(expectedState)
  })

  it('should return state with new contacts list', () => {
    const mockedContact = generateContactItem()
    const nextState = reducer(mockedState, actions.receiveContacts([mockedContact]))
    const expectedState = {
      ...mockedState,
      list: [mockedContact]
    }

    expect(nextState).toEqual(expectedState)
  })
})
