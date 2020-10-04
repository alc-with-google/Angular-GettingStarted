import { Component, OnInit } from '@angular/core';
import { IProduct } from "../product";
import { ProductService } from "./product.service"

@Component({
  selector: 'pm-products', // this means the component can be used a directive, <pm-products></pm-products> providing access to the html
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
// OnInit is an Interface - a lifecyle interface
// in the same family as onChanges and OnDestroy
// OnInit perform component initialization, retrieve data
// On changes: perform action after change to input ppt
// onDestroy perform cleanup
export class ProductListComponent implements OnInit {
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


  // _listFilter: string = "cart;"
  // this variable declaration changed to below
  // this way, the Getter and Setter (especially the setter) can...
  // make provision for filtering the products
  // in the setter  function,the right function is called
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string): string {
    this._listFilter = value;
    this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  // declaring the filtered array so that the getter and setter and filter
  filteredProduct: IProduct[];
  products: IProduct[];

  // the filtered products and the listFilter is initiallised here
  constructor(private productService: ProductService) {
  }

  onRatingClicked(message: string): void{
    this.pageTitle= 'The Product List ' + message;
  }

  // function that performs the filter
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // a method that implements the onInit Lifecycle Interface
  ngOnInit() {
    this.products = this.productService.getProduct();
    this.filteredProduct = this.products;
  }
}
