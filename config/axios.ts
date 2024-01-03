import axios from "axios"
const baseURL = "https://vtuapi.honourworld.com/api/v2"

const AxiosInstance = axios.create({
    baseURL
})

export default AxiosInstance


export const postRequest = (url:string,data:any, callback:any)=>{
   return AxiosInstance.post(url,data).then((res)=> callback(null, res))
    .catch((err)=> callback(err))
}