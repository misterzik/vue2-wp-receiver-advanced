import Axios from 'axios'
import config from '../config'

const instance = Axios.create()

instance.defaults.baseURL = 'http://localhost:8081/wp-json/wp/v2/posts'

instance.interceptors.request.use((request) => {
    // Do something to the request before sending it
    return request
})

instance.interceptors.response.use((response) => {
    // Do something to the response before returning
    return response
})

export default instance