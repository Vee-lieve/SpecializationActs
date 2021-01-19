import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule}  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExternalComponent } from './external/external.component';
import { SampleComponent } from './sample/sample.component';
import { InternalComponent } from './internal/internal.component';
import { UpdateComponent } from './update/update.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponent,
    SampleComponent,
    InternalComponent,
    UpdateComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
