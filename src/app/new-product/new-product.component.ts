import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProducts } from '../model/product.model';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{

  public productForms! : FormGroup;


  constructor(
    private fb : FormBuilder,
    private productService: ProductServiceService
    ){}

  ngOnInit(): void {
      this.productForms = this.fb.group({
        name : this.fb.control('',  Validators.required),
        price : this.fb.control(0, Validators.required),
        checked : this.fb.control(false)
      });
  }

  saveProduct(){
    let product : IProducts = this.productForms.value;
    this.productService.saveProduct(product)
      .subscribe({
        next : data => {
          
        },
        error : err => {console.log(err);
        }
      })
  }
}
