import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductService } from './../../service/product.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styles: [
  ]
})
export class ProductAddComponent implements OnInit{

  constructor(private httpClient: HttpClient, 
              private productService: ProductService, 
              private toastr: NgToastService, 
              private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this._activatedRoute.params.subscribe(val =>{
    this.productIdToUpdate = val['id'];
    this.productService.updateProduct(this.productIdToUpdate).subscribe((res)=> {

      // this.fillFormToUpdate(res)
      console.log(res);
      
    })
   })
  }

  // fillFormToUpdate (productForm : NgForm){
  //   this.product = this.product.productName

  // }

  public productIdToUpdate : number; 

  product: ProductModel = new ProductModel();

  onSubmit(productForm: NgForm) {
    const formData = new FormData();
    formData.append('productName', this.product.productName);
    formData.append('productPrice', this.product.productPrice.toString());
    formData.append('productDescription', this.product.productDescription);
    formData.append('productImage', this.product.productImage, this.product.productImage.name);
    console.log(formData);

    this.httpClient.post('http://localhost:8080/api/v1/products/save', formData).subscribe(response => {
      // Swal.fire("Product successfully save");
      this.toastr.success({ detail: "success", summary: "Product saved", duration: 3000 });
      productForm.reset();
      console.log(response);
    });
  }


  onFileSelected(event) {
    const image = this.product.productImage = event.target.files[0];
    console.log(image);
  }




}
