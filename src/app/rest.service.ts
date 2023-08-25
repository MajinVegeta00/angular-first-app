import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpRequest:HttpClient) { }

  public fetchData(url:string){
       const data=this.httpRequest.get(url);
       return data
  }
  public post(url:string,body:any){
      const data=this.httpRequest.post(url,body,{withCredentials:true});
      return data
  }
}
