import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from './models/brand';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brandURL = "https://localhost:5001/api/brand";

  getBrand(): Observable<Brand[]> {
    //return of(fakeData);
    return this.http.get<Brand[]>(this.brandURL);
  }
  changeBrand(br: Brand): Observable<Brand> {
    const url = this.brandURL + '/' + br.id;
    return this.http.put<Brand>(url, br);
  }
  delete(id: number): Observable<Brand> {
    const url = this.brandURL + '/' + id;
    return this.http.delete<Brand>(url);
  }
  add(br: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.brandURL, br);
  }
  constructor(private http: HttpClient) { }
  //lấy danh sách hãng
}
