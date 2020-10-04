import { Injectable } from "@angular/core";
import { IProduct } from "../product"

/*
Steps to create a service...
...create the class with the correct decorator...
...register the service with an injector, either the Root Injector or a Component Injector...
    ...Here, it's registered in root...
    ...To register in component:
    @component({
      templateUrl: '...',
      providers: [ProductService]
    })
...To use, we put an instance to the component constructor,
    then call it its ngOnInit function.
*/
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProduct(): IProduct[]{
    return [
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
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2019",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },
    ]
  }
}
