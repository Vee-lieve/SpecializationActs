import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule}  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalComponent } from './external/external.component';
import { SampleComponent } from './sample/sample.component';
import { InternalComponent } from './internal/internal.component';

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponent,
    SampleComponent,
    InternalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
