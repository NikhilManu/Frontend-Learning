import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  createUser(userData: any): any { // 1. get the form data from comp ts 
    console.log(userData);

    // 2. send the form data to the REST API 
    // 2.1 What's the REST API? https://jsonplaceholder.typicode.com/users/ 
    // 2.2 What's the HTTP Method? POST
    // 2.3 What's the REST API Client? HttpClient
    return this.http.post(this.REST_API_URL, userData)
      .pipe(map((res: any) => { // 3. get the resp from the REST API
        console.log(res);
        // 4. send the resp to the comp ts
        return res;
      }));
  }

  // listing users
  // 1. get the req from the comp ts
  getUsers(): any {
    // 2. send the req to the REST API
      // 2.1 REST API URL --> REST_API_URL
      // 2.2 HTTP Method --> GET Method
      // 2.3 REST API Client TOod --> HttpClient
      return this.http.get(this.REST_API_URL)
        .pipe( map( (res: any) => { // 3. get the response from the REST API

          console.log(res);
          return res; // 4. send the response to comp TS
        }));
    
  }

  // user details
  getUserById( id: string | null ): any{
    console.log(id);
    let APIUrl = this.REST_API_URL + id;
    console.log(APIUrl);

    return this.http.get(APIUrl)
      .pipe(map( (res: any) =>{
        console.log(res);
        return res
      }));
  }

  // update user
  updateUser( updateableUserData: any): any {
    console.log(updateableUserData);
    return this.http.put(this.REST_API_URL + updateableUserData.id, updateableUserData)
      .toPromise()
      .then( (res: any) =>{
        console.log(res);
        return res;
      })
      .catch( (err: any)=>{
        console.log(err);
        return err;
      })
      .finally( ()=>{
        console.log("It is Over!");
      });
  }

}