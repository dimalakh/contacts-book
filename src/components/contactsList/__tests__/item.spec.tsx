import * as React from 'react'
import { shallow } from 'enzyme'

import ContactListItem from '../item'
import { generateContactItem } from '../../../../jest/helpers'

describe('ContactList Item', () => {
  const props = {
    contact: generateContactItem(),
    isActive: false,
    setActive: jest.fn()
  }

  it('should render inactive item', () => {
    const component = shallow(
      <ContactListItem {...props} />
    )
    expect(component).toHaveLength(1)
    expect(component.find('.active')).toHaveLength(0)
  })

  it('should have class active when item is active', () => {
    const modifiedProps = {
      ...props,
      isActive: true
    }
    const component = shallow(
      <ContactListItem {...modifiedProps} />
    )
    expect(component.find('.active')).toHaveLength(1)
  })

  it('should run setActive one time on item click', () => {
    const component = shallow(
      <ContactListItem {...props} />
    )
    component.find('li').simulate('click')

    expect(props.setActive.mock.calls.length).toBe(1)
  })
})
