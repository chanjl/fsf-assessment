import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon'
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

const MODULES = [MatToolbarModule,
    MatButtonModule, MatFormFieldModule, 
    MatInputModule, MatCardModule, MatSliderModule, 
    MatIconModule, MatRadioModule, MatDatepickerModule ];

@NgModule({
    imports: MODULES,
    exports: MODULES
}) 
export class MaterialModule {}