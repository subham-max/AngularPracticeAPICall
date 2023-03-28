import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url="https://www.boredapi.com/api/activity";

  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url)
  }
}
 