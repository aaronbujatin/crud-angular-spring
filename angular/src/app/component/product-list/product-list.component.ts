import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ProductModel } from './../product-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent {

  constructor(private productService: ProductService, private httpClient : HttpClient, private router : Router) { }

  public products: ProductModel[] = [];

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/api/v1/products').subscribe((data: any) => {
      this.products = data.map((products: any) => ({
        productId : products.productId,
        productName: products.productName,
        productPrice: products.productPrice,
        productDescription: products.productDescription,
        productImage: 'data:image/jpeg;base64,' + products.productImage
      }));
      console.log(this.products);
    }); 
  }

  updateProduct(id:number){
      this.router.navigate(['product-update', id])
  }

  // public getAllProducts() {
  //   this.productService.getAllProducts().subscribe(
  //     (response: ProductModel[]) => {
  //       // this.imageProcessingService.dataToUriToBlob(response.imageModel.)
  //       this.products = response;
  //       // this.dbImage = 'data:image/jpeg;base64,' + this.products.imageModel;
  //       console.log(response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
