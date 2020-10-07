import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from "../product";
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  // product: IProduct;
  product: IProduct | undefined;
  errorMessage = '';
  constructor(private route: ActivatedRoute,  private productService: ProductService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`
    this.product= {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
    // if (param) {
    //   const id = +param;
    //   this.getProduct(id);
    // }
  }

  // getProduct(id: number): void {
  //   this.productService.getProduct(id).subscribe({
  //     next: product => this.product = product,
  //     error: err => this.errorMessage = err
  //   });
  // }

}
