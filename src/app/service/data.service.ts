import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

 //import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  private data;

  // setData(data){
  //   this.data = data;
  // }

  // getData(){
  //   let temp = this.data;
  //   return temp;
  // }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
    getUserDetail(id){
      return this.http.get('https://jsonplaceholder.typicode.com/todos?id='+ id)
    }
    
  
    setUser(data){
      return this.http.post('https://jsonplaceholder.typicode.com/todos', data);
    }
  

  // setData(userInfo): Observable<any> {
  //   return this.http.get<userInfo>('http://127.0.0.1:8887/test.json')
  // }
}
