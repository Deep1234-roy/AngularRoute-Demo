import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  apiUrl = "C:/Users/503322275/Angular Projects/AngularRouteDemo/Employee.json";
  GetAllEmployee(){
    return this.http.get(this.apiUrl);
  }
}
