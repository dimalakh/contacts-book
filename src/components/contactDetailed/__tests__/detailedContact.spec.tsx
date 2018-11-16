import * as React from 'react'
import { shallow } from 'enzyme'

import DetailedContact from '../index'
import { generateContactItem } from '../../../../jest/helpers'

describe('DetailedContact', () => {
  it('should render placeholder if contact is not defined', () => {
    const placeholderText = 'Select some contact in sidebar menu...'
    const component = shallow(
      <DetailedContact activeContact={undefined} />
    )

    expect(component.find('.detailed-placeholder').text()).toEqual(placeholderText)
  })

  it('should render component if correct props are passed', () => {
    const props = {
      activeContact: generateContactItem()
    }
    const component = shallow(
      <DetailedContact {...props} />
    )

    expect(component.find('.detailed-title').text()).toEqual(props.activeContact.fullName)
    expect(component.find('ContactField')).toHaveLength(3)
  })
})
