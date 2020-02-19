import axios from 'axios'
import qs from 'qs'

//1.生成axios
const instance = axios.create({
    baseURL:'/api'
})

//2.添加请求拦截器
instance.interceptors.request.use(config =>{
    
    config.data = qs.stringify(config.data)
    return config
})

//3.添加相应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        alert('请求失败')
        console.log(error)
        //手动返回一个初始化的实例
        return new Promise(()=>{})
    }
)

export default instance

