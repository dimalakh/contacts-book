import * as React from 'react'
import { shallow } from 'enzyme'

import ContactList from '../index'
import { generateContactItem } from '../../../../jest/helpers'

describe('ContactList', () => {
  const props = {
    activeId: null,
    contacts: [],
    fetchContacts: jest.fn(),
    setActive: jest.fn()
  } as any

  it('should render placeholder if contacts list is empty', () => {
    const component = shallow(
      <ContactList {...props} />
    )
    expect(component.find('.li')).toHaveLength(0)
    expect(component.find('.contact-list-placeholder')).toHaveLength(1)
  })

  it('should render a list of inactive contact items', () => {
    const modifiedProps = {
      ...props,
      activeId: 1,
      contacts: [
        generateContactItem(1),
        generateContactItem(),
        generateContactItem(),
        generateContactItem()
      ]
    }
    const component = shallow(
      <ContactList {...modifiedProps} />
    )

    expect(component.find('ul').children()).toHaveLength(4)
    expect(component.find('.contact-list-placeholder')).toHaveLength(0)
  })
})
