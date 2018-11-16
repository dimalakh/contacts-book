export interface IContact {
  fullName: string,
  id: number,
  phoneNumber: string,
  avatarUrl: string,
  address: string,
  position: string
}

export interface IState {
  contacts: {
    list: IContact[]
    active: number,
    searchQuery: string
  }
}

export interface IAction {
  type: string,
  payload?: any
}
