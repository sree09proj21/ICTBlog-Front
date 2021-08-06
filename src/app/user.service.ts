import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_address:string='/api' ;
  constructor(public http:HttpClient) { }
  newUser(user:any)
  {
    return this.http.post("http://localhost:8000/signup",user)
      }
getUser()
{
  return this.http.get("http://localhost:8000/users")
}
getuser(id:any)
{
  return this.http.get("http://localhost:8000/user/"+id)
 }


}
