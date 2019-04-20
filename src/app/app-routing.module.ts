import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'starter',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'register',
    loadChildren: './auth/register/register.module#RegisterPageModule'
  },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  {
    path: 'product-details',
    loadChildren:
      './product-details/product-details.module#ProductDetailsPageModule'
  },
  {
    path: 'shopping',
    loadChildren: './shopping/shopping.module#ShoppingPageModule'
  },
  {
    path: 'qr-scanner',
    loadChildren: './qr-scanner/qr-scanner.module#QrScannerPageModule'
  },
  {
    path: 'history',
    loadChildren: './history/history.module#HistoryPageModule'
  },
  {
    path: 'confirmation',
    loadChildren:
      './auth/confirmation/confirmation.module#ConfirmationPageModule'
  },
  {
    path: 'starter',
    loadChildren: './auth/starter/starter.module#StarterPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
