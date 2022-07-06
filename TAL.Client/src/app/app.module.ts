import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PermiumCalcFormComponent } from './components/permium-calc-form/permium-calc-form.component';
import { PermiumCalcResultComponent } from './components/permium-calc-result/permium-calc-result.component';

@NgModule({
  declarations: [
    AppComponent,
    PermiumCalcFormComponent,
    PermiumCalcResultComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
