import { WordpressListPage } from './pages/wordpress/list/wordpress.list.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordpressItemPage } from './pages/wordpress/item/wordpress.item.page';
import { ComponentsListPage } from './pages/components/list/components.list.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'slides', loadChildren: './pages/slide-box/slide-box.module#SlideBoxPageModule' },
  { path: 'map', loadChildren: './pages/google-maps/google-maps.module#GoogleMapsPageModule' },
  { path: 'wordpress-articles', component: WordpressListPage, loadChildren: './pages/wordpress/wordpress.module#WordpressModule' },
  { path: 'wordpress-articles/:postId', component: WordpressItemPage, loadChildren: './pages/wordpress/wordpress.module#WordpressModule' },
  { path: 'components', loadChildren: './pages/components/components.module#ComponentsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
