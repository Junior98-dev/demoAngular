import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public saveProduct(product: IProducts) {
    return this.http.post<IProducts>("http://localhost:8081/products", product);
  }

  constructor(private http: HttpClient) { }

  public getProducts(page : number = 1, size : number = 2){
    return this.http.get<Array<IProducts>>(`http://localhost:8081/products?_page=${page}&_limit=${size}`);
  }

  public changeCheck(product: IProducts){
    return this.http.patch<IProducts>(`http://localhost:8081/products/${product.id}`, {checked:!product.checked});
  }

  public deleteProduct(product: IProducts){
    return this.http.delete<IProducts>(`http://localhost:8081/products/${product.id}`);
  }

  public searchProducts(keyword : string) : Observable<Array<IProducts>>{
    return this.http.get<Array<IProducts>>(`http://localhost:8081/products?name_like=${keyword}`);
  }
}
