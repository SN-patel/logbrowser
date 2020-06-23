import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModuleAll } from './material-all.module';

import { LayoutComponent } from './components/layout/layout.component';
import { ResultViewComponent } from './components/result-panel/resultpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleAll
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
