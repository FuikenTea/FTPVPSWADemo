import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, ProductsComponent],
  declarations: [ProductsComponent, ProductListComponent, ProductDetailComponent],
})
export class ProductsModule {}
