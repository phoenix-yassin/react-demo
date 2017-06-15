import xhr from './xhr/'

class UserService {
  checkLogin() {
    return xhr({
      url: '/user'
    })
  }

  login(userData) {
    return xhr({
      method: 'post',
      url: '/login',
      body: userData
    })
  }

  logout() {
    return xhr({
      url: '/logout'
    })
  }

}

export default new UserService()
