import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutComponent} from "./about/about.component";
import {PricesComponent} from "./prices/prices.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {EquipmentComponent} from "./equipment/equipment.component";

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'equipment', component: EquipmentComponent},
  {path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
