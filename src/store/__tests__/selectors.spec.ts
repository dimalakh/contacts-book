import { getContactsList, getActiveContact } from '../selectors'
import { generateContactItem } from '../../../jest/helpers'

const mockedState = {
  contacts: {
    active: null as any,
    list: [
      generateContactItem(),
      generateContactItem(),
      generateContactItem(),
      generateContactItem(10, 'John Abramov')
    ],
    searchQuery: ''
  }
}

describe('Selectors', () => {
  describe('getContactList', () => {
    it('should return list of contacts, if searchQuery is not set', () => {
      const result = getContactsList(mockedState)

      expect(result).toHaveLength(4)
    })

    it('should return contacts, which match the query', () => {
      const modifiedMockedState = {
        contacts: {
          ...mockedState.contacts,
          searchQuery: 'John'
        }
      }
      const result = getContactsList(modifiedMockedState)

      expect(result).toEqual([
        generateContactItem(10, 'John Abramov')
      ])
    })
  })

  describe('getActiveContact', () => {
    it('should return null if active contact is not set', () => {
      const result = getActiveContact(mockedState)

      expect(result).toBe(null)
    })

    it('should return contact with id 10', () => {
      const modifiedMockedState = {
        contacts: {
          ...mockedState.contacts,
          active: 10
        }
      }
      const result = getActiveContact(modifiedMockedState)

      expect(result).toEqual(generateContactItem(10, 'John Abramov'))
    })
  })
})
