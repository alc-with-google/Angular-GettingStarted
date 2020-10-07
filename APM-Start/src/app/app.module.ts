import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipes';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from "./home/welcome.component"
import { RouterModule } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ProductDetailGuard} from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Routing Checklist:
    // Configuring the routes...
        // Define the Base Element
        // Add RouterModule
          // ...for each route (RouterModule.forRoot)
          // ...order matters
    // Tie routes to action. 'RouterModule' gives us link to some Directives
    // Wheredo we want the user to activate the route
        // Add the RouterLink as an attribute to a clickable element
        // Bind to a link parameters array
          // [RouterLInk], used as [RouterLink]="['/welcome']" returns the first match
          // other directive: routerLinkActive used as routerLinkActive='active'
    // Inject and display the Component's View which is gotten by the Router
        // usually in the host component template (where you will usually place the componenet selector)
        // <router-outlet></router-outlet> directive
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      // canActivate, canDeactivate, canActivateChild, Preload, etc
      {path: 'products/:id', canActivate: [ProductDetailGuard],component: ProductDetailComponent },
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
