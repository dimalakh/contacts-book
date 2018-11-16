import * as React from 'react'
import * as CopyToClipboard from 'react-copy-to-clipboard'

import { AcceptIcon } from '../icons'

const iconColor = '#00a8e8'

interface IProps {
  title: string,
  value?: any
}
interface IState {
  copied: boolean
}

class ContactField extends React.Component <IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      copied: false
    }
    this.onCopy = this.onCopy.bind(this)
    this.resetState = this.resetState.bind(this)
  }
  public onCopy() {
    this.setState({ copied: true })
  }
  public resetState() {
    this.setState({ copied: false })
  }

  public render() {
    if (!this.props.value) {
      return null
    }
    return (
      <div className='input-field'>
        <span className='field-title'>{this.props.title}:</span>
        <CopyToClipboard text={this.props.value} onCopy={this.onCopy}>
          <div className='field-wrapper'>
            <input
              className='field-value'
              onMouseOut={this.resetState}
              value={this.props.value}
              disabled={true}
            />
            <button className='field-info'>
              {this.state.copied ? <AcceptIcon color={iconColor}/> : 'copy'}
            </button>
          </div>
        </CopyToClipboard>
      </div>
    )
  }
}

export default ContactField
