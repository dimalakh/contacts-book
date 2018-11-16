import * as React from 'react'
import { shallow } from 'enzyme'

import Field from '../field'

describe('Field', () => {
  const props = {
    title: 'Phone number',
    value: 11111
  }

  it('should render component if correct props are passed', () => {
    const component = shallow(
      <Field {...props} />
    )
    expect(component.exists('.input-field')).toBe(true)
    expect(component.state('copied')).toBe(false)
  })

  it('shouldnt render component if value props is negative', () => {
    const incorrectProps = {
      ...props,
      value: ''
    }
    const component = shallow(
      <Field {...incorrectProps} />
    )

    expect(component.exists('.input-field')).toBe(false)
    expect(component.state('copied')).toBe(false)
  })

  it('should render tick when value is copied', () => {
    const component = shallow(
      <Field {...props} />
    )
    component.find('CopyToClipboard').simulate('copy')

    expect(component.find('.field-info').children().exists()).toBe(true)
    expect(component.state('copied')).toBe(true)
  })

  it('should render copy word on mouseOut', () => {
    const component = shallow(
      <Field {...props} />
    )
    component.find('CopyToClipboard').simulate('copy')
    component.find('input').simulate('mouseout')

    expect(component.find('.field-info').text()).toEqual('copy')
    expect(component.state('copied')).toBe(false)
  })
})
