// const

const ADD_TODO = 'ADD_TODO'
const DEL_TODO = 'DEL_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

// actions
const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: setTimeout(()=>{}),
    content,
    createdAt: Date.now(),
    completed: false
  }
})

const delTodo = (id) => ({
  type: DEL_TODO,
  payload: id
})

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
})
// export actions
export default {
  addTodo, delTodo, toggleTodo
}
// actionhandles
export const ACTION_HANDLERS = {
  [ADD_TODO]: (todos, { payload }) => [...todos, payload],
  [DEL_TODO]: (todos, { payload: todoId }) => todos.filter(
    (todo) => todos.id !== todoId
  ),
  [TOGGLE_TODO]: (todos, { payload: todoId }) => todos.map(
    (todo) => todo.id !== todoId ? todo : {...todo, completed: !todo.completed}
  )
}
