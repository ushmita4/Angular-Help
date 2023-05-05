import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://127.0.0.1:8000/account/register';
  constructor(private http:HttpClient) { }
  postuser(data:any){
    return this.http.post<any>(this.apiUrl,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
