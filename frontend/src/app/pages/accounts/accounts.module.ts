import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountsComponent} from './accounts.component';
import {TableModule} from '../../components/table/table.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: AccountsComponent}];


@NgModule({
  declarations: [AccountsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule
  ]
})
export class AccountsModule {
}
