import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.gerasim.in/api/BigBasket/GetAllProducts")
  }

}
