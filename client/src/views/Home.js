import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionUser from '../redux/reducers/user'

import Home from '../static/css/home.css'

@connect(
  (state, props) => ({
    user: state.get('user')
  }),
  dispatch => ({
    ActionUser: bindActionCreators(ActionUser, dispatch)
  })
)
class App extends Component {
  static defaultProps = {
    text: ''
  }

  static propTypes = {
    text: PropTypes.string
  }

  state = {

  }

  render () {
    return (
      <div>
        <div className={Home.banner}>
          <p className={Home.banner_text}>{this.state.text}</p>
          <p>
            <Link to='/test'>
              <button className={Home.upload_btn}>立 即 创 作</button>
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default App
