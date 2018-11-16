import * as React from 'react'
import { shallow } from 'enzyme'

import Search from '../index'

describe('Search', () => {
  const props = {
    setQuery: jest.fn()
  }

  it('should render component correctly if correct props are passed', () => {
    const component = shallow(
      <Search {...props} />
    )

    expect(component.find('input').prop('placeholder')).toBe('Search')
    expect(component.exists('input')).toBe(true)
    expect(component.exists('button')).toBe(true)
  })

  it('should set a word to state on input change', () => {
    const component = shallow(
      <Search {...props}/>
    )
    component.find('input').simulate('change', { target: { value: 'Hello' }})

    expect(component.state('value')).toBe('Hello')
    expect(props.setQuery.mock.calls.length).toBe(1)
  })

  it('should reset value on cancel button click', () => {
    const component = shallow(
      <Search {...props}/>
    )
    component.setState({ value: 'Hello' })
    component.find('button').simulate('click')

    expect(component.state('value')).toBe('')
  })
})
