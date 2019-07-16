import axios from 'axios'
export default function ajax (url, data={}, type='GET') {
  return new Promise(function (resolve, reject) {
    let promise;
    if (type === 'GET') {
      let dataStr = '' ;//数据拼接字符串
      var day=new Date();//时间戳
      for(var i in data){
        dataStr+=i+"="+data[i]+"&";
      }
      url+='?'+dataStr.slice(0,-1)+"&t_="+day.getTime();
      promise = axios.get(url)
    } else {
      promise = axios.post(url,data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
      console.log(response.data.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

