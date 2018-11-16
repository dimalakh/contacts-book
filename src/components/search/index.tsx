import './styles.sass'

import * as React from 'react'

import { SearchIcon, CancelIcon } from '../icons'

interface IProps {
  setQuery(query: string): void
}

interface IState {
  value: string
}

class Search extends React.Component <IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: ''
    }
  }

  public onChange = (e: any) => {
    this.setState({ value: e.target.value })
    this.props.setQuery(e.target.value)
  }

  public resetValue = (): void => {
    this.setState({ value: '' })
    this.props.setQuery('')
  }

  public render() {
    const renderInputButton = () => {
      if (!this.state.value) {
        return (
          <button>
            <SearchIcon />
          </button>
         )
      }
      return (
        <button onClick={this.resetValue}>
          <CancelIcon />
        </button>
     )
    }

    return (
      <div className='search'>
        <div className='search-input-wrapper'>
          <input
            className='search-input'
            onChange={this.onChange}
            placeholder='Search'
            value={this.state.value}
          />
          {renderInputButton()}
        </div>
      </div>
    )
  }
}

export default Search
