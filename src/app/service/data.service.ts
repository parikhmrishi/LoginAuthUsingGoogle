import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUserDetails } from '../model/IUserDetail'

//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  private data;
  response: IUserDetails

  setData(data){
    this.data = data;
  }

  // getData(){
  //   let temp = this.data;
  //   return temp;
  // }

  getUser() {
    return this.http.get('../assets/userDetail.json')
  }

  // getUserDetail(id) {
  //   return this.http.get('https://jsonplaceholder.typicode.com/todos?id=' + id)
  // }


  setUser(id, name, email, roleId) {
    this.response.id = id;
    this.response.name = name;
    this.response.email = email;
    this.response.roleId = roleId;
    
    return this.http.post('../assets/userDetail.json',this.response);
  }


  // setData(userInfo): Observable<any> {
  //   return this.http.get<userInfo>('http://127.0.0.1:8887/test.json')
  // }
}
