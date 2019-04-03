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

  setData(data) {
    this.data = data;
  }

  getData() {
    let temp = this.data;
    return temp;
  }

  getUser() {
    return this.http.get('../assets/userDetail.json')
  }

  setUser(id: any, name: string, email: string, roleId: string) {
    this.response.id = id;
    this.response.name = name;
    this.response.email = email;
    this.response.roleId = roleId;

    this.http.post('../assets/userDetail.json', { id: "foo", name: "loo" }).subscribe(res => console.log(res));
  }

}
