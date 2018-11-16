import * as actionTypes from './actionTypes'
import { IContact, IAction } from '../types'

export const setActiveContact = (id: number): IAction => ({
  payload: id,
  type: actionTypes.SET_ACTIVE_CONTACT
})

export const setSearchQuery = (query: string): IAction => ({
  payload: query,
  type: actionTypes.SET_SEARCH_QUERY
})

export const requestContacts = (): IAction => ({
  type: actionTypes.API_REQUEST_CONTACTS
})

export const receiveContacts = (contacts: IContact[]): IAction => ({
  payload: contacts,
  type: actionTypes.API_RECEIVE_CONTACTS
})
