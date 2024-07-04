import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {fname: false, lname: false}

  onFnameBtn = () => {
    this.setState(prevState => ({fname: !prevState.fname}))
  }

  onLnameBtn = () => {
    this.setState(prevState => ({lname: !prevState.lname}))
  }

  render() {
    const {fname, lname} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="button-container">
          <div className="elements">
            <button type="button" onClick={this.onFnameBtn}>
              Show/Hide Firstname
            </button>
            {fname && (
              <div className="block">
                <p>Joe</p>
              </div>
            )}
          </div>
          <div className="elements">
            <button type="button" onClick={this.onLnameBtn}>
              Show/Hide Lastname
            </button>
            {lname && (
              <div className="block">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
