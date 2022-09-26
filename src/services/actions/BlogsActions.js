import { BASE_URL } from "../constants/blogsConstant";

class BlogsService{
    getBlogs(){
        return fetch(`${BASE_URL}/posts`)
    }
    getBlog(id){
        return fetch(`${BASE_URL}/posts/${id}`)
    }
}

export default new BlogsService()