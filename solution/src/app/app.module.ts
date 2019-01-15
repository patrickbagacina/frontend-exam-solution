import { ViewDataService } from './services/view-data.service';
import { ViewTemplateService } from './services/view-template.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { GenericComponent } from './generic/generic.component';
import { DisplayDataDirective } from './display-data.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CardComponent,
    GenericComponent,
    DisplayDataDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ViewDataService,
    ViewTemplateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    GenericComponent,
    CardComponent,
    TableComponent
  ]
})
export class AppModule { }
