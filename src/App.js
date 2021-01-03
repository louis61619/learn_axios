import React, { PureComponent } from 'react'

import axios from 'axios'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    //請求數據
    // axios({
    //   url: "https://httpbin.org/get",
    //   params: {
    //     name: "why",
    //     age: 18
    //   },
    //   method:'GET'
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.error(err)
    // })

    // axios({
    //   url: "https://httpbin.org/post",
    //   data: {
    //     name: "why",
    //     age: 18
    //   },
    //   method:'POST'
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.error(err)
    // })

    // axios.get("https://httpbin.org/get", {
    //   params: {
    //     name: "lilei",
    //     age: 30
    //   }
    // }).then(console.log)

    // axios.post("https://httpbin.org/post", {
    //   name: "lucy",
    //   age: 28,
    // }, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   },
    // }).then(console.log)



    // try {
    //   const result = await axios.get("https://httpbin.org/get", {
    //     params: {
    //       name: "lilei",
    //       age: 30
    //     }
    //   })
    //   console.log(result)
    // } catch (error) {
    //   console.log(error)
    // }

    // const request1 = axios({
    //   url: "https://httpbin.org/get",
    //   params: {
    //     name: "renny",
    //     age: 25
    //   }
    // })

    // const request2 = axios({
    //   url: "https://httpbin.org/post",
    //   data: {
    //     name: "why",
    //     age: 18
    //   },
    //   method: "POST"
    // })

    // axios.all([request1, request2]).then(([res1, res2]) => {
    //   console.log(res1)
    // })

    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("Promise1")
    //   }, 1000)
    // })
    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("Promise2")
    //   }, 3000)
    // })
    // Promise.all([promise1, promise2]).then(res => {
    //   console.log(res)
    // })

    // 請求攔截
    // config為配置信息
    axios.interceptors.request.use(config => {
      // 1.發送網路請求時，在中間位置顯示一個loading組件

      // 2.某一些請求要求用戶必須攜帶token，如果沒有攜帶直接跳轉道登入頁面

      // 3.params/data做序列化的操作
      console.log("請求被攔截")
      return config
    }, err => {

    })

    // 響應攔截
    axios.interceptors.response.use(res => {
      return res.data
    }, err => {
      if(err && err.response) {
        switch (err.response.status) {
          case 400:
            console.log("請求錯誤")
          break
          case 401:
            console.log("未授權")
          break

          default:
          break
        }
      }
      return err
    })

    axios.get("https://httpbin.org/get", {
      params: {
        name: "why"
      }
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
