import { Component } from '@angular/core';

@Component ({
  selector: 'pm-products', // this means the component can be used a directive, <pm-products></pm-products> providing access to the html
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  // interpolation (one-way binding) is a binding technique
  // it's about communication between class and template
  // class to template
  // here, pageTitle is defined which can used in the template as {{pageTitle}}
  // Or, <h1 innertText={{pageTitle}}></h1>, {{'Title: ' + pageTitle}}
  // used with class methods as well: {{'Title: ' + getTitle()}}
  pageTitle: string = 'The Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: Boolean = false;
  products: any[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
