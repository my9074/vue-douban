/**
 * Created by my9074 on 2017/3/21.
 */
import axios from 'axios'
import { Notification } from 'element-ui'

const HOST = '/api/'

export default function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url, {params})
      .then((res) => {
        resolve(res.data)
      }).catch(err => {
        Notification.error('fetch error')
        reject(err)
      })
  })
}
