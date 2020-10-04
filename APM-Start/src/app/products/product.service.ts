import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { IProduct } from "../product";
import { catchError, tap, map } from 'rxjs/operators';

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

  private productUrl: string = 'api/products/products.json'

  constructor(private http: HttpClient){}
  // 'Observable<IProduct[]>' describes the return form and type
  // and waits for a subscription before the get request is sent.
  // the function that calls the subscription finishes and is only called after some time
  // ...since an Observable is an asynchronous function...
  // after piping, the subscription methods are then called

  // TODO how to use generics to specify the return type
  getProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
