import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from '../store'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()

    /** 监听数据变更 */
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  // 组件挂载失效后报错解决方案
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={()=> store.dispatch({type: 'addCounter', payload: 1})}>计数增</button>
          <p>{ this.state.counter }</p>
          <button onClick={()=> store.dispatch({type: 'rducCounter', payload: 1})}>计数减</button>

          <Link className="App-link" to='/'>返回主页</Link>
        </header>
      </div>
    )
  }

  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default About
