import { connect } from 'react-redux'

/**
 * 将木偶组件变成智能组件:将属性传入，如果此时有组件传入，直接wrap组件，否则返回属性空组件
 * @param  {Function} mapStateToProps
 * @param  {Object}   mapActionCreators
 * @param  {Component?}
 * @return {Connect : Container}
 */
const createContainer = (mapStateProps, mapActionCreator, component) => {
  const connetComponent = connect(mapStateProps, mapActionCreator)
  return component ? connetComponent(component) : connetComponent
}
export default createContainer

