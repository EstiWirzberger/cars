import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMessageComponent } from './commponents/error-message/error-message.component';
import { BuyerDetailsComponent } from './commponents/buyer-details/buyer-details.component';
import { ChartComponent } from './commponents/charts/charts.component';
import { MaimPageComponent } from './commponents/maim-page/maim-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { NgChartsModule } from 'ng2-charts';
import { HeaderComponent } from './commponents/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { TableComponent } from './commponents/table/table.component';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    BuyerDetailsComponent,
    ErrorMessageComponent,
    MaimPageComponent,
    ChartComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    // ChartsModule,
    // DragDropModule,
    // HighchartsChartModule,
    CommonModule,
    // NgxMatColorPickerModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatChipsModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
  ],
  providers: [
    // { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
