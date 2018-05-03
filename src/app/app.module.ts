import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Grandchild1Component } from './grandchild1/grandchild1.component';
import { Grandchild2Component } from './grandchild2/grandchild2.component';
import { Grandchild3Component } from './grandchild3/grandchild3.component';
import { Grandchild4Component } from './grandchild4/grandchild4.component';
import { Grandchild5Component } from './grandchild5/grandchild5.component';
import { Grandchild6Component } from './grandchild6/grandchild6.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Grandchild1Component,
    Grandchild2Component,
    Grandchild3Component,
    Grandchild4Component,
    Grandchild5Component,
    Grandchild6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
