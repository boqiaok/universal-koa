import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import tempImg2 from '../static/img/temp1.jpg'

import Home from '../static/css/home.css'
import styles from '../static/css/home.scss'

// const tempImg2 = null
class App extends Component {
  async componentDidMount () {
    const data = await fetch('https://api.github.com/repos')
    console.log(data)
  }
  render () {
    return (
      <div>
        <div className={Home.banner}>
        <p className={Home.banner_text}>一起创造有趣的音2111ds</p>
          <p>
            <Link to="/test">
              <button className={Home.upload_btn}>立 即 创 作</button>
            </Link>
          </p>
        </div>
        <div className={Home.content}>
          <h1>作品列表</h1>
        <h2>我们推荐了啊啊所大所多一些好的作品供您食用</h2>

          <ul className={Home.list}>
            <li>
              <img src={tempImg2}/>
              <p>测测你的忍耐力!</p>
            </li>
            <li>
              <img src={tempImg2}/>
              <p>测测你的忍耐力!</p>
            </li>
            <li>
              <img src={tempImg2}/>
              <p>测测你的忍耐力!</p>
            </li>
            <li>
              <img src={tempImg2}/>
              <p>测测你的忍耐力!</p>
            </li>
            <li>
              <img src={tempImg2}/>
              <p>测测你的忍耐力!</p>
            </li>
            <li>
              <img src={tempImg2}/>
              <p>测测你的忍耐力!</p>
            </li>
          </ul>
          <div className={Home.readmore}>
            <span>您不满意？</span>
            <a>换一批!</a>
          </div>
        </div>
        <div className={Home.footer}>
          ©2013-2017 TeamMoe@LittleMusic TeamMoe@ListenLite 2017
        </div>
      </div>
    )
  }
}

export default App
