import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductModel } from '../component/product-model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServiceUrl = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  public saveProduct(product: FormData) {
    return this.httpClient.post<ProductModel>(`${this.apiServiceUrl}/api/v1/products`, product);
  }

  public deleteProduct(id : number){
    return this.httpClient.delete(`${this.apiServiceUrl}/api/v1/products/${id}`)
  }

  public updateProduct(id : number){
    return this.httpClient.delete(`${this.apiServiceUrl}/api/v1/products/${id}`)
  }

  // public updateProduct(product: FormData) {
  //   return this.httpClient.post<ProductModel>(`${this.apiServiceUrl}/api/v1/products`, product);
  // }
  
}
