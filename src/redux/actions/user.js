import userService from 'SERVICE/userService'
// ================================
// Action Type
// ================================
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

// ================================
// Action Creator
// ================================
const loginDone = (userData) => ({
  type: LOG_IN,
  payload: userData
})

const checkLogin = () => dispatch => {
  userService
    .checkLogin()
    .then((re) => {
        if (!re) return
        dispatch(loginDone(re))
      }
    )
}

const login = userData => dispatch => {
  userService
    .login(userData)
    .then(
      (re) => {
        re => dispatch(loginDone(re))
      }
        )
}

const logout = () => dispatch => {
  userService
    .logout()
    .then(
      () =>
        dispatch({
          type: LOG_OUT
        })
    )
}
/* default 导出所有 Actions Creator */
export default {
  login, checkLogin, logout
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [LOG_IN]: (state, {payload}) => payload,
  [LOG_OUT]: () => null
}

