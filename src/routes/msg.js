import { injectReducer } from 'REDUCER'
import userAuth from 'UTIL/userAuth'           // 用户访问拦截器
import createContainer from 'UTIL/createContainer'

// wrap component to get store
const connectComponent = createContainer(
  ({ userData, msg}) => ({ userData, msg}),
  require('ACTION/msg').default
)


// standard react-router elements
export default {
  path: 'msg',
  getComponent(nextState, cb) {// 基本布局
    require.ensure([], (require) => {
      injectReducer('msg', require('REDUCER/msg/').default)
      cb(null, require('VIEW/msg').default)
    }, 'msgView')
  },
  indexRoute: { // for `/msg`
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, connectComponent(require('COMPONENT/Msg/MsgList').default))
      }, 'msgList')
    }
  },
  childRoutes: [
    {
      path: 'detail/:msgId',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, connectComponent(require('COMPONENT/Msg/MsgDetail').default))
        }, 'msgDetail')
      }
    },
    {
      path: 'add',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, connectComponent(require('COMPONENT/Msg/MsgForm').default))
        }, 'msgForm')
      },
      onEnter: userAuth
    },
    {
      path: 'modify/:msgId',
      getComponent(nextState, cb) {
        require.ensure([], (require)=> {
          cb(null, connectComponent(require('COMPONENT/Msg/MsgForm').default))
        }, 'msgForm')
      },
      onEnter: userAuth
    }
  ]
}
