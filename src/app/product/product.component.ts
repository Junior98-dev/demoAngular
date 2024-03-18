import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { IProducts } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  public products : Array<IProducts> = [];

  public keyword : string = "";

  constructor(
    private http : HttpClient,
    private productService : ProductServiceService
    ){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe({
        next: data => { this.products = data; },
        error: err => {
          console.log(err);
        }
      })
  }

  changeCheck(product: IProducts){
    this.productService.changeCheck(product)
      .subscribe({
        next : data => {product.checked=!product.checked}
      })
  };

  delete(product: IProducts){
    this.productService.deleteProduct(product)
      .subscribe({
        next : data =>{
          this.getProducts();
        }, 
        error : err => {console.log(err);
        }
      })
  };

  async searchProducts() {
    this.productService.searchProducts(this.keyword).subscribe({
      next : value => {
        this.products=value;
      },
      error : err => {console.log(err);
      }
    })
  }

}
