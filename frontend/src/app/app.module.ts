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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatMenuModule} from '@angular/material/menu';

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

export function init_translate(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      defaultLanguage: 'en', loader: {
        provide: TranslateLoader
        , useFactory: (init_translate)
        , deps: [HttpClient]
      }
    }),
    SecuritiesModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
