import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  server_address:string='/api' ;

  constructor(public http:HttpClient) { }
  newPost()
  {
  
   
return this.http.get("http://localhost:8000/addpost");
   
      }
 getPost(id:any)
      {
        
        return this.http.get("http://localhost:8000/posts/"+id)
      }

      getPosts()
      {
        
        return this.http.get("http://localhost:8000/posts")
      }
      getPostblog()
      {
        
        return this.http.get("http://localhost:8000/blogpost")
      }
      getPostblogs(item:any)
      {
       return this.http.post("http://localhost:8000/blogspost",{"new":item})
      }
      getposts(id:any)
      {
        
        return this.http.get("http://localhost:8000/post/"+id)
      }
      approvepost(item:any)
      {
        return this.http.post("http://localhost:8000/approvepost",item)
        .subscribe (data => {console.log(data)})
      }

      editPost(item:any)
      {
        return this.http.post("http://localhost:8000/editpost",item)
        .subscribe (data => {console.log(data)})
      }
createpost(item:any){
  return this.http.post("http://localhost:8000/createpost",{"newpost":item})
  .subscribe (data => {console.log(data)})
 }

}
