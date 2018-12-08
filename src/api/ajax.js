//引入axios
import axios from 'axios'

axios("http://localhost:4000/index_category").then((res)=>{
  console.log(res.data.data)
})
