import xhr from './xhr/'

class MsgService {
  fetch ({author = '', pageIdx = 1, quantity = 10, msgId } = {}) {
    let url = '/msg'
    if (msgId) {
      url += msgId
    }else {
      url = `${url}/?author=${author}&pageIdx=${pageIdx}&quantity=${quantity}&msgId=${msgId}`
    }
    return xhr({url})
  }

  add (msgBody) {
    console.log('msgService adding!!')
    return xhr({
      method: 'post',
      url: '/msg',
      body: msgBody
    })
  }
  /**
   * 修改 msg
   * @param  {Object} msgBody { title:{String}, content:{String} }
   * @return {Promise}
   */
  mod(msgBody) {
    let msgId = msgBody.id
    return xhr({
      method: 'put',
      url: `/msg/${msgId}`,
      body: msgBody
    })
  }

  del (msgId) {
    return xhr({
      method: 'delete',
      url: `/msg/${msgId}`
    })
  }
}

export default new MsgService()
