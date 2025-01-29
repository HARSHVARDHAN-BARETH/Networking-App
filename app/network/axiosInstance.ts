import axios, {AxiosInstance} from "axios"

const axiosInstance = axios.create({
    baseURL:"",
    timeout:5000,
    headers:{
        content_type:"application/json"
    }
})


axiosInstance.interceptors.request.use(
    (config)=>{
          config.headers.Authorization = "Bearere token";
          return config;
    },
    (error)=>{
  
    }
)