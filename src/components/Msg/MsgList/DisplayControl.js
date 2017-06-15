import React, { Component } from 'react'
import { Link } from 'react-router'
import handleChange from 'MIXIN/handleChange'

export default class DisplayControl extends Component {
  constructor(props) {
    super(props)
    this.handleChange = handleChange.bind(this)
    this.state = {
      _quantity: props.quantity
    }
  }

  /* 【拓展阅读】setState 的“异步”坑：https://zhuanlan.zhihu.com/p/20328570 */
  componentWillReceiveProps(nextPros) {
    if (this.state._quantity !== nextPros.quantity) {
      this.setState({
        _quantity: nextPros.quantity
      })
    }
  }
/*
* export default function handleChange(evt) {
 this.setState({
 [evt.target.name]: evt.target.value.trim()
 })
 }
* */
  _changeQuantity() {
    this.props.changeQuantity(this.state._quantity)
  }

  render () {
    let {pageIdx, msgsLen, resetDisplayControl } = this.props
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form className="form-inline">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">
                当前为第
                <span className="badge">
                  { pageIdx }
                </span>
                页（当页共
                <span className="label label-default">
                  { msgsLen }
                </span>
                条数据），限制每页加载数量为
              </div>
              <input
                type="text"
                className="form-control"
                style={{width: '4em'}}
                name="_quantity"
                value={this.state._quantity}
                onChange={this.handleChange}
                placeholder="默认10"/>
              <div className="input-group-addon">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-xs"
                    onClick={() => this._changeQuantity()}>
                    OK
                  </button>
                  <button
                    className="btn btn-xs dropdown-toggle"
                    data-toggle="dropdown">
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li onClick={resetDisplayControl}>
                      <Link to="/redirect?dest=/msg">
                        重置页面（强制刷新）
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
