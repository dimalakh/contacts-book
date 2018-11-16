import { IContact, IState } from '../types'

export const getContactsList = (state: IState): IContact[] => {
  const removeDeniedPattern = /[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\]/gi
  const str = state.contacts.searchQuery.replace(removeDeniedPattern, '')
  const regexp = new RegExp(str.toLowerCase(), 's')

  if (state.contacts.searchQuery) {
    return state.contacts.list.filter((contact: any) => regexp.test(contact.fullName.toLowerCase()))
  }
  return state.contacts.list
}

export const getActiveContact = (state: IState): IContact =>
  state.contacts.list.filter((contact) =>
    contact.id === state.contacts.active)[0] || null
