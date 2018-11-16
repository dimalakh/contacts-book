import { call, put, takeLatest } from 'redux-saga/effects'
import { API_REQUEST_CONTACTS } from './actionTypes'
import { receiveContacts } from './actions'
import { fetchContacts } from '../services'

function* getContactsData() {
  try {
    const contacts = yield call(fetchContacts)
    yield put(receiveContacts(contacts))
  } catch (err) {
    throw err
  }
}

export default function* mySaga() {
  yield takeLatest(API_REQUEST_CONTACTS, getContactsData)
}
