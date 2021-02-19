import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { TableComponent } from './components/table/table.component';
import {FormsModule} from "@angular/forms";
import { LinearChartComponent } from './components/linear-chart/linear-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import {ChartsModule, ThemeService} from "ng2-charts";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LinearChartComponent,
    BarChartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
