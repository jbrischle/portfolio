import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCommonModule} from '@angular/material/core';
import {SecuritiesModule} from './pages/securities/securities.module';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'securities', pathMatch: 'full'
  },
  {
    path: 'securities', loadChildren: () => import('./pages/securities/securities.module').then(m => m.SecuritiesModule)
  },
  {
    path: 'accounts', loadChildren: () => import('./pages/accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: '**', redirectTo: 'securities', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCommonModule,
    SecuritiesModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
