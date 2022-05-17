import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxMatColorPickerModule } from '@angular-material-components/color-picker';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatDialogModule,
    // Routes,
    // NGX_MAT_COLOR_FORMATS,
    // MAT_COLOR_FORMATS,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMatColorPickerModule,
    ColorPickerModule
  ]
})
export class BuyerDetailsModule { }
