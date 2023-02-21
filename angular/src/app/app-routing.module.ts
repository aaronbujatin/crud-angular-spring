import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  {path : "", component : ProductAddComponent},
  {path : "product-list", component : ProductListComponent},
  {path : "product-update/:id", component : ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
