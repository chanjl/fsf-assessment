import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { SubmittedFormComponent } from './components/submitted-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    SubmittedFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatMomentDateModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
