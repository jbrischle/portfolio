import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecuritiesComponent} from './securities.component';
import {TableModule} from '../../components/table/table.module';
import {ChartsModule} from 'ng2-charts';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '', component: SecuritiesComponent}];


@NgModule({
  declarations: [SecuritiesComponent],
  exports: [
    SecuritiesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,
    TableModule,
    ChartsModule,
  ]
})
export class SecuritiesModule {
}
